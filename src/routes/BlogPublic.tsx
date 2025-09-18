import { useEffect, useMemo, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { getPostBySlug } from "../lib/blog";

export default function BlogPublic() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  const readMins = useMemo(() => {
    if (!post) return 0;
    const text = post.contentHtml.replace(/<[^>]+>/g, " ");
    const words = text.trim().split(/\s+/).length;
    return Math.max(1, Math.round(words / 200));
  }, [post]);

  if (!post) {
    return <div className="mx-auto max-w-3xl p-6 text-sm text-muted-foreground">Post not found.</div>;
  }

  // Build dynamic table of contents from headings inside the article
  type TocItem = { id: string; text: string; level: 2 | 3 };
  const [toc, setToc] = useState<TocItem[]>([]);
  const [active, setActive] = useState<string | null>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contentRef.current) return;
    const root = contentRef.current;
    const headings = Array.from(root.querySelectorAll<HTMLHeadingElement>("h2, h3"));
    const slug = (s: string) =>
      s
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-");
    const items: TocItem[] = headings.map((h, i) => {
      if (!h.id) h.id = `${slug(h.textContent || "section")}-${i}`;
      const lvl = h.tagName.toLowerCase() === "h2" ? 2 : 3;
      return { id: h.id, text: h.textContent || `Section ${i + 1}`, level: lvl };
    });
    setToc(items);

    // Observe headings to highlight active
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (a.target as HTMLElement).offsetTop - (b.target as HTMLElement).offsetTop);
        if (visible[0]) setActive((visible[0].target as HTMLElement).id);
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: [0, 1] }
    );
    headings.forEach((h) => observer.observe(h));
    return () => observer.disconnect();
  }, [post.contentHtml]);

  return (
    <article className="min-h-screen">
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background">
        <div className="mx-auto w-full max-w-5xl px-4 pb-6 pt-10 sm:pb-10 sm:pt-14">
          <div className="max-w-3xl">
            <div className="mb-3 text-[11px] uppercase tracking-widest text-primary/80">Article</div>
            <h1 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
              {post.title}
            </h1>
            <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
              <span>{post.author || "Editorial"}</span>
              <span>•</span>
              <span>{new Date(post.updatedAt).toLocaleDateString()}</span>
              <span>•</span>
              <span>{readMins} min read</span>
            </div>
          </div>
          {post.featuredImageUrl && (
            <div className="mt-6 overflow-hidden rounded-lg border shadow-sm">
              <img
                src={post.featuredImageUrl}
                alt={post.title}
                className="aspect-[16/7] h-auto w-full object-cover"
              />
            </div>
          )}
        </div>
      </section>

      {/* Body */}
      <section className="mx-auto w-full max-w-6xl px-4">
        <div className="mx-auto grid w-full gap-8 py-8 md:grid-cols-[220px_minmax(0,1fr)_260px]">
          {/* TOC */}
          <aside className="hidden md:block">
            <nav className="sticky top-20 pr-2">
              <div className="text-[11px] uppercase tracking-wide text-muted-foreground">Contents</div>
              <ul className="mt-3 space-y-1 text-sm">
                {toc.map((i) => (
                  <li key={i.id} className={i.level === 3 ? "pl-3" : ""}>
                    <a
                      href={`#${i.id}`}
                      className={`block rounded px-2 py-1 hover:bg-accent hover:text-accent-foreground ${
                        active === i.id ? "bg-accent text-accent-foreground" : ""
                      }`}
                    >
                      {i.text}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          {/* Body */}
          <div>
            <div
              ref={contentRef}
              className="prose prose-neutral max-w-none leading-relaxed sm:prose-lg dark:prose-invert"
              dangerouslySetInnerHTML={{ __html: post.contentHtml }}
            />
          </div>

          {/* Meta sidebar */}
          <aside className="order-first md:order-none">
            <div className="sticky top-20 rounded-lg border bg-card p-4 text-card-foreground shadow-sm">
              <div className="text-xs uppercase tracking-wide text-muted-foreground">About</div>
              <div className="mt-2 text-sm font-medium">{post.author || "Editorial"}</div>
              <div className="mt-1 text-xs text-muted-foreground">Updated {new Date(post.updatedAt).toLocaleString()}</div>
              {post.tags?.length ? (
                <div className="mt-3 flex flex-wrap gap-1">
                  {post.tags.map((t) => (
                    <span key={t} className="rounded-full border px-2 py-0.5 text-[11px] text-muted-foreground">#{t}</span>
                  ))}
                </div>
              ) : null}
            </div>
          </aside>
        </div>
      </section>
    </article>
  );
}


