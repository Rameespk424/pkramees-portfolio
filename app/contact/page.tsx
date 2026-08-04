import type { Metadata } from 'next'
import { site } from '@/data/site'

export const metadata: Metadata = {
  title: 'Contact',
  description: `Get in touch with ${site.name}, full-stack developer in Dubai.`,
  alternates: { canonical: '/contact/' },
}

const channels = [
  { label: 'Email', value: site.email, href: `mailto:${site.email}` },
  { label: 'Phone', value: site.phone, href: `tel:${site.phoneRaw}` },
  { label: 'LinkedIn', value: site.linkedinLabel, href: site.linkedin, external: true },
  { label: 'Résumé', value: 'Download PDF', href: site.resume },
]

export default function Contact() {
  return (
    <section className="shell section">
      <p className="eyebrow" style={{ marginBottom: '0.9rem' }}>
        Contact
      </p>
      <h1 className="title measure">
        Open to full-stack roles in Dubai and the wider UAE.
      </h1>
      <p className="lede measure" style={{ marginTop: '1rem' }}>
        Email is the fastest way to reach me. If you are hiring for Angular, .NET, or both, tell me
        what the team is building and what is currently in the way.
      </p>

      <div className="channels" style={{ marginTop: '2.75rem' }}>
        {channels.map((channel) => (
          <a
            key={channel.label}
            href={channel.href}
            className="channel"
            {...(channel.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          >
            <span className="channel__label">{channel.label}</span>
            <span className="channel__value">{channel.value}</span>
          </a>
        ))}
      </div>

      <p className="meta" style={{ marginTop: '2rem' }}>
        Based in {site.location} — UTC+4
      </p>
    </section>
  )
}
