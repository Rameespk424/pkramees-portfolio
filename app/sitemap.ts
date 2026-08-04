import type { MetadataRoute } from 'next'
import { projects } from '@/data/projects'
import { site } from '@/data/site'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const staticRoutes = ['', '/work/', '/about/', '/contact/'].map((route) => ({
    url: `${site.url}${route}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  const projectRoutes = projects.map((p) => ({
    url: `${site.url}/work/${p.slug}/`,
    lastModified: now,
    changeFrequency: 'yearly' as const,
    priority: 0.6,
  }))

  return [...staticRoutes, ...projectRoutes]
}
