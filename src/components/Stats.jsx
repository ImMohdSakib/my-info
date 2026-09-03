import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  { label: 'Year Experience', value: 1, suffix: '+' },
  { label: 'Featured Projects', value: 3, suffix: '+' },
  { label: 'Technologies', value: 10, suffix: '+' },
  { label: 'Full Stack Development', value: null, text: 'Full Stack' },
]

function Counter({ value, suffix }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView || value === null) return
    let start = 0
    const duration = 1500
    const step = value / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [inView, value])

  return (
    <span ref={ref}>
      {value !== null ? (
        <>
          {count}
          {suffix}
        </>
      ) : null}
    </span>
  )
}

export default function Stats() {
  return (
    <section className="relative py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-2xl p-6 lg:p-8 text-center hover:border-indigo-500/30 transition-colors gradient-border"
            >
              <div className="text-3xl lg:text-4xl font-bold gradient-text mb-2">
                {stat.value !== null ? (
                  <Counter value={stat.value} suffix={stat.suffix} />
                ) : (
                  stat.text
                )}
              </div>
              <p className="text-sm text-slate-400 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
