"use client"

import { useEffect, useRef, useState } from "react"

const skillCategories = [
  {
    title: "Programming",
    skills: ["Java", "JavaScript"],
  },
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "React.js", "Bootstrap"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "RESTful APIs"],
  },
  {
    title: "Databases",
    skills: ["MongoDB", "MySQL"],
  },
  {
    title: "Core Concepts",
    skills: ["DSA", "OOP", "DBMS", "OS", "Software Engineering"],
  },
  {
    title: "Tools & Cloud",
    skills: ["Git", "GitHub", "Maven", "AWS"],
  },
]

export function Skills() {
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
      id="skills"
      ref={sectionRef}
      className="py-24 px-6 md:px-12 lg:px-24 bg-card/50"
    >
      <div className="max-w-4xl mx-auto">
        <h2
          className={`text-3xl md:text-4xl font-bold text-foreground mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Technical Skills
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={`transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              <h3 className="text-sm font-mono text-primary mb-4 uppercase tracking-wider">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm bg-secondary text-secondary-foreground rounded-full border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 cursor-default"
                  >
                    {skill}
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
