# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website for Md Nazmul Haque Chowdhury (OmegaZero Studios), a Lead Game Developer with 6+ years of experience. The site is built with Next.js 16 using the App Router architecture and showcases game development projects, professional experience, and technical skills.

## Development Commands

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

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **React**: v19.2.0
- **Styling**: Tailwind CSS v4 with PostCSS
- **TypeScript**: v5 (strict mode enabled)
- **Icons**: lucide-react
- **Fonts**: Geist Sans & Geist Mono (next/font)

## Architecture

### App Router Structure

This project uses Next.js App Router (not Pages Router). All routes are defined in the `app/` directory:

- `app/layout.tsx` - Root layout with global metadata, font configuration, and HTML structure
- `app/page.tsx` - Main portfolio page (single-page application with client-side routing)
- `app/globals.css` - Global Tailwind CSS styles

### Single-Page Application Pattern

The entire portfolio is a single client-side component (`app/page.tsx`) that implements:
- Smooth scroll navigation between sections (home, games, about, skills, contact)
- Active section tracking based on scroll position
- Dark/light mode toggle with state management
- Mobile responsive navigation with hamburger menu

### Component Structure

The main page is organized into sections:
1. **Hero Section** - Personal branding with statistics (years, games shipped, downloads)
2. **Featured Project** - Crapsee (flagship multiplayer game)
3. **Games Portfolio** - Grid showcase of 5 additional games
4. **About Section** - Professional journey, education, certifications, achievements
5. **Skills Section** - Technical skills categorized by proficiency (A/B/C levels)
6. **Contact Section** - Contact information and message form
7. **Footer** - Branding and copyright

### TypeScript Configuration

- Path alias `@/*` maps to root directory (configured in `tsconfig.json`)
- Strict mode enabled
- Target: ES2017
- React JSX transform (react-jsx)

### Data Model

Game projects are defined as an array of `Game` objects with this interface:
```typescript
interface Game {
  title: string;
  description: string;
  tech: string[];
  role: string;
  team: string;
  duration: string;
  links: {
    playStore?: string;
    appStore?: string;
    web?: string;
    video?: string;
  };
}
```

## Styling Guidelines

- Tailwind CSS v4 is configured via PostCSS (no tailwind.config file needed)
- Dark mode is implemented via conditional className logic (not Tailwind's dark: variant)
- Responsive breakpoints: `sm:`, `md:`, `lg:` prefixes
- Color scheme:
  - Dark mode: gray-900 background, gray-800 cards
  - Light mode: gray-50 background, white cards
  - Accents: blue-500, purple-600 gradients
- Custom fonts use CSS variables: `--font-geist-sans`, `--font-geist-mono`

## Key Features to Maintain

1. **Smooth Scroll Navigation**: Uses `scrollIntoView({ behavior: 'smooth' })` for section navigation
2. **Active Section Tracking**: Scroll listener checks section positions to update active nav item
3. **Theme Toggle**: State-driven dark/light mode (not system preference)
4. **Form Handling**: Contact form has simulated submission (currently no backend integration)
5. **External Links**: All game links use `target="_blank"` and `rel="noopener noreferrer"`

## Development Notes

- This is a client-side rendered application (uses `'use client'` directive)
- No server components or API routes are currently implemented
- Contact form is currently a mock implementation (shows success without actual sending)
- All game data is hardcoded in the page component (no CMS or database)
- No image optimization is used (emojis serve as project placeholders)

## ESLint Configuration

ESLint uses the flat config format (eslint.config.mjs) with:
- Next.js core-web-vitals rules
- TypeScript rules
- Custom ignores for .next/, out/, build/, next-env.d.ts
