import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="shell section">
      <p className="eyebrow" style={{ marginBottom: '0.9rem' }}>
        404
      </p>
      <h1 className="title measure">That page is not here.</h1>
      <p className="lede measure" style={{ marginTop: '1rem' }}>
        The link may be out of date, or the page may have moved.
      </p>
      <p style={{ marginTop: '1.75rem' }}>
        <Link href="/" className="link">
          Back to the start
        </Link>
      </p>
    </section>
  )
}
