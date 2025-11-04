import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://omegazero.studio';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Md Nazmul Haque Chowdhury - Lead Game Developer | OmegaZero Studios",
    template: "%s | OmegaZero Studios",
  },
  description: "Lead Game Developer with 6+ years experience in Unity3D, C#, and multiplayer systems. 15+ shipped games including Crapsee, Water Slipper & Fire Escape 3D.",
  keywords: [
    "Game Developer",
    "Unity",
    "Unity3D",
    "Game Development",
    "Multiplayer Games",
    "Portfolio",
    "Nazmul Haque",
    "OmegaZero Studios",
    "C#",
    "WebRTC",
    "Mobile Games",
    "Cross-platform Games",
  ],
  authors: [
    {
      name: "Md Nazmul Haque Chowdhury",
      url: siteUrl,
    },
  ],
  creator: "Md Nazmul Haque Chowdhury",
  publisher: "OmegaZero Studios",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  // Mobile optimization
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "OmegaZero Studios",
  },
  // Search Console Verification (add values in .env when setting up)
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    other: {
      "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION || "",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Md Nazmul Haque Chowdhury - Lead Game Developer | OmegaZero Studios",
    description: "Lead Game Developer with 6+ years experience in Unity3D, C#, and multiplayer systems. 15+ shipped games including Crapsee, Water Slipper & Fire Escape 3D.",
    siteName: "OmegaZero Studios",
    // Image is auto-generated from opengraph-image.tsx
  },
  twitter: {
    card: "summary_large_image",
    title: "Md Nazmul Haque Chowdhury - Lead Game Developer | OmegaZero Studios",
    description: "Lead Game Developer with 6+ years experience in Unity3D, C#, and multiplayer systems. 15+ shipped games including Crapsee, Water Slipper & Fire Escape 3D.",
    // Image is auto-generated from opengraph-image.tsx
    creator: "@omegazerostudios",
    site: "@omegazerostudios",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "Technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: "Md Nazmul Haque Chowdhury",
        alternateName: "Nazmul Haque",
        url: siteUrl,
        email: "nazmulredoy.csecu@gmail.com",
        telephone: "+880-1852-114544",
        jobTitle: "Lead Game Developer",
        description: "Lead Game Developer with 6+ years of experience specializing in Unity3D, C#, and multiplayer systems architecture. Expert in cross-platform game development.",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Dhaka",
          addressCountry: "Bangladesh",
        },
        sameAs: [
          "https://github.com/NazmulHridoy",
          "https://www.linkedin.com/in/nazmul55/",
          "https://discord.gg/KvtNANquPN",
        ],
        knowsAbout: [
          {
            "@type": "Thing",
            name: "Unity3D",
            description: "Game development engine",
          },
          {
            "@type": "Thing",
            name: "C# Programming",
            description: "Programming language",
          },
          {
            "@type": "Thing",
            name: "Multiplayer Game Development",
            description: "Networked game systems",
          },
          {
            "@type": "Thing",
            name: "WebRTC",
            description: "Real-time communication",
          },
          {
            "@type": "Thing",
            name: "MongoDB",
            description: "Database technology",
          },
        ],
        hasOccupation: {
          "@type": "Occupation",
          name: "Lead Game Developer",
          occupationLocation: {
            "@type": "Country",
            name: "Bangladesh",
          },
          estimatedSalary: {
            "@type": "MonetaryAmountDistribution",
            name: "Senior Developer",
            currency: "USD",
          },
        },
        worksFor: {
          "@type": "Organization",
          name: "Crapsee Corp.",
          url: "https://crapsee.live",
        },
        alumniOf: {
          "@type": "EducationalOrganization",
          name: "University of Chittagong",
          sameAs: "https://www.cu.ac.bd",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "OmegaZero Studios - Md Nazmul Haque Chowdhury Portfolio",
        description: "Portfolio of Lead Game Developer Md Nazmul Haque Chowdhury, showcasing 15+ shipped games including Crapsee, Water Slipper, Fire Escape 3D, and more.",
        publisher: {
          "@id": `${siteUrl}/#person`,
        },
        inLanguage: "en-US",
        copyrightYear: 2025,
        copyrightHolder: {
          "@id": `${siteUrl}/#person`,
        },
      },
      {
        "@type": "ProfilePage",
        "@id": `${siteUrl}/#profilepage`,
        url: siteUrl,
        name: "Md Nazmul Haque Chowdhury - Portfolio",
        isPartOf: {
          "@id": `${siteUrl}/#website`,
        },
        about: {
          "@id": `${siteUrl}/#person`,
        },
        description: "Professional portfolio showcasing game development projects, technical skills, and career achievements.",
        mainEntity: {
          "@id": `${siteUrl}/#person`,
        },
      },
    ],
  };

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
