import { useMemo, useRef, useState } from "react";
import { BlogPost, deletePost, generateSlug, listPosts, publishPost, savePost, createPostViaApi } from "../../lib/blog";

type Draft = {
  id?: string;
  title: string;
  slug: string;
  excerpt: string;
  contentHtml: string;
  tags: string;
  author: string;
  featuredImageUrl?: string;
  status: "draft" | "published";
};

export function BlogManager() {
  const [posts, setPosts] = useState(listPosts());
  const [editing, setEditing] = useState<Draft | null>(null);
  const [filter, setFilter] = useState<"all" | "draft" | "published">("all");
  const [previewing, setPreviewing] = useState<BlogPost | null>(null);
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const allTags = useMemo(() => {
    const set = new Set<string>();
    posts.forEach((p) => p.tags?.forEach((t) => t && set.add(t)));
    return Array.from(set).sort((a, b) => a.localeCompare(b));
  }, [posts]);

  const filtered = useMemo(() => {
    let res = posts;
    if (filter !== "all") res = res.filter((p) => p.status === filter);
    if (activeTag) res = res.filter((p) => p.tags?.includes(activeTag));
    return res;
  }, [filter, posts, activeTag]);

  const startNew = () => {
    setEditing({ id: undefined, title: "", slug: "", excerpt: "", contentHtml: "", tags: "", author: "", featuredImageUrl: "", status: "draft" });
  };

  const startEdit = (p: BlogPost) => {
    setEditing({ id: p.id, title: p.title, slug: p.slug, excerpt: p.excerpt || "", contentHtml: p.contentHtml, tags: p.tags.join(", "), author: p.author || "", featuredImageUrl: p.featuredImageUrl || "", status: p.status });
  };

  const onSave = async () => {
    if (!editing) return;
    // Save locally for draft experience
    const post = savePost({
      id: editing.id,
      title: editing.title.trim(),
      slug: (editing.slug || generateSlug(editing.title)).trim(),
      excerpt: editing.excerpt.trim(),
      contentHtml: editing.contentHtml,
      tags: editing.tags.split(",").map((t) => t.trim()).filter(Boolean),
      author: editing.author.trim(),
      featuredImageUrl: editing.featuredImageUrl,
      status: editing.status,
      publishedAt: undefined,
    } as any);
    // If marked published, send to API to persist in Git
    try {
      if (editing.status === "published") {
        await createPostViaApi({
          title: post.title,
          slug: post.slug,
          excerpt: post.excerpt,
          contentHtml: post.contentHtml,
          tags: post.tags,
          author: post.author,
          featuredImageBase64: editing.featuredImageUrl,
          status: "published" as any,
        } as any);
      }
    } catch(e) {
      console.error("Failed to persist to Git:", e);
      alert("Saved locally but failed to publish to Git. You can try again.");
    }
    setEditing(null);
    setPosts(listPosts());
  };

  const onDelete = (id: string) => {
    deletePost(id);
    setPosts(listPosts());
  };

  const onPublish = (id: string) => {
    publishPost(id);
    setPosts(listPosts());
  };

  return (
    <section className="rounded-xl border border-border bg-card text-card-foreground p-5 shadow-sm">
      <div className="flex items-center justify-between gap-2">
        <div>
          <h2 className="text-lg font-semibold">Blog Manager</h2>
          <p className="text-muted-foreground text-sm">Create and manage posts for your blog page</p>
        </div>
        <div className="flex items-center gap-2">
          <select value={filter} onChange={(e) => setFilter(e.target.value as any)} className="rounded-md border border-input bg-background px-2 py-1 text-sm">
            <option value="all">All</option>
            <option value="draft">Drafts</option>
            <option value="published">Published</option>
          </select>
          <button onClick={startNew} className="rounded-md border border-input px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground">New Post</button>
        </div>
      </div>

      {allTags.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          <button onClick={() => setActiveTag(null)} className={`rounded-full border px-3 py-1 text-xs ${!activeTag ? "bg-accent" : ""}`}>All tags</button>
          {allTags.map((t) => (
            <button key={t} onClick={() => setActiveTag(t)} className={`rounded-full border px-3 py-1 text-xs ${activeTag===t?"bg-accent":""}`}>#{t}</button>
          ))}
        </div>
      )}

      {editing && (
        <div className="mt-4 grid gap-3 rounded-lg border border-border p-4">
          <div className="grid gap-2 sm:grid-cols-2">
            <input value={editing.title} onChange={(e) => setEditing({ ...editing, title: e.target.value })} placeholder="Title" className="rounded-md border border-input bg-background px-3 py-2 text-sm" />
            <input value={editing.slug} onChange={(e) => setEditing({ ...editing, slug: e.target.value })} placeholder="Slug (auto from title)" className="rounded-md border border-input bg-background px-3 py-2 text-sm" />
          </div>
          <input value={editing.excerpt} onChange={(e) => setEditing({ ...editing, excerpt: e.target.value })} placeholder="Excerpt (optional)" className="rounded-md border border-input bg-background px-3 py-2 text-sm" />
          <div className="grid gap-2 sm:grid-cols-2 items-center">
            <div className="flex items-center gap-2">
              <label className="text-sm text-muted-foreground">Featured image</label>
              <input
                type="file"
                accept="image/*"
                onChange={async (e) => {
                  const f = e.target.files?.[0];
                  if (!f) return;
                  const reader = new FileReader();
                  reader.onload = () => setEditing({ ...editing, featuredImageUrl: reader.result as string });
                  reader.readAsDataURL(f);
                }}
                className="text-xs"
              />
            </div>
            {editing.featuredImageUrl && (
              <img src={editing.featuredImageUrl} alt="Featured" className="h-16 w-24 rounded object-cover border" />
            )}
          </div>
          <RichEditor value={editing.contentHtml} onChange={(html) => setEditing({ ...editing, contentHtml: html })} />
          <div className="grid gap-2 sm:grid-cols-2">
            <input value={editing.tags} onChange={(e) => setEditing({ ...editing, tags: e.target.value })} placeholder="Tags (comma-separated)" className="rounded-md border border-input bg-background px-3 py-2 text-sm" />
            <input value={editing.author} onChange={(e) => setEditing({ ...editing, author: e.target.value })} placeholder="Author name" className="rounded-md border border-input bg-background px-3 py-2 text-sm" />
            <select value={editing.status} onChange={(e) => setEditing({ ...editing, status: e.target.value as any })} className="rounded-md border border-input bg-background px-2 py-2 text-sm">
              <option value="draft">Draft</option>
              <option value="published">Published</option>
            </select>
          </div>
          <div className="flex items-center gap-2 justify-end">
            <button onClick={() => setEditing(null)} className="rounded-md border border-input px-3 py-2 text-sm">Cancel</button>
            <button onClick={onSave} className="rounded-md border border-input px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground">Save</button>
          </div>
        </div>
      )}

      <ul className="mt-4 grid gap-3">
        {filtered.length === 0 && <li className="text-muted-foreground text-sm">No posts yet.</li>}
        {filtered.map((p) => (
          <li key={p.id} className="rounded-lg border border-border p-3">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">{p.title} {p.status === "draft" && <span className="text-xs text-amber-600">(draft)</span>}</div>
                <div className="text-muted-foreground text-xs">/{p.slug} · {new Date(p.updatedAt).toLocaleString()} {p.author ? `· ${p.author}` : ""}</div>
              </div>
              <div className="flex items-center gap-2">
                {p.status === "draft" && <button onClick={() => onPublish(p.id)} className="rounded-md border border-input px-2 py-1 text-xs hover:bg-accent hover:text-accent-foreground">Publish</button>}
                <button onClick={() => startEdit(p)} className="rounded-md border border-input px-2 py-1 text-xs">Edit</button>
                <a href={`/blog/${p.slug}`} target="_blank" rel="noreferrer" className="rounded-md border border-input px-2 py-1 text-xs inline-flex items-center">Preview</a>
                <button onClick={() => onDelete(p.id)} className="rounded-md border border-destructive text-destructive px-2 py-1 text-xs hover:bg-destructive/10">Delete</button>
              </div>
            </div>
            {p.excerpt && <p className="mt-2 text-sm text-muted-foreground">{p.excerpt}</p>}
            {p.tags?.length ? (
              <div className="mt-2 flex flex-wrap gap-1">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full border px-2 py-0.5 text-[10px] text-muted-foreground">#{t}</span>
                ))}
              </div>
            ) : null}
          </li>
        ))}
      </ul>

      {previewing && (
        <PreviewModal post={previewing} onClose={() => setPreviewing(null)} />)
      }
    </section>
  );
}

