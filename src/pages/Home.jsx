import { motion } from 'framer-motion'
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import About from '../components/About'
import Skills from '../components/Skills'
import Experience from '../components/Experience'
import Services from '../components/Services'
import FeaturedProjects from '../components/FeaturedProjects'
import Process from '../components/Process'
import WhyChooseMe from '../components/WhyChooseMe'
import Testimonials from '../components/Testimonials'
import CTA from '../components/CTA'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Hero />
      <Stats />
      <About />
      <Skills />
      <Experience />
      <Services />
      <FeaturedProjects />
      <Process />
      <WhyChooseMe />
      <Testimonials />
      <CTA />
      <Contact />
    </motion.div>
  )
}
