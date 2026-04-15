"use client"

import { useEffect, useRef, useState } from "react"
import { GraduationCap, Award } from "lucide-react"

export function About() {
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
      id="about"
      ref={sectionRef}
      className="py-24 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-4xl mx-auto">
        <h2
          className={`text-3xl md:text-4xl font-bold text-foreground mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <p className="text-muted-foreground leading-relaxed mb-6">
              I&apos;m a Computer Science undergraduate with hands-on experience in 
              backend development and full-stack engineering using MERN stack and Java.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I specialize in building scalable RESTful APIs, implementing secure 
              authentication with JWT and Role-Based Access Control, and designing 
              optimized database schemas. I follow SDLC and Agile methodologies 
              with a strong foundation in OOP, Data Structures & Algorithms, DBMS, 
              and system design principles.
            </p>
          </div>

          <div
            className={`space-y-6 transition-all duration-700 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="flex gap-4 p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors">
              <GraduationCap className="w-6 h-6 text-primary shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-foreground mb-1">Education</h3>
                <p className="text-sm text-muted-foreground">B.E. Computer Science</p>
                <p className="text-sm text-muted-foreground">Chitkara University | CGPA: 8.8</p>
                <p className="text-xs text-primary mt-1">2023 - Present</p>
              </div>
            </div>

            <div className="flex gap-4 p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors">
              <Award className="w-6 h-6 text-primary shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-foreground mb-1">Class XII (CBSE)</h3>
                <p className="text-sm text-muted-foreground">B.K. Senior Secondary School, Bhiwani</p>
                <p className="text-sm text-primary">91.8%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
