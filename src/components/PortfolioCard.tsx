import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import PlaceholderImage from './PlaceholderImage'
import type { Project } from '../data/portfolio'

interface PortfolioCardProps {
  project: Project
}

export default function PortfolioCard({ project }: PortfolioCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-[#0D1625] border border-[#1A2535] flex flex-col h-full transition-all duration-300 hover:border-[#38BDF8]/25 hover:-translate-y-0.5 hover:shadow-[0_16px_48px_rgba(0,0,0,0.6)]">
      {/* Image area */}
      <div className="relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
        <PlaceholderImage
          src={project.imagePath}
          projectName={project.name}
          category={project.category}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          alt={project.name}
        />

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D1625]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Category pill */}
        <div className="absolute top-3 left-3 z-10">
          <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-[#050B18]/80 backdrop-blur-sm text-[#38BDF8] border border-[#38BDF8]/20">
            {project.tags[0]}
          </span>
        </div>

        {/* Arrow on hover */}
        <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
          <div className="w-7 h-7 rounded-lg bg-[#38BDF8]/15 backdrop-blur-sm border border-[#38BDF8]/25 flex items-center justify-center">
            <ArrowUpRight className="w-3.5 h-3.5 text-[#38BDF8]" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3 p-5 flex-1">
        {/* Gold accent */}
        <div className="w-6 h-px bg-gradient-to-r from-[#D4AF37]/60 to-transparent rounded-full" />

        <div>
          <h3 className="text-[#F8FAFC] font-semibold text-base leading-snug">{project.name}</h3>
          <p className="text-[#94A3B8] text-xs mt-0.5">{project.category}</p>
        </div>

        <p className="text-[#94A3B8] text-sm leading-relaxed line-clamp-2 flex-1">
          {project.solution}
        </p>

        {/* Role row */}
        <div className="flex items-center gap-1.5">
          <span className="text-[#94A3B8]/60 text-xs">Role:</span>
          <span className="text-[#94A3B8] text-xs">{project.role}</span>
        </div>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 3).map((tech) => (
            <span key={tech} className="tech-tag">{tech}</span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2 py-0.5 text-xs text-[#94A3B8]/50">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>

        {/* Footer link */}
        <Link
          to="/portfolio"
          className="inline-flex items-center gap-1.5 text-[#38BDF8] text-xs font-medium mt-auto pt-3 border-t border-[#1A2535] hover:gap-2 transition-all duration-200"
        >
          View Case Study
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  )
}
