"use client"

import { useEffect, useRef, useState } from "react"
import { Code, Server, Database, Globe, Cpu, Box, Layers, FileCode, Lightbulb } from "lucide-react"

export function HeroImage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  // Tech icons that will be displayed on cube faces
  const techIcons = [
    { icon: Code, color: "from-purple-600 to-indigo-600" },
    { icon: Server, color: "from-blue-600 to-cyan-600" },
    { icon: Database, color: "from-pink-600 to-purple-600" },
    { icon: Globe, color: "from-green-600 to-teal-600" },
    { icon: Cpu, color: "from-orange-600 to-red-600" },
    { icon: Box, color: "from-indigo-600 to-blue-600" },
    { icon: Layers, color: "from-yellow-600 to-amber-600" },
    { icon: FileCode, color: "from-purple-600 to-pink-600" },
  ]

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleMouseMove = (e: MouseEvent) => {
      if (!container) return

      const rect = container.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width - 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5

      setMousePosition({ x, y })
    }

    const handleMouseEnter = () => setIsHovered(true)
    const handleMouseLeave = () => setIsHovered(false)

    container.addEventListener("mousemove", handleMouseMove)
    container.addEventListener("mouseenter", handleMouseEnter)
    container.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      container.removeEventListener("mousemove", handleMouseMove)
      container.removeEventListener("mouseenter", handleMouseEnter)
      container.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <div ref={containerRef} className="relative w-full max-w-[450px] aspect-square mx-auto perspective-1000">
      {/* Neutron/Atom Design - Orbital Rings */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="absolute w-[90%] h-[90%] rounded-full border border-purple-500/10 animate-rotate"
          style={{ animationDuration: "30s" }}
        ></div>
        <div
          className="absolute w-[80%] h-[80%] rounded-full border border-purple-500/10 animate-rotate"
          style={{ animationDuration: "25s", animationDirection: "reverse" }}
        ></div>
        <div
          className="absolute w-[70%] h-[70%] rounded-full border border-purple-500/10 animate-rotate"
          style={{ animationDuration: "20s" }}
        ></div>
      </div>

      {/* Profile Image in Center - INCREASED SIZE */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] rounded-full overflow-hidden border-4 border-purple-500/30 shadow-lg shadow-purple-500/20 z-20">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-transparent"></div>
        <img
          src="/profile1.jpg"
          alt="Developer Portrait"
          className="w-full h-full object-cover"
          width={400}
          height={400}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111]/50 to-transparent"></div>
      </div>

      {/* Orbiting 3D Cubes */}
      {techIcons.map((tech, index) => {
        const angle = (index / techIcons.length) * Math.PI * 2
        const orbitRadius = 45 // percentage of container
        const orbitSpeed = 20 + index * 2 // seconds for a full rotation
        const orbitDelay = index * (20 / techIcons.length) // staggered start
        const direction = index % 2 === 0 ? "normal" : "reverse"

        return (
          <div
            key={index}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform-style-3d"
            style={{
              transform: `rotateZ(${angle}rad)`,
            }}
          >
            <div
              className="absolute transform-style-3d"
              style={{
                left: `${orbitRadius}%`,
                animation: `orbit ${orbitSpeed}s linear infinite ${direction}`,
                animationDelay: `-${orbitDelay}s`,
              }}
            >
              {/* 3D Cube */}
              <div
                className={`w-14 h-14 transform-style-3d animate-float hover:scale-125 transition-transform duration-300`}
                style={{
                  animationDelay: `${index * 0.5}s`,
                  transform:
                    isHovered && mousePosition.x !== 0
                      ? `rotateX(${mousePosition.y * 180}deg) rotateY(${mousePosition.x * 180}deg)`
                      : `rotateX(${index * 45}deg) rotateY(${index * 45}deg)`,
                }}
              >
                {/* Cube Faces */}
                <div className="absolute inset-0 transform-style-3d">
                  {/* Front face */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${tech.color} border border-white/20 flex items-center justify-center transform translate-z-[7px]`}
                  >
                    <tech.icon className="h-6 w-6 text-white" />
                  </div>

                  {/* Back face */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${tech.color} border border-white/20 flex items-center justify-center transform -translate-z-[7px] rotate-y-180`}
                  >
                    <tech.icon className="h-6 w-6 text-white" />
                  </div>

                  {/* Left face */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${tech.color} border border-white/20 flex items-center justify-center transform -translate-x-[7px] rotate-y-90`}
                  >
                    <tech.icon className="h-6 w-6 text-white" />
                  </div>

                  {/* Right face */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${tech.color} border border-white/20 flex items-center justify-center transform translate-x-[7px] rotate-y-[-90deg]`}
                  >
                    <tech.icon className="h-6 w-6 text-white" />
                  </div>

                  {/* Top face */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${tech.color} border border-white/20 flex items-center justify-center transform -translate-y-[7px] rotate-x-90`}
                  >
                    <tech.icon className="h-6 w-6 text-white" />
                  </div>

                  {/* Bottom face */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${tech.color} border border-white/20 flex items-center justify-center transform translate-y-[7px] rotate-x-[-90deg]`}
                  >
                    <tech.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })}

      {/* Neutron/Atom Design - Electrons */}
      {[...Array(5)].map((_, i) => (
        <div
          key={`electron-${i}`}
          className="absolute w-3 h-3 bg-purple-500 rounded-full shadow-lg shadow-purple-500/50"
          style={{
            animation: `orbit ${10 + i * 5}s linear infinite ${i % 2 === 0 ? "normal" : "reverse"}`,
            left: "50%",
            top: "50%",
            transform: `rotate(${i * 72}deg) translateX(${120 + i * 10}px) rotate(-${i * 72}deg)`,
          }}
        ></div>
      ))}

      {/* Idea Bulb - REDUCED SIZE */}
      <div className="absolute top-[5%] right-[5%] transform-style-3d animate-float z-30">
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-yellow-500/20 filter blur-md animate-pulse-glow"></div>
          <div className="relative bg-gradient-to-b from-yellow-400 to-yellow-600 w-10 h-10 rounded-full flex items-center justify-center shadow-md shadow-yellow-500/20 border border-yellow-300/50">
            <Lightbulb className="w-5 h-5 text-white" />
          </div>

          {/* Light rays - reduced */}
          {[...Array(6)].map((_, i) => (
            <div
              key={`ray-${i}`}
              className="absolute bg-yellow-400/30 h-0.5 w-4 origin-left"
              style={{
                top: "50%",
                left: "50%",
                transform: `translateY(-50%) rotate(${i * 60}deg) translateX(20px)`,
                animation: "pulse-slow 2s ease-in-out infinite",
                animationDelay: `${i * 0.25}s`,
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Background particles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-purple-500/50 rounded-full animate-float"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDuration: `${3 + Math.random() * 4}s`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        ></div>
      ))}
    </div>
  )
}

