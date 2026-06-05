export interface ClientGroup {
  group: string
  clients: string[]
}

export const clientGroups: ClientGroup[] = [
  {
    group: 'Retail & Consumer Business',
    clients: ['Tesco Lotus', 'MegaHome', 'Index Living Mall', 'Top Charoen Optical'],
  },
  {
    group: 'Industrial & Manufacturing',
    clients: ['SCG', 'Thai Honda', 'Mitr Phol'],
  },
  {
    group: 'Financial Services & Insurance',
    clients: ['Thanachart Bank', 'Thanachart Insurance'],
  },
  {
    group: 'Real Estate & Property',
    clients: ['Pruksa', 'Araya Estate 88'],
  },
  {
    group: 'Business & Trade Organization',
    clients: ['Thai Chamber of Commerce'],
  },
  {
    group: 'Tourism & Hospitality',
    clients: ['Function Group', 'DKC Group'],
  },
  {
    group: 'Corporate Group',
    clients: ['NNK Group'],
  },
]

export const stats = [
  {
    value: '20+',
    label: 'Years IT Experience',
    labelTh: 'ปีประสบการณ์ด้าน IT',
    accent: 'cyan',
  },
  {
    value: '14+',
    label: 'Enterprise / Corporate Clients',
    labelTh: 'ลูกค้าองค์กรและเอกชน',
    accent: 'cyan',
  },
  {
    value: 'E2E',
    label: 'End-to-End Project Delivery',
    labelTh: 'ส่งมอบโครงการครบวงจร',
    accent: 'gold',
  },
  {
    value: 'AI',
    label: 'AI-enabled Workflow & Digital Transformation',
    labelTh: 'Workflow อัตโนมัติและ Digital Transformation',
    accent: 'cyan',
  },
  {
    value: '3+',
    label: 'Proprietary IT Solution Products',
    labelTh: 'ผลิตภัณฑ์ IT Solution ที่พัฒนาขึ้นเอง',
    accent: 'gold',
  },
]

export const processSteps = [
  {
    step: 1,
    en: 'Business Need',
    th: 'ความต้องการทางธุรกิจ',
  },
  {
    step: 2,
    en: 'Requirement Analysis',
    th: 'วิเคราะห์ความต้องการ',
  },
  {
    step: 3,
    en: 'Workflow Design',
    th: 'ออกแบบ Workflow',
  },
  {
    step: 4,
    en: 'Solution Architecture',
    th: 'ออกแบบ Solution',
  },
  {
    step: 5,
    en: 'Development Coordination',
    th: 'ประสานทีมพัฒนา',
  },
  {
    step: 6,
    en: 'UAT',
    th: 'ทดสอบระบบ',
    highlight: true,
  },
  {
    step: 7,
    en: 'Deployment',
    th: 'ส่งมอบระบบ',
    highlight: true,
  },
  {
    step: 8,
    en: 'Support & Improvement',
    th: 'สนับสนุนและพัฒนา',
  },
]
