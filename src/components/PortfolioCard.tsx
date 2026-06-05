import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import PlaceholderImage from './PlaceholderImage'
import type { Project } from '../data/portfolio'

interface PortfolioCardProps {
  project: Project
}

export default function PortfolioCard({ project }: PortfolioCardProps) {
  return (
    <div className="group card card-glow-hover flex flex-col gap-0 overflow-hidden p-0 h-full">
      {/* Image area */}
      <div className="relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
        <PlaceholderImage
          src={project.imagePath}
          projectName={project.name}
          category={project.category}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          alt={project.name}
        />
        {/* Category badge */}
        <div className="absolute top-3 left-3">
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-[#050B18]/80 backdrop-blur-sm text-[#38BDF8] border border-[#38BDF8]/20">
            {project.tags[0]}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3 p-5 flex-1">
        {/* Gold accent */}
        <div className="w-6 h-0.5 bg-[#D4AF37] rounded-full" />

        <div>
          <h3 className="text-[#F8FAFC] font-semibold text-base">{project.name}</h3>
          <p className="text-[#94A3B8] text-xs mt-0.5">{project.category}</p>
        </div>

        <p className="text-[#CBD5E1] text-sm leading-relaxed line-clamp-2 flex-1">
          {project.solution}
        </p>

        {/* Role */}
        <div className="flex items-center gap-2">
          <span className="text-[#94A3B8] text-xs">Role:</span>
          <span className="text-[#CBD5E1] text-xs">{project.role}</span>
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded text-xs bg-[#0F172A] text-[#94A3B8] border border-[#1F2937]"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Link */}
        <Link
          to={`/portfolio`}
          className="inline-flex items-center gap-1 text-[#38BDF8] text-sm font-medium hover:gap-2 transition-all duration-200 mt-auto pt-1 border-t border-[#1F2937]"
        >
          View Details
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  )
}
