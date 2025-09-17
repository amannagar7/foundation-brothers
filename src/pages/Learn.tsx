
export default function Learn() {
  // Static demo content for now; can be wired to a CMS later
  const posts: Array<{
    id: number;
    title: string;
    excerpt: string;
    date: string; // ISO
    author: string;
    category: string;
    image: string;
    href: string;
  }> = [
    {
      id: 1,
      title:
        '5 Smart Technologies We Use to Build Better, Faster & Smarter Homes',
      excerpt:
        "Building your own home can be overwhelming. From finding the right construction company to selecting layouts, sourcing materials, and managing timelines—there are countless decisions to make. That’s why Foundation Brothers exists: to simplify this entire journey and help you build the home you’ve always dreamed of.",
      date: '2025-04-29',
      author: 'Ram Kumawat',
      category: 'Architecture',
      image:
        'https://images.unsplash.com/photo-1611162618071-b39a2ecf2c0a?q=80&w=1600&auto=format&fit=crop',
      href: '/blog/5-smart-technologies',
    },
    {
      id: 2,
      title:
        'Why Foundation Brothers is Your One-Stop Destination for Dream Homes',
      excerpt:
        'From concept to completion, discover how our architecture-first approach delivers great homes.',
      date: '2025-04-29',
      author: 'Ram Kumawat',
      category: 'Commercial',
      image:
        'https://images.unsplash.com/photo-1437419764061-2473afe69fc2?q=80&w=1200&auto=format&fit=crop',
      href: '/blog/reidius-one-stop-destination',
    },
    {
      id: 3,
      title:
        'Building Your First Home? Here’s Everything You Need to Know',
      excerpt:
        'Key decisions, budget planning, and timelines explained step-by-step.',
      date: '2025-04-29',
      author: 'Ram Kumawat',
      category: 'Residence',
      image:
        'https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?q=80&w=1200&auto=format&fit=crop',
      href: '/blog/building-first-home-guide',
    },
    {
      id: 4,
      title: 'How We Design Interiors that Age Gracefully',
      excerpt: 'Material choices, lighting, and functional planning for longevity.',
      date: '2025-04-29',
      author: 'Ram Kumawat',
      category: 'Interior',
      image:
        'https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?q=80&w=1200&auto=format&fit=crop',
      href: '/blog/interiors-age-gracefully',
    },
    {
      id: 5,
      title: 'Commercial Spaces that Boost Productivity',
      excerpt: 'Design principles for modern workplaces that perform.',
      date: '2025-04-29',
      author: 'Ram Kumawat',
      category: 'Commercial',
      image:
        'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop',
      href: '/blog/productive-commercial-spaces',
    },
    {
      id: 6,
      title: 'Residence Facades: Trends that Actually Last',
      excerpt: 'Balance curb appeal with climate and maintenance.',
      date: '2025-04-29',
      author: 'Ram Kumawat',
      category: 'Residence',
      image:
        'https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop',
      href: '/blog/residence-facade-trends',
    },
  ]

  const categories = [
    'All Projects',
    'Architecture',
    'Interior',
    'Residence',
    'Commercial',
  ]

  return (
    <main className="min-h-screen">
      {/* Page title */}
      <section className="mx-auto max-w-6xl px-6 pt-10 sm:pt-14">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
          Know more about our process
        </h1>
      </section>

      {/* Featured + Sidebar */}
      <section className="mx-auto max-w-6xl px-6 pb-10 sm:pb-14">
        <PostsGrid posts={posts} categories={categories} />
      </section>

      {/* Design Inspirations */}
      <section className="mx-auto max-w-6xl px-6 pb-6 sm:pb-8">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
          Design Inspirations
        </h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            '/assets/Architecture/Architecture-1.jpg',
            '/assets/Architecture/Architecture-2.jpg',
            '/assets/Architecture/Architecture-3.jpg',
            '/assets/Architecture/Architecture-4.jpg',
          ].map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt="Inspiration"
              className="w-full rounded-xl object-cover aspect-[4/3]"
            />
          ))}
        </div>
      </section>

      {/* Dual CTA cards */}
      <section className="mx-auto max-w-6xl px-6 pb-12 sm:pb-16">
        <div className="grid gap-6 md:grid-cols-2">
          {/* Enquiry form visual card */}
          <div className="rounded-2xl bg-yellow-300/90 p-6 sm:p-8">
            <h3 className="text-2xl sm:text-3xl font-semibold">
              Send us your enquiry, get a call back from us
            </h3>
            <p className="mt-1 text-sm">We’ll call you within 2 working days</p>
            <form className="mt-6 grid gap-3">
              <input
                className="h-11 w-full rounded-lg border border-input bg-white/90 px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring/60"
                placeholder="Name"
              />
              <input
                className="h-11 w-full rounded-lg border border-input bg-white/90 px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring/60"
                placeholder="Phone Number"
                inputMode="tel"
              />
              <input
                className="h-11 w-full rounded-lg border border-input bg-white/90 px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring/60"
                placeholder="Email"
                type="email"
              />
              <textarea
                className="min-h-28 w-full rounded-lg border border-input bg-white/90 px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring/60"
                placeholder="Message"
              />
              <button
                type="button"
                className="mt-2 inline-flex h-11 items-center justify-center rounded-md bg-neutral-900 px-5 text-sm font-medium text-white hover:opacity-90"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Free consultation visual */}
          <div className="rounded-2xl border border-border bg-secondary p-6 sm:p-8">
            <h3 className="text-2xl sm:text-3xl font-semibold">
              Talk to our experts, We offer FREE consultation
            </h3>
            <p className="mt-2 text-muted-foreground max-w-prose">
              Tell us more about your project, Let us understand your project
            </p>
            <div className="mt-5 overflow-hidden rounded-xl">
              <div className="relative">
                <img
                  src="/assets/get-free-estimation-of-your-house.jpg"
                  alt="Consultation"
                  className="w-full object-cover aspect-[16/9]"
                />
                <a
                  href="#get-estimate"
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 inline-flex items-center justify-center rounded-full bg-yellow-300 px-5 py-3 text-sm font-semibold text-foreground shadow-md hover:bg-yellow-400"
                >
                  Get free Estimation of your house
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

type PostsGridProps = {
  posts: Array<{
    id: number; title: string; excerpt: string; date: string; author: string; category: string; image: string; href: string;
  }>;
  categories: string[];
}

function PostsGrid({ posts }: PostsGridProps) {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((p) => (
        <a key={p.id} href={p.href} className="group rounded-2xl overflow-hidden border border-gray-200 hover:shadow-subtle transition">
          <div className="aspect-[16/10] w-full overflow-hidden bg-gray-50">
            <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300" />
          </div>
          <div className="p-5">
            <div className="text-xs uppercase tracking-wide text-gray-500 mb-2">{p.category}</div>
            <h3 className="text-lg font-medium text-gray-900 leading-snug line-clamp-2">{p.title}</h3>
            <p className="mt-2 text-sm text-gray-600 line-clamp-3">{p.excerpt}</p>
            <div className="mt-4 text-xs text-gray-500">{new Date(p.date).toLocaleDateString()}</div>
          </div>
        </a>
      ))}
    </div>
  )
}
