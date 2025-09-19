// Read a single blog post file from GitHub Contents API
const REPO = process.env.GITHUB_REPO
const TOKEN = process.env.GITHUB_TOKEN

export default async function handler(req, res) {
  const { slug } = req.query || {}
  if (!REPO || !TOKEN) return res.status(500).json({ error: 'Missing env' })
  if (!slug) return res.status(400).json({ error: 'Missing slug' })
  try {
    const file = await github(`repos/${REPO}/contents/content/posts/${slug}.md`)
    const content = Buffer.from(file.content, file.encoding || 'base64').toString('utf8')
    return res.json({ content })
  } catch (e) {
    return res.status(404).json({ error: 'Not found' })
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
  if (!res.ok) throw new Error('github error')
  return res.json()
}


