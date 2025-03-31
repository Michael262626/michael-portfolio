"use client"

import type { ReactNode } from "react"
import { useInView } from "react-intersection-observer"

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  threshold?: number
  direction?: "up" | "down" | "left" | "right" | "none"
  delay?: number
}

export function ScrollReveal({
  children,
  className = "",
  threshold = 0.1,
  direction = "none",
  delay = 0,
}: ScrollRevealProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold,
  })

  const getDirectionStyles = () => {
    if (!inView) {
      switch (direction) {
        case "up":
          return "translate-y-10"
        case "down":
          return "-translate-y-10"
        case "left":
          return "translate-x-10"
        case "right":
          return "-translate-x-10"
        default:
          return "translate-y-0"
      }
    }
    return "translate-y-0 translate-x-0"
  }

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${className} ${getDirectionStyles()} ${
        inView ? "opacity-100" : "opacity-0"
      }`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  )
}

