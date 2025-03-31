"use client"

import { useEffect, useState } from "react"

interface AnimatedTextProps {
  text: string
  className?: string
  delay?: number
}

export function AnimatedText({ text, className = "", delay = 0 }: AnimatedTextProps) {
  const [displayedText, setDisplayedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (delay > 0) {
      const delayTimer = setTimeout(() => {
        startAnimation()
      }, delay * 1000)

      return () => clearTimeout(delayTimer)
    } else {
      startAnimation()
    }

    function startAnimation() {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => {
          const nextIndex = prevIndex + 1
          setDisplayedText(text.substring(0, nextIndex))

          if (nextIndex >= text.length) {
            clearInterval(interval)
          }

          return nextIndex
        })
      }, 50)

      return () => clearInterval(interval)
    }
  }, [text, delay])

  return (
    <span className={className}>
      {displayedText}
      <span className="animate-blink">|</span>
    </span>
  )
}

