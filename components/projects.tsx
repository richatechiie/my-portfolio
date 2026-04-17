"use client"

import { useEffect, useRef, useState } from "react"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "MediSphere",
    description:
      "Built 10+ secure RESTful APIs for authentication, appointment management, and role-based access using the MERN stack. Developed a modular service-oriented backend with centralized validation and error handling, and designed optimized MongoDB schemas for efficient querying.",
    tech: ["MongoDB", "Express.js", "React", "Node.js"],
    github: "https://github.com/Reetika-786/MediSphere",
  },
  {
    title: "Smart Clinic System",
    description:
      "Developed a Clinic Management System using Java and Maven with 6+ features including patient registration, appointment scheduling, and doctor management. Applied OOP and modular architecture for better scalability and maintainability.",
    tech: ["Java", "Maven", "OOP", "Git"],
    github: "https://github.com/pranjali2605/smartClinicSystem_Maven",
  },
  
]

export function Projects() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-24 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-4xl mx-auto">
        <h2
          className={`text-3xl md:text-4xl font-bold text-foreground mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Featured Projects
        </h2>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group p-6 md:p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${(index + 1) * 150}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl md:text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={`View ${project.title} live`}
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-mono text-primary bg-primary/10 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
