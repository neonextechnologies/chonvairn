import { useState } from 'react'
import { Link } from 'react-router-dom'
import { MessageSquare, ExternalLink } from 'lucide-react'
import PlaceholderImage from '../components/PlaceholderImage'
import { projects } from '../data/portfolio'

function ProjectModal({ project, onClose }: { project: typeof projects[0]; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#050B18]/90 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-[#0F172A] border border-[#1F2937] rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image */}
        <div className="relative" style={{ aspectRatio: '16/9' }}>
          <PlaceholderImage
            src={project.imagePath}
            projectName={project.name}
            category={project.category}
            className="w-full h-full object-cover rounded-t-2xl"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#050B18]/80 backdrop-blur-sm border border-[#1F2937] text-[#CBD5E1] hover:text-[#F8FAFC] flex items-center justify-center text-lg"
          >
            ×
          </button>
        </div>

        <div className="p-6 md:p-8 flex flex-col gap-5">
          {/* Header */}
          <div>
            <div className="flex items-center gap-2 flex-wrap mb-2">
              <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-[#38BDF8]/10 text-[#38BDF8] border border-[#38BDF8]/20">
                {project.tags[0]}
              </span>
            </div>
            <h2 className="text-[#F8FAFC] font-bold text-2xl">{project.name}</h2>
            <p className="text-[#94A3B8] text-sm mt-1">{project.category}</p>
          </div>

          <div className="w-6 h-0.5 bg-[#D4AF37] rounded-full" />

          {/* Role */}
          <div>
            <p className="text-[#94A3B8] text-xs font-semibold uppercase tracking-wider mb-1">Role</p>
            <p className="text-[#CBD5E1] text-sm">{project.role}</p>
          </div>

          {/* Problem → Solution → Value */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { label: 'Problem', content: project.problem, color: 'text-red-400' },
              { label: 'Solution', content: project.solution, color: 'text-[#38BDF8]' },
              { label: 'Business Value', content: project.businessValue, color: 'text-emerald-400' },
            ].map((item) => (
              <div key={item.label} className="bg-[#111827] border border-[#1F2937] rounded-xl p-4">
                <p className={`text-xs font-semibold uppercase tracking-wider mb-2 ${item.color}`}>
                  {item.label}
                </p>
                <p className="text-[#CBD5E1] text-xs leading-relaxed">{item.content}</p>
              </div>
            ))}
          </div>

          {/* Technologies */}
          <div>
            <p className="text-[#94A3B8] text-xs font-semibold uppercase tracking-wider mb-2">Technologies / Workflow</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="px-2.5 py-1 rounded-lg text-xs bg-[#111827] text-[#94A3B8] border border-[#1F2937]">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Screenshot placeholder area */}
          <div className="bg-[#111827] border border-[#1F2937] rounded-xl p-4 text-center">
            <p className="text-[#94A3B8]/60 text-xs">
              Screenshot area · Real project images can be added to /images/projects/{project.id}.jpg
            </p>
          </div>

          <div className="flex gap-3 pt-2 border-t border-[#1F2937]">
            <Link to="/contact" className="btn-primary text-sm flex-1 justify-center">
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
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory)

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-[#050B18] overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-50" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-[#38BDF8]/5 blur-3xl pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-[#38BDF8] text-sm font-semibold tracking-widest uppercase">Portfolio</span>
            <h1 className="text-4xl md:text-5xl font-bold text-[#F8FAFC] mt-3 leading-tight">
              Selected Projects &
              <br />
              <span className="text-gradient-cyan">Solution Experience</span>
            </h1>
            <div className="flex gap-2 mt-4">
              <div className="w-8 h-0.5 bg-[#38BDF8] rounded-full" />
              <div className="w-3 h-0.5 bg-[#D4AF37] rounded-full" />
            </div>
            <p className="text-[#CBD5E1] text-base leading-relaxed mt-6">
              Practical IT solutions across CRM, CMS, admin panel generation, web application development,
              workflow automation, infrastructure, and digital transformation.
            </p>
            <p className="text-[#94A3B8] text-sm mt-2">
              ผลงานและประสบการณ์ด้าน IT Solution, CRM, CMS, Admin Panel, Web Application, Workflow Automation,
              Infrastructure และ Digital Transformation ที่เน้นการใช้งานจริงในธุรกิจ
            </p>
            <p className="text-[#94A3B8]/60 text-xs mt-4 border border-[#1F2937] rounded-lg px-3 py-2 inline-block">
              This portfolio section is prepared for future expansion as portfolio.chonvarin.com
              <br />
              ส่วน Portfolio นี้เตรียมไว้สำหรับขยายเป็น portfolio.chonvarin.com ในอนาคต
            </p>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 bg-[#0B1220] border-b border-[#1F2937]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {['All', 'CRM / LINE Integration / Workflow', 'CMS / Web Content Management', 'Admin Panel Generator / Backend Workflow', 'Real Estate Web Platform', 'Digital Solution / Hosting / AI-enabled Workflow'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-[#38BDF8] text-[#050B18]'
                    : 'bg-[#111827] text-[#94A3B8] border border-[#1F2937] hover:border-[#38BDF8]/40 hover:text-[#CBD5E1]'
                }`}
              >
                {cat === 'All' ? 'All Projects' : cat.split(' / ')[0]}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-[#050B18]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project) => (
              <div
                key={project.id}
                className="group card card-glow-hover flex flex-col gap-0 overflow-hidden p-0 cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                {/* Image */}
                <div className="relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
                  <PlaceholderImage
                    src={project.imagePath}
                    projectName={project.name}
                    category={project.category}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-[#050B18]/80 backdrop-blur-sm text-[#38BDF8] border border-[#38BDF8]/20">
                      {project.tags[0]}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                    <span className="text-[#F8FAFC] text-sm font-medium flex items-center gap-1">
                      View Case Study <ExternalLink className="w-3 h-3" />
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-3 p-5">
                  <div className="w-6 h-0.5 bg-[#D4AF37] rounded-full" />
                  <div>
                    <h3 className="text-[#F8FAFC] font-semibold text-base">{project.name}</h3>
                    <p className="text-[#94A3B8] text-xs mt-0.5">{project.category}</p>
                  </div>
                  <p className="text-[#CBD5E1] text-sm leading-relaxed line-clamp-2">{project.solution}</p>
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span key={tech} className="px-2 py-0.5 rounded text-xs bg-[#0F172A] text-[#94A3B8] border border-[#1F2937]">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-0.5 rounded text-xs text-[#94A3B8]/60">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p className="text-[#94A3B8] text-base">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0B1220] border-t border-[#1F2937]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-[#F8FAFC] mb-3">Looking for a specific type of IT solution?</h2>
          <p className="text-[#94A3B8] text-sm mb-6">ต้องการระบบหรือ IT Solution ในรูปแบบที่เฉพาะเจาะจง?</p>
          <Link to="/contact" className="btn-primary">
            <MessageSquare className="w-4 h-4" />
            Discuss Your Requirements
          </Link>
        </div>
      </section>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </>
  )
}
