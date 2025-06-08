"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Play,
  Instagram,
  Twitter,
  Youtube,
  Linkedin,
  ArrowRight,
  Zap,
  Globe,
  Camera,
  Menu,
  X,
  ShoppingBag,
  Palette,
} from "lucide-react"
import { useState, useEffect, useRef } from "react"
import Link from "next/link"

// Animated Counter Component
function AnimatedCounter({
  target,
  suffix = "",
  isVisible,
  delay,
}: { target: number; suffix?: string; isVisible: boolean; delay: number }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isVisible) return

    const timer = setTimeout(() => {
      let start = 0
      const duration = 1500 // 1.5 seconds
      const increment = target / (duration / 16) // 60fps

      const counter = setInterval(() => {
        start += increment
        if (start >= target) {
          setCount(target)
          clearInterval(counter)
        } else {
          setCount(Math.floor(start))
        }
      }, 16)

      return () => clearInterval(counter)
    }, delay)

    return () => clearTimeout(timer)
  }, [isVisible, target, delay])

  return (
    <span>
      {count}
      {suffix}
    </span>
  )
}

export default function CTZNSRefinedLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [progress, setProgress] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [isPhilosophyVisible, setIsPhilosophyVisible] = useState(false)
  const [isMerchVisible, setIsMerchVisible] = useState(false)
  const [isWorkVisible, setIsWorkVisible] = useState(false)
  const timerRef = useRef<NodeJS.Timeout | null>(null)
  const philosophyRef = useRef<HTMLElement>(null)
  const merchRef = useRef<HTMLElement>(null)
  const workRef = useRef<HTMLElement>(null)

  const heroSlides = [
    {
      background:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&h=1080",
      title: "CREATIVE",
      subtitle: "ENERGY",
      description: "We create content that makes you do a double take. Mature aesthetics meet bold creativity.",
      accent: "green",
      icon: <Zap className="h-6 sm:h-8 md:h-10 w-6 sm:w-8 md:w-10 text-white" />,
      tagline: "Push Boundaries, Break Limits",
    },
    {
      background:
        "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1920&h=1080",
      title: "DIGITAL",
      subtitle: "INNOVATION",
      description: "Transforming ideas into viral content that resonates with internet culture and beyond.",
      accent: "red",
      icon: <Globe className="h-6 sm:h-8 md:h-10 w-6 sm:w-8 md:w-10 text-white" />,
      tagline: "Local Voice, Global Impact",
    },
    {
      background:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&h=1080",
      title: "CONTENT",
      subtitle: "CREATION",
      description: "Memes, edits, and internet culture commentary that makes viewers do a double take.",
      accent: "yellow",
      icon: <Camera className="h-6 sm:h-8 md:h-10 w-6 sm:w-8 md:w-10 text-white" />,
      tagline: "Unfiltered, Fresh, Fun",
    },
  ]

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setMobileMenuOpen(false)
  }

  // Philosophy section visibility observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsPhilosophyVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (philosophyRef.current) {
      observer.observe(philosophyRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Merch section visibility observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsMerchVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (merchRef.current) {
      observer.observe(merchRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Work section visibility observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsWorkVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (workRef.current) {
      observer.observe(workRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Clean up timer when component unmounts
  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
    }
  }, [])

  // Set up the timer for slide progression
  useEffect(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current)
    }

    if (!isAnimating) {
      timerRef.current = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setIsAnimating(true)
            setProgress(0) // Reset progress immediately

            setTimeout(() => {
              setCurrentSlide((current) => (current + 1) % heroSlides.length)
              setIsAnimating(false)
            }, 500)

            return 0
          }
          return prev + 2 // 2% every 100ms = 5 seconds total
        })
      }, 100)
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
    }
  }, [isAnimating, heroSlides.length])

  const handleDotClick = (index: number) => {
    if (index !== currentSlide && !isAnimating) {
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }

      setIsAnimating(true)
      setProgress(0) // Reset progress immediately

      setTimeout(() => {
        setCurrentSlide(index)
        setIsAnimating(false)
      }, 500)
    }
  }

  const currentSlideData = heroSlides[currentSlide]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-black/10 bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            <Link href="/" className="flex items-center">
              <img
                src="/images/ctzns-logo.png"
                alt="CTZNS - Citizens of the Internet"
                className="h-8 sm:h-10 md:h-12 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="/about"
                scroll={false}
                className="text-gray-500 hover:text-black transition-colors text-sm font-light tracking-wide uppercase"
              >
                About
              </Link>
              <Link
                href="/services"
                scroll={false}
                className="text-gray-500 hover:text-black transition-colors text-sm font-light tracking-wide uppercase"
              >
                Services
              </Link>
              <Link
                href="/portfolio"
                scroll={false}
                className="text-gray-500 hover:text-black transition-colors text-sm font-light tracking-wide uppercase"
              >
                Portfolio
              </Link>
              <Link
                href="/podcast"
                scroll={false}
                className="text-gray-500 hover:text-black transition-colors text-sm font-light tracking-wide uppercase"
              >
                Podcast
              </Link>
              <Link
                href="/products"
                scroll={false}
                className="text-gray-500 hover:text-black transition-colors text-sm font-light tracking-wide uppercase"
              >
                Products
              </Link>
              <Button
                variant="outline"
                className="border-black text-black hover:bg-black hover:text-white transition-all duration-300 font-light tracking-wide"
              >
                Start Project
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-black hover:text-gray-600 transition-colors"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`md:hidden border-t border-gray-100 bg-white transition-all duration-300 ease-in-out overflow-hidden ${
              mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="px-4 py-6 space-y-4">
              <Link
                href="/about"
                scroll={false}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-gray-500 hover:text-black transition-colors text-sm font-light tracking-wide uppercase w-full text-left"
              >
                About
              </Link>
              <Link
                href="/services"
                scroll={false}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-gray-500 hover:text-black transition-colors text-sm font-light tracking-wide uppercase w-full text-left"
              >
                Services
              </Link>
              <Link
                href="/portfolio"
                scroll={false}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-gray-500 hover:text-black transition-colors text-sm font-light tracking-wide uppercase w-full text-left"
              >
                Portfolio
              </Link>
              <Link
                href="/podcast"
                scroll={false}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-gray-500 hover:text-black transition-colors text-sm font-light tracking-wide uppercase w-full text-left"
              >
                Podcast
              </Link>
              <Link
                href="/products"
                scroll={false}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-gray-500 hover:text-black transition-colors text-sm font-light tracking-wide uppercase w-full text-left"
              >
                Products
              </Link>
              <Button
                variant="outline"
                className="w-full border-black text-black hover:bg-black hover:text-white transition-all duration-300 font-light tracking-wide mt-4"
              >
                Start Project
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Full Slideshow */}
      <section className="relative h-[95vh] min-h-[600px] max-h-[1200px] overflow-hidden">
        {/* Background Images */}
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-110"
            }`}
          >
            <div
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.background})` }}
            >
              <div className="absolute inset-0 bg-black/40"></div>
            </div>
          </div>
        ))}

        {/* Content Overlay */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center h-full py-8 sm:py-12 lg:py-16">
              <div className="lg:col-span-7 text-center lg:text-left order-2 lg:order-1">
                <div className="space-y-4 sm:space-y-6 lg:space-y-8">
                  <div className="space-y-3 sm:space-y-4 lg:space-y-6">
                    {/* Animated Brand Line */}
                    <div
                      className={`flex items-center justify-center lg:justify-start space-x-3 transition-all duration-700 ${
                        isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
                      }`}
                      style={{ transitionDelay: isAnimating ? "0ms" : "200ms" }}
                    >
                      <div
                        className={`w-6 sm:w-8 lg:w-12 h-0.5 transition-colors duration-500 ${
                          currentSlideData.accent === "green"
                            ? "bg-green-500"
                            : currentSlideData.accent === "red"
                              ? "bg-red-500"
                              : "bg-yellow-400"
                        }`}
                      ></div>
                      <span className="text-xs sm:text-sm font-light tracking-widest uppercase text-white/80">
                        Production Company
                      </span>
                    </div>

                    {/* Animated Main Title */}
                    <div className="space-y-1 sm:space-y-2">
                      <div
                        className={`transition-all duration-700 ${
                          isAnimating ? "opacity-0 translate-x-8 scale-95" : "opacity-100 translate-x-0 scale-100"
                        }`}
                        style={{ transitionDelay: isAnimating ? "0ms" : "400ms" }}
                      >
                        <div className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tighter text-white leading-none">
                          CTZNS
                        </div>
                      </div>

                      <div
                        className={`transition-all duration-700 ${
                          isAnimating ? "opacity-0 translate-x-8 scale-95" : "opacity-100 translate-x-0 scale-100"
                        }`}
                        style={{ transitionDelay: isAnimating ? "0ms" : "600ms" }}
                      >
                        <div className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-light tracking-widest text-white/90 uppercase">
                          Citizens of the Internet
                        </div>
                      </div>
                    </div>

                    {/* Animated Dynamic Title */}
                    <div className="space-y-1 sm:space-y-2">
                      <div
                        className={`transition-all duration-700 ${
                          isAnimating ? "opacity-0 translate-y-8" : "opacity-100 translate-y-0"
                        }`}
                        style={{ transitionDelay: isAnimating ? "0ms" : "800ms" }}
                      >
                        <div
                          className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tighter leading-none transition-colors duration-500 ${
                            currentSlideData.accent === "green"
                              ? "text-green-400"
                              : currentSlideData.accent === "red"
                                ? "text-red-400"
                                : "text-yellow-400"
                          }`}
                        >
                          {currentSlideData.title}
                        </div>
                      </div>

                      <div
                        className={`transition-all duration-700 ${
                          isAnimating ? "opacity-0 translate-y-8" : "opacity-100 translate-y-0"
                        }`}
                        style={{ transitionDelay: isAnimating ? "0ms" : "1000ms" }}
                      >
                        <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black tracking-tighter text-white leading-none">
                          {currentSlideData.subtitle}
                        </div>
                      </div>
                    </div>

                    {/* Animated Description */}
                    <div
                      className={`max-w-lg mx-auto lg:mx-0 transition-all duration-700 ${
                        isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
                      }`}
                      style={{ transitionDelay: isAnimating ? "0ms" : "1200ms" }}
                    >
                      <p className="text-sm sm:text-base md:text-lg lg:text-xl font-light text-white/90 leading-relaxed">
                        {currentSlideData.description}
                      </p>
                    </div>
                  </div>

                  {/* Animated Buttons */}
                  <div
                    className={`flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start transition-all duration-700 ${
                      isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
                    }`}
                    style={{ transitionDelay: isAnimating ? "0ms" : "1400ms" }}
                  >
                    <button onClick={() => scrollToSection("work")} className="w-full sm:w-auto">
                      <Button
                        size="lg"
                        className="bg-white text-black hover:bg-gray-100 px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 font-light tracking-wide w-full text-sm sm:text-base"
                      >
                        View Portfolio
                        <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                      </Button>
                    </button>
                    <a
                      href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto"
                    >
                      <Button
                        size="lg"
                        className="bg-black text-white hover:bg-gray-800 px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 font-light tracking-wide w-full text-sm sm:text-base"
                      >
                        <Play className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                        Watch Reel
                      </Button>
                    </a>
                  </div>

                  {/* Animated Tagline with Dots */}
                  <div
                    className={`pt-2 sm:pt-4 lg:pt-8 transition-all duration-700 ${
                      isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
                    }`}
                    style={{ transitionDelay: isAnimating ? "0ms" : "1600ms" }}
                  >
                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-3 sm:space-y-0 sm:space-x-6">
                      <p className="text-xs sm:text-sm font-light tracking-widest uppercase text-white/70">
                        {currentSlideData.tagline}
                      </p>

                      {/* Slideshow Controls - Now inline with tagline */}
                      <div className="flex justify-center space-x-3 sm:space-x-4">
                        {heroSlides.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => handleDotClick(index)}
                            className="relative w-3 h-3 sm:w-4 sm:h-4 rounded-full focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black/50"
                          >
                            {/* Base dot */}
                            <div
                              className={`w-full h-full rounded-full transition-all duration-300 ${
                                index === currentSlide ? "bg-white" : "bg-white/40 hover:bg-white/60"
                              }`}
                            ></div>

                            {/* Progress ring for active dot - only show when not animating */}
                            {index === currentSlide && !isAnimating && (
                              <div className="absolute inset-0 -m-0.5 sm:-m-1">
                                <svg className="w-4 h-4 sm:w-6 sm:h-6 transform -rotate-90" viewBox="0 0 24 24">
                                  <circle
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    fill="none"
                                    className="text-white/20"
                                  />
                                  <circle
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    fill="none"
                                    strokeDasharray={`${2 * Math.PI * 10}`}
                                    strokeDashoffset={`${2 * Math.PI * 10 * (1 - progress / 100)}`}
                                    className={`transition-all duration-100 ease-linear ${
                                      currentSlideData.accent === "green"
                                        ? "text-green-400"
                                        : currentSlideData.accent === "red"
                                          ? "text-red-400"
                                          : "text-yellow-400"
                                    }`}
                                    strokeLinecap="round"
                                  />
                                </svg>
                              </div>
                            )}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Animated Icon Element */}
              <div className="lg:col-span-5 order-1 lg:order-2">
                <div
                  className={`relative max-w-xs sm:max-w-sm md:max-w-md mx-auto lg:max-w-none transition-all duration-1000 ${
                    isAnimating ? "opacity-0 scale-75 rotate-12" : "opacity-100 scale-100 rotate-0"
                  }`}
                  style={{ transitionDelay: isAnimating ? "0ms" : "800ms" }}
                >
                  <div className="aspect-square bg-white/10 backdrop-blur-sm rounded-sm relative overflow-hidden border border-white/20">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center space-y-3 sm:space-y-4">
                        <div
                          className={`w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full mx-auto flex items-center justify-center backdrop-blur-sm transition-colors duration-500 ${
                            currentSlideData.accent === "green"
                              ? "bg-green-500/90"
                              : currentSlideData.accent === "red"
                                ? "bg-red-500/90"
                                : "bg-yellow-400/90"
                          }`}
                        >
                          {currentSlideData.icon}
                        </div>
                        <p className="text-white font-light tracking-wide text-sm sm:text-base md:text-lg">
                          {currentSlideData.title} {currentSlideData.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Floating accent elements */}
                    <div
                      className={`absolute top-3 sm:top-4 md:top-6 lg:top-8 right-3 sm:right-4 md:right-6 lg:right-8 w-2 sm:w-3 md:w-4 h-2 sm:h-3 md:h-4 rounded-full transition-colors duration-500 ${
                        currentSlideData.accent === "green"
                          ? "bg-green-400"
                          : currentSlideData.accent === "red"
                            ? "bg-red-400"
                            : "bg-yellow-300"
                      }`}
                    ></div>
                    <div className="absolute bottom-6 sm:bottom-8 md:bottom-10 lg:bottom-12 left-3 sm:left-4 md:left-6 lg:left-8 w-3 sm:w-4 md:w-5 lg:w-6 h-3 sm:h-4 md:h-5 lg:h-6 bg-white/30 rounded-full"></div>
                    <div className="absolute top-1/2 left-1 sm:left-2 md:left-3 lg:left-4 w-0.5 sm:w-1 md:w-1.5 lg:w-2 h-8 sm:h-10 md:h-12 lg:h-16 bg-white/20"></div>
                  </div>

                  {/* Floating elements */}
                  <div
                    className={`absolute -top-1 sm:-top-2 md:-top-3 lg:-top-4 -left-1 sm:-left-2 md:-left-3 lg:-left-4 w-4 sm:w-5 md:w-6 lg:w-8 h-4 sm:h-5 md:h-6 lg:h-8 border-2 rounded-full transition-colors duration-500 ${
                      currentSlideData.accent === "green"
                        ? "border-green-400"
                        : currentSlideData.accent === "red"
                          ? "border-red-400"
                          : "border-yellow-300"
                    }`}
                  ></div>
                  <div className="absolute -bottom-1 sm:-bottom-2 md:-bottom-3 lg:-bottom-4 -right-1 sm:-right-2 md:-right-3 lg:-right-4 w-6 sm:w-7 md:w-10 lg:w-12 h-6 sm:h-7 md:h-10 lg:h-12 bg-white/10 rounded-sm"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Background accent elements */}
        <div
          className={`absolute top-8 sm:top-12 md:top-16 lg:top-32 left-0 w-0.5 sm:w-0.5 md:w-1 h-8 sm:h-12 md:h-16 lg:h-32 transition-colors duration-500 ${
            currentSlideData.accent === "green"
              ? "bg-green-500/40"
              : currentSlideData.accent === "red"
                ? "bg-red-500/40"
                : "bg-yellow-400/40"
          }`}
        ></div>
        <div className="absolute bottom-8 sm:bottom-12 md:bottom-16 lg:bottom-32 right-0 w-0.5 sm:w-0.5 md:w-1 h-8 sm:h-12 md:h-16 lg:h-32 bg-white/20"></div>
      </section>

      {/* Philosophy Section */}
      <section id="philosophy" ref={philosophyRef} className="py-12 sm:py-24 bg-white relative overflow-hidden">
        {/* Animated Background Elements with Mascots */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className={`absolute top-20 left-10 w-32 h-32 bg-green-500/5 rounded-full transition-all duration-1000 ${
              isPhilosophyVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
            }`}
          ></div>
          <div
            className={`absolute bottom-20 right-10 w-24 h-24 bg-yellow-400/5 rounded-full transition-all duration-1000 delay-300 ${
              isPhilosophyVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
            }`}
          ></div>
          <div
            className={`absolute top-1/2 left-1/4 w-16 h-16 bg-red-500/5 rounded-full transition-all duration-1000 delay-500 ${
              isPhilosophyVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
            }`}
          ></div>

          {/* Floating Mascots */}
          <div
            className={`absolute top-32 right-20 w-12 h-12 transition-all duration-1000 delay-700 ${
              isPhilosophyVisible ? "opacity-20 scale-100 rotate-12" : "opacity-0 scale-50 rotate-0"
            }`}
          >
            <img src="/images/mascot-1.png" alt="CTZNS Mascot" className="w-full h-full object-contain" />
          </div>
          <div
            className={`absolute bottom-32 left-32 w-14 h-14 transition-all duration-1000 delay-900 ${
              isPhilosophyVisible ? "opacity-15 scale-100 -rotate-12" : "opacity-0 scale-50 rotate-0"
            }`}
          >
            <img src="/images/mascot-3.png" alt="CTZNS Mascot" className="w-full h-full object-contain" />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-4 sm:space-y-6 text-center lg:text-left">
                <div
                  className={`flex items-center justify-center lg:justify-start space-x-3 transition-all duration-700 ${
                    isPhilosophyVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                >
                  <div className="w-8 sm:w-12 h-0.5 bg-black"></div>
                  <span className="text-xs sm:text-sm font-light tracking-widest uppercase text-gray-600">
                    Philosophy
                  </span>
                </div>

                <div
                  className={`transition-all duration-700 delay-200 ${
                    isPhilosophyVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                >
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter text-black">
                    Create Your
                    <span className="block text-green-500 relative">
                      Reality
                      {/* Animated underline */}
                      <div
                        className={`absolute bottom-0 left-0 h-1 bg-green-500/20 transition-all duration-1000 delay-700 ${
                          isPhilosophyVisible ? "w-full" : "w-0"
                        }`}
                      ></div>
                    </span>
                  </h2>
                </div>
                <div
                  className={`w-16 h-1 bg-green-500 mx-auto lg:mx-0 mt-4 transition-all duration-1000 delay-700 ${
                    isPhilosophyVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
                  }`}
                ></div>
              </div>

              <div
                className={`space-y-4 sm:space-y-6 text-base sm:text-lg font-light text-gray-700 leading-relaxed transition-all duration-700 delay-400 ${
                  isPhilosophyVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <p>
                  We take your understanding of concepts and add our unique humorous and mischievous twist. Our content
                  reflects real life in a fresh, fun, and unfiltered way.
                </p>
                <p>
                  Pairing rich, edgy, humorous internal content with a mature, simple, and balanced external aesthetic
                  creates contrasts that keep audiences intrigued.
                </p>
              </div>

              <div
                className={`grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 sm:pt-8 transition-all duration-700 delay-600 ${
                  isPhilosophyVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <div className="space-y-3 text-center sm:text-left group">
                  <div className="w-8 h-8 bg-red-500 rounded-sm flex items-center justify-center mx-auto sm:mx-0 group-hover:scale-110 transition-transform duration-300">
                    <Camera className="h-4 w-4 text-white" />
                  </div>
                  <h3 className="font-semibold text-black tracking-wide">Content Creation</h3>
                  <p className="text-sm font-light text-gray-600">Memes, edits, and internet culture commentary</p>
                </div>
                <div className="space-y-3 text-center sm:text-left group">
                  <div className="w-8 h-8 bg-yellow-400 rounded-sm flex items-center justify-center mx-auto sm:mx-0 group-hover:scale-110 transition-transform duration-300">
                    <Globe className="h-4 w-4 text-black" />
                  </div>
                  <h3 className="font-semibold text-black tracking-wide">Brand Strategy</h3>
                  <p className="text-sm font-light text-gray-600">Mature aesthetics with creative edge</p>
                </div>
              </div>
            </div>

            <div className="space-y-6 sm:space-y-8 mt-8 lg:mt-0">
              {/* Animated Quote/Highlight */}
              <div
                className={`bg-gray-50/50 p-6 sm:p-8 border-l-4 border-green-500 relative overflow-hidden transition-all duration-700 delay-300 ${
                  isPhilosophyVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                }`}
              >
                {/* Animated background accent */}
                <div
                  className={`absolute top-0 right-0 w-16 h-16 bg-green-500/5 rounded-full transition-all duration-1000 delay-800 ${
                    isPhilosophyVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
                  }`}
                ></div>
                <blockquote className="text-xl sm:text-2xl font-light text-gray-800 leading-relaxed italic relative z-10">
                  "The type of brand and content to make a viewer do a double take"
                </blockquote>
              </div>

              {/* Animated Stats with Counters */}
              <div
                className={`grid grid-cols-3 gap-4 sm:gap-6 transition-all duration-700 delay-500 ${
                  isPhilosophyVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <div className="text-center space-y-2 group">
                  <div
                    className={`text-2xl sm:text-3xl font-black text-black transition-all duration-500 delay-700 ${
                      isPhilosophyVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
                    } group-hover:scale-110`}
                  >
                    <AnimatedCounter target={100} suffix="+" isVisible={isPhilosophyVisible} delay={700} />
                  </div>
                  <div className="text-xs sm:text-sm font-light tracking-wide uppercase text-gray-600">Projects</div>
                  {/* Animated progress bar */}
                  <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-green-500 transition-all duration-1000 delay-1000 ${
                        isPhilosophyVisible ? "w-full" : "w-0"
                      }`}
                    ></div>
                  </div>
                </div>
                <div className="text-center space-y-2 group">
                  <div
                    className={`text-2xl sm:text-3xl font-black text-green-500 transition-all duration-500 delay-800 ${
                      isPhilosophyVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
                    } group-hover:scale-110`}
                  >
                    HTX
                  </div>
                  <div className="text-xs sm:text-sm font-light tracking-wide uppercase text-gray-600">Based</div>
                  {/* Animated progress bar */}
                  <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-yellow-400 transition-all duration-1000 delay-1100 ${
                        isPhilosophyVisible ? "w-full" : "w-0"
                      }`}
                    ></div>
                  </div>
                </div>
                <div className="text-center space-y-2 group">
                  <div
                    className={`text-2xl sm:text-3xl font-black text-black transition-all duration-500 delay-900 ${
                      isPhilosophyVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
                    } group-hover:scale-110`}
                  >
                    <AnimatedCounter target={24} suffix="/7" isVisible={isPhilosophyVisible} delay={900} />
                  </div>
                  <div className="text-xs sm:text-sm font-light tracking-wide uppercase text-gray-600">Connected</div>
                  {/* Animated progress bar */}
                  <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-red-500 transition-all duration-1000 delay-1200 ${
                        isPhilosophyVisible ? "w-full" : "w-0"
                      }`}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Animated side accents */}
        <div
          className={`absolute top-16 sm:top-32 left-0 w-0.5 sm:w-1 bg-green-500/40 transition-all duration-1000 delay-1000 ${
            isPhilosophyVisible ? "h-16 sm:h-32 opacity-100" : "h-0 opacity-0"
          }`}
        ></div>
        <div
          className={`absolute bottom-16 sm:bottom-32 right-0 w-0.5 sm:w-1 bg-black/20 transition-all duration-1000 delay-1100 ${
            isPhilosophyVisible ? "h-16 sm:h-32 opacity-100" : "h-0 opacity-0"
          }`}
        ></div>
      </section>

      {/* Merchandise Section */}
      <section id="merchandise" ref={merchRef} className="py-12 sm:py-24 bg-white relative overflow-hidden">
        {/* Animated Background Elements with Mascots */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className={`absolute top-32 right-16 w-40 h-40 bg-green-500/3 rounded-full transition-all duration-1000 ${
              isMerchVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
            }`}
          ></div>
          <div
            className={`absolute bottom-32 left-16 w-28 h-28 bg-red-500/3 rounded-full transition-all duration-1000 delay-400 ${
              isMerchVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
            }`}
          ></div>

          {/* Floating Mascots */}
          <div
            className={`absolute top-20 left-20 w-16 h-16 transition-all duration-1000 delay-600 ${
              isMerchVisible ? "opacity-30 scale-100 rotate-12" : "opacity-0 scale-50 rotate-0"
            }`}
          >
            <img src="/images/mascot-2.png" alt="CTZNS Mascot" className="w-full h-full object-contain" />
          </div>
          <div
            className={`absolute bottom-40 right-32 w-20 h-20 transition-all duration-1000 delay-800 ${
              isMerchVisible ? "opacity-20 scale-100 -rotate-12" : "opacity-0 scale-50 rotate-0"
            }`}
          >
            <img src="/images/mascot-1.png" alt="CTZNS Mascot" className="w-full h-full object-contain" />
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <div className="space-y-8 sm:space-y-12">
            <div className="space-y-4 sm:space-y-6">
              <div
                className={`flex items-center justify-center space-x-3 transition-all duration-700 ${
                  isMerchVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                <div className="w-8 sm:w-12 h-0.5 bg-black"></div>
                <span className="text-xs sm:text-sm font-light tracking-widest uppercase text-gray-600">
                  Merchandise
                </span>
                <div className="w-8 sm:w-12 h-0.5 bg-black"></div>
              </div>

              <div
                className={`transition-all duration-700 delay-200 ${
                  isMerchVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter text-black">
                  Wear Your Brand
                  <span className="block text-green-500 relative">
                    Story
                    {/* Animated underline */}
                    <div
                      className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 bg-green-500/20 transition-all duration-1000 delay-700 ${
                        isMerchVisible ? "w-full" : "w-0"
                      }`}
                    ></div>
                  </span>
                </h2>
              </div>
              <div
                className={`w-16 h-1 bg-green-500 mx-auto mt-4 transition-all duration-1000 delay-700 ${
                  isMerchVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
                }`}
              ></div>

              <div
                className={`transition-all duration-700 delay-400 ${
                  isMerchVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <p className="text-lg sm:text-xl font-light text-gray-700 max-w-3xl mx-auto leading-relaxed">
                  Transform your brand identity into tangible merchandise that tells your story. From custom apparel to
                  branded accessories, we create products that your audience will love to wear and share. Whether you
                  need premium hoodies, custom t-shirts, or promotional items, we handle everything from design to
                  production with quality materials and fast turnaround times.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div
              className={`transition-all duration-700 delay-600 ${
                isMerchVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <Link href="/products">
                <Button
                  size="lg"
                  className="bg-green-500 hover:bg-green-600 text-black font-medium tracking-wide text-lg px-8 py-4"
                >
                  <ShoppingBag className="mr-2 h-5 w-5" />
                  Shop Merchandise
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Animated side accents */}
        <div
          className={`absolute top-16 sm:top-32 left-0 w-0.5 sm:w-1 bg-green-500/40 transition-all duration-1000 delay-1000 ${
            isMerchVisible ? "h-16 sm:h-32 opacity-100" : "h-0 opacity-0"
          }`}
        ></div>
        <div
          className={`absolute bottom-16 sm:bottom-32 right-0 w-0.5 sm:w-1 bg-black/20 transition-all duration-1000 delay-1100 ${
            isMerchVisible ? "h-16 sm:h-32 opacity-100" : "h-0 opacity-0"
          }`}
        ></div>
      </section>

      {/* YouTube Content Section */}
      <section id="work" ref={workRef} className="py-12 sm:py-24 bg-white relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className={`absolute top-20 left-10 w-32 h-32 bg-green-500/5 rounded-full transition-all duration-1000 ${
              isWorkVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
            }`}
          ></div>
          <div
            className={`absolute bottom-20 right-10 w-24 h-24 bg-yellow-400/5 rounded-full transition-all duration-1000 delay-300 ${
              isWorkVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
            }`}
          ></div>
          <div
            className={`absolute top-1/2 left-1/4 w-16 h-16 bg-red-500/5 rounded-full transition-all duration-1000 delay-500 ${
              isWorkVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
            }`}
          ></div>
          {/* Floating geometric elements */}
          <div className="absolute top-1/4 right-10 w-6 h-6 bg-white/10 rounded-sm rotate-45"></div>
          <div className="absolute bottom-10 left-1/3 w-4 h-4 bg-white/20 rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="space-y-8 sm:space-y-16">
            <div className="text-center space-y-4 sm:space-y-6">
              <div
                className={`flex items-center justify-center space-x-3 transition-all duration-700 ${
                  isWorkVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                <div className="w-8 sm:w-12 h-0.5 bg-black"></div>
                <span className="text-xs sm:text-sm font-light tracking-widest uppercase text-gray-600">Content</span>
                <div className="w-8 sm:w-12 h-0.5 bg-black"></div>
              </div>

              <div
                className={`transition-all duration-700 delay-200 ${
                  isWorkVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter text-black">
                  Latest
                  <span className="text-green-500 relative block">
                    Creations
                    {/* Animated underline */}
                    <div
                      className={`absolute bottom-0 left-0 h-1 bg-green-500/20 transition-all duration-1000 delay-700 ${
                        isWorkVisible ? "w-full" : "w-0"
                      }`}
                    ></div>
                  </span>
                </h2>
              </div>
              <div
                className={`w-16 h-1 bg-green-500 mx-auto mt-4 transition-all duration-1000 delay-700 ${
                  isWorkVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
                }`}
              ></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {[
                {
                  title: "Brand Identity Revolution",
                  description: "How we transformed a startup's visual identity",
                  thumbnail:
                    "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400",
                  videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                },
                {
                  title: "Creative Process Behind the Scenes",
                  description: "Inside our Houston studio creative workflow",
                  thumbnail:
                    "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400",
                  videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                },
              ].map((video, index) => (
                <a
                  key={index}
                  href={video.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group cursor-pointer transition-all duration-700 delay-${index * 200} ${
                    isWorkVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                  }`}
                >
                  <div className="aspect-video rounded-sm relative overflow-hidden">
                    <img
                      src={video.thumbnail || "/placeholder.svg"}
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 sm:w-16 h-12 sm:h-16 bg-red-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Play className="h-6 sm:h-8 w-6 sm:w-8 text-white ml-1" />
                      </div>
                    </div>

                    {/* Corner accent */}
                    <div className="absolute top-3 sm:top-4 right-3 sm:right-4 w-2 sm:w-3 h-2 sm:h-3 bg-green-500 rounded-full"></div>
                  </div>

                  <div className="pt-4 space-y-2">
                    <h3 className="text-base sm:text-lg font-semibold text-black tracking-wide group-hover:text-green-600 transition-colors">
                      {video.title}
                    </h3>
                    <p className="text-sm font-light text-gray-600">{video.description}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Animated side accents */}
        <div
          className={`absolute top-16 sm:top-32 left-0 w-0.5 sm:w-1 bg-green-500/40 transition-all duration-1000 delay-1000 ${
            isWorkVisible ? "h-16 sm:h-32 opacity-100" : "h-0 opacity-0"
          }`}
        ></div>
        <div
          className={`absolute bottom-16 sm:bottom-32 right-0 w-0.5 sm:w-1 bg-black/20 transition-all duration-1000 delay-1100 ${
            isWorkVisible ? "h-16 sm:h-32 opacity-100" : "h-0 opacity-0"
          }`}
        ></div>
      </section>

      {/* Portfolio Showcase */}
      <section className="py-12 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 sm:space-y-16">
            <div className="text-center space-y-4 sm:space-y-6">
              <div className="flex items-center justify-center space-x-3">
                <div className="w-8 sm:w-12 h-0.5 bg-black"></div>
                <span className="text-xs sm:text-sm font-light tracking-widest uppercase text-gray-600">Portfolio</span>
                <div className="w-8 sm:w-12 h-0.5 bg-black"></div>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter text-black">
                Featured
                <span className="text-green-500"> Work</span>
              </h2>
              <div className="w-16 h-1 bg-green-500 mx-auto mt-4"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
              {/* Left Column - Portfolio Highlights */}
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <Link href="/portfolio/summer-2024-lookbook" className="block">
                    <div className="aspect-[4/5] rounded-sm hover:shadow-lg transition-all duration-300 group cursor-pointer relative overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=500"
                        alt="Summer 2024 Lookbook"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>

                      {/* Title overlay at bottom left */}
                      <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent">
                        <h3 className="text-white text-sm font-medium">Summer 2024 Lookbook</h3>
                      </div>
                    </div>
                  </Link>

                  <Link href="/portfolio/winter-2023-lookbook" className="block">
                    <div className="aspect-[4/5] rounded-sm hover:shadow-lg transition-all duration-300 group cursor-pointer relative overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1542744094-3a31f272c490?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=500"
                        alt="Winter 2023 Lookbook"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>

                      {/* Title overlay at bottom left */}
                      <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent">
                        <h3 className="text-white text-sm font-medium">Winter 2023 Lookbook</h3>
                      </div>
                    </div>
                  </Link>
                </div>

                <Link href="/portfolio/brand-identity-revolution" className="block">
                  <div className="aspect-video rounded-sm hover:shadow-lg transition-all duration-300 group cursor-pointer relative overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=450"
                      alt="Brand Identity Revolution"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>

                    {/* Play button overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 sm:w-16 h-12 sm:h-16 bg-red-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Play className="h-6 sm:h-8 w-6 sm:w-8 text-white ml-1" />
                      </div>
                    </div>

                    {/* Title overlay at bottom left */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                      <h3 className="text-white text-base font-medium">Brand Identity Revolution</h3>
                    </div>
                  </div>
                </Link>
              </div>

              {/* Right Column - CTA */}
              <div className="flex items-center">
                <div className="space-y-8 p-6 sm:p-8 bg-gray-50/50 rounded-sm">
                  <div className="space-y-4">
                    <h3 className="text-2xl sm:text-3xl font-bold text-black tracking-wide">
                      Discover Our Complete Portfolio
                    </h3>
                    <div className="w-12 h-1 bg-green-500"></div>
                    <p className="text-base font-light text-gray-700 leading-relaxed">
                      Explore our full collection of creative work, including lookbooks, past shoots, and brand identity
                      projects. See how we've helped brands stand out in the digital landscape.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center">
                        <Camera className="h-5 w-5 text-green-500" />
                      </div>
                      <p className="text-sm font-light text-gray-700">Professional photography and videography</p>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center">
                        <Palette className="h-5 w-5 text-green-500" />
                      </div>
                      <p className="text-sm font-light text-gray-700">Brand identity and visual design</p>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center">
                        <ShoppingBag className="h-5 w-5 text-green-500" />
                      </div>
                      <p className="text-sm font-light text-gray-700">Custom merchandise and apparel</p>
                    </div>
                  </div>

                  <Link href="/portfolio">
                    <Button
                      size="lg"
                      className="w-full bg-green-500 hover:bg-green-600 text-black font-medium tracking-wide mt-6"
                    >
                      View Full Portfolio
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Newsletter Section - Left Side */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-wide">Stay Connected</h3>
                <div className="w-12 h-1 bg-green-500"></div>
                <p className="text-base font-light text-gray-300 leading-relaxed">
                  Get the latest updates on our boundary-pushing content and exclusive insights from Citizens of the
                  Internet.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-green-400 font-light flex-1"
                  />
                  <Button className="bg-green-500 hover:bg-green-600 text-black font-medium tracking-wide">
                    Subscribe
                  </Button>
                </div>
              </div>

              {/* Social Links */}
              <div className="space-y-4 pt-4">
                <p className="text-sm font-light text-gray-400">Follow us</p>
                <div className="flex space-x-6">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-green-400 transition-colors"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-green-400 transition-colors"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-green-400 transition-colors"
                  >
                    <Youtube className="h-5 w-5" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-green-400 transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Main CTA Content - Right Side */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter">
                  Ready to
                  <span className="block text-green-400">Start Creating?</span>
                </h2>
                <div className="w-16 h-1 bg-green-500"></div>
                <p className="text-lg font-light text-gray-300 leading-relaxed">
                  Let's bring your vision to life. From brand identity to digital strategy, we're here to help you stand
                  out in the digital world.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/services" className="flex-1">
                  <Button
                    size="lg"
                    className="bg-green-500 hover:bg-green-600 text-black font-medium tracking-wide w-full"
                  >
                    View Services
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-black bg-white hover:bg-gray-100 font-light tracking-wide flex-1"
                >
                  Get in Touch
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-8 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 sm:space-y-6 md:space-y-0">
            <div className="text-center md:text-left">
              <img
                src="/images/ctzns-logo.png"
                alt="CTZNS - Citizens of the Internet"
                className="h-8 sm:h-10 md:h-12 w-auto mx-auto md:mx-0"
              />
            </div>

            <div className="text-xs sm:text-sm font-light tracking-widest uppercase text-gray-500">
              Push Boundaries, Break Limits
            </div>

            <div className="text-center">
              <p className="text-sm font-light text-gray-500">© 2024 Citizens of the Internet</p>
              <p className="text-xs font-light tracking-widest uppercase text-gray-400 mt-1">Houston, Texas</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
