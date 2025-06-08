"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, Instagram, Twitter, Youtube, Linkedin, Menu, X } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import Link from "next/link"

export default function PortfolioPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isHeroVisible, setIsHeroVisible] = useState(false)
  const [isLookbooksVisible, setIsLookbooksVisible] = useState(false)
  const [isPastShootsVisible, setIsPastShootsVisible] = useState(false)
  const [isPastWorkVisible, setIsPastWorkVisible] = useState(false)
  const heroRef = useRef<HTMLElement>(null)
  const lookbooksRef = useRef<HTMLElement>(null)
  const pastShootsRef = useRef<HTMLElement>(null)
  const pastWorkRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observers = [
      {
        ref: heroRef,
        setter: setIsHeroVisible,
        threshold: 0.3,
      },
      {
        ref: lookbooksRef,
        setter: setIsLookbooksVisible,
        threshold: 0.2,
      },
      {
        ref: pastShootsRef,
        setter: setIsPastShootsVisible,
        threshold: 0.2,
      },
      {
        ref: pastWorkRef,
        setter: setIsPastWorkVisible,
        threshold: 0.2,
      },
    ]

    observers.forEach(({ ref, setter, threshold }) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setter(true)
          }
        },
        { threshold },
      )

      if (ref.current) {
        observer.observe(ref.current)
      }

      return () => observer.disconnect()
    })
  }, [])

  const lookbooks = [
    {
      title: "Summer 2024 Lookbook",
      image:
        "https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=500",
    },
    {
      title: "Winter 2023 Lookbook",
      image:
        "https://images.unsplash.com/photo-1542744094-3a31f272c490?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=500",
    },
    {
      title: "Spring 2023 Lookbook",
      image:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=500",
    },
  ]

  const pastShoots = [
    {
      title: "Houston Fashion Week 2024",
      image:
        "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=500",
    },
    {
      title: "Downtown Houston Editorial",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=500",
    },
    {
      title: "Galveston Beach Photoshoot",
      image:
        "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=500",
    },
  ]

  const pastWork = [
    {
      title: "Brand Identity for 'The Juice Box'",
      image:
        "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=500",
    },
    {
      title: "Social Media Campaign for 'Urban Grind'",
      image:
        "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=500",
    },
    {
      title: "Website Design for 'The Plant Project'",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=500",
    },
  ]

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
                className="text-gray-500 hover:text-black transition-colors text-sm font-light tracking-wide uppercase"
              >
                About
              </Link>
              <Link
                href="/services"
                className="text-gray-500 hover:text-black transition-colors text-sm font-light tracking-wide uppercase"
              >
                Services
              </Link>
              <Link
                href="/portfolio"
                className="text-gray-500 hover:text-black transition-colors text-sm font-light tracking-wide uppercase"
              >
                Portfolio
              </Link>
              <Link
                href="/podcast"
                className="text-gray-500 hover:text-black transition-colors text-sm font-light tracking-wide uppercase"
              >
                Podcast
              </Link>
              <Link
                href="/products"
                className="text-gray-500 hover:text-black transition-colors text-sm font-light tracking-wide uppercase"
              >
                Products
              </Link>
              <Button
                variant="outline"
                className="border-black text-black hover:bg-black hover:text-white transition-all duration-300 font-light tracking-wide"
              >
                Get Started
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
                onClick={() => setMobileMenuOpen(false)}
                className="block text-gray-500 hover:text-black transition-colors text-sm font-light tracking-wide uppercase w-full text-left"
              >
                About
              </Link>
              <Link
                href="/services"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-gray-500 hover:text-black transition-colors text-sm font-light tracking-wide uppercase w-full text-left"
              >
                Services
              </Link>
              <Link
                href="/portfolio"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-gray-500 hover:text-black transition-colors text-sm font-light tracking-wide uppercase w-full text-left"
              >
                Portfolio
              </Link>
              <Link
                href="/podcast"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-gray-500 hover:text-black transition-colors text-sm font-light tracking-wide uppercase w-full text-left"
              >
                Podcast
              </Link>
              <Link
                href="/products"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-gray-500 hover:text-black transition-colors text-sm font-light tracking-wide uppercase w-full text-left"
              >
                Products
              </Link>
              <Button
                variant="outline"
                className="w-full border-black text-black hover:bg-black hover:text-white transition-all duration-300 font-light tracking-wide mt-4"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="py-16 sm:py-24 bg-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className={`absolute top-20 right-16 w-32 h-32 bg-green-500/5 rounded-full transition-all duration-1000 ${
              isHeroVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
            }`}
          ></div>
          <div
            className={`absolute bottom-20 left-16 w-24 h-24 bg-red-500/5 rounded-full transition-all duration-1000 delay-300 ${
              isHeroVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
            }`}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center space-y-8 sm:space-y-12">
            <div className="space-y-6">
              <div
                className={`flex items-center justify-center space-x-3 transition-all duration-700 ${
                  isHeroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                <div className="w-12 h-0.5 bg-black"></div>
                <span className="text-sm font-light tracking-widest uppercase text-gray-600">Our Work</span>
                <div className="w-12 h-0.5 bg-black"></div>
              </div>

              <div
                className={`transition-all duration-700 delay-200 ${
                  isHeroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter text-black leading-none">
                  PORTFOLIO
                  <span className="block text-green-500 relative">SHOWCASE</span>
                </h1>
                <div
                  className={`w-24 h-1 bg-green-500 mx-auto mt-6 transition-all duration-1000 delay-700 ${
                    isHeroVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
                  }`}
                ></div>
              </div>

              <div
                className={`transition-all duration-700 delay-400 ${
                  isHeroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <p className="text-lg sm:text-xl font-light text-gray-700 max-w-3xl mx-auto leading-relaxed">
                  A showcase of our best work, highlighting our creativity, expertise, and commitment to excellence.
                  Explore our lookbooks, past shoots, and creative projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lookbooks Section */}
      <section ref={lookbooksRef} className="py-12 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 sm:space-y-16">
            <div className="text-center space-y-4 sm:space-y-6">
              <div
                className={`flex items-center justify-center space-x-3 transition-all duration-700 ${
                  isLookbooksVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                <div className="w-8 sm:w-12 h-0.5 bg-black"></div>
                <span className="text-xs sm:text-sm font-light tracking-widest uppercase text-gray-600">Lookbooks</span>
                <div className="w-8 sm:w-12 h-0.5 bg-black"></div>
              </div>

              <div
                className={`transition-all duration-700 delay-200 ${
                  isLookbooksVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter text-black">
                  Explore Our
                  <span className="text-green-500"> Collections</span>
                </h2>
                <div
                  className={`w-16 h-1 bg-green-500 mx-auto mt-6 transition-all duration-1000 delay-700 ${
                    isLookbooksVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
                  }`}
                ></div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {lookbooks.map((lookbook, index) => (
                <div
                  key={index}
                  className={`transition-all duration-700 ${
                    isLookbooksVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                  }`}
                  style={{ transitionDelay: `${400 + index * 150}ms` }}
                >
                  <Link
                    href={`/portfolio/${lookbook.title
                      .toLowerCase()
                      .replace(/\s+/g, "-")
                      .replace(/[^a-z0-9-]/g, "")}`}
                    className="block"
                  >
                    <div className="aspect-[4/5] rounded-sm hover:shadow-lg transition-all duration-300 group cursor-pointer relative overflow-hidden">
                      <img
                        src={lookbook.image || "/placeholder.svg"}
                        alt={lookbook.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>

                      {/* Title overlay at bottom left */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                        <h3 className="text-white text-lg font-medium">{lookbook.title}</h3>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Past Shoots Section */}
      <section ref={pastShootsRef} className="py-12 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 sm:space-y-16">
            <div className="text-center space-y-4 sm:space-y-6">
              <div
                className={`flex items-center justify-center space-x-3 transition-all duration-700 ${
                  isPastShootsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                <div className="w-8 sm:w-12 h-0.5 bg-black"></div>
                <span className="text-xs sm:text-sm font-light tracking-widest uppercase text-gray-600">
                  Past Shoots
                </span>
                <div className="w-8 sm:w-12 h-0.5 bg-black"></div>
              </div>

              <div
                className={`transition-all duration-700 delay-200 ${
                  isPastShootsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter text-black">
                  Behind the
                  <span className="text-green-500"> Lens</span>
                </h2>
                <div
                  className={`w-16 h-1 bg-green-500 mx-auto mt-6 transition-all duration-1000 delay-700 ${
                    isPastShootsVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
                  }`}
                ></div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {pastShoots.map((shoot, index) => (
                <div
                  key={index}
                  className={`transition-all duration-700 ${
                    isPastShootsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                  }`}
                  style={{ transitionDelay: `${400 + index * 150}ms` }}
                >
                  <Link
                    href={`/portfolio/${shoot.title
                      .toLowerCase()
                      .replace(/\s+/g, "-")
                      .replace(/[^a-z0-9-]/g, "")}`}
                    className="block"
                  >
                    <div className="aspect-[4/5] rounded-sm hover:shadow-lg transition-all duration-300 group cursor-pointer relative overflow-hidden">
                      <img
                        src={shoot.image || "/placeholder.svg"}
                        alt={shoot.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>

                      {/* Title overlay at bottom left */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                        <h3 className="text-white text-lg font-medium">{shoot.title}</h3>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Past Work Section */}
      <section ref={pastWorkRef} className="py-12 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 sm:space-y-16">
            <div className="text-center space-y-4 sm:space-y-6">
              <div
                className={`flex items-center justify-center space-x-3 transition-all duration-700 ${
                  isPastWorkVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                <div className="w-8 sm:w-12 h-0.5 bg-black"></div>
                <span className="text-xs sm:text-sm font-light tracking-widest uppercase text-gray-600">Past Work</span>
                <div className="w-8 sm:w-12 h-0.5 bg-black"></div>
              </div>

              <div
                className={`transition-all duration-700 delay-200 ${
                  isPastWorkVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter text-black">
                  Our
                  <span className="text-green-500"> Creations</span>
                </h2>
                <div
                  className={`w-16 h-1 bg-green-500 mx-auto mt-6 transition-all duration-1000 delay-700 ${
                    isPastWorkVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
                  }`}
                ></div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {pastWork.map((work, index) => (
                <div
                  key={index}
                  className={`transition-all duration-700 ${
                    isPastWorkVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                  }`}
                  style={{ transitionDelay: `${400 + index * 150}ms` }}
                >
                  <Link
                    href={`/portfolio/${work.title
                      .toLowerCase()
                      .replace(/\s+/g, "-")
                      .replace(/[^a-z0-9-]/g, "")}`}
                    className="block"
                  >
                    <div className="aspect-[4/5] rounded-sm hover:shadow-lg transition-all duration-300 group cursor-pointer relative overflow-hidden">
                      <img
                        src={work.image || "/placeholder.svg"}
                        alt={work.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>

                      {/* Title overlay at bottom left */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                        <h3 className="text-white text-lg font-medium">{work.title}</h3>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
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
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <Link href="/" className="text-center md:text-left">
              <img
                src="/images/ctzns-logo.png"
                alt="CTZNS - Citizens of the Internet"
                className="h-8 sm:h-10 md:h-12 w-auto mx-auto md:mx-0"
              />
            </Link>

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
