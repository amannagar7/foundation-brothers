// Serverless API for Blog using Vercel Blob (no external DB)
import { list, put } from '@vercel/blob'
const POSTS_PREFIX = 'blog/posts/'

function readJsonBody(req) {
  return new Promise((resolve, reject) => {
    let data = ''
    req.on('data', (c) => (data += c))
    req.on('end', () => {
      try {
        resolve(data ? JSON.parse(data) : {})
      } catch {
        resolve({})
      }
    })
    req.on('error', reject)
  })
}

export default async function handler(req, res) {

  try {
    if (req.method === 'GET') {
      // Debug helper: /api/blog?debug=1
      try {
        const url = req?.url ? new URL(req.url, 'http://localhost') : null
        if (url.searchParams.get('debug') === '1') {
          const token = process.env.BLOB_READ_WRITE_TOKEN
          const hasToken = Boolean(token)
          let listOk = false
          let listError = ''
          try {
            await list({ prefix: POSTS_PREFIX, token })
            listOk = true
          } catch (e) {
            listError = e?.message || String(e)
          }
          return res.json({ ok: true, hasToken, listOk, listError, prefix: POSTS_PREFIX })
        }
      } catch {}

      const token = process.env.BLOB_READ_WRITE_TOKEN
      if (!token) {
        return res.status(500).json({ error: 'Missing BLOB_READ_WRITE_TOKEN env on server' })
      }

      const items = await list({ prefix: POSTS_PREFIX, token })
      const posts = items.blobs
        .filter((b) => b.pathname.endsWith('.json'))
        .map((b) => ({ slug: b.pathname.replace(POSTS_PREFIX, '').replace(/\.json$/, ''), url: b.url }))
      return res.json({ posts })
    }

    if (req.method === 'POST') {
      const body = await readJsonBody(req)
      const { title, slug: inputSlug, excerpt = '', contentHtml = '', tags = [], author = '', featuredImageBase64 } = body || {}
      if (!title) return res.status(400).json({ error: 'Title is required' })

      const slug = (inputSlug || slugify(title)).toLowerCase()

      const token = process.env.BLOB_READ_WRITE_TOKEN
      if (!token) {
        return res.status(500).json({ error: 'Missing BLOB_READ_WRITE_TOKEN env on server' })
      }

      let coverUrl = ''
      if (featuredImageBase64 && typeof featuredImageBase64 === 'string' && featuredImageBase64.startsWith('data:')) {
        const ext = featuredImageBase64.substring(5, featuredImageBase64.indexOf(';')).split('/')[1] || 'png'
        const buf = Buffer.from(featuredImageBase64.split(',')[1], 'base64')
        const r = await put(`${POSTS_PREFIX}covers/${slug}.${ext}`, buf, { access: 'public', token })
        coverUrl = r.url
      }

      const json = {
        title,
        slug,
        excerpt,
        author,
        date: new Date().toISOString(),
        tags: Array.isArray(tags) ? tags : String(tags).split(',').map((t) => t.trim()).filter(Boolean),
        cover: coverUrl,
        contentHtml,
      }
      const r2 = await put(`${POSTS_PREFIX}${slug}.json`, Buffer.from(JSON.stringify(json, null, 2)), { access: 'public', contentType: 'application/json', token })
      return res.status(201).json({ ok: true, slug, url: r2.url })
    }

    return res.status(405).json({ error: 'Method not allowed' })
  } catch (err) {
    console.error('blog api error', err)
    const msg = err?.response?.data || err?.message || 'Unknown error'
    return res.status(500).json({ error: msg })
  }
}

function slugify(s) {
  return String(s)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '')
}


