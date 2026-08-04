import type { LayerId } from './site'

export type Project = {
  slug: string
  name: string
  tagline: string
  org: string
  period: string
  year: string
  url?: string
  urlLabel?: string
  /** Layers of the stack personally delivered on this project. */
  owned: LayerId[]
  summary: string[]
  contributions: { heading: string; points: string[] }[]
  frontend: string[]
  backend: string[]
  /** Shown on the work index. Keep to one line. */
  indexNote: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    slug: 'connectnext-crm',
    name: 'ConnectNext CRM Portal 2.0',
    tagline: 'Multi-tenant SaaS CRM for Forex and CFD brokerages',
    org: 'Oron Limited',
    period: 'Dec 2025 — present',
    year: '2026',
    owned: ['schema', 'procedure', 'repository', 'service', 'controller', 'interface'],
    featured: true,
    indexNote: 'Admin portal, shared component library, and the API underneath it.',
    summary: [
      'A CRM platform that brokerages run their operations on — onboarding, configuration, client records, and payments, isolated per tenant.',
      'I work the whole traversal on this one. A feature starts as a table and a stored procedure and ends as an Angular component, and I write both ends of it.',
    ],
    contributions: [
      {
        heading: 'Front end',
        points: [
          'Built the admin portal and the shared component library inside an Angular 21 monorepo.',
          'Standalone components throughout, with the Signals API for state and OnPush change detection.',
          'Ten reusable components consumed across portals: DataTable, FilterTabs, TableToolbar, FormSelect, CustomSelect, Skeleton, Loader, Badge, Toggle, ConfirmDialog.',
          'Five functional HTTP interceptors, order-dependent: authentication, refresh token rotation, error handling, loading state, and opt-in GET caching.',
          'Functional route guards and canDeactivate protection against losing unsaved work.',
          'Light and dark theming through CSS variables, with focus traps, ARIA roles, and keyboard handling on every dialog.',
        ],
      },
      {
        heading: 'Back end',
        points: [
          'Built OrgSAASAPI, a .NET 8 modular monolith on Clean Architecture.',
          'Dapper with stored-procedure-only data access — no inline SQL, no generated queries.',
          'A generic BaseRepository and a Result wrapper carrying success and failure through every layer.',
          'JWT authentication with refresh token rotation, tenant isolation derived from claims rather than request bodies, and role-based authorization.',
        ],
      },
      {
        heading: 'Database',
        points: [
          'Around thirty-one stored procedures, each with transactional guards and rollback handling.',
          'Optimistic concurrency control via RowVersion, so two editors cannot silently overwrite each other.',
          'Soft deletes with filtered unique indexes, UTC-only timestamps, and idempotent deployment scripts.',
          'A diff-merge algorithm for screen updates that preserves foreign-key-referenced identifiers instead of deleting and reinserting.',
        ],
      },
      {
        heading: 'Delivered',
        points: [
          'Organization onboarding — a nine-step gated wizard backed by thirteen stored procedures.',
          'Module catalogue — fourteen platform modules with hierarchical screens, a layout editor, and stats aggregation.',
          'Organization edit, with validator parity against onboarding and concurrency-safe writes.',
        ],
      },
      {
        heading: 'Production readiness',
        points: [
          'Established a repeatable audit methodology now applied across modules.',
          'One pass surfaced ninety-three severity-classified findings across back end and front end, each with file, line, production impact, and remediation.',
          'Sequenced them into a five-stage dependency-ordered plan with build verification between stages.',
          'Wrote a nine-document architecture knowledge base and thirteen architecture decision records alongside it.',
        ],
      },
    ],
    frontend: ['Angular 21', 'TypeScript', 'RxJS', 'SCSS', 'GrapesJS', 'ApexCharts'],
    backend: ['C#', '.NET 8', 'ASP.NET Core', 'Dapper', 'SQL Server', 'T-SQL'],
  },
  {
    slug: 'mt5-sync-service',
    name: 'MT5 Sync Service',
    tagline: 'Trading data synchronisation for a live Forex platform',
    org: 'Oron Limited',
    period: '2026',
    year: '2026',
    owned: ['schema', 'procedure', 'repository', 'service'],
    featured: true,
    indexNote: 'A .NET worker service that replaced a fragile Hangfire job.',
    summary: [
      'Balance and volume data from MetaTrader 5 needs to land in the platform reliably. It was running on Hangfire jobs that were hard to reason about when they failed.',
      'I replaced them with a self-contained worker service — smaller batches, tighter sync intervals, and a dual-table architecture that keeps trading accounts and platform users in step.',
    ],
    contributions: [
      {
        heading: 'Service',
        points: [
          'Built a standalone .NET Worker Service to take over from the Hangfire-based jobs.',
          'Tuned batch sizes down and sync frequency up, trading throughput per run for faster recovery when a run fails.',
          'Designed a dual-table sync across trading accounts and platform identity records.',
        ],
      },
      {
        heading: 'Data',
        points: [
          'Stored procedures for balance and volume synchronisation.',
          'A transaction mismatch procedure that validates data quality across databases and surfaces discrepancies before they reach reporting.',
        ],
      },
    ],
    frontend: [],
    backend: ['C#', '.NET', 'Worker Services', 'SQL Server', 'T-SQL'],
  },
  {
    slug: 'trading-platform-support',
    name: 'Trading Platform — L3 Support',
    tagline: 'Production support for a live Forex trading platform',
    org: 'Oron Limited',
    period: 'Dec 2025 — present',
    year: '2026',
    owned: ['schema', 'procedure', 'service', 'controller', 'interface'],
    indexNote: 'Incident triage and root-cause work on a platform that cannot go down.',
    summary: [
      'Third-line support on a .NET Framework 4.8 trading platform. When something breaks in production, it comes to me.',
      'The work is triage, reproduction, root cause, and a fix that does not introduce a second problem — under the constraint that the platform stays up.',
    ],
    contributions: [
      {
        heading: 'Support',
        points: [
          'Incident triage and root-cause analysis on live production issues.',
          'Manual testing and defect resolution across a legacy .NET Framework codebase.',
          'Resolved multi-tab session desynchronisation using storage event listeners, so a user signing out in one tab is signed out everywhere.',
        ],
      },
      {
        heading: 'Infrastructure',
        points: [
          'Configured staging environments on IIS with HTTP and HTTPS, SSL certificates, and network security group rules.',
        ],
      },
    ],
    frontend: ['JavaScript', 'jQuery'],
    backend: ['C#', '.NET Framework 4.8', 'SQL Server', 'IIS'],
  },
  {
    slug: 'labelo',
    name: 'Labelo.ai',
    tagline: 'Open-source data annotation platform for machine learning teams',
    org: 'Cybrosys Technologies',
    period: '2024',
    year: '2024',
    url: 'https://www.labelo.ai/',
    urlLabel: 'labelo.ai',
    owned: ['interface'],
    featured: true,
    indexNote: 'Next.js front end for a labeling platform covering text, image, audio and video.',
    summary: [
      'Labelo is an annotation platform for machine learning teams — text, image, audio, video, and time-series data, labelled collaboratively.',
      'I built the front end: the marketing surface and a component architecture the product pages could be assembled from.',
    ],
    contributions: [
      {
        heading: 'Front end',
        points: [
          'Built the Next.js front end with TypeScript and Tailwind CSS.',
          'Motion design with Framer Motion — scroll-triggered reveals and hover states, kept restrained enough not to fight the content.',
          'A reusable component architecture so new product pages could be composed rather than rebuilt.',
          'Responsive across breakpoints, with attention to how dense feature tables collapse on mobile.',
        ],
      },
    ],
    frontend: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    backend: ['Odoo', 'Python'],
  },
  {
    slug: 'cyllo',
    name: 'Cyllo.com',
    tagline: 'Business software product platform',
    org: 'Cybrosys Technologies',
    period: '2023 — 2024',
    year: '2024',
    url: 'https://www.cyllo.com/',
    urlLabel: 'cyllo.com',
    owned: ['interface'],
    indexNote: 'Next.js front end and a component system on an Odoo backend.',
    summary: [
      'A product platform for business software, sitting on an Odoo and Python backend.',
      'I built the Next.js front end and the component system underneath it, working against the backend team\u2019s data contracts.',
    ],
    contributions: [
      {
        heading: 'Front end',
        points: [
          'Next.js front end in TypeScript with a reusable component architecture.',
          'Responsive layouts across breakpoints.',
          'Worked against Odoo and Python backend contracts, resolving integration mismatches with the backend team.',
        ],
      },
    ],
    frontend: ['Next.js', 'TypeScript', 'SASS'],
    backend: ['Odoo', 'Python'],
  },
  {
    slug: 'plectar',
    name: 'Plectar',
    tagline: 'B2B procurement platform for European public-sector buyers',
    org: 'Cybrosys Technologies',
    period: '2023 — 2024',
    year: '2024',
    owned: ['interface'],
    featured: true,
    indexNote: 'E-commerce procurement serving public sector, education and enterprise across Europe.',
    summary: [
      'Plectar is a B2B e-commerce procurement platform serving public-sector, education, and enterprise buyers across Europe.',
      'Procurement is not ordinary retail — buyers arrive with approval chains, framework agreements, and catalogue constraints. The front end has to make that legible.',
    ],
    contributions: [
      {
        heading: 'Front end',
        points: [
          'Delivered front-end development against a Python and Odoo backend.',
          'Worked closely with the backend team on integration, resolving contract mismatches across the stack.',
          'Catalogue and product surfaces built for a buying process with more steps than consumer e-commerce.',
        ],
      },
    ],
    frontend: ['JavaScript', 'Bootstrap', 'SASS'],
    backend: ['Odoo', 'Python'],
  },
  {
    slug: 'tmx-intermodal',
    name: 'TMX Intermodal',
    tagline: 'Logistics website redesign',
    org: 'Cybrosys Technologies',
    period: '2023',
    year: '2023',
    url: 'https://www.tmxintermodal.com/',
    urlLabel: 'tmxintermodal.com',
    owned: ['interface'],
    indexNote: 'Led the redesign end to end, from design translation to backend integration.',
    summary: [
      'A redesign for an intermodal logistics operator, which I led end to end.',
      'Leading it meant owning the translation from design through to integration, and being the person the backend team came to when the contract needed to change.',
    ],
    contributions: [
      {
        heading: 'Front end',
        points: [
          'Led the redesign from design translation through to launch.',
          'Built responsive React interfaces from design files.',
          'Partnered with the backend team on integration and data contracts.',
        ],
      },
    ],
    frontend: ['React.js', 'JavaScript', 'SASS'],
    backend: [],
  },
  {
    slug: 'odoo-themes',
    name: 'Odoo App Store Themes',
    tagline: 'Twenty-plus commercial themes published to a public marketplace',
    org: 'Cybrosys Technologies',
    period: '2020 — 2024',
    year: '2024',
    url: 'https://apps.odoo.com/apps/themes/browse?author=Cybrosys%20Techno%20Solutions',
    urlLabel: 'apps.odoo.com',
    owned: ['interface'],
    indexNote: 'Commercial themes across e-commerce, lifestyle and professional services.',
    summary: [
      'Over twenty Bootstrap themes published to the Odoo App Store, spanning e-commerce, lifestyle, and professional service industries.',
      'Marketplace work has a particular discipline: the theme has to hold up under content the author never sees, on a version of the platform that keeps moving.',
    ],
    contributions: [
      {
        heading: 'Themes',
        points: [
          'Twenty-plus themes built on Bootstrap and published commercially.',
          'Responsive layouts and cross-browser compatibility as a baseline requirement, not a final pass.',
          'Built to Odoo theming conventions so themes survive platform upgrades.',
        ],
      },
    ],
    frontend: ['Bootstrap', 'SASS', 'JavaScript'],
    backend: ['Odoo'],
  },
  {
    slug: 'uae-client-sites',
    name: 'UAE Client Sites',
    tagline: 'Websites and UI development for Dubai clients',
    org: 'Gligx Technologies',
    period: 'Aug — Nov 2025',
    year: '2025',
    url: 'https://www.emso.ae/',
    urlLabel: 'emso.ae',
    owned: ['interface'],
    indexNote: 'EMSO Events, CLA Emirates, IMH, Bismi and iBathWorld.',
    summary: [
      'A run of client work in Dubai — events, real estate, healthcare, retail, and a bathroom fittings store.',
      'Short cycles, direct client contact, and the practical constraint that most of it had to stay editable by people who are not developers.',
    ],
    contributions: [
      {
        heading: 'Delivered',
        points: [
          'EMSO Events — responsive site build on WordPress and Webflow.',
          'CLA Emirates — Figma to a pixel-accurate responsive landing page.',
          'IMH — ongoing maintenance, bug fixes, client support, and design improvements.',
          'Bismi — new pages, Divi Builder customisation, plugin integration, mailer fixes.',
          'iBathWorld — UI and UX design in Figma, then a custom WooCommerce product page with category filtering built in a child theme.',
        ],
      },
    ],
    frontend: ['React.js', 'JavaScript', 'SASS', 'Bootstrap'],
    backend: ['WordPress', 'WooCommerce', 'PHP'],
  },
]

export const featuredProjects = projects.filter((p) => p.featured)

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug)
}
