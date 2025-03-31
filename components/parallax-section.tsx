"use client"

import { type ReactNode, useEffect, useRef } from "react"

interface ParallaxSectionProps {
  children: ReactNode
  className?: string
  speed?: number
}

export function ParallaxSection({ children, className = "", speed = 0.1 }: ParallaxSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const handleScroll = () => {
      const scrollTop = window.scrollY
      const sectionTop = section.offsetTop
      const sectionHeight = section.offsetHeight

      // Only apply parallax when the section is in view
      if (scrollTop + window.innerHeight > sectionTop && scrollTop < sectionTop + sectionHeight) {
        const yPos = (scrollTop - sectionTop) * speed
        section.style.backgroundPosition = `50% ${yPos}px`
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [speed])

  return (
    <section ref={sectionRef} className={`relative ${className}`}>
      {children}
    </section>
  )
}

