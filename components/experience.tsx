"use client"

import { useEffect, useRef, useState } from "react"
import { Briefcase, Award } from "lucide-react"

const experiences = [
  {
    title: "Documentation & Process Optimization Coordinator",
    company: "Chitkara Happiness Center",
    period: "April 2025 – June 2025",
    points: [
      "Designed standardized documentation frameworks aligned with SDLC, improving collaboration and reducing redundancy across multiple initiatives.",
      "Created and maintained 20+ structured documents using templates and version control, ensuring traceability and organized knowledge management.",
      "Coordinated the development and publication of a multi-section institutional magazine, managing documentation, content structuring, and timely release.",
    ],
  },
]

const certifications = [
  "The Arts and Science of Relationships: Understanding Human Needs - Coursera",
  "Full Stack Development (MERN Stack) - ThingQubator",
  "Introduction to Modern Technologies - Cisco Networking Academy",
  "Cloud Data Engineering - Coursera",
  "Participant | HackWithHer | March 2025",
]

export function Experience() {
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
      id="experience"
      ref={sectionRef}
      className="py-24 px-6 md:px-12 lg:px-24 bg-card/50"
    >
      <div className="max-w-4xl mx-auto">
        <h2
          className={`text-3xl md:text-4xl font-bold text-foreground mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Experience
        </h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={exp.title}
              className={`relative pl-8 border-l-2 border-border transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${(index + 1) * 150}ms` }}
            >
              <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                <Briefcase className="w-3 h-3 text-primary-foreground" />
              </div>

              <div className="mb-4">
                <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                <p className="text-primary font-medium">{exp.company}</p>
                <p className="text-sm text-muted-foreground font-mono">{exp.period}</p>
              </div>

              <ul className="space-y-3">
                {exp.points.map((point, i) => (
                  <li key={i} className="text-muted-foreground leading-relaxed flex gap-2">
                    <span className="text-primary shrink-0">▹</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className={`mt-16 transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
            <Award className="w-6 h-6 text-primary" />
            Certifications & Activities
          </h3>

          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors"
              >
                <p className="text-sm text-muted-foreground">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
