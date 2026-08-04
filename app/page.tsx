import Link from 'next/link'
import { TraversalInline } from '@/components/Traversal'
import { featuredProjects } from '@/data/projects'
import { site } from '@/data/site'

export default function Home() {
  return (
    <>
      {/* Hero — the thesis: one developer, the whole traversal. */}
      <section className="shell hero">
        <div className="hero__lines stack" style={{ ['--stack-gap' as string]: '1.5rem' }}>
          <p className="eyebrow">{site.location} — available for work</p>
          <h1 className="display measure--wide">
            I build the <em>whole</em> path, from the table to the screen.
          </h1>
          <p className="lede measure">
            {site.yearsExperience} years across Angular, React, and .NET. Currently building a
            multi-tenant CRM for Forex and CFD brokerages — writing the stored procedures and the
            components that consume them.
          </p>
          <div className="tags">
            <Link href="/work/" className="link">
              See the work
            </Link>
            <span style={{ color: 'var(--faint)' }}>·</span>
            <a href={site.resume} className="link link--quiet">
              Download résumé
            </a>
          </div>
        </div>
      </section>

      {/* Signature device */}
      <section className="shell section--tight">
        <hr className="rule" />
        <div style={{ paddingTop: '2rem' }}>
          <p className="eyebrow" style={{ marginBottom: '0.9rem' }}>
            One feature, six layers
          </p>
          <TraversalInline />
          <p className="traversal__caption" style={{ marginTop: '1rem' }}>
            Most job descriptions ask for one end of this. The work I care about runs the length of
            it — which is why the concurrency handling and the loading state end up being the same
            person&rsquo;s problem.
          </p>
        </div>
      </section>

      {/* Selected work */}
      <section className="shell section">
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'baseline',
            marginBottom: '1.75rem',
            gap: '1rem',
          }}
        >
          <h2 className="title">Selected work</h2>
          <Link href="/work/" className="back">
            All projects →
          </Link>
        </div>

        <div className="entries">
          {featuredProjects.map((project) => (
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

      {/* Now */}
      <section className="shell section--tight">
        <hr className="rule" />
        <div className="pairs pairs--two" style={{ paddingTop: '2.25rem' }}>
          <div>
            <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>
              Currently
            </p>
            <p className="body measure">
              Software Developer and third-line production support at Oron Limited in Dubai, working
              on a CRM platform for brokerages and a live trading system that cannot afford
              downtime.
            </p>
          </div>
          <div>
            <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>
              What I&rsquo;m good at
            </p>
            <p className="body measure">
              Data models that hold under concurrent writes, interfaces that tell the truth about
              loading and failure, and finding the ninety-three things wrong with a module before it
              reaches production.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
