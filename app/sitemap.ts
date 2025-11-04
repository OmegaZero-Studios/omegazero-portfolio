import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://omegazero.studio'

  // Single-page portfolio with anchor navigation (#home, #games, #about, #skills, #contact)
  // Add additional routes here when creating dedicated pages (e.g., /games/crapsee)
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}
