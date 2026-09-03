import { motion } from 'framer-motion'
import { Briefcase, Calendar } from 'lucide-react'
import { experiences } from '../data/experience'

export default function Experience() {
  return (
    <section id="experience" className="relative py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-indigo-400 text-sm font-semibold tracking-widest uppercase">Experience</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3">
            Professional <span className="gradient-text">Journey</span>
          </h2>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500 via-purple-500 to-transparent" />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative pl-12 md:pl-0 mb-12 last:mb-0"
            >
              <div className="md:grid md:grid-cols-2 md:gap-8 items-start">
                <div className={`md:text-right ${i % 2 === 0 ? 'md:pr-12' : 'md:order-2 md:pl-12 md:text-left'}`}>
                  <div className="inline-flex items-center gap-2 text-indigo-400 text-sm font-medium mb-2">
                    <Calendar className="w-4 h-4" />
                    {exp.duration}
                  </div>
                  <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                  <p className="text-purple-400 font-medium">{exp.company}</p>
                  <span className="inline-block mt-2 text-xs px-2 py-1 rounded-full bg-indigo-500/10 text-indigo-300">
                    {exp.type}
                  </span>
                </div>

                <div className={`${i % 2 === 0 ? 'md:pl-12' : 'md:order-1 md:pr-12 md:text-right'}`}>
                  <div className="glass rounded-2xl p-6">
                    <ul className="space-y-2">
                      {exp.responsibilities.slice(0, 6).map((resp, j) => (
                        <li key={j} className="text-sm text-slate-400 flex items-start gap-2">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0" />
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 top-2 w-3 h-3 -translate-x-1/2 rounded-full bg-indigo-500 ring-4 ring-indigo-500/20" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
