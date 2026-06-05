import { useState } from 'react'
import { Link } from 'react-router-dom'
import { MessageSquare, X, ArrowUpRight, Briefcase } from 'lucide-react'
import PlaceholderImage from '../components/PlaceholderImage'
import { projects } from '../data/portfolio'

type Project = typeof projects[0]

const filterCategories = [
  { key: 'All', label: 'All Projects' },
  { key: 'CRM', label: 'CRM / Workflow' },
  { key: 'CMS', label: 'CMS' },
  { key: 'Admin', label: 'Admin System' },
  { key: 'Real Estate', label: 'Real Estate' },
  { key: 'Digital', label: 'Digital / AI' },
]

function matchesFilter(project: Project, key: string) {
  if (key === 'All') return true
  if (key === 'CRM') return project.category.toLowerCase().includes('crm')
  if (key === 'CMS') return project.category.toLowerCase().includes('cms')
  if (key === 'Admin') return project.category.toLowerCase().includes('admin')
  if (key === 'Real Estate') return project.category.toLowerCase().includes('real estate')
  if (key === 'Digital') return project.category.toLowerCase().includes('digital')
  return true
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(3,9,18,0.94)', backdropFilter: 'blur(16px)' }}
      onClick={onClose}
    >
      <div
        className="w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl flex flex-col"
        style={{ background: '#0A1020', border: '1px solid rgba(56,189,248,0.1)' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image */}
        <div className="relative flex-shrink-0" style={{ aspectRatio: '16/9' }}>
          <PlaceholderImage
            src={project.imagePath}
            projectName={project.name}
            category={project.category}
            className="w-full h-full object-cover rounded-t-2xl"
          />
          <button
            onClick={onClose}
            className="absolute top-3 right-3 w-9 h-9 rounded-xl flex items-center justify-center text-[#CBD5E1] hover:text-[#F8FAFC] transition-colors"
            style={{ background: 'rgba(5,11,24,0.88)', border: '1px solid rgba(56,189,248,0.12)' }}
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
          <div className="absolute bottom-3 left-3">
            <span className="badge-cyan">{project.tags[0]}</span>
          </div>
        </div>

        <div className="p-6 md:p-8 flex flex-col gap-6">
          {/* Header */}
          <div>
            <h2 className="text-[#F8FAFC] font-bold text-2xl tracking-tight">{project.name}</h2>
            <p className="text-[#475569] text-sm mt-1">{project.category}</p>
          </div>

          {/* Role */}
          <div
            className="rounded-xl px-4 py-3"
            style={{ background: 'rgba(56,189,248,0.04)', border: '1px solid rgba(56,189,248,0.08)' }}
          >
            <p className="text-[#38BDF8] text-[10px] font-semibold tracking-[0.12em] uppercase mb-1">
              Role in this Project
            </p>
            <p className="text-[#CBD5E1] text-sm">{project.role}</p>
          </div>

          {/* Problem / Solution / Value */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {[
              {
                label: 'Business Problem',
                content: project.problem,
                border: 'rgba(148,163,184,0.1)',
                labelColor: '#94A3B8',
              },
              {
                label: 'Solution Delivered',
                content: project.solution,
                border: 'rgba(56,189,248,0.12)',
                labelColor: '#38BDF8',
              },
              {
                label: 'Business Value',
                content: project.businessValue,
                border: 'rgba(52,211,153,0.12)',
                labelColor: 'rgba(52,211,153,0.85)',
              },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-xl p-4 flex flex-col gap-2"
                style={{ background: '#0D1625', border: `1px solid ${item.border}` }}
              >
                <p
                  className="text-[10px] font-semibold uppercase tracking-wider"
                  style={{ color: item.labelColor }}
                >
                  {item.label}
                </p>
                <p className="text-[#CBD5E1] text-xs leading-relaxed">{item.content}</p>
              </div>
            ))}
          </div>

          {/* Technologies */}
          <div>
            <p className="text-[#475569] text-[10px] font-semibold tracking-[0.12em] uppercase mb-2.5">
              Technologies &amp; Workflow
            </p>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <span key={tech} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>

          <div className="border-t border-[#1A2535] pt-4">
            <Link to="/contact" className="btn-primary text-sm w-full justify-center">
              <MessageSquare className="w-4 h-4" />
              Discuss a Similar Project
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [selected, setSelected] = useState<Project | null>(null)

  const filtered = projects.filter((p) => matchesFilter(p, activeFilter))

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-[#050B18] overflow-hidden">
        <div className="absolute inset-0 bg-grid-fine opacity-50" />
        <div className="absolute inset-0 hero-radial" />
        <div className="relative max-w-5xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <span className="eyebrow">Portfolio</span>
            <h1 className="text-4xl md:text-5xl font-bold text-[#F8FAFC] mt-4 leading-tight tracking-tight">
              IT Solutions &amp;
              <br />
              <span className="text-gradient-cyan">Case Studies</span>
            </h1>
            <div className="flex items-center gap-2 mt-6">
              <div className="w-10 h-px bg-[#38BDF8]/60 rounded-full" />
              <div className="w-4 h-px bg-[#D4AF37]/50 rounded-full" />
            </div>
            <p className="text-[#94A3B8] text-base leading-[1.85] mt-6 max-w-2xl">
              Selected projects across CRM, CMS, admin system generation, web application
              development, workflow automation, infrastructure, and digital transformation.
              Each entry documents the business problem, solution approach, and outcome.
            </p>
          </div>
        </div>
      </section>

      {/* Filter bar */}
      <div
        className="sticky top-[68px] z-30 border-b py-4"
        style={{
          background: 'rgba(5,11,24,0.97)',
          backdropFilter: 'blur(16px)',
          borderColor: '#0F1C2E',
        }}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="flex flex-wrap gap-2">
            {filterCategories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveFilter(cat.key)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeFilter === cat.key
                    ? 'bg-[#38BDF8] text-[#030912]'
                    : 'text-[#64748B] hover:text-[#CBD5E1]'
                }`}
                style={activeFilter !== cat.key ? { border: '1px solid #1A2535' } : {}}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <section className="py-20 bg-[#050B18]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((project) => (
              <div
                key={project.id}
                className="group relative overflow-hidden rounded-2xl flex flex-col cursor-pointer transition-all duration-300 hover:-translate-y-1"
                style={{ background: '#0D1625', border: '1px solid #1A2535' }}
                onClick={() => setSelected(project)}
              >
                {/* Image */}
                <div className="relative overflow-hidden flex-shrink-0" style={{ aspectRatio: '16/9' }}>
                  <PlaceholderImage
                    src={project.imagePath}
                    projectName={project.name}
                    category={project.category}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <div
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                    style={{ background: 'rgba(5,11,24,0.5)' }}
                  >
                    <div className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium text-[#F8FAFC]"
                      style={{ background: 'rgba(56,189,248,0.12)', border: '1px solid rgba(56,189,248,0.25)' }}>
                      <ArrowUpRight className="w-4 h-4 text-[#38BDF8]" />
                      View Case Study
                    </div>
                  </div>
                  <div className="absolute top-3 left-3">
                    <span className="badge-cyan">{project.tags[0]}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-3 p-5 flex-1">
                  <div className="w-6 h-px bg-gradient-to-r from-[#D4AF37]/50 to-transparent" />
                  <div>
                    <h3 className="text-[#F8FAFC] font-semibold text-base">{project.name}</h3>
                    <p className="text-[#475569] text-xs mt-0.5">{project.category}</p>
                  </div>
                  <p className="text-[#94A3B8] text-sm leading-relaxed line-clamp-2 flex-1">
                    {project.solution}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-0.5 text-xs text-[#334155]">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Hover bottom accent */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: 'linear-gradient(90deg, transparent, rgba(56,189,248,0.3), transparent)' }}
                />
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-[#475569] text-base">No projects match this filter.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16 border-t border-[#0F1C2E]"
        style={{ background: 'linear-gradient(180deg, #0A1525 0%, #050B18 100%)' }}
      >
        <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">
          <Briefcase className="w-6 h-6 text-[#38BDF8]/40 mx-auto mb-4" />
          <h2 className="text-xl md:text-2xl font-bold text-[#F8FAFC] mb-2 tracking-tight">
            Looking for a specific type of IT solution?
          </h2>
          <p className="text-[#475569] text-sm mb-8">
            ต้องการระบบหรือ IT Solution ในรูปแบบที่เฉพาะเจาะจง?
          </p>
          <Link to="/contact" className="btn-primary">
            <MessageSquare className="w-4 h-4" />
            Discuss Your Requirements
          </Link>
        </div>
      </section>

      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </>
  )
}
