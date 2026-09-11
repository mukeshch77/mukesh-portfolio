import { useState, useEffect, useRef } from 'react'

export function useInView(options = {}) {
  const [inView, setInView] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.unobserve(el) // Trigger once
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px', ...options }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return [ref, inView]
}
