"use client"

import { useState } from "react"
import { Briefcase, Calendar, Building, Award, ArrowRight, GraduationCap, ChevronRight } from "lucide-react"
import { useInView } from "react-intersection-observer"

export function Timeline() {
  const [expandedItem, setExpandedItem] = useState<number | null>(null)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const timelineItems = [
    {
      year: "2025 - present",
      title: "Full Stack Developer",
      company: "IETECH.",
      description:
        "Developed and maintained multiple client projects. Implemented CI/CD pipelines and improved development workflows. Reduced application load times by 40%.",
      achievements: ["Reduced application load time by 40%", "Implemented CI/CD pipeline", "Led team of 5 developers"],
      icon: Briefcase,
      color: "from-purple-600 to-indigo-600",
    },
    {
      year: "2024 - 2024",
      title: "Fullstack Developer",
      company: "Aceletis Ltd",
      description:
        "Created responsive web applications using React and Dotnet. Collaborated with designers to implement pixel-perfect UIs. Optimized application performance.",
      achievements: [
        "Developed 15+ client projects",
        "Improved development workflow",
        "Optimized database performance",
      ],
      icon: Briefcase,
      color: "from-blue-600 to-cyan-600",
    },
    {
      year: "2023 - 2024",
      title: "Frontend Developer",
      company: "Semicolon",
      description:
        "Created responsive web applications using React and Java. Collaborated with designers to implement pixel-perfect UIs. Optimized application performance.",
      achievements: ["Built responsive web applications", "Collaborated with design team", "Implemented A/B testing"],
      icon: Briefcase,
      color: "from-pink-600 to-purple-600",
    },
    {
      year: "2022 - 2023",
      title: "Software Engineer",
      company: "Semicolon",
      description:
        "Graduated with honors. Specialized in web technologies and software engineering. Completed capstone project on real-time data visualization.",
      achievements: [
        "Graduated with honors",
        "Specialized in web technologies",
        "Completed award-winning capstone project",
      ],
      icon: GraduationCap,
      color: "from-green-600 to-teal-600",
    },
  ]

  const toggleItem = (index: number) => {
    if (expandedItem === index) {
      setExpandedItem(null)
    } else {
      setExpandedItem(index)
    }
  }

  return (
    <div ref={ref} className="relative mx-auto max-w-5xl">
      {/* Horizontal timeline */}
      <div className="flex flex-col space-y-8">
        {timelineItems.map((item, index) => (
          <div
            key={index}
            className={`transition-all duration-700 ${inView ? "opacity-100" : "opacity-0"}`}
            style={{
              transitionDelay: `${index * 0.2}s`,
              transform: inView ? "translateY(0)" : "translateY(20px)",
            }}
          >
            <div className="flex flex-col md:flex-row gap-6 group">
              {/* Left side with icon */}
              <div className="flex-shrink-0 flex flex-col items-center">
                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br ${item.color} text-white shadow-lg shadow-purple-500/20 transition-all duration-300 group-hover:shadow-purple-500/40`}
                >
                  <item.icon className="h-8 w-8" />
                </div>
                <div className="w-1 h-full bg-gradient-to-b from-purple-500/50 to-purple-500/0 mt-4 hidden md:block"></div>
              </div>

              {/* Right side with content */}
              <div className="flex-grow">
                <div className="bg-[#111]/70 backdrop-blur-sm rounded-xl border border-purple-500/10 p-6 hover:border-purple-500/30 transition-all duration-500 hover:shadow-lg hover:shadow-purple-500/10">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-gradient transition-all duration-300">
                        {item.title}
                      </h3>
                      <div className="flex items-center text-sm text-gray-400 mt-1">
                        <Building className="h-4 w-4 mr-1" />
                        {item.company}
                      </div>
                    </div>
                    <div className="flex items-center mt-2 md:mt-0 px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-sm font-medium">
                      <Calendar className="h-4 w-4 mr-1" />
                      {item.year}
                    </div>
                  </div>

                  <p className="text-gray-400 mb-4">{item.description}</p>

                  <button
                    onClick={() => toggleItem(index)}
                    className="flex items-center text-sm text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    {expandedItem === index ? "Hide details" : "Show details"}
                    <ChevronRight
                      className={`ml-1 h-4 w-4 transition-transform duration-300 ${expandedItem === index ? "rotate-90" : ""}`}
                    />
                  </button>

                  {expandedItem === index && (
                    <div className="mt-4 pt-4 border-t border-purple-500/10 animate-fadeIn">
                      <h4 className="text-sm font-medium text-purple-400 flex items-center mb-3">
                        <Award className="h-4 w-4 mr-1" /> Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {item.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start text-sm text-gray-400">
                            <ArrowRight className="h-4 w-4 mr-2 text-purple-500 shrink-0 mt-0.5" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