function RichEditor({ value, onChange }: { value: string; onChange: (html: string) => void }) {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div className="rounded-md border border-input bg-background">
      <EditorToolbar targetRef={ref} />
      <div
        ref={ref}
        className="min-h-40 max-h-[60vh] overflow-auto px-3 py-2 text-sm outline-none"
        contentEditable
        suppressContentEditableWarning
        onInput={(e) => onChange((e.target as HTMLDivElement).innerHTML)}
        dangerouslySetInnerHTML={{ __html: value || "<p><em>Start writing…</em></p>" }}
      />
    </div>
  );
}

function PreviewModal({ post, onClose }: { post: BlogPost; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" role="dialog" aria-modal="true">
      <div className="mx-auto w-full max-w-3xl rounded-lg border bg-background text-foreground shadow-xl">
        <div className="flex items-center justify-between border-b px-4 py-3">
          <div>
            <h3 className="text-lg font-semibold">{post.title}</h3>
            <p className="text-xs text-muted-foreground">/{post.slug} {post.author?`· ${post.author}`:""} · {new Date(post.updatedAt).toLocaleString()}</p>
          </div>
          <button onClick={onClose} className="rounded-md border px-2 py-1 text-xs">Close</button>
        </div>
        <div className="prose prose-sm max-w-none px-4 py-4 dark:prose-invert" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
      </div>
    </div>
  );
}

