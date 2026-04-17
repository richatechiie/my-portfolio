"use client"

import { useEffect, useState } from "react"
import { Github, Linkedin, Mail, MapPin, ChevronDown } from "lucide-react"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl">
        <div
          className={`transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-primary font-mono text-sm md:text-base mb-4 flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            Bhiwani, Haryana
          </p>
        </div>

        <h1
          className={`text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-balance">Richa</span>
        </h1>

        <h2
          className={`text-xl md:text-2xl lg:text-3xl text-primary font-medium mb-8 transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Full Stack Developer
        </h2>

        <p
          className={`text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed mb-10 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Computer Science undergraduate with hands-on experience in backend development and 
          full-stack engineering. Experienced in building scalable RESTful APIs, implementing 
          secure authentication, and designing optimized database schemas.
        </p>

        <div
          className={`flex gap-6 transition-all duration-1000 delay-600 ${
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

      <a
        href="#about"
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-all duration-300 animate-bounce ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        aria-label="Scroll to About section"
      >
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  )
}
