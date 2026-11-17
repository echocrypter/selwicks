import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { SITE_ORIGIN } from './src/config/site.js'
import { blogPosts } from './src/content/blogPosts.js'

const root = fileURLToPath(new URL('.', import.meta.url))
const blogListingTitle = 'Insights | Selwicks'
const blogListingDescription =
  'Practical thinking on software, AI, and building products that scale. No fluff and no jargon. Just lessons from the team at Selwicks on building, automating, and growing.'
const sitemapPaths = [
  '/',
  '/projects.html',
  '/about.html',
  '/privacy-policy.html',
  '/terms-of-service',
  '/why-choose-us',
  '/blog',
  ...blogPosts.filter((post) => post.published).map((post) => `/blog/${post.slug}`),
]
const extensionlessPageRoutes = new Set(['/terms-of-service', '/why-choose-us', '/blog'])
const rewriteExtensionlessPageRoute = (request: { url?: string }, _response: unknown, next: () => void) => {
  const pathname = request.url?.split('?')[0]
  if (!pathname) {
    next()
    return
  }
  if (extensionlessPageRoutes.has(pathname)) {
    request.url = `${pathname}/index.html`
  } else if (pathname.startsWith('/blog/')) {
    const slug = pathname.slice('/blog/'.length).replace(/\/+$/, '')
    if (blogPosts.some((post) => post.slug === slug && post.published)) {
      request.url = `/blog/${slug}/index.html`
    }
  }
  next()
}
const rewriteDevelopmentBlogRoute = (request: { url?: string }, _response: unknown, next: () => void) => {
  const pathname = request.url?.split('?')[0]
  if (pathname === '/blog' || (pathname?.startsWith('/blog/') && !pathname.endsWith('.html'))) {
    request.url = '/blog/index.html'
  }
  next()
}
const escapeHtml = (value: string) =>
  value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;')
const createSitemap = () => `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapPaths.map((path) => `  <url><loc>${SITE_ORIGIN}${path === '/' ? '' : path}</loc></url>`).join('\n')}
</urlset>
`

const siteMetadataPlugin: Plugin = {
  name: 'selwicks-site-metadata',
  transformIndexHtml(html) {
    return html
      .replace(/__SITE_ORIGIN__/g, SITE_ORIGIN)
      .replace(/__BLOG_TITLE__/g, blogListingTitle)
      .replace(/__BLOG_DESCRIPTION__/g, blogListingDescription)
  },
  configureServer(server) {
    server.middlewares.use(rewriteDevelopmentBlogRoute)
    server.middlewares.use(rewriteExtensionlessPageRoute)
    server.middlewares.use('/sitemap.xml', (_request, response) => {
      response.setHeader('Content-Type', 'application/xml')
      response.end(createSitemap())
    })
  },
  configurePreviewServer(server) {
    server.middlewares.use(rewriteExtensionlessPageRoute)
  },
  generateBundle() {
    this.emitFile({ type: 'asset', fileName: 'sitemap.xml', source: createSitemap() })
  },
  async writeBundle(options) {
    const outputDirectory = resolve(root, options.dir ?? 'dist')
    const listingHtml = await readFile(resolve(outputDirectory, 'blog/index.html'), 'utf8')
    for (const post of blogPosts.filter((item) => item.published)) {
      const title = `${post.articleTitle ?? post.title} | Selwicks Insights`
      const canonical = `${SITE_ORIGIN}/blog/${post.slug}`
      const structuredData = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: post.articleTitle ?? post.title,
        description: post.excerpt,
        image: `${SITE_ORIGIN}/founder.jpeg`,
        datePublished: post.date,
        dateModified: post.date,
        author: { '@type': 'Person', name: post.author },
        publisher: { '@type': 'Organization', name: 'Selwicks' },
        mainEntityOfPage: canonical,
      }
      const articleJsonLd = JSON.stringify(structuredData).replace(/</g, '\\u003c')
      const html = listingHtml
        .replace(/<title>[^<]*<\/title>/, `<title>${escapeHtml(title)}</title>`)
        .replace(/(<meta name="description" content=")[^"]+(")/, `$1${escapeHtml(post.excerpt)}$2`)
        .replace(/(<meta property="og:title" content=")[^"]+(")/, `$1${escapeHtml(title)}$2`)
        .replace(/(<meta property="og:description" content=")[^"]+(")/, `$1${escapeHtml(post.excerpt)}$2`)
        .replace(/(<link rel="canonical" href=")[^"]+(")/, `$1${escapeHtml(canonical)}$2`)
        .replace(/(<meta property="og:url" content=")[^"]+(")/, `$1${escapeHtml(canonical)}$2`)
        .replace(/(<meta property="og:type" content=")[^"]+(")/, '$1article$2')
        .replace(
          '</head>',
          `<script id="blog-article-jsonld" type="application/ld+json">${articleJsonLd}</script></head>`,
        )
      await mkdir(resolve(outputDirectory, 'blog', post.slug), { recursive: true })
      await writeFile(resolve(outputDirectory, 'blog', post.slug, 'index.html'), html)
    }
  },
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    siteMetadataPlugin,
  ],
  server: {
    port: 5173,
    host: true,
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
        projects: resolve(root, 'projects.html'),
        about: resolve(root, 'about.html'),
        privacyPolicy: resolve(root, 'privacy-policy.html'),
        termsOfService: resolve(root, 'terms-of-service/index.html'),
        whyChooseUs: resolve(root, 'why-choose-us/index.html'),
        blog: resolve(root, 'blog/index.html'),
      },
    },
  },
})
