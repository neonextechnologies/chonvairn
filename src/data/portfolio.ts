export interface Project {
  id: string
  name: string
  category: string
  tags: string[]
  role: string
  problem: string
  solution: string
  businessValue: string
  technologies: string[]
  imagePath: string
  featured: boolean
}

export const projects: Project[] = [
  {
    id: 'linecrm',
    name: 'LineCRM',
    category: 'CRM / LINE Integration / Workflow',
    tags: ['CRM', 'LINE Integration', 'Workflow'],
    role: 'Solution Designer, Developer, Project Coordinator',
    problem:
      'Businesses need a better way to manage customer communication, sales follow-up, and customer data through LINE-based workflows.',
    solution:
      'Developed a CRM solution integrated with LINE to organize customer data, communication, sales follow-up, marketing workflows, and customer support operations.',
    businessValue:
      'Improved customer communication, follow-up workflow, and customer data management for LINE-centric business operations.',
    technologies: ['Laravel', 'LINE API', 'MySQL', 'JavaScript', 'Workflow Automation'],
    imagePath: '/images/projects/linecrm.jpg',
    featured: true,
  },
  {
    id: 'mayacms',
    name: 'MayaCMS',
    category: 'CMS / Web Content Management',
    tags: ['CMS', 'Web Content', 'Management System'],
    role: 'System Designer, Developer, Project Delivery',
    problem:
      'Organizations need a practical way to manage content, news, articles, pages, images, and organizational information without technical dependency.',
    solution:
      'Developed a content management system that allows clients to manage web content, news, articles, and pages more systematically.',
    businessValue:
      'Reduced dependency on developers for routine content updates, empowering non-technical staff to manage content independently.',
    technologies: ['PHP', 'Laravel', 'MySQL', 'JavaScript', 'Bootstrap'],
    imagePath: '/images/projects/mayacms.jpg',
    featured: true,
  },
  {
    id: 'mayapanelgenerator',
    name: 'MayaPanelGenerator',
    category: 'Admin Panel Generator / Backend Workflow',
    tags: ['Admin Panel', 'Code Generator', 'Backend'],
    role: 'System Architect, Developer',
    problem:
      'Backend CRUD and admin panel development can become repetitive and inconsistent across projects, consuming significant development time.',
    solution:
      'Developed an admin panel generation system to standardize CRUD and backend management workflows, reducing repetitive coding tasks.',
    businessValue:
      'Reduced repetitive backend development work and improved delivery consistency across multiple client projects.',
    technologies: ['PHP', 'CodeIgniter', 'MySQL', 'JavaScript', 'Bootstrap'],
    imagePath: '/images/projects/mayapanelgenerator.jpg',
    featured: true,
  },
  {
    id: 'arayaestate',
    name: 'Araya Estate 88',
    category: 'Real Estate Web Platform',
    tags: ['Real Estate', 'Web Platform', 'Bilingual'],
    role: 'Project Manager, Web Solution Advisor, Developer Coordination',
    problem:
      'Real estate businesses need a professional online presence for property presentation, bilingual communication, and customer inquiry support.',
    solution:
      'Created a property presentation and digital communication platform for real estate business, supporting both Thai and English audiences.',
    businessValue:
      'Improved online property presentation, customer inquiry flow, and bilingual business communication for the real estate project.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'CMS Integration'],
    imagePath: '/images/projects/arayaestate.jpg',
    featured: true,
  },
  {
    id: 'it-infrastructure-platform',
    name: 'IT Infrastructure & Hosting Platform',
    category: 'Digital Solution / Hosting / AI-enabled Workflow',
    tags: ['Digital Transformation', 'Hosting', 'AI-enabled', 'Workflow'],
    role: 'IT Manager, Solution Architect, Infrastructure Lead',
    problem:
      'SMEs and organizations need reliable technology platforms for websites, hosting, workflow automation, and digital transformation that are business-oriented and scalable.',
    solution:
      'Designed and managed an IT infrastructure platform covering Linux server environments, Proxmox virtualization, hosting setup, deployment pipelines, and AI-enabled workflow automation.',
    businessValue:
      'Provides a scalable foundation for client solution delivery and professional IT services to businesses across multiple industries.',
    technologies: ['Linux', 'Proxmox', 'Laravel', 'Golang', 'Next.js', 'AI Integration'],
    imagePath: '/images/projects/neonex-technologies.jpg',
    featured: true,
  },
  {
    id: 'workflow-automation',
    name: 'Workflow Automation Solutions',
    category: 'Business Process / Workflow Automation',
    tags: ['Workflow', 'Automation', 'Business Process'],
    role: 'Solution Designer, Automation Consultant',
    problem:
      'Repetitive business processes consume staff time and introduce human error, requiring systematic workflow improvement.',
    solution:
      'Designed and implemented workflow automation systems that streamline repetitive business processes using systematic logic and AI-assisted tools.',
    businessValue:
      'Reduced manual workload, improved process consistency, and freed staff time for higher-value business activities.',
    technologies: ['Workflow Design', 'API Integration', 'AI Tools', 'Process Automation'],
    imagePath: '/images/projects/workflow-automation.jpg',
    featured: false,
  },
]

export const categories = [
  'All',
  'CRM / LINE Integration / Workflow',
  'CMS / Web Content Management',
  'Admin Panel Generator / Backend Workflow',
  'Real Estate Web Platform',
  'Digital Solution / Hosting / AI-enabled Workflow',
  'Business Process / Workflow Automation',
]
