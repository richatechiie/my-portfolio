"use client"

import { useEffect, useRef, useState } from "react"
import { Mail, Github, Linkedin, Send } from "lucide-react"

export function Contact() {
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
      id="contact"
      ref={sectionRef}
      className="py-24 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-2xl mx-auto text-center">
        <h2
          className={`text-3xl md:text-4xl font-bold text-foreground mb-6 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Get In Touch
        </h2>

        <p
          className={`text-muted-foreground leading-relaxed mb-10 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          I&apos;m currently looking for new opportunities. Whether you have a question 
          or just want to say hi, I&apos;ll try my best to get back to you!
        </p>

        <a
          href="mailto:richa1268.be23@chitkara.edu.in"
          className={`inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "300ms" }}
        >
          <Send className="w-5 h-5" />
          Say Hello
        </a>

        <div
          className={`flex justify-center gap-8 mt-12 transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <a
            href="https://github.com/richatechiie"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/richa-kakkar-2012182aa/"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:richa1268.be23@chitkara.edu.in"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  )
}
