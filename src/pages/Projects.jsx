import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, ArrowRight, Github } from 'lucide-react'
import { Link } from 'react-router-dom'
import { projects } from '../data/projects'

const filters = ['All', 'React', 'Laravel', 'PHP', 'Java', 'Spring Boot', 'Full Stack', 'Frontend']

export default function Projects() {
  const [active, setActive] = useState('All')

  const filtered =
    active === 'All'
      ? projects
      : projects.filter((p) =>
          p.category.some((c) => c.toLowerCase().includes(active.toLowerCase())) ||
          p.technologies.some((t) => t.toLowerCase().includes(active.toLowerCase()))
        )

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-28 pb-20 min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            All <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-slate-400 max-w-xl mx-auto">
            Explore my complete portfolio of web applications and projects.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                active === f
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white'
                  : 'glass text-slate-400 hover:text-white'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="glass rounded-2xl overflow-hidden group hover:border-indigo-500/30 transition-all"
              >
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="block">
                  <div className="relative aspect-video bg-[#0d0d14] overflow-hidden">
                    <iframe
                      src={project.liveUrl}
                      title={project.title}
                      className="w-full h-full scale-[0.4] origin-top-left pointer-events-none"
                      style={{ width: '250%', height: '250%' }}
                      loading="lazy"
                      sandbox="allow-scripts allow-same-origin"
                    />
                  </div>
                </a>
                <div className="p-5">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.category.slice(0, 2).map((c) => (
                      <span key={c} className="text-xs px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-300">
                        {c}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-sm text-slate-400 mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.slice(0, 4).map((t) => (
                      <span key={t} className="text-xs px-2 py-0.5 rounded bg-white/5 text-slate-400">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-indigo-600/20 text-indigo-300 text-sm font-medium hover:bg-indigo-600/30 transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Live
                    </a>
                    <Link
                      to={`/projects/${project.slug}`}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg glass text-sm font-medium hover:bg-white/5 transition-colors"
                    >
                      Details
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <p className="text-center text-slate-500 py-20">No projects found for this filter.</p>
        )}
      </div>
    </motion.div>
  )
}
