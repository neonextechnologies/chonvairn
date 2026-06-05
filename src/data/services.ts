export interface Service {
  id: string
  icon: string
  title: string
  titleTh: string
  description: string
  descriptionTh: string
  bullets: string[]
}

export const services: Service[] = [
  {
    id: 'project-management',
    icon: 'ClipboardList',
    title: 'IT Project Management',
    titleTh: 'การจัดการโครงการ IT',
    description:
      'End-to-end IT project planning, coordination, delivery, UAT, deployment, issue tracking, change management, and post-implementation support.',
    descriptionTh:
      'วางแผน ประสานงาน ส่งมอบโครงการ IT ตั้งแต่ต้นจนจบ รวมถึง UAT, Deployment, Issue Tracking, Change Management และ Post-implementation Support',
    bullets: [
      'Project Planning & Scheduling',
      'Stakeholder Coordination',
      'Risk & Change Management',
      'UAT Support',
      'Deployment Oversight',
      'Post-implementation Review',
    ],
  },
  {
    id: 'digital-transformation',
    icon: 'TrendingUp',
    title: 'Digital Transformation Consulting',
    titleTh: 'ที่ปรึกษา Digital Transformation',
    description:
      'Analyze business operations, identify improvement opportunities, design digital workflows, and recommend practical technology solutions.',
    descriptionTh:
      'วิเคราะห์การดำเนินธุรกิจ ค้นหาโอกาสปรับปรุง ออกแบบ Digital Workflow และแนะนำแนวทางเทคโนโลยีที่เหมาะสมและใช้งานได้จริง',
    bullets: [
      'Business Process Analysis',
      'Digital Workflow Design',
      'Technology Roadmap Advisory',
      'System Integration Planning',
      'Change Enablement Support',
      'Digital Maturity Assessment',
    ],
  },
  {
    id: 'web-application',
    icon: 'Code2',
    title: 'Web Application & Custom Business System',
    titleTh: 'Web Application และระบบธุรกิจ Custom',
    description:
      'Design and develop business web applications, admin systems, CRM, CMS, internal tools, and API-connected platforms.',
    descriptionTh:
      'ออกแบบและพัฒนา Web Application สำหรับธุรกิจ, Admin System, CRM, CMS, เครื่องมือภายใน และแพลตฟอร์มที่เชื่อมต่อ API',
    bullets: [
      'Business Web Application',
      'Admin Panel & Dashboard',
      'CRM Systems',
      'CMS Development',
      'API Integration',
      'Internal Business Tools',
    ],
  },
  {
    id: 'workflow-automation',
    icon: 'Workflow',
    title: 'Workflow Automation',
    titleTh: 'Workflow Automation',
    description:
      'Improve repetitive business processes using workflow design, automation logic, system integration, and AI-assisted tools.',
    descriptionTh:
      'ปรับปรุงกระบวนการธุรกิจที่ซ้ำซากด้วยการออกแบบ Workflow, Automation Logic, System Integration และเครื่องมือที่สนับสนุนด้วย AI',
    bullets: [
      'Business Process Mapping',
      'Automation Logic Design',
      'System & API Integration',
      'Notification & Alert Workflows',
      'Approval Process Automation',
      'AI-assisted Task Automation',
    ],
  },
  {
    id: 'ai-solution',
    icon: 'Brain',
    title: 'AI-enabled Business Solution',
    titleTh: 'AI-enabled Business Solution',
    description:
      'Apply AI concepts to support business operations, software development, knowledge management, automation, and decision support.',
    descriptionTh:
      'ประยุกต์ใช้ AI เพื่อสนับสนุนการดำเนินธุรกิจ, Software Development, Knowledge Management, Automation และการสนับสนุนการตัดสินใจ',
    bullets: [
      'AI-assisted Development',
      'LLM Integration for Business',
      'Knowledge Base Systems',
      'Intelligent Process Automation',
      'AI Chatbot Integration',
      'Decision Support Systems',
    ],
  },
  {
    id: 'infrastructure',
    icon: 'Server',
    title: 'Infrastructure / Hosting / Deployment Advisory',
    titleTh: 'Infrastructure, Hosting และ Deployment',
    description:
      'Support Linux, Ubuntu, Proxmox, VPS, hosting environment, deployment, server planning, and production operation advisory.',
    descriptionTh:
      'สนับสนุน Linux, Ubuntu, Proxmox, VPS, Hosting Environment, Deployment, วางแผนเซิร์ฟเวอร์ และให้คำปรึกษาด้าน Production Operation',
    bullets: [
      'Linux / Ubuntu Server Administration',
      'Proxmox Virtualization',
      'VPS & Hosting Setup',
      'Deployment Pipeline Advisory',
      'Server Performance Planning',
      'Production Environment Support',
    ],
  },
  {
    id: 'team-coordination',
    icon: 'Users',
    title: 'Technical Team Coordination',
    titleTh: 'ประสานงานทีมเทคนิค',
    description:
      'Bridge the gap between business users, developers, vendors, and stakeholders through requirement clarification, task coordination, UAT support, and delivery control.',
    descriptionTh:
      'เชื่อมช่องว่างระหว่าง Business User, นักพัฒนา, Vendor และ Stakeholder ผ่านการชี้แจงความต้องการ ประสานงาน สนับสนุน UAT และควบคุมการส่งมอบ',
    bullets: [
      'Requirement Clarification',
      'Developer & Vendor Coordination',
      'Sprint & Task Management',
      'UAT Facilitation',
      'Delivery Tracking',
      'Stakeholder Reporting',
    ],
  },
]
