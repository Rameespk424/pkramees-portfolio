import type { Metadata } from 'next'
import {
  roles,
  skillGroups,
  education,
  certifications,
  languages,
} from '@/data/experience'
import { site } from '@/data/site'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Seven years building for the web, from WordPress themes in Kerala to multi-tenant SaaS architecture in Dubai.',
  alternates: { canonical: '/about/' },
}

export default function About() {
  return (
    <>
      <section className="shell section">
        <p className="eyebrow" style={{ marginBottom: '0.9rem' }}>
          About
        </p>
        <h1 className="title measure">
          Seven years, and a route that went the long way round.
        </h1>

        <div
          className="stack measure body"
          style={{ ['--stack-gap' as string]: '1rem', marginTop: '1.75rem' }}
        >
          <p>
            I started building websites in Kerala in 2019 — HTML, PHP, whatever the client needed. I
            spent four years at Cybrosys leading front-end work, and got good at React and Next.js
            and at the unglamorous part, which is talking to clients.
          </p>
          <p>
            Then I moved to Dubai and went deliberately backwards into the parts I had been avoiding.
            Now I write stored procedures with transactional guards, design layered .NET services,
            and argue about concurrency. The front end did not go anywhere — I still own an Angular
            component library — but I stopped treating the database as somebody else&rsquo;s
            department.
          </p>
          <p>
            The work I am proudest of is not a feature. It is an audit methodology: a repeatable way
            of going through a module before release and finding what will break. The first pass
            surfaced ninety-three things. That is the job as I understand it.
          </p>
        </div>
      </section>

      {/* Experience */}
      <section className="shell section--tight">
        <p className="eyebrow" style={{ marginBottom: '1.25rem' }}>
          Experience
        </p>
        {roles.map((role) => (
          <div key={`${role.org}-${role.period}`} className="role">
            <p className="role__period" data-current={role.current ?? false}>
              {role.period}
            </p>
            <div>
              <h2 className="role__title">{role.title}</h2>
              <p className="role__org">
                {role.org} — {role.location}
              </p>
              <ul className="bullets" style={{ marginTop: '0.85rem' }}>
                {role.notes.map((note, i) => (
                  <li key={i}>{note}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>

      {/* Skills */}
      <section className="shell section--tight">
        <hr className="rule" />
        <p className="eyebrow" style={{ margin: '2rem 0 1.5rem' }}>
          Toolkit
        </p>
        <div className="pairs pairs--three">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <h3 className="heading" style={{ marginBottom: '0.85rem' }}>
                {group.label}
              </h3>
              <div className="tags">
                {group.items.map((item) => (
                  <span key={item} className="tag">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Credentials */}
      <section className="shell section">
        <hr className="rule" />
        <div className="pairs pairs--three" style={{ paddingTop: '2rem' }}>
          <div>
            <p className="eyebrow" style={{ marginBottom: '0.8rem' }}>
              Education
            </p>
            <p className="body">{education.degree}</p>
            <p className="meta" style={{ marginTop: '0.3rem' }}>
              {education.school}, {education.year}
            </p>
          </div>
          <div>
            <p className="eyebrow" style={{ marginBottom: '0.8rem' }}>
              Certifications
            </p>
            <ul>
              {certifications.map((cert) => (
                <li key={cert.name} style={{ marginBottom: '0.5rem' }}>
                  <span className="body" style={{ fontSize: '0.92rem' }}>
                    {cert.name}
                  </span>
                  <span className="meta" style={{ display: 'block' }}>
                    {cert.year}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow" style={{ marginBottom: '0.8rem' }}>
              Languages
            </p>
            <ul>
              {languages.map((lang) => (
                <li key={lang.name} style={{ marginBottom: '0.4rem' }}>
                  <span className="body" style={{ fontSize: '0.92rem' }}>
                    {lang.name}
                  </span>
                  <span className="meta"> — {lang.level}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p style={{ marginTop: '2.5rem' }}>
          <a href={site.resume} className="link">
            Download the full résumé
          </a>
        </p>
      </section>
    </>
  )
}
