import Link from 'next/link'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Traversal } from '@/components/Traversal'
import { projects, getProject } from '@/data/projects'

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = getProject(params.slug)
  if (!project) return {}
  return {
    title: project.name,
    description: `${project.tagline}. ${project.org}, ${project.period}.`,
    alternates: { canonical: `/work/${project.slug}/` },
  }
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug)
  if (!project) notFound()

  const stack = [...project.frontend, ...project.backend]

  const builtBackend = project.owned.some((l) =>
    ['schema', 'procedure', 'repository', 'service', 'controller'].includes(l)
  )

  return (
    <article>
      <div className="shell project__head">
        <Link href="/work/" className="back" style={{ marginBottom: '2rem', display: 'inline-flex' }}>
          ← All work
        </Link>

        <p className="eyebrow" style={{ marginBottom: '0.9rem' }}>
          {project.org} — {project.period}
        </p>
        <h1 className="title measure">{project.name}</h1>
        <p className="lede measure" style={{ marginTop: '1rem' }}>
          {project.tagline}
        </p>

        {project.url && (
          <p style={{ marginTop: '1.25rem' }}>
            <a href={project.url} target="_blank" rel="noopener noreferrer" className="link meta">
              {project.urlLabel} ↗
            </a>
          </p>
        )}
      </div>

      <div className="shell section--tight">
        <hr className="rule" />
        <div className="stack measure" style={{ ['--stack-gap' as string]: '1rem', paddingTop: '2rem' }}>
          {project.summary.map((line, i) => (
            <p key={i} className="body">
              {line}
            </p>
          ))}
        </div>
      </div>

      {/* Traversal — which layers were personally delivered.
          Only meaningful on projects spanning more than one layer. */}
      {project.owned.length > 1 && (
        <div className="shell section--tight">
          <p className="eyebrow" style={{ marginBottom: '0.8rem' }}>
            Layers delivered
          </p>
          <Traversal owned={project.owned} />
          <p className="traversal__caption" style={{ marginTop: '1rem' }}>
            Filled markers are the layers I personally delivered on this project.
          </p>
        </div>
      )}

      {/* Contributions */}
      <div className="shell section--tight">
        {project.contributions.map((group) => (
          <section key={group.heading} className="contribution">
            <h2 className="contribution__heading">{group.heading}</h2>
            <ul className="bullets">
              {group.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      {/* Stack */}
      <div className="shell section--tight">
        <hr className="rule" />
        <div className="pairs pairs--two" style={{ paddingTop: '2rem' }}>
          {project.frontend.length > 0 && (
            <div>
              <p className="eyebrow" style={{ marginBottom: '0.8rem' }}>
                Front end
              </p>
              <div className="tags">
                {project.frontend.map((t) => (
                  <span key={t} className="tag tag--accent">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}
          {project.backend.length > 0 && (
            <div>
              <p className="eyebrow" style={{ marginBottom: '0.8rem' }}>
                {builtBackend ? 'Back end and data' : 'Backend it runs on'}
              </p>
              <div className="tags">
                {project.backend.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
              {!builtBackend && (
                <p className="traversal__caption" style={{ marginTop: '0.9rem' }}>
                  Existing backend I built the front end against — not my own work.
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </article>
  )
}
