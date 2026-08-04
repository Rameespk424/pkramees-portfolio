export const site = {
  name: 'Ramees P.K.',
  shortName: 'Ramees',
  role: 'Full-Stack Developer',
  stackLine: 'Angular, React & .NET',
  location: 'Dubai, UAE',
  email: 'pkramees5@gmail.com',
  phone: '+971 56 336 4437',
  phoneRaw: '+971563364437',
  url: 'https://pkramees.in',
  linkedin: 'https://www.linkedin.com/in/ramees-pk-28303b1b0/',
  linkedinLabel: 'linkedin.com/in/ramees-pk',
  resume: '/Ramees_PK_Resume.pdf',
  yearsExperience: 7,
  description:
    'Full-stack developer in Dubai building multi-tenant SaaS for the Forex/CFD brokerage domain. Angular 21 and .NET 8, from SQL Server stored procedures to the interface.',
}

/**
 * The stack traversal — the signature device of this site.
 * Every layer Ramees actually delivers on, in the order a feature moves through them.
 */
export const layers = [
  { id: 'schema', label: 'schema', detail: 'SQL Server tables, indexes, constraints' },
  { id: 'procedure', label: 'stored procedure', detail: 'Transactional guards, concurrency control' },
  { id: 'repository', label: 'repository', detail: 'Dapper, generic base repository' },
  { id: 'service', label: 'service', detail: 'Domain and application layers' },
  { id: 'controller', label: 'controller', detail: 'REST endpoints, auth, validation' },
  { id: 'interface', label: 'interface', detail: 'Angular components and state' },
] as const

export type LayerId = (typeof layers)[number]['id']

export const nav = [
  { href: '/work/', label: 'Work' },
  { href: '/about/', label: 'About' },
  { href: '/contact/', label: 'Contact' },
]
