import { motion } from 'framer-motion'
import { ExternalLink, ArrowRight, Github } from 'lucide-react'
import { Link } from 'react-router-dom'
import { projects } from '../data/projects'

export default function FeaturedProjects() {
  return (
    <section id="projects" className="relative py-20 lg:py-28">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-indigo-400 text-sm font-semibold tracking-widest uppercase">Portfolio</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            Real projects built with modern technologies. Click to explore live demos and details.
          </p>
        </motion.div>

        <div className="space-y-16">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`grid lg:grid-cols-2 gap-8 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Browser Mockup */}
              <div className={`${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <div className="glass rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500">
                    {/* Browser Chrome */}
                    <div className="flex items-center gap-2 px-4 py-3 bg-[#1a1a24] border-b border-white/5">
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-500/80" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                        <div className="w-3 h-3 rounded-full bg-green-500/80" />
                      </div>
                      <div className="flex-1 mx-4">
                        <div className="bg-white/5 rounded-md px-3 py-1 text-xs text-slate-500 truncate">
                          {project.liveUrl.replace('https://', '')}
                        </div>
                      </div>
                    </div>
                    {/* Screenshot Area - iframe for live preview */}
                    <div className="relative aspect-[16/10] bg-[#0d0d14] overflow-hidden">
                      <iframe
                        src={project.liveUrl}
                        title={project.title}
                        className="w-full h-full scale-[0.5] origin-top-left"
                        style={{ width: '200%', height: '200%' }}
                        loading="lazy"
                        sandbox="allow-scripts allow-same-origin"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                    </div>
                  </div>
                </a>
              </div>

              {/* Content */}
              <div className={`${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.category.map((cat) => (
                    <span
                      key={cat}
                      className="text-xs px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-slate-400 leading-relaxed mb-6">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2.5 py-1 rounded-md bg-white/5 text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-semibold hover:shadow-lg hover:shadow-indigo-500/30 hover:scale-105 transition-all"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                  <Link
                    to={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass border border-white/10 text-sm font-semibold hover:bg-white/5 transition-all"
                  >
                    View Details
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-indigo-400 font-semibold hover:text-indigo-300 transition-colors"
          >
            View All Projects
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
