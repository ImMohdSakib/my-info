import { Link } from 'react-router-dom'
import { Github, Instagram, Linkedin, Code2 } from 'lucide-react'

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/#about' },
  { name: 'Skills', path: '/#skills' },
  { name: 'Experience', path: '/#experience' },
  { name: 'Services', path: '/#services' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/#contact' },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                <Code2 className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold">Mohd Sakib</span>
            </Link>
            <p className="text-sm text-slate-400 mb-4">
              Full Stack Web Developer specializing in Laravel and modern web applications.
            </p>
            <div className="flex gap-3">
              <a
                href="https://github.com/ImMohdSakib"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg glass hover:bg-white/10 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/codewithsaquib/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg glass hover:bg-white/10 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              {/* LinkedIn placeholder */}
              <span
                className="p-2 rounded-lg glass opacity-40 cursor-not-allowed"
                title="LinkedIn - Coming Soon"
              >
                <Linkedin className="w-4 h-4" />
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path.startsWith('/#') ? '/' : link.path}
                    className="text-sm text-slate-400 hover:text-indigo-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Contact</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="tel:+917505305400" className="hover:text-indigo-400 transition-colors">
                  +91 7505305400
                </a>
              </li>
              <li>
                <a href="mailto:mohdsakib481@gmail.com" className="hover:text-indigo-400 transition-colors">
                  mohdsakib481@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Services</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>Laravel Development</li>
              <li>React Development</li>
              <li>Full Stack Apps</li>
              <li>Admin Dashboards</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            © 2026 Mohd Sakib. All Rights Reserved.
          </p>
          <p className="text-xs text-slate-600">
            Built with React + Vite + Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
