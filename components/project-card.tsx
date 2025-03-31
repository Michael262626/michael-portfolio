import Link from "next/link"
import { ExternalLink, Github } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  githubUrl: string
  liveUrl: string
}

export function ProjectCard({ title, description, tags, githubUrl, liveUrl }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden bg-[#111] border-[#222] hover:border-purple-500/30 transition-all duration-500 h-full flex flex-col">
      <CardHeader className="p-6 pb-2 border-b border-[#222]">
        <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
          {title}
        </h3>
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <p className="text-gray-400 mb-6">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="bg-purple-500/10 text-purple-400 hover:bg-purple-500/20">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between p-6 border-t border-[#222]">
        <Button
          variant="outline"
          size="sm"
          asChild
          className="border-[#333] text-gray-300 hover:text-purple-400 hover:border-purple-500/30 hover:bg-purple-500/5"
        >
          <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-4 w-4" />
            Code
          </Link>
        </Button>
        <Button size="sm" asChild className="bg-purple-600 hover:bg-purple-700 text-white">
          <Link href={liveUrl} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="mr-2 h-4 w-4" />
            Live Demo
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

