import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Github, Instagram } from 'lucide-react'
import profileImg from '../assets/images/profile.png'

const rotatingTitles = [
  'Laravel Developer',
  'React Developer',
  'Full Stack Developer',
  'Backend Developer',
  'Web Application Developer',
]

const floatingTechs = [
  { name: 'Laravel', delay: 0, position: '-left-4 top-[18%]', direction: 'vertical' },
  { name: 'Java', delay: 0.5, position: '-right-4 top-[25%]', direction: 'vertical' },
  { name: 'React', delay: 1, position: '-left-6 bottom-[25%]', direction: 'vertical' },
  { name: 'Spring Boot', delay: 1.5, position: '-right-6 bottom-[18%]', direction: 'vertical' },
  { name: 'MySQL', delay: 2, position: 'left-1/2 -translate-x-1/2 bottom-[-15px]', direction: 'horizontal' },
]



export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % rotatingTitles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-indigo-500/30 mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-xs font-medium text-slate-300 tracking-wide">
                AVAILABLE FOR FREELANCE PROJECTS
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4"
            >
              Hi, I'm{' '}
              <span className="gradient-text">Mohd Sakib</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mb-6"
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white mb-2">
                Full Stack Web Developer
              </h2>
              <div className="h-10 overflow-hidden">
                <motion.p
                  key={titleIndex}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -30, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="text-lg sm:text-xl text-indigo-300 font-medium"
                >
                  {rotatingTitles[titleIndex]}
                </motion.p>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-xl mb-8"
            >
              I build modern, scalable and high-performance web applications with clean code,
              powerful backend systems and engaging user experiences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold hover:shadow-xl hover:shadow-indigo-500/30 hover:scale-105 transition-all duration-300"
              >
                View My Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full glass border border-white/10 text-white font-semibold hover:bg-white/5 hover:border-indigo-500/50 transition-all duration-300"
              >
                Let's Work Together
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex items-center gap-4"
            >
              <a
                href="https://github.com/ImMohdSakib"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl glass hover:bg-white/10 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/codewithsaquib/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl glass hover:bg-white/10 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </motion.div>
          </div>

          {/* Right - Profile Photo */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* Rotating Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-4 rounded-full border border-dashed border-indigo-500/30"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-8 rounded-full border border-dashed border-purple-500/20"
              />

              {/* Glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500/30 to-purple-600/30 blur-2xl scale-110" />

              {/* Image Container */}
              <div className="relative w-72 h-80 sm:w-80 sm:h-96 lg:w-96 lg:h-[28rem] rounded-3xl overflow-hidden gradient-border">
                <img
                  src={profileImg}
                  alt="Mohd Sakib - Full Stack Web Developer"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/60 via-transparent to-transparent" />
              </div>

             {/* Floating Tech Cards */}
{floatingTechs.map((tech, i) => (
  <motion.div
    key={tech.name}
    initial={{ opacity: 0, scale: 0 }}
    animate={{
      opacity: 1,
      scale: 1,
      ...(tech.direction === 'horizontal'
        ? { x: [0, -12, 0, 12, 0] }
        : { y: [0, -10, 0] }),
    }}
    transition={{
      opacity: { delay: 0.8 + tech.delay },
      scale: { delay: 0.8 + tech.delay },
      ...(tech.direction === 'horizontal'
        ? {
            x: {
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: tech.delay,
            },
          }
        : {
            y: {
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: tech.delay,
            },
          }),
    }}
    className={`absolute glass px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-200 shadow-lg whitespace-nowrap ${tech.position}`}
  >
    {tech.name}
  </motion.div>
))}

              {/* Decorative Sparkle */}
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -top-2 -right-2"
              >
                <Sparkles className="w-6 h-6 text-indigo-400" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
