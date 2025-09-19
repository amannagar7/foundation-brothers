// Serverless API for Blog using GitHub Contents API (Git-as-CMS)
// Env required on Vercel: GITHUB_TOKEN, GITHUB_REPO (e.g. amannagar7/foundation-brothers),
// GITHUB_AUTHOR_NAME, GITHUB_AUTHOR_EMAIL


const REPO = process.env.GITHUB_REPO
const TOKEN = process.env.GITHUB_TOKEN
const AUTHOR_NAME = process.env.GITHUB_AUTHOR_NAME || 'Site Bot'
const AUTHOR_EMAIL = process.env.GITHUB_AUTHOR_EMAIL || 'bot@example.com'

const POSTS_DIR = 'content/posts'

export default async function handler(req, res) {
  if (!REPO || !TOKEN) {
    return res.status(500).json({ error: 'Missing GITHUB_REPO or GITHUB_TOKEN env' })
  }

  try {
    if (req.method === 'GET') {
      // List posts by directory listing; return filenames and minimal meta
      const list = await github(`repos/${REPO}/contents/${POSTS_DIR}`)
      const posts = Array.isArray(list)
        ? list
            .filter((f) => f.name.endsWith('.md'))
            .map((f) => ({ slug: f.name.replace(/\.md$/, ''), path: f.path, url: f.html_url }))
        : []
      return res.json({ posts })
    }

    if (req.method === 'POST') {
      const { title, slug: inputSlug, excerpt = '', contentHtml = '', tags = [], author = '', featuredImageBase64 } = req.body || {}
      if (!title) return res.status(400).json({ error: 'Title is required' })

      const slug = (inputSlug || slugify(title)).toLowerCase()
      const mdPath = `${POSTS_DIR}/${slug}.md`

      // Optional: upload image
      let coverRelative = ''
      if (featuredImageBase64 && typeof featuredImageBase64 === 'string' && featuredImageBase64.startsWith('data:')) {
        const ext = featuredImageBase64.substring(5, featuredImageBase64.indexOf(';')).split('/')[1] || 'png'
        const imgPath = `public/blog/${slug}.${ext}`
        const base64 = featuredImageBase64.split(',')[1]
        await putFile(imgPath, base64, `feat(blog): add cover for ${slug}`)
        coverRelative = `/blog/${slug}.${ext}`
      }

      const frontmatter = [
        '---',
        `title: ${yamlEscape(title)}`,
        `slug: ${slug}`,
        `excerpt: ${yamlEscape(excerpt)}`,
        `author: ${yamlEscape(author)}`,
        `date: ${new Date().toISOString()}`,
        `tags: [${(Array.isArray(tags) ? tags : String(tags).split(',')).map((t) => yamlEscape(String(t).trim())).filter(Boolean).join(', ')}]`,
        coverRelative ? `cover: ${coverRelative}` : '',
        '---',
        '',
      ]
        .filter(Boolean)
        .join('\n')

      const body = `${frontmatter}${htmlToMarkdown(contentHtml)}\n`
      const contentBase64 = Buffer.from(body, 'utf8').toString('base64')
      await putFile(mdPath, contentBase64, `feat(blog): publish ${slug}`)

      return res.status(201).json({ ok: true, slug })
    }

    return res.status(405).json({ error: 'Method not allowed' })
  } catch (err) {
    console.error('blog api error', err)
    const msg = err?.response?.data || err?.message || 'Unknown error'
    return res.status(500).json({ error: msg })
  }
}

async function github(path, init = {}) {
  const url = `https://api.github.com/${path}`
  const res = await fetch(url, {
    ...init,
    headers: {
      Authorization: `token ${TOKEN}`,
      Accept: 'application/vnd.github+json',
      'User-Agent': 'foundation-brothers-cms',
      ...(init.headers || {}),
    },
  })
  if (!res.ok) {
    const text = await res.text()
    throw new Error(`GitHub ${res.status}: ${text}`)
  }
  return res.json()
}

async function putFile(path, contentBase64, message) {
  // Check if file exists to supply sha for update
  let sha
  try {
    const existing = await github(`repos/${REPO}/contents/${path}`)
    sha = existing.sha
  } catch {}
  const body = {
    message,
    content: contentBase64,
    committer: { name: AUTHOR_NAME, email: AUTHOR_EMAIL },
    author: { name: AUTHOR_NAME, email: AUTHOR_EMAIL },
    ...(sha ? { sha } : {}),
  }
  return github(`repos/${REPO}/contents/${path}`, { method: 'PUT', body: JSON.stringify(body) })
}

function slugify(s) {
  return String(s)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '')
}

function yamlEscape(s) {
  if (s == null) return ''
  const str = String(s)
  if (/[:#\-\[\]{}&,>*!|>'"%@`]/.test(str) || /\s/.test(str)) return JSON.stringify(str)
  return str
}

function htmlToMarkdown(html) {
  // Minimal fallback: wrap as-is if we don't have a converter
  if (!html) return ''
  // Naive replacements for common tags; for full fidelity we can switch to turndown later
  return String(html)
    .replace(/<\/?p>/g, '\n\n')
    .replace(/<strong>(.*?)<\/strong>/g, '**$1**')
    .replace(/<em>(.*?)<\/em>/g, '*$1*')
    .replace(/<br\s*\/?>(\n)?/g, '\n')
    .replace(/<h[12]>(.*?)<\/h[12]>/g, '\n# $1\n')
    .replace(/<[^>]+>/g, '')
}


