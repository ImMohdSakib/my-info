import { motion } from 'framer-motion'
import { Code2, Layers, Layout, Server, LayoutDashboard, Globe, Bug, RefreshCw } from 'lucide-react'

const services = [
  { icon: Code2, title: 'Full Stack Web Development', desc: 'Complete modern web applications from frontend to backend.' },
  { icon: Layers, title: 'Laravel Development', desc: 'Scalable Laravel applications, APIs, authentication and admin systems.' },
  { icon: Layout, title: 'React Development', desc: 'Modern responsive React applications with interactive UI.' },
  { icon: Server, title: 'Backend Development', desc: 'REST APIs, business logic, authentication and database integration.' },
  { icon: LayoutDashboard, title: 'Admin Dashboard Development', desc: 'Professional dashboards with management systems and role-based functionality.' },
  { icon: Globe, title: 'Website Development', desc: 'Responsive business websites and custom web solutions.' },
  { icon: Bug, title: 'Bug Fixing & Optimization', desc: 'Debugging, performance improvements and responsive fixes.' },
  { icon: RefreshCw, title: 'Website Redesign', desc: 'Transform existing websites into modern professional experiences.' },
]

export default function Services() {
  return (
    <section id="services" className="relative py-20 lg:py-28">
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-indigo-400 text-sm font-semibold tracking-widest uppercase">Services</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3">
            What I Can <span className="gradient-text">Build For You</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -6 }}
              className="group glass rounded-2xl p-6 hover:border-indigo-500/40 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <service.icon className="w-6 h-6 text-indigo-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
