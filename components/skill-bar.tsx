"use client"

import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"

interface SkillBarProps {
  name: string
  percentage: number
  delay?: number
}

export function SkillBar({ name, percentage, delay = 0 }: SkillBarProps) {
  const [width, setWidth] = useState(0)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setWidth(percentage)
      }, delay * 1000)

      return () => clearTimeout(timer)
    }
  }, [inView, percentage, delay])

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between">
        <span className="text-sm font-medium text-white">{name}</span>
        <span className="text-sm font-medium text-purple-400">{percentage}%</span>
      </div>
      <div className="h-2 w-full bg-[#222] rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-purple-600 to-purple-400 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        ></div>
      </div>
    </div>
  )
}

