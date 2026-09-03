import { motion } from 'framer-motion'
import { Download, Code2, Database, Layout, Server } from 'lucide-react'
import profileImg from '../assets/images/About.png'
import resume from "../assets/MyResume.pdf"

const highlights = [
  { icon: Code2, title: 'Full Stack Development', desc: 'End-to-end web applications' },
  { icon: Server, title: 'Backend Architecture', desc: 'Laravel, PHP & REST APIs' },
  { icon: Layout, title: 'Modern Frontend', desc: 'React.js & responsive UI' },
  { icon: Database, title: 'Database Design', desc: 'MySQL & data modeling' },
]

export default function About() {
  return (
    <section id="about" className="relative py-20 lg:py-28">
      <div className="absolute top-0 right-0 w-72 h-72 bg-purple-600/10 rounded-full blur-[100px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-indigo-400 text-sm font-semibold tracking-widest uppercase">About Me</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3">
            Crafting Digital <span className="gradient-text">Experiences</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-indigo-500/20 to-purple-600/20 rounded-3xl blur-xl" />
              <div className="relative w-64 h-80 sm:w-72 sm:h-96 rounded-2xl overflow-hidden glass">
                <img
                  src={profileImg}
                  alt="Mohd Sakib"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-indigo-500/30 rounded-2xl" />
              <div className="absolute -top-4 -left-4 w-16 h-16 border-2 border-purple-500/30 rounded-xl" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl font-bold mb-4">
              Full Stack Web Developer & Laravel Specialist
            </h3>
            <div className="space-y-4 text-slate-400 leading-relaxed mb-8">
              <p>
                I'm Mohd Sakib, a Full Stack Web Developer specializing in Laravel development.
                With hands-on experience building scalable web applications, I focus on writing
                clean, maintainable code and delivering solid backend systems paired with modern
                frontend experiences.
              </p>
              <p>
                My work spans Laravel application development, REST API design, MySQL database
                integration, admin dashboards, authentication systems and responsive web interfaces
                using React.js and modern CSS frameworks. I care about performance, usability and
                solving real business problems through technology.
              </p>
              <p>
                I continuously learn and apply best practices in full stack development to build
                reliable, production-ready applications that perform well across devices.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors"
                >
                  <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
                    <item.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{item.title}</p>
                    <p className="text-xs text-slate-500">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>


            <a
              href={resume}
              download="Mohd-Sakib-Resume.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass border border-white/10 text-white font-semibold hover:bg-white/5 hover:border-indigo-500/50 transition-all duration-300"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>

          </motion.div>
        </div>
      </div>
    </section>
  )
}
