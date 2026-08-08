import { useEffect, useRef } from 'react'

export function useReveal<T extends HTMLElement = HTMLDivElement>(options?: IntersectionObserverInit) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return
        element.classList.add('is-revealed')
        observer.disconnect()
      },
      { threshold: 0.18, rootMargin: '0px 0px -6% 0px', ...options },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [options])

  return ref
}
