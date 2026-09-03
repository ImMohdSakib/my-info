import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

// Placeholder testimonials - replace with real client reviews when available
const testimonials = [
  {
    id: 1,
    name: 'Client Name',
    role: 'Company / Role',
    content: 'Testimonial placeholder. Real client reviews will be added here once available.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Client Name',
    role: 'Company / Role',
    content: 'Testimonial placeholder. Real client reviews will be added here once available.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Client Name',
    role: 'Company / Role',
    content: 'Testimonial placeholder. Real client reviews will be added here once available.',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="relative py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-indigo-400 text-sm font-semibold tracking-widest uppercase">Testimonials</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3">
            Client <span className="gradient-text">Feedback</span>
          </h2>
          <p className="mt-4 text-slate-500 text-sm">Real testimonials will appear here as projects are completed.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-6 relative"
            >
              <Quote className="w-8 h-8 text-indigo-500/20 absolute top-4 right-4" />
              <p className="text-slate-400 text-sm leading-relaxed mb-6 italic">"{t.content}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
