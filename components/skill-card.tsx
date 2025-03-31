"use client"

import { useInView } from "react-intersection-observer"
import { Database, Server, Globe, Cpu, Box, Layers, FileCode, Zap } from "lucide-react"

interface SkillCardProps {
  name: string
  icon?: string
}

export function SkillCard({ name, icon }: SkillCardProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const getIconComponent = () => {
    // This is a simplified version - in a real app, you'd have more comprehensive icon mapping
    switch (icon?.toLowerCase()) {
      case "react":
      case "vue":
      case "angular":
        return <Globe className="h-5 w-5 text-purple-400" />
      case "nodejs":
      case "express":
      case "python":
      case "django":
      case "flask":
      case "fastapi":
        return <Server className="h-5 w-5 text-purple-400" />
      case "postgresql":
      case "mongodb":
      case "mysql":
      case "redis":
      case "firebase":
        return <Database className="h-5 w-5 text-purple-400" />
      case "typescript":
      case "javascript":
        return <FileCode className="h-5 w-5 text-purple-400" />
      case "git":
      case "github":
      case "githubactions":
      case "cicd":
        return <Layers className="h-5 w-5 text-purple-400" />
      case "docker":
      case "kubernetes":
        return <Box className="h-5 w-5 text-purple-400" />
      case "aws":
      case "vercel":
      case "netlify":
      case "gcp":
      case "azure":
        return <Cpu className="h-5 w-5 text-purple-400" />
      default:
        return <Zap className="h-5 w-5 text-purple-400" />
    }
  }

  return (
    <div
      ref={ref}
      className={`group relative p-4 rounded-lg border border-purple-500/10 bg-[#111] hover:border-purple-500/30 hover:bg-[#111]/80 transition-all duration-300 transform skill-card-hover animate-pulse-glow ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <div className="absolute -top-2 -right-2 bg-[#111] border border-purple-500/20 rounded-full p-1.5 transform scale-0 group-hover:scale-100 transition-all duration-300">
        {getIconComponent()}
      </div>
      <div className="flex flex-col items-center justify-center h-full">
        <div className="w-full h-1 bg-gradient-to-r from-purple-600/0 via-purple-600 to-purple-600/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 mb-3"></div>
        <h4 className="text-white font-medium text-center">{name}</h4>
        <div className="w-full h-1 bg-gradient-to-r from-purple-600/0 via-purple-600 to-purple-600/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 mt-3 delay-100"></div>
      </div>
    </div>
  )
}

