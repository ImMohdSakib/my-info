import { motion } from 'framer-motion'
import { Code, Smartphone, Cpu, Lightbulb, Zap, Users } from 'lucide-react'

const reasons = [
  { icon: Code, title: 'Clean Code', desc: 'Maintainable and structured development.' },
  { icon: Smartphone, title: 'Responsive Design', desc: 'Websites that work across devices.' },
  { icon: Cpu, title: 'Modern Technologies', desc: 'Modern frontend and backend technologies.' },
  { icon: Lightbulb, title: 'Problem Solving', desc: 'Focus on solving real business requirements.' },
  { icon: Zap, title: 'Performance', desc: 'Optimized and efficient applications.' },
  { icon: Users, title: 'Client Focus', desc: 'Clear communication and requirement-driven development.' },
]

export default function WhyChooseMe() {
  return (
    <section className="relative py-20 lg:py-28">
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-indigo-600/10 rounded-full blur-[100px]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-indigo-400 text-sm font-semibold tracking-widest uppercase">Why Me</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3">
            Why Work <span className="gradient-text">With Me</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="glass rounded-2xl p-6 flex gap-4 hover:border-indigo-500/30 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center flex-shrink-0">
                <item.icon className="w-6 h-6 text-indigo-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
                <p className="text-sm text-slate-400">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
