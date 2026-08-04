import { site } from '@/data/site'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer__inner">
        <p className="meta">
          {site.name} — {site.location}
        </p>
        <div className="footer__links">
          <a href={`mailto:${site.email}`}>Email</a>
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href={site.resume}>Résumé</a>
        </div>
      </div>
    </footer>
  )
}
