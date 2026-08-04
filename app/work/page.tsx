import Link from 'next/link'
import type { Metadata } from 'next'
import { projects } from '@/data/projects'

export const metadata: Metadata = {
  title: 'Work',
  description:
    'Projects across multi-tenant SaaS, Forex trading platforms, B2B procurement, and machine learning tooling — Angular, React, Next.js, and .NET.',
}

export default function WorkIndex() {
  return (
    <section className="shell section">
      <header style={{ marginBottom: '2.5rem' }}>
        <p className="eyebrow" style={{ marginBottom: '0.9rem' }}>
          {projects.length} projects
        </p>
        <h1 className="title measure">
          Platforms, products, and the occasional website that had to ship on Friday.
        </h1>
      </header>

      <div className="entries">
        {projects.map((project) => (
          <Link key={project.slug} href={`/work/${project.slug}/`} className="entry">
            <div className="entry__grid">
              <span className="entry__year">{project.year}</span>
              <span>
                <span className="entry__name">{project.name}</span>
                <span className="entry__note" style={{ display: 'block' }}>
                  {project.indexNote}
                </span>
              </span>
              <span className="entry__org">{project.org}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
