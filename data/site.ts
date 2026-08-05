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
  { id: 'schema', label: 'schema', detail: 'Tables, relationships, indexes, and constraints' },
  { id: 'procedure', label: 'stored procedure', detail: 'Transactional guards and concurrency control' },
  { id: 'repository', label: 'repository', detail: 'Data access and persistence boundary' },
  { id: 'service', label: 'service', detail: 'Business rules and application logic' },
  { id: 'controller', label: 'controller', detail: 'API endpoints, auth, and validation' },
  { id: 'interface', label: 'interface', detail: 'Components, state, and user interaction' },
] as const

export type LayerId = (typeof layers)[number]['id']

export const nav = [
  { href: '/work/', label: 'Work' },
  { href: '/about/', label: 'About' },
  { href: '/contact/', label: 'Contact' },
]
