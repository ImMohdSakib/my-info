import { motion } from 'framer-motion'
import { Search, Map, Palette, Code2, TestTube, Rocket, Wrench } from 'lucide-react'

const steps = [
  { num: '01', icon: Search, title: 'Discover', desc: 'Understand requirements and project goals.' },
  { num: '02', icon: Map, title: 'Plan', desc: 'Architecture, features and technology planning.' },
  { num: '03', icon: Palette, title: 'Design', desc: 'Create a modern responsive interface.' },
  { num: '04', icon: Code2, title: 'Develop', desc: 'Build frontend, backend and APIs.' },
  { num: '05', icon: TestTube, title: 'Test', desc: 'Debug, test and optimize.' },
  { num: '06', icon: Rocket, title: 'Deploy', desc: 'Deploy and make it production-ready.' },
  { num: '07', icon: Wrench, title: 'Maintain', desc: 'Continuous improvements and support.' },
]

export default function Process() {
  return (
    <section className="relative py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-indigo-400 text-sm font-semibold tracking-widest uppercase">Process</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3">
            How I <span className="gradient-text">Work</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="relative glass rounded-2xl p-6 group hover:border-indigo-500/30 transition-all"
            >
              <span className="text-4xl font-bold text-white/5 absolute top-4 right-4 group-hover:text-indigo-500/10 transition-colors">
                {step.num}
              </span>
              <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-4">
                <step.icon className="w-5 h-5 text-indigo-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
              <p className="text-sm text-slate-400">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
