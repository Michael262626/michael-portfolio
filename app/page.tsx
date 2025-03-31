import Link from "next/link"
import {
  ArrowRight,
  Code,
  Download,
  Github,
  Linkedin,
  Mail,
  User,
  ChevronDown,
  Server,
  Cpu,
  Shield,
  PlusCircle,
  Monitor,
  BarChart2,
  ExternalLink,
} from "lucide-react"
import { MobileNav } from "@/components/mobile-nav"

import { Button } from "@/components/ui/button"
import { ContactForm } from "@/components/contact-form"
import { Timeline } from "@/components/timeline"
import { ScrollReveal } from "@/components/scroll-reveal"
import { AnimatedBackground } from "@/components/animated-background"
import { AnimatedText } from "@/components/animated-text"
import { GradientButton } from "@/components/gradient-button"
import { FloatingIcons } from "@/components/floating-icons"
import { HeroImage } from "@/components/hero-image"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0a0a0a] text-white">
      <header className="sticky top-0 z-50 w-full border-b border-[#222] bg-[#0a0a0a]/95 backdrop-blur supports-[backdrop-filter]:bg-[#0a0a0a]/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="font-bold text-xl group">
            <span className="text-purple-500 transition-all duration-300 group-hover:text-white">Dev</span>
            <span className="text-white transition-all duration-300 group-hover:text-purple-500">Portfolio</span>
          </Link>
          <nav className="hidden md:flex">
            <ul className="flex space-x-1">
              {["About", "Skills", "Projects", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="relative px-4 py-2 text-sm font-medium text-gray-300 transition-all duration-300 hover:text-purple-400 rounded-md hover:bg-purple-500/5 overflow-hidden group"
                  >
                    <span className="relative z-10">{item}</span>
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-purple-500 transform translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center gap-2">
            <Button
              asChild
              size="sm"
              className="bg-purple-600 hover:bg-purple-700 text-white relative overflow-hidden group"
            >
              <Link href="#contact">
                <span className="relative z-10">Hire Me</span>
                <span className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left opacity-20"></span>
              </Link>
            </Button>
            <MobileNav />
          </div>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0a0a]">
          <AnimatedBackground />
          <FloatingIcons />

          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a] pointer-events-none"></div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
              <ScrollReveal className="flex flex-col justify-center space-y-6" direction="left">
                <div className="space-y-4">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-sm font-medium mb-2 animate-pulse-glow">
                    <span className="mr-1">✦</span> Full Stack Developer
                  </div>

                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    <span className="block">Crafting Digital</span>
                    <span className="text-gradient animate-gradient">Experiences with Code</span>
                  </h1>

                  <div className="h-12">
                    <AnimatedText
                      text="Building robust web applications with modern technologies. Passionate about creating elegant solutions to complex problems."
                      className="max-w-[600px] text-gray-400 md:text-xl"
                      delay={0.5}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-3 min-[400px]:flex-row">
                  <GradientButton href="#projects" className="group">
                    View My Work{" "}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </GradientButton>

                  <Button
                    variant="outline"
                    asChild
                    className="border-purple-500/30 text-purple-400 hover:bg-purple-500/10 transition-all duration-300 hover:border-purple-500/50"
                  >
                    <a href="/cv.pdf" download className="group">
                      Download CV{" "}
                      <Download className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-y-1" />
                    </a>
                  </Button>
                </div>

                <div className="flex gap-4 mt-4">
                  {[
                    { href: "https://github.com/Michael262626", icon: Github },
                    { href: "https://www.linkedin.com/in/michael-dikandu-01b536260?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", icon: Linkedin },
                    { href: "mailto:dikandumichael@gmail.com", icon: Mail },
                  ].map((item, index) => (
                    <Link key={index} href={item.href} target="_blank" rel="noopener noreferrer">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-gray-400 hover:text-purple-400 hover:bg-purple-500/10 transition-all duration-300 hover:scale-110"
                      >
                        <item.icon className="h-5 w-5" />
                        <span className="sr-only">{item.href}</span>
                      </Button>
                    </Link>
                  ))}
                </div>

                <div className="hidden md:block">
                  <Link
                    href="#about"
                    className="inline-flex items-center text-sm text-purple-400 hover:text-purple-300 transition-colors mt-8 group"
                  >
                    Scroll to learn more
                    <ChevronDown className="ml-1 h-4 w-4 animate-bounce" />
                  </Link>
                </div>
              </ScrollReveal>

              <ScrollReveal className="flex items-center justify-center" direction="right">
                <HeroImage />
              </ScrollReveal>
            </div>

            {/* Stats */}
            <div className="mt-16 md:mt-24">
              <ScrollReveal direction="up" delay={0.8}>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                  {[
                    { value: "4+", label: "Years Experience" },
                    { value: "50+", label: "Projects Completed" },
                    { value: "20+", label: "Happy Clients" },
                    { value: "100%", label: "Client Satisfaction" },
                  ].map((stat, index) => (
                    <div
                      key={index}
                      className="bg-[#111]/50 border border-purple-500/10 rounded-lg p-4 text-center hover:border-purple-500/30 transition-all duration-300 hover:transform hover:scale-105"
                    >
                      <div className="text-3xl font-bold text-gradient">{stat.value}</div>
                      <div className="text-gray-400 text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block">
            <div className="w-6 h-10 border-2 border-purple-500/30 rounded-full flex justify-center">
              <div className="w-1 h-2 bg-purple-500 rounded-full animate-bounce mt-2"></div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="relative py-16 md:py-24 bg-[#0f0f0f] overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern"></div>
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-600 rounded-full filter blur-[100px] opacity-20"></div>
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-600 rounded-full filter blur-[100px] opacity-20"></div>
          </div>

          <div className="container px-4 md:px-6 relative z-10">
            <ScrollReveal className="flex flex-col items-center justify-center space-y-4 text-center" threshold={0.1}>
              <div className="space-y-2">
                <div className="inline-flex items-center rounded-full bg-purple-500/10 px-3 py-1 text-sm text-purple-400 animate-pulse-glow">
                  <User className="mr-2 inline-block h-4 w-4" />
                  About Me
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  My <span className="text-gradient animate-gradient">Journey</span>
                </h2>
                <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I'm a full stack developer with 5+ years of experience building web applications. My
                  journey began with a Computer Science degree, followed by roles at startups and enterprise companies
                  where I've honed my skills across the entire development stack.
                </p>
              </div>
            </ScrollReveal>

            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <ScrollReveal className="flex flex-col justify-center space-y-4" direction="left" delay={0.2}>
                <ul className="grid gap-6">
                  {[
                    {
                      icon: Code,
                      title: "Technical Expertise",
                      description:
                        "Proficient in modern JavaScript frameworks, backend technologies, and database systems.",
                    },
                    {
                      icon: Shield,
                      title: "Problem Solver",
                      description:
                        "Analytical thinker with a knack for finding elegant solutions to complex technical challenges.",
                    },
                    {
                      icon: PlusCircle,
                      title: "Continuous Learner",
                      description:
                        "Always exploring new technologies and methodologies to stay at the cutting edge of development.",
                    },
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="group flex items-start gap-4 transition-all duration-500 hover:translate-x-2"
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-500/20 transition-all duration-300 group-hover:shadow-purple-500/40">
                        <item.icon className="h-6 w-6" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-medium text-gradient group-hover:text-glow transition-all duration-300">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-400 transition-all duration-300 group-hover:text-gray-300">
                          {item.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </ScrollReveal>

              <ScrollReveal className="flex justify-center" direction="right" delay={0.3}>
                <div className="relative overflow-hidden rounded-xl border border-purple-500/10 bg-[#111] group hover:border-purple-500/30 transition-all duration-500 hover:shadow-lg hover:shadow-purple-500/10">
                  <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/10 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                  <img
                    src="/profile1.jpg"
                    alt="About Me"
                    className="mx-auto aspect-video overflow-hidden object-cover object-center sm:w-full lg:order-last mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-500"
                    width={500}
                    height={310}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent"></div>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal className="mt-12" threshold={0.1} delay={0.4}>
              <h3 className="text-2xl font-bold text-center mb-8">
                Professional <span className="text-gradient animate-gradient">Timeline</span>
              </h3>
              <Timeline />
            </ScrollReveal>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="relative py-16 md:py-24 bg-[#0a0a0a] overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-600 rounded-full filter blur-[100px] opacity-20 animate-pulse-slow"></div>
            <div
              className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-indigo-600 rounded-full filter blur-[100px] opacity-20 animate-pulse-slow"
              style={{ animationDelay: "2s" }}
            ></div>
          </div>

          <div className="container px-4 md:px-6 relative z-10">
            <ScrollReveal className="flex flex-col items-center justify-center space-y-4 text-center" threshold={0.1}>
              <div className="space-y-2">
                <div className="inline-flex items-center rounded-full bg-purple-500/10 px-3 py-1 text-sm text-purple-400 animate-pulse-glow">
                  <Code className="mr-2 inline-block h-4 w-4" />
                  Skills
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Technical <span className="text-gradient animate-gradient">Expertise</span>
                </h2>
                <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  A comprehensive set of skills acquired through years of professional experience and continuous
                  learning.
                </p>
              </div>
            </ScrollReveal>

            <div className="mx-auto max-w-5xl py-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                {[
                  {
                    title: "Frontend Development",
                    icon: Monitor,
                    color: "from-purple-600 to-pink-600",
                    skills: [
                      "React",
                      "Next.js",
                      "TypeScript",
                      "JavaScript",
                      "HTML5",
                      "CSS3",
                      "Tailwind CSS",
                      "Redux",
                      "Framer Motion",
                    ],
                  },
                  {
                    title: "Backend Development",
                    icon: Server,
                    color: "from-blue-600 to-indigo-600",
                    skills: [
                      "Node.js",
                      "Express",
                      "Python",
                      "Django",
                      "GraphQL",
                      "REST API",
                      "PostgreSQL",
                      "MongoDB",
                      "Firebase",
                    ],
                  },
                  {
                    title: "DevOps & Tools",
                    icon: Cpu,
                    color: "from-green-600 to-teal-600",
                    skills: ["Git", "GitHub", "Docker", "AWS", "Vercel", "CI/CD", "Jest", "Cypress", "Kubernetes"],
                  },
                ].map((category, index) => (
                  <ScrollReveal key={index} delay={0.2 * index} className="h-full">
                    <div className="h-full rounded-xl border border-purple-500/10 bg-[#111]/50 p-6 hover:border-purple-500/30 transition-all duration-500 hover:shadow-lg hover:shadow-purple-500/10 group">
                      <div className="mb-4 flex items-center">
                        <div
                          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${category.color} text-white shadow-lg shadow-purple-500/20 transition-all duration-300 group-hover:shadow-purple-500/40`}
                        >
                          <category.icon className="h-6 w-6" />
                        </div>
                        <h3 className="ml-4 text-xl font-bold text-white group-hover:text-gradient transition-all duration-500">
                          {category.title}
                        </h3>
                      </div>

                      <div className="space-y-3">
                        {category.skills.map((skill, skillIndex) => (
                          <div
                            key={skillIndex}
                            className="group/skill relative overflow-hidden rounded-lg bg-[#0a0a0a] h-10"
                          >
                            <div
                              className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 transform origin-left transition-transform duration-1000 ease-out group-hover/skill:translate-x-0"
                              style={{
                                transform: "translateX(-100%)",
                                transitionDelay: `${skillIndex * 100}ms`,
                              }}
                            ></div>
                            <div className="relative z-10 flex items-center justify-between h-full px-4">
                              <span className="text-sm font-medium text-gray-300 group-hover/skill:text-white transition-colors duration-300">
                                {skill}
                              </span>
                              <div className="flex space-x-1">
                                {[...Array(5)].map((_, i) => (
                                  <div
                                    key={i}
                                    className={`w-2 h-2 rounded-full ${i < Math.floor(Math.random() * 3) + 3 ? "bg-purple-500" : "bg-purple-500/30"} transition-all duration-300`}
                                    style={{ transitionDelay: `${i * 100}ms` }}
                                  ></div>
                                ))}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              <ScrollReveal delay={0.6}>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gradient mb-6">Tools & Technologies</h3>
                  <div className="flex flex-wrap justify-center gap-4">
                    {[
                      "React",
                      "Next.js",
                      "Node.js",
                      "TypeScript",
                      "Python",
                      "AWS",
                      "Docker",
                      "MongoDB",
                      "PostgreSQL",
                      "GraphQL",
                      "Redux",
                      "Tailwind CSS",
                      "Git",
                    ].map((tech, index) => (
                      <div
                        key={index}
                        className="px-4 py-2 rounded-full border border-purple-500/20 bg-[#111]/50 text-gray-300 hover:text-white hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300 hover:scale-110"
                        style={{ transitionDelay: `${index * 50}ms` }}
                      >
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="relative py-16 md:py-24 bg-[#0f0f0f] overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600 rounded-full filter blur-[120px] opacity-20"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600 rounded-full filter blur-[120px] opacity-20"></div>
          </div>

          <div className="container px-4 md:px-6 relative z-10">
            <ScrollReveal className="flex flex-col items-center justify-center space-y-4 text-center" threshold={0.1}>
              <div className="space-y-2">
                <div className="inline-flex items-center rounded-full bg-purple-500/10 px-3 py-1 text-sm text-purple-400 animate-pulse-glow">
                  <BarChart2 className="mr-2 inline-block h-4 w-4" />
                  Projects
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Featured <span className="text-gradient animate-gradient">Work</span>
                </h2>
                <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  A selection of my most impactful projects showcasing my technical abilities and problem-solving
                  skills.
                </p>
              </div>
            </ScrollReveal>

            <div className="mx-auto max-w-6xl py-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "E-Commerce Platform",
                    description:
                      "A full-featured online store with payment processing, inventory management, and analytics dashboard.",
                    tags: ["Next.js", "Node.js", "MongoDB", "Stripe"],
                    githubUrl: "https://github.com",
                    liveUrl: "https://bobby-store-nu.vercel.app/",
                    color: "from-purple-600 to-indigo-600",
                  },
                  {
                    title: "MeetingMinds",
                    description:
                      "A medium where teams can do virtual meetings, while the summary of the meetings are been writing with key points.",
                    tags: ["React", "Firebase", "Tailwind CSS", "Redux"],
                    githubUrl: "https://github.com/Michael262626/meeting-minds-front-end",
                    liveUrl: "https://meeting-minds-gfrhs7n0f-michaels-projects-9c4301fb.vercel.app/",
                    color: "from-pink-600 to-purple-600",
                  },
                  {
                    title: "EAZIRENT",
                    description: "An application that allow people to find and rent apartments, and easily connect them to the agent.",
                    tags: ["TypeScript", "React", "PostgreSQL"],
                    githubUrl: "https://github.com",
                    liveUrl: "https://eazi-rent-eight.vercel.app/",
                    color: "from-blue-600 to-cyan-600",
                  },
                  {
                    title: "Events Booking",
                    description: "An event application where you can register for a concert or buy tickets",
                    tags: ["React", "Node.js", "MongoDB", "TypeScript"],
                    githubUrl: "https://github.com/Michael262626/Events",
                    liveUrl: "https://events-advance-2025.vercel.app/",
                    color: "from-green-600 to-teal-600",
                  },
                  {
                    title: "Blog Website",
                    description:"A comprehensive fitness application with workout planning, progress tracking, and data visualization.",
                    tags: ["React", "ShadCN", "Express", "MySQL"],
                    githubUrl: "https://github.com/Michael262626/my-blog",
                    liveUrl: "https://myblog-seven-sigma.vercel.app/",
                    color: "from-orange-600 to-red-600",
                  },
                  {
                    title: "Weather Forecast App",
                    description:
                      "A weather application with location-based forecasts, historical data, and interactive maps.",
                    tags: ["React Native", "Weather API", "Redux", "Mapbox"],
                    githubUrl:"https://github.com/Michael262626/WeatherAppProject",
                    liveUrl:"https://weatherappproject001.vercel.app/",
                    color: "from-indigo-600 to-blue-600",
                  },
                  // {
                  //   title: "Currency Converter App",
                  //   description:"A currency converter application with different currency converted to a preferred choice of currency.",
                  //   tags: ["React Native", "Currency API", "Redux", "Mapbox"],
                  //   githubUrl:"https://github.com/Michael262626/WeatherAppProject",
                  //   liveUrl:"https://currencyconverterproject-seven.vercel.app/",
                  //   color: "from-indigo-600 to-yellow-600",
                  // },
                ].map((project, index) => (
                  <ScrollReveal key={index} delay={0.1 * index} className="h-full">
                    <div className="group h-full overflow-hidden rounded-xl border border-purple-500/10 bg-[#111]/80 hover:border-purple-500/30 transition-all duration-500 hover:shadow-lg hover:shadow-purple-500/10 flex flex-col">
                      {/* Project header with gradient */}
                      <div
                        className={`h-3 w-full bg-gradient-to-r ${project.color} transform origin-left transition-transform duration-500 group-hover:scale-x-100`}
                        style={{ transform: "scaleX(0.3)" }}
                      ></div>

                      <div className="p-6 flex-grow">
                        <h3 className="text-xl font-bold text-white group-hover:text-gradient transition-all duration-500 mb-3">
                          {project.title}
                        </h3>
                        <p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors duration-300">
                          {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="inline-flex items-center rounded-full border border-purple-500/20 bg-purple-500/5 px-2.5 py-0.5 text-xs font-medium text-purple-400 transition-all duration-300 group-hover:border-purple-500/40 group-hover:bg-purple-500/10"
                              style={{ transitionDelay: `${tagIndex * 50}ms` }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="p-6 border-t border-[#222] flex justify-between items-center">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-sm text-gray-400 hover:text-purple-400 transition-colors duration-300"
                        >
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </a>
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center rounded-full bg-gradient-to-r ${project.color} px-4 py-1 text-sm font-medium text-white shadow-sm transition-all duration-300 hover:shadow-md hover:shadow-purple-500/20`}
                        >
                          <ExternalLink className="mr-2 h-3 w-3" />
                          Live Demo
                        </a>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="relative py-16 md:py-24 bg-[#0a0a0a] overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5"></div>
            <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-purple-600 rounded-full filter blur-[100px] opacity-20 animate-pulse-slow"></div>
            <div
              className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-indigo-600 rounded-full filter blur-[100px] opacity-20 animate-pulse-slow"
              style={{ animationDelay: "2s" }}
            ></div>
          </div>

          <div className="container px-4 md:px-6 relative z-10">
            <ScrollReveal className="flex flex-col items-center justify-center space-y-4 text-center" threshold={0.1}>
              <div className="space-y-2">
                <div className="inline-flex items-center rounded-full bg-purple-500/10 px-3 py-1 text-sm text-purple-400 animate-pulse-glow">
                  <Mail className="mr-2 inline-block h-4 w-4" />
                  Contact
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Get In <span className="text-gradient animate-gradient">Touch</span>
                </h2>
                <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Have a project in mind or want to discuss potential opportunities? I'd love to hear from you.
                </p>
              </div>
            </ScrollReveal>

            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2">
              <ScrollReveal className="flex flex-col justify-center space-y-6" direction="left" delay={0.2}>
                <div className="grid gap-6">
                  {[
                    { icon: Mail, title: "Email", value: "dikandumichael@gmail.com" },
                    { icon: Linkedin, title: "LinkedIn", value: "https://www.linkedin.com/in/michael-dikandu-01b536260" },
                    { icon: Github, title: "GitHub", value: "https://github.com/Michael262626" },
                  ].map((contact, index) => (
                    <div
                      key={index}
                      className="group flex items-center gap-4 transition-all duration-500 hover:translate-x-2"
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-500/20 transition-all duration-300 group-hover:shadow-purple-500/40">
                        <contact.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-medium text-gradient group-hover:text-glow transition-all duration-300">
                          {contact.title}
                        </h3>
                        <p className="text-sm text-gray-400 transition-all duration-300 group-hover:text-gray-300">
                          {contact.value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 rounded-xl bg-[#111]/50 border border-purple-500/10 hover:border-purple-500/30 transition-all duration-500 hover:shadow-lg hover:shadow-purple-500/10 group">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-indigo-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
                  <h3 className="text-xl font-bold text-gradient mb-4">Let's Work Together</h3>
                  <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors duration-300">
                    I'm currently available for freelance work and full-time opportunities. If you have a project that
                    needs my expertise, don't hesitate to reach out.
                  </p>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    I typically respond within 24 hours.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={0.3}>
                <div className="rounded-xl border border-purple-500/10 bg-[#111]/50 hover:border-purple-500/30 transition-all duration-500 hover:shadow-lg hover:shadow-purple-500/10 overflow-hidden group">
                  <div
                    className="h-2 w-full bg-gradient-to-r from-purple-600 to-indigo-600 transform origin-left transition-transform duration-500 group-hover:scale-x-100"
                    style={{ transform: "scaleX(0.3)" }}
                  ></div>
                  <ContactForm />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-[#222] py-6 md:py-8 bg-[#0a0a0a]">
        <div className="container flex flex-col items-center justify-center gap-4 md:flex-row md:justify-between">
          <p className="text-center text-sm leading-loose text-gray-400 md:text-left">
            © 2023 Your Name. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="https://github.com/Michael262626" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-purple-400 hover:bg-purple-500/10"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/michael-dikandu-01b536260?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-purple-400 hover:bg-purple-500/10"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="mailto:contact@example.com">
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-purple-400 hover:bg-purple-500/10"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

