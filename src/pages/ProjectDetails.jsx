import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ExternalLink, Github, ArrowLeft, CheckCircle } from 'lucide-react'
import { getProjectBySlug } from '../data/projects'

export default function ProjectDetails() {
  const { slug } = useParams()
  const project = getProjectBySlug(slug)

  if (!project) {
    return (
      <div className="pt-32 pb-20 text-center min-h-screen">
        <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
        <Link to="/projects" className="text-indigo-400 hover:underline">
          Back to Projects
        </Link>
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-28 pb-20 min-h-screen"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-indigo-400 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>

        {/* Hero Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass rounded-2xl overflow-hidden mb-12"
        >
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
          <div className="relative aspect-video bg-[#0d0d14]">
            <iframe
              src={project.liveUrl}
              title={project.title}
              className="w-full h-full"
              loading="lazy"
              sandbox="allow-scripts allow-same-origin"
            />
          </div>
        </motion.div>

        {/* Title & Meta */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-10"
        >
          <div className="flex flex-wrap gap-2 mb-4">
            {project.category.map((c) => (
              <span key={c} className="text-xs px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                {c}
              </span>
            ))}
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">{project.title}</h1>
          <p className="text-slate-400 text-lg leading-relaxed mb-6">{project.overview}</p>
          <div className="flex flex-wrap gap-3">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-semibold hover:scale-105 transition-all"
            >
              <ExternalLink className="w-4 h-4" />
              Live Website
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass border border-white/10 text-sm font-semibold hover:bg-white/5 transition-all"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
          </div>
        </motion.div>

        {/* Details Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass rounded-2xl p-6"
          >
            <h3 className="text-lg font-semibold mb-4">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <span key={t} className="px-3 py-1.5 rounded-lg bg-white/5 text-sm text-slate-300">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="glass rounded-2xl p-6"
          >
            <h3 className="text-lg font-semibold mb-4">Role</h3>
            <p className="text-slate-400">{project.role}</p>
          </motion.div>
        </div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass rounded-2xl p-6 mb-8"
        >
          <h3 className="text-lg font-semibold mb-4">Features</h3>
          <ul className="grid sm:grid-cols-2 gap-3">
            {project.features.map((f, i) => (
              <li key={i} className="flex items-start gap-2 text-slate-400">
                <CheckCircle className="w-4 h-4 text-indigo-400 mt-0.5 flex-shrink-0" />
                {f}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Challenges & Solutions */}
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="glass rounded-2xl p-6"
          >
            <h3 className="text-lg font-semibold mb-4">Challenges</h3>
            <ul className="space-y-3">
              {project.challenges.map((c, i) => (
                <li key={i} className="text-sm text-slate-400 flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-500 flex-shrink-0" />
                  {c}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="glass rounded-2xl p-6"
          >
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>
            <ul className="space-y-3">
              {project.solutions.map((s, i) => (
                <li key={i} className="text-sm text-slate-400 flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-500 flex-shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
