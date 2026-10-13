import type { Specialty } from './projects'

export type Organization = {
  id: string
  login?: string
  name: string
  description: string
  roles: Specialty[]
  projectIds: string[]
}

export const organizations: Organization[] = [
  {
    id: 'naf',
    login: 'National-AG',
    name: 'NAF',
    description: 'Part of the NAF organization.',
    roles: [],
    projectIds: [],
  },
  {
    id: 'supreme-services',
    login: 'Supreme-Services-LPG',
    name: 'Supreme Services',
    description: 'Business software for LPG operations, including a React portal and an Express API.',
    roles: ['web'],
    projectIds: ['supreme-app', 'supreme-api'],
  },
  {
    id: 'zanderio',
    login: 'Zanderio-ai',
    name: 'Zanderio AI',
    description: 'AI chat experiences, including a React widget for WordPress.',
    roles: ['web'],
    projectIds: ['zanderio-wp-widget'],
  },
  {
    id: 'lab23-sites',
    login: 'lab23-sites',
    name: 'Lab23 Sites',
    description: 'Part of the Lab23 Sites organization.',
    roles: [],
    projectIds: [],
  },
]
