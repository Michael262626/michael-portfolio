"use client"

import { useEffect, useState } from "react"
import { Code, Database, Server, Globe, Cpu, Box, Layers, FileCode, Zap } from "lucide-react"

interface FloatingIcon {
  id: number
  Icon: any
  x: number
  y: number
  size: number
  speed: number
  opacity: number
  rotation: number
  rotationSpeed: number
}

export function FloatingIcons() {
  const [icons, setIcons] = useState<FloatingIcon[]>([])

  useEffect(() => {
    // Create initial icons
    const iconComponents = [Code, Database, Server, Globe, Cpu, Box, Layers, FileCode, Zap]
    const initialIcons: FloatingIcon[] = []

    for (let i = 0; i < 15; i++) {
      const Icon = iconComponents[Math.floor(Math.random() * iconComponents.length)]
      initialIcons.push({
        id: i,
        Icon,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 10 + 10,
        speed: Math.random() * 0.5 + 0.1,
        opacity: Math.random() * 0.3 + 0.1,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 0.5,
      })
    }

    setIcons(initialIcons)

    // Animation loop
    const interval = setInterval(() => {
      setIcons((prevIcons) =>
        prevIcons.map((icon) => {
          // Update position
          let newY = icon.y - icon.speed
          if (newY < -10) newY = 110

          // Update rotation
          let newRotation = icon.rotation + icon.rotationSpeed
          if (newRotation > 360) newRotation -= 360

          return {
            ...icon,
            y: newY,
            rotation: newRotation,
          }
        }),
      )
    }, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map((icon) => (
        <div
          key={icon.id}
          className="absolute text-purple-500"
          style={{
            left: `${icon.x}%`,
            top: `${icon.y}%`,
            opacity: icon.opacity,
            transform: `rotate(${icon.rotation}deg)`,
            transition: "transform 1s ease-out",
          }}
        >
          <icon.Icon size={icon.size} />
        </div>
      ))}
    </div>
  )
}

