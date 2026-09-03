import { motion } from 'framer-motion'
import { skillCategories } from '../data/skills'
import * as SiIcons from 'react-icons/si'
import * as FaIcons from 'react-icons/fa'

const iconMap = { ...SiIcons, ...FaIcons }

export default function Skills() {
  return (
    <section id="skills" className="relative py-20 lg:py-28">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-indigo-400 text-sm font-semibold tracking-widest uppercase">Skills</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3">
            Technologies I <span className="gradient-text">Work With</span>
          </h2>
        </motion.div>

        <div className="space-y-12">
          {skillCategories.map((category, catIdx) => (
            <div key={category.name}>
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-xl font-semibold mb-6 text-slate-300"
              >
                {category.name}
              </motion.h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {category.skills.map((skill, i) => {
                  const Icon = iconMap[skill.icon] || FaIcons.FaCode
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      whileHover={{ y: -8, scale: 1.05 }}
                      className="glass rounded-2xl p-5 flex flex-col items-center gap-3 cursor-default group hover:border-indigo-500/40 transition-all duration-300"
                    >
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110"
                        style={{ backgroundColor: `${skill.color}15` }}
                      >
                        <Icon className="w-6 h-6" style={{ color: skill.color }} />
                      </div>
                      <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
                        {skill.name}
                      </span>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
