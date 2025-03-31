"use client"

import { useEffect, useRef } from "react"

export function Cube3D() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    let rotateX = 0
    let rotateY = 0
    let requestId: number

    const handleMouseMove = (e: MouseEvent) => {
      if (!container) return

      const rect = container.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      // Calculate rotation based on mouse position relative to center
      rotateY = ((e.clientX - centerX) / rect.width) * 20
      rotateX = ((e.clientY - centerY) / rect.height) * 20

      // Apply rotation to cube
      const cube = container.querySelector(".cube") as HTMLElement
      if (cube) {
        cube.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`
      }
    }

    // Auto rotation when not interacting
    const autoRotate = () => {
      if (!container) return

      rotateY += 0.1
      if (rotateY > 360) rotateY = 0

      const cube = container.querySelector(".cube") as HTMLElement
      if (cube) {
        cube.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`
      }

      requestId = requestAnimationFrame(autoRotate)
    }

    // Start auto rotation
    requestId = requestAnimationFrame(autoRotate)

    // Add mouse move listener
    container.addEventListener("mousemove", handleMouseMove)

    // Pause auto rotation when mouse enters
    container.addEventListener("mouseenter", () => {
      cancelAnimationFrame(requestId)
    })

    // Resume auto rotation when mouse leaves
    container.addEventListener("mouseleave", () => {
      requestId = requestAnimationFrame(autoRotate)
    })

    return () => {
      cancelAnimationFrame(requestId)
      container.removeEventListener("mousemove", handleMouseMove)
      container.removeEventListener("mouseenter", () => {})
      container.removeEventListener("mouseleave", () => {})
    }
  }, [])

  return (
    <div ref={containerRef} className="w-full h-full perspective-500 cursor-pointer">
      <div className="cube relative w-full h-full transform-style-3d transition-transform duration-200">
        {/* Front face */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-purple-600/20 to-indigo-600/20 border border-purple-500/30 rounded-xl transform translate-z-[100px]">
          <div className="flex items-center justify-center h-full">
            <span className="text-4xl font-bold text-purple-400">React</span>
          </div>
        </div>

        {/* Back face */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-purple-600/20 to-indigo-600/20 border border-purple-500/30 rounded-xl transform -translate-z-[100px] rotate-y-180">
          <div className="flex items-center justify-center h-full">
            <span className="text-4xl font-bold text-purple-400">Node.js</span>
          </div>
        </div>

        {/* Left face */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-purple-600/20 to-indigo-600/20 border border-purple-500/30 rounded-xl transform -translate-x-[100px] rotate-y-90">
          <div className="flex items-center justify-center h-full">
            <span className="text-4xl font-bold text-purple-400">TypeScript</span>
          </div>
        </div>

        {/* Right face */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-purple-600/20 to-indigo-600/20 border border-purple-500/30 rounded-xl transform translate-x-[100px] rotate-y-[-90deg]">
          <div className="flex items-center justify-center h-full">
            <span className="text-4xl font-bold text-purple-400">Next.js</span>
          </div>
        </div>

        {/* Top face */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-purple-600/20 to-indigo-600/20 border border-purple-500/30 rounded-xl transform -translate-y-[100px] rotate-x-90">
          <div className="flex items-center justify-center h-full">
            <span className="text-4xl font-bold text-purple-400">MongoDB</span>
          </div>
        </div>

        {/* Bottom face */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-purple-600/20 to-indigo-600/20 border border-purple-500/30 rounded-xl transform translate-y-[100px] rotate-x-[-90deg]">
          <div className="flex items-center justify-center h-full">
            <span className="text-4xl font-bold text-purple-400">AWS</span>
          </div>
        </div>
      </div>
    </div>
  )
}