function EditorToolbar({ targetRef }: { targetRef: React.RefObject<HTMLDivElement> }) {
  const exec = (cmd: string, val?: string) => {
    targetRef.current?.focus();
    document.execCommand(cmd, false, val);
  };
  const addLink = () => {
    const url = prompt("Enter URL");
    if (url) exec("createLink", url);
  };
  const addImage = () => {
    const url = prompt("Enter image URL");
    if (url) exec("insertImage", url);
  };
  return (
    <div className="flex flex-wrap gap-1 border-b p-2 text-xs">
      <button type="button" onClick={() => exec("bold")} className="rounded border px-2 py-1">B</button>
      <button type="button" onClick={() => exec("italic")} className="rounded border px-2 py-1 italic">I</button>
      <button type="button" onClick={() => exec("underline")} className="rounded border px-2 py-1 underline">U</button>
      <button type="button" onClick={() => exec("formatBlock", "<h2>")} className="rounded border px-2 py-1">H2</button>
      <button type="button" onClick={() => exec("formatBlock", "<h3>")} className="rounded border px-2 py-1">H3</button>
      <button type="button" onClick={() => exec("insertUnorderedList")} className="rounded border px-2 py-1">• List</button>
      <button type="button" onClick={() => exec("insertOrderedList")} className="rounded border px-2 py-1">1. List</button>
      <button type="button" onClick={addLink} className="rounded border px-2 py-1">Link</button>
      <button type="button" onClick={addImage} className="rounded border px-2 py-1">Image</button>
      <button type="button" onClick={() => exec("removeFormat")} className="rounded border px-2 py-1">Clear</button>
    </div>
  );
}


