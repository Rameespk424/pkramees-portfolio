'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { nav, site } from '@/data/site'

export default function Masthead() {
  const pathname = usePathname()

  return (
    <header className="masthead">
      <div className="shell masthead__inner">
        <Link href="/" className="masthead__mark">
          Ramees<span>.</span>
        </Link>
        <nav className="masthead__nav" aria-label="Primary">
          {nav.map((item) => {
            const active = pathname === item.href || pathname.startsWith(item.href)
            return (
              <Link key={item.href} href={item.href} data-active={active}>
                {item.label}
              </Link>
            )
          })}
        </nav>
      </div>
    </header>
  )
}
