import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  // Base URL should be set via NEXT_PUBLIC_SITE_URL env variable in production
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://omegazero.studio'

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
