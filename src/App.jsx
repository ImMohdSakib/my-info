import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Projects from './pages/Projects'
import ProjectDetails from './pages/ProjectDetails'
import ScrollToTop from './components/ScrollToTop'

function App() {
  const location = useLocation()

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-slate-200">
      <ScrollToTop />
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetails />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  )
}

export default App
