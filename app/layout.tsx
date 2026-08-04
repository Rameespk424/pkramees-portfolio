import type { Metadata } from 'next'
import Masthead from '@/components/Masthead'
import Footer from '@/components/Footer'
import { site } from '@/data/site'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.role}, ${site.location}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  keywords: [
    'Full Stack Developer Dubai',
    'Angular Developer Dubai',
    '.NET Developer Dubai',
    'Angular .NET developer',
    'React developer UAE',
    'Ramees PK',
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_AE',
    url: site.url,
    siteName: site.name,
    title: `${site.name} — ${site.role}`,
    description: site.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} — ${site.role}`,
    description: site.description,
  },
  robots: { index: true, follow: true },
}

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: site.name,
  jobTitle: site.role,
  email: `mailto:${site.email}`,
  url: site.url,
  sameAs: [site.linkedin],
  address: { '@type': 'PostalAddress', addressLocality: 'Dubai', addressCountry: 'AE' },
  knowsAbout: [
    'Angular',
    'React',
    '.NET',
    'C#',
    'SQL Server',
    'TypeScript',
    'Clean Architecture',
    'Multi-tenant SaaS',
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400&family=IBM+Plex+Sans:wght@400;500&family=Newsreader:ital,opsz,wght@0,6..72,300;0,6..72,400;1,6..72,400&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#fbfbf9" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body>
        <a href="#main" className="skip">
          Skip to content
        </a>
        <Masthead />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
