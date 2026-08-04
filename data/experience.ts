export type Role = {
  title: string
  org: string
  location: string
  period: string
  current?: boolean
  notes: string[]
}

export const roles: Role[] = [
  {
    title: 'Software Developer / L3 Production Support',
    org: 'Oron Limited',
    location: 'Dubai, UAE',
    period: 'Dec 2025 — present',
    current: true,
    notes: [
      'Full-stack delivery on a multi-tenant SaaS CRM for the Forex and CFD brokerage domain, from SQL Server through to Angular.',
      'Third-line production support on a live trading platform running .NET Framework 4.8.',
      'Set the coding standards and architecture documentation a five-person team works to.',
    ],
  },
  {
    title: 'UI Developer / Software Developer',
    org: 'Gligx Technologies',
    location: 'Dubai, UAE',
    period: 'Aug — Nov 2025',
    notes: [
      'Client websites and UI development across events, real estate, healthcare, and retail.',
      'Figma to production, WordPress and WooCommerce customisation, direct client support.',
    ],
  },
  {
    title: 'Front End Developer (React)',
    org: 'ValueMagix',
    location: 'Thrissur, India',
    period: 'Dec 2024 — Jul 2025',
    notes: [
      'React interfaces for client web applications.',
      'Responsive implementation across breakpoints, working alongside backend developers and designers.',
    ],
  },
  {
    title: 'Sr. Web Developer / Lead Developer',
    org: 'Cybrosys Technologies',
    location: 'Calicut, India',
    period: 'Jul 2020 — Nov 2024',
    notes: [
      'Led front-end delivery across product and client projects in React, Next.js, and TypeScript.',
      'Built reusable component libraries on Atomic Design principles.',
      'Managed international clients online and in person, and ran internal training on front-end technologies.',
    ],
  },
  {
    title: 'Web Developer & PHP Developer',
    org: 'Milestone Innovative Technologies',
    location: 'Thrissur, India',
    period: 'Jan — Jul 2020',
    notes: ['Design and front-end for a banking token booking system.'],
  },
  {
    title: 'Web Developer, Internship',
    org: 'Signroots Technologies',
    location: 'Kunnamkulam, India',
    period: 'Aug 2019 — Jan 2020',
    notes: ['Responsive websites in HTML, CSS, JavaScript, and PHP.'],
  },
]

export const skillGroups: { label: string; items: string[] }[] = [
  {
    label: 'Front end',
    items: [
      'Angular 21',
      'React.js',
      'Next.js',
      'TypeScript',
      'RxJS',
      'SCSS',
      'Tailwind CSS',
      'Bootstrap',
    ],
  },
  {
    label: 'Back end',
    items: ['C#', '.NET 8', 'ASP.NET Core', '.NET Framework', 'Node.js', 'Express.js', 'PHP'],
  },
  {
    label: 'Data',
    items: ['SQL Server', 'T-SQL', 'Stored procedures', 'Dapper', 'MySQL', 'MongoDB'],
  },
  {
    label: 'Architecture',
    items: [
      'Clean Architecture',
      'Modular monolith',
      'Multi-tenant SaaS',
      'Repository pattern',
      'Atomic Design',
    ],
  },
  {
    label: 'Security',
    items: [
      'JWT and refresh rotation',
      'Role-based access',
      'Tenant isolation',
      'XSS remediation',
      'Injection hardening',
    ],
  },
  {
    label: 'Practice',
    items: [
      'Azure DevOps',
      'Git',
      'Code review',
      'Production audits',
      'Architecture decision records',
      'Agile',
    ],
  },
]

export const education = {
  degree: 'B.Sc. Computer Science',
  school: 'Madurai Kamaraj University',
  year: '2018',
}

export const certifications = [
  { name: 'Full Stack Development — React, Node.js', year: '2025' },
  { name: 'Certified Software Developer — NIIT', year: '2018' },
  { name: 'Diploma in Web Designing', year: '2015' },
]

export const languages = [
  { name: 'Malayalam', level: 'Native' },
  { name: 'English', level: 'Professional' },
  { name: 'Hindi', level: 'Conversational' },
  { name: 'Arabic', level: 'Elementary' },
]
