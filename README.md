# OmegaZero Studios Portfolio

Professional portfolio website for **Md Nazmul Haque Chowdhury**, Lead Game Developer with 6+ years of experience specializing in Unity3D, C#, and multiplayer systems architecture.

## 🎮 About

This portfolio showcases:
- 15+ shipped game titles
- Professional experience and achievements
- Technical skills and certifications
- Featured project: [Crapsee](https://crapsee.live/) - Multiplayer casino game

## 🚀 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **React**: v19.2.0
- **Styling**: Tailwind CSS v4
- **TypeScript**: v5 (strict mode)
- **Icons**: lucide-react
- **Fonts**: Geist Sans & Geist Mono

## 📦 Installation

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Set your site URL in .env.local
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## 🛠️ Development

```bash
# Start development server (localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## 🌟 Features

### SEO Optimized
- Dynamic sitemap.xml and robots.txt
- Open Graph and Twitter Card meta tags
- JSON-LD structured data (Person, WebSite schemas)
- Auto-generated Open Graph images

### Accessibility (WCAG 2.1 AA Compliant)
- Skip-to-content link for keyboard navigation
- Proper ARIA labels and semantic HTML
- Focus indicators on all interactive elements
- Screen reader optimized
- Color contrast ratios >4.5:1

### Security
- Content Security Policy headers
- XSS protection
- Frame protection
- HTTPS enforcement
- Secure cookie settings

### Performance
- Optimized fonts with next/font
- Smooth scroll navigation
- Mobile-responsive design
- Dark/light mode toggle

## 📁 Project Structure

```
app/
├── layout.tsx          # Root layout with metadata
├── page.tsx            # Main portfolio page
├── globals.css         # Global styles
├── error.tsx           # Error boundary
├── not-found.tsx       # 404 page
├── robots.ts           # robots.txt generator
├── sitemap.ts          # sitemap.xml generator
└── opengraph-image.tsx # OG image generator
```

## 🔧 Configuration

### Environment Variables

See `.env.example` for required configuration:

- `NEXT_PUBLIC_SITE_URL` - Your production URL (required for SEO)
- `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` - Google Search Console verification (optional)
- `NEXT_PUBLIC_BING_SITE_VERIFICATION` - Bing Webmaster Tools verification (optional)

### Security Headers

Configured in `next.config.ts`:
- Strict-Transport-Security
- Content-Security-Policy
- X-Frame-Options
- X-Content-Type-Options
- Referrer-Policy

## 🚢 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Set environment variables
4. Deploy

### Other Platforms

```bash
# Build the application
npm run build

# Start production server
npm start
```

## 📝 License

© 2025 Md Nazmul Haque Chowdhury. All rights reserved.

## 📬 Contact

- **Email**: nazmulredoy.csecu@gmail.com
- **Phone**: +880 1852 114544
- **Discord**: viperhridoy
- **GitHub**: [NazmulHridoy](https://github.com/NazmulHridoy)
- **LinkedIn**: [nazmul55](https://www.linkedin.com/in/nazmul55/)
- **Discord Server**: [OmegaZero Studios](https://discord.gg/KvtNANquPN)
