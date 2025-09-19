// src/lib/blog.ts
export type BlogPostStatus = "draft" | "published";

export type BlogPost = {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  contentHtml: string; // stored as HTML from rich text editor
  tags: string[];
  author?: string;
  featuredImageUrl?: string; // data URL or external URL
  status: BlogPostStatus;
  createdAt: number;
  updatedAt: number;
  publishedAt?: number;
};

const KEY = "blog.posts";

// New API-backed helpers
async function api<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(path, {
    headers: { "Content-Type": "application/json" },
    ...(init || {}),
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || `HTTP ${res.status}`);
  }
  return res.json();
}

export async function createPostViaApi(input: Omit<BlogPost, "id"|"createdAt"|"updatedAt"> & { featuredImageBase64?: string }): Promise<{ ok: boolean; slug: string }>{
  const body = {
    title: input.title,
    slug: input.slug,
    excerpt: input.excerpt,
    contentHtml: input.contentHtml,
    tags: input.tags,
    author: input.author,
    featuredImageBase64: (input as any).featuredImageBase64,
  };
  return api("/api/blog", { method: "POST", body: JSON.stringify(body) });
}

export function listPosts(): BlogPost[] {
  try {
    const raw = localStorage.getItem(KEY);
    const posts = raw ? (JSON.parse(raw) as BlogPost[]) : [];
    return posts.sort((a, b) => (b.updatedAt || 0) - (a.updatedAt || 0));
  } catch {
    return [];
  }
}

export function getPost(id: string): BlogPost | undefined {
  return listPosts().find((p) => p.id === id);
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return listPosts().find((p) => p.slug === slug);
}

export function savePost(input: Omit<BlogPost, "id" | "createdAt" | "updatedAt"> & { id?: string }): BlogPost {
  const now = Date.now();
  const posts = listPosts();
  if (input.id) {
    const existingIdx = posts.findIndex((p) => p.id === input.id);
    const updated: BlogPost = { ...posts[existingIdx], ...input, updatedAt: now } as BlogPost;
    posts[existingIdx] = updated;
    persist(posts);
    return updated;
  }
  const post: BlogPost = {
    id: crypto.randomUUID(),
    title: input.title,
    slug: input.slug,
    excerpt: input.excerpt || "",
    contentHtml: input.contentHtml,
    tags: input.tags || [],
    author: input.author || "",
    featuredImageUrl: input.featuredImageUrl,
    status: input.status || "draft",
    createdAt: now,
    updatedAt: now,
    publishedAt: input.status === "published" ? now : undefined,
  };
  posts.unshift(post);
  persist(posts);
  return post;
}

export function publishPost(id: string): BlogPost | undefined {
  const posts = listPosts();
  const idx = posts.findIndex((p) => p.id === id);
  if (idx < 0) return undefined;
  const now = Date.now();
  posts[idx] = { ...posts[idx], status: "published", publishedAt: now, updatedAt: now };
  persist(posts);
  return posts[idx];
}

export function deletePost(id: string): void {
  const posts = listPosts().filter((p) => p.id !== id);
  persist(posts);
}

function persist(posts: BlogPost[]) {
  localStorage.setItem(KEY, JSON.stringify(posts));
}

export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

