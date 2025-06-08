"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  ArrowRight,
  Play,
  Calendar,
  Clock,
  Mic,
  Instagram,
  Twitter,
  Youtube,
  Linkedin,
  Menu,
  X,
  Star,
  Globe,
  Headphones,
  MessageSquare,
  Share2,
  Users,
} from "lucide-react"
import { useState, useEffect, useRef } from "react"
import Link from "next/link"

export default function PodcastPage() {
  const [isHeroVisible, setIsHeroVisible] = useState(false)
  const [isEpisodesVisible, setIsEpisodesVisible] = useState(false)
  const [isHostsVisible, setIsHostsVisible] = useState(false)
  const [isStatsVisible, setIsStatsVisible] = useState(false)
  const [isGuestVisible, setIsGuestVisible] = useState(false)
  const [isFormVisible, setIsFormVisible] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const heroRef = useRef<HTMLElement>(null)
  const episodesRef = useRef<HTMLElement>(null)
  const hostsRef = useRef<HTMLElement>(null)
  const statsRef = useRef<HTMLElement>(null)
  const guestRef = useRef<HTMLElement>(null)
  const formRef = useRef<HTMLElement>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    expertise: "",
    message: "",
  })

  // Intersection observers for animations
  useEffect(() => {
    const observers = [
      {
        ref: heroRef,
        setter: setIsHeroVisible,
        threshold: 0.3,
      },
      {
        ref: episodesRef,
        setter: setIsEpisodesVisible,
        threshold: 0.2,
      },
      {
        ref: hostsRef,
        setter: setIsHostsVisible,
        threshold: 0.2,
      },
      {
        ref: statsRef,
        setter: setIsStatsVisible,
        threshold: 0.2,
      },
      {
        ref: guestRef,
        setter: setIsGuestVisible,
        threshold: 0.2,
      },
      {
        ref: formRef,
        setter: setIsFormVisible,
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

  const episodes = [
    {
      title: "The Future of Digital Content Creation",
      description: "Exploring how AI and emerging technologies are reshaping the creative landscape.",
      duration: "45 min",
      date: "Dec 15, 2024",
      thumbnail:
        "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      isNew: true,
      accent: "green",
    },
    {
      title: "Building a Brand in the Internet Age",
      description: "How modern businesses can leverage internet culture to build authentic connections.",
      duration: "38 min",
      date: "Dec 8, 2024",
      thumbnail:
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      accent: "red",
    },
    {
      title: "The Psychology of Viral Content",
      description: "Understanding what makes content spread and how to create shareable moments.",
      duration: "42 min",
      date: "Dec 1, 2024",
      thumbnail:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      accent: "yellow",
    },
    {
      title: "Houston's Creative Renaissance",
      description: "Spotlight on the emerging creative scene in Houston and its impact on digital culture.",
      duration: "35 min",
      date: "Nov 24, 2024",
      thumbnail:
        "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      accent: "green",
    },
    {
      title: "Memes as Modern Communication",
      description: "How memes have become a universal language and their role in brand communication.",
      duration: "40 min",
      date: "Nov 17, 2024",
      thumbnail:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      accent: "red",
    },
    {
      title: "The Creator Economy Deep Dive",
      description: "Analyzing the business models and opportunities in the modern creator economy.",
      duration: "48 min",
      date: "Nov 10, 2024",
      thumbnail:
        "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      accent: "yellow",
    },
  ]

  const hosts = [
    {
      name: "Godswill Muofhe",
      role: "Host & Founder",
      description:
        "Creative director and founder of Citizens of the Internet, bringing unique perspectives on digital culture.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
      accent: "green",
    },
    {
      name: "Guest Experts",
      role: "Industry Leaders",
      description: "We regularly feature thought leaders, creators, and innovators from across the digital landscape.",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
      accent: "red",
    },
  ]

  const idealGuests = [
    {
      title: "Creative Entrepreneurs",
      description: "Founders building innovative creative businesses",
      icon: <Star className="h-5 w-5 text-white" />,
      accent: "green",
    },
    {
      title: "Digital Innovators",
      description: "Tech leaders shaping internet culture",
      icon: <Globe className="h-5 w-5 text-white" />,
      accent: "red",
    },
    {
      title: "Content Creators",
      description: "Influencers and creators pushing boundaries",
      icon: <MessageSquare className="h-5 w-5 text-white" />,
      accent: "yellow",
    },
    {
      title: "Industry Experts",
      description: "Thought leaders in design, marketing, and tech",
      icon: <Headphones className="h-5 w-5 text-white" />,
      accent: "green",
    },
  ]

  const guestBenefits = [
    "Amplify your expertise to our growing community",
    "Network with industry leaders and innovators",
    "Showcase your brand to targeted audiences",
    "Access our creator community network",
    "High-quality production and editing",
    "Multi-platform content distribution",
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({
      name: "",
      email: "",
      company: "",
      expertise: "",
      message: "",
    })
  }

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
                Subscribe
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
                Subscribe
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Side - Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div
                  className={`flex items-center space-x-3 transition-all duration-700 ${
                    isHeroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                >
                  <div className="w-12 h-0.5 bg-black"></div>
                  <span className="text-sm font-light tracking-widest uppercase text-gray-600">Podcast</span>
                </div>

                <div
                  className={`transition-all duration-700 delay-200 ${
                    isHeroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                >
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter text-black leading-none">
                    DIGITAL
                    <span className="block text-green-500 relative">
                      DISCOURSE
                      {/* Animated underline */}
                      <div
                        className={`absolute bottom-0 left-0 h-1 bg-green-500/20 transition-all duration-1000 delay-700 ${
                          isHeroVisible ? "w-full" : "w-0"
                        }`}
                      ></div>
                    </span>
                  </h1>
                </div>
                <div
                  className={`w-16 h-1 bg-green-500 transition-all duration-1000 delay-700 ${
                    isHeroVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
                  }`}
                ></div>

                <div
                  className={`transition-all duration-700 delay-400 ${
                    isHeroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                >
                  <p className="text-lg sm:text-xl font-light text-gray-700 leading-relaxed">
                    Conversations about digital culture, creativity, and the future of content creation. Join us as we
                    explore the intersection of technology, art, and human connection.
                  </p>
                </div>
              </div>

              <div
                className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-600 ${
                  isHeroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <Button size="lg" className="bg-green-500 hover:bg-green-600 text-black font-medium tracking-wide">
                  <Play className="mr-2 h-4 w-4" />
                  Listen Now
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-black text-black hover:bg-black hover:text-white font-light tracking-wide"
                >
                  Subscribe
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>

              {/* Podcast Stats */}
              <div
                className={`grid grid-cols-3 gap-6 pt-8 transition-all duration-700 delay-800 ${
                  isHeroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <div className="text-center space-y-2">
                  <div className="text-2xl sm:text-3xl font-black text-green-500">25+</div>
                  <div className="text-xs sm:text-sm font-light tracking-wide uppercase text-gray-600">Episodes</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-2xl sm:text-3xl font-black text-black">10K+</div>
                  <div className="text-xs sm:text-sm font-light tracking-wide uppercase text-gray-600">Listeners</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-2xl sm:text-3xl font-black text-red-500">4.8</div>
                  <div className="text-xs sm:text-sm font-light tracking-wide uppercase text-gray-600">Rating</div>
                </div>
              </div>
            </div>

            {/* Right Side - Featured Episode */}
            <div
              className={`transition-all duration-1000 ${
                isHeroVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
              }`}
            >
              <Card className="border-0 shadow-lg bg-gray-50/50 relative overflow-hidden">
                <div className="absolute top-4 right-4">
                  <Badge className="bg-green-500 text-white font-light">Latest Episode</Badge>
                </div>

                <CardContent className="p-0">
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1478737270239-2f02b77fc618?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                      alt="Latest episode"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer">
                        <Play className="h-8 w-8 text-white ml-1" />
                      </div>
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-black tracking-wide">
                        The Future of Digital Content Creation
                      </h3>
                      <p className="text-sm font-light text-gray-600">
                        Exploring how AI and emerging technologies are reshaping the creative landscape.
                      </p>
                    </div>

                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4" />
                        <span>Dec 15, 2024</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4" />
                        <span>45 min</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Episodes Section */}
      <section ref={episodesRef} className="py-16 sm:py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12 sm:space-y-16">
            <div className="text-center space-y-6">
              <div
                className={`flex items-center justify-center space-x-3 transition-all duration-700 ${
                  isEpisodesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                <div className="w-12 h-0.5 bg-black"></div>
                <span className="text-sm font-light tracking-widest uppercase text-gray-600">Episodes</span>
                <div className="w-12 h-0.5 bg-black"></div>
              </div>

              <div
                className={`transition-all duration-700 delay-200 ${
                  isEpisodesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter text-black">
                  Recent
                  <span className="text-green-500"> Episodes</span>
                </h2>
                <div
                  className={`w-16 h-1 bg-green-500 mx-auto mt-6 transition-all duration-1000 delay-700 ${
                    isEpisodesVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
                  }`}
                ></div>
                <p className="text-lg font-light text-gray-700 max-w-2xl mx-auto mt-4">
                  Deep dives into digital culture, creativity, and the stories behind the content.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {episodes.map((episode, index) => (
                <div
                  key={index}
                  className={`transition-all duration-700 ${
                    isEpisodesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                  }`}
                  style={{ transitionDelay: `${400 + index * 150}ms` }}
                >
                  <Card className="border-0 shadow-none bg-gray-50/50 hover:shadow-lg transition-all duration-300 group relative overflow-hidden cursor-pointer">
                    {episode.isNew && (
                      <div className="absolute top-4 right-4 z-10">
                        <Badge className="bg-green-500 text-white font-light">New</Badge>
                      </div>
                    )}

                    {/* Floating accent elements */}
                    <div
                      className={`absolute top-4 left-4 w-3 h-3 rounded-full transition-all duration-500 group-hover:scale-125 ${
                        episode.accent === "green"
                          ? "bg-green-500"
                          : episode.accent === "red"
                            ? "bg-red-500"
                            : "bg-yellow-400"
                      }`}
                    ></div>

                    <CardContent className="p-0 relative">
                      {/* Episode Thumbnail */}
                      <div className="aspect-video relative overflow-hidden">
                        <img
                          src={episode.thumbnail || "/placeholder.svg"}
                          alt={episode.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div
                            className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                              episode.accent === "green"
                                ? "bg-green-500"
                                : episode.accent === "red"
                                  ? "bg-red-500"
                                  : "bg-yellow-400"
                            }`}
                          >
                            <Play
                              className={`h-6 w-6 ml-1 ${episode.accent === "yellow" ? "text-black" : "text-white"}`}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="p-6 space-y-4">
                        <div className="space-y-2">
                          <h3 className="text-lg font-bold text-black tracking-wide group-hover:text-gray-800 transition-colors line-clamp-2">
                            {episode.title}
                          </h3>
                          <p className="text-sm font-light text-gray-600 leading-relaxed line-clamp-3">
                            {episode.description}
                          </p>
                        </div>

                        <div className="flex items-center justify-between text-sm text-gray-500">
                          <div className="flex items-center space-x-2">
                            <Calendar className="h-4 w-4" />
                            <span>{episode.date}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Clock className="h-4 w-4" />
                            <span>{episode.duration}</span>
                          </div>
                        </div>

                        {/* Animated line */}
                        <div
                          className={`h-0.5 transition-all duration-500 group-hover:w-12 w-0 ${
                            episode.accent === "green"
                              ? "bg-green-500"
                              : episode.accent === "red"
                                ? "bg-red-500"
                                : "bg-yellow-400"
                          }`}
                        ></div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>

            <div
              className={`text-center transition-all duration-700 delay-800 ${
                isEpisodesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <Button
                size="lg"
                variant="outline"
                className="border-black text-black hover:bg-black hover:text-white font-light tracking-wide"
              >
                View All Episodes
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Hosts Section */}
      <section ref={hostsRef} className="py-16 sm:py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12 sm:space-y-16">
            <div className="text-center space-y-6">
              <div
                className={`flex items-center justify-center space-x-3 transition-all duration-700 ${
                  isHostsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                <div className="w-12 h-0.5 bg-black"></div>
                <span className="text-sm font-light tracking-widest uppercase text-gray-600">Hosts</span>
                <div className="w-12 h-0.5 bg-black"></div>
              </div>

              <div
                className={`transition-all duration-700 delay-200 ${
                  isHostsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter text-black">
                  Meet Your
                  <span className="text-green-500"> Hosts</span>
                </h2>
                <div
                  className={`w-16 h-1 bg-green-500 mx-auto mt-6 transition-all duration-1000 delay-700 ${
                    isHostsVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
                  }`}
                ></div>
                <p className="text-lg font-light text-gray-700 max-w-2xl mx-auto mt-4">
                  The voices behind Digital Discourse, bringing you insights from the world of digital creativity.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {hosts.map((host, index) => (
                <div
                  key={index}
                  className={`transition-all duration-700 ${
                    isHostsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                  }`}
                  style={{ transitionDelay: `${400 + index * 200}ms` }}
                >
                  <Card className="border-0 shadow-none bg-gray-50/50 hover:shadow-lg transition-all duration-300 group relative overflow-hidden">
                    {/* Floating accent elements */}
                    <div
                      className={`absolute top-4 right-4 w-3 h-3 rounded-full transition-all duration-500 group-hover:scale-125 ${
                        host.accent === "green" ? "bg-green-500" : "bg-red-500"
                      }`}
                    ></div>

                    <CardContent className="p-8 text-center space-y-6 relative">
                      {/* Host Image */}
                      <div className="relative">
                        <div className="w-24 h-24 mx-auto rounded-sm overflow-hidden group-hover:scale-105 transition-transform duration-300">
                          <img
                            src={host.image || "/placeholder.svg"}
                            alt={host.name}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* Icon overlay */}
                        <div
                          className={`absolute -bottom-2 -right-2 w-8 h-8 rounded-sm flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
                            host.accent === "green" ? "bg-green-500" : "bg-red-500"
                          }`}
                        >
                          <Mic className="h-4 w-4 text-white" />
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div className="space-y-1">
                          <h3 className="text-xl font-bold text-black tracking-wide group-hover:text-gray-800 transition-colors">
                            {host.name}
                          </h3>
                          <p className="text-sm font-medium text-gray-700">{host.role}</p>
                        </div>

                        <p className="text-sm font-light text-gray-600 leading-relaxed">{host.description}</p>

                        {/* Animated line */}
                        <div
                          className={`mx-auto h-0.5 transition-all duration-500 group-hover:w-12 w-0 ${
                            host.accent === "green" ? "bg-green-500" : "bg-red-500"
                          }`}
                        ></div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ideal Guests Section */}
      <section ref={guestRef} className="py-16 sm:py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12 sm:space-y-16">
            <div className="text-center space-y-6">
              <div
                className={`flex items-center justify-center space-x-3 transition-all duration-700 ${
                  isGuestVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                <div className="w-12 h-0.5 bg-black"></div>
                <span className="text-sm font-light tracking-widest uppercase text-gray-600">Guests</span>
                <div className="w-12 h-0.5 bg-black"></div>
              </div>

              <div
                className={`transition-all duration-700 delay-200 ${
                  isGuestVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter text-black">
                  Who We're
                  <span className="text-green-500"> Looking For</span>
                </h2>
                <div
                  className={`w-16 h-1 bg-green-500 mx-auto mt-6 transition-all duration-1000 delay-700 ${
                    isGuestVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
                  }`}
                ></div>
                <p className="text-lg font-light text-gray-700 max-w-2xl mx-auto mt-4">
                  We're seeking passionate individuals with unique stories and insights to share.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {idealGuests.map((guest, index) => (
                <div
                  key={index}
                  className={`transition-all duration-700 ${
                    isGuestVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                  }`}
                  style={{ transitionDelay: `${400 + index * 150}ms` }}
                >
                  <div className="bg-gray-50/50 p-6 rounded-sm hover:bg-gray-50 transition-all duration-300 group cursor-pointer relative overflow-hidden h-full">
                    <div className="space-y-4">
                      <div
                        className={`w-10 h-10 rounded-sm flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
                          guest.accent === "green"
                            ? "bg-green-500"
                            : guest.accent === "red"
                              ? "bg-red-500"
                              : "bg-yellow-400"
                        }`}
                      >
                        {guest.icon}
                      </div>

                      <div className="space-y-2">
                        <h3 className="font-semibold text-black group-hover:text-gray-800 transition-colors">
                          {guest.title}
                        </h3>
                        <p className="text-sm font-light text-gray-600 leading-relaxed">{guest.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Guest Benefits */}
            <div
              className={`bg-gray-50/50 p-8 sm:p-12 rounded-sm transition-all duration-700 delay-600 ${
                isGuestVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="text-center space-y-6">
                <h3 className="text-2xl sm:text-3xl font-bold text-black tracking-wide">Why Be a Guest?</h3>
                <div className="w-12 h-1 bg-green-500 mx-auto"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                {guestBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    {index === 0 && <Mic className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />}
                    {index === 1 && <Users className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />}
                    {index === 2 && <Globe className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />}
                    {index === 3 && <Star className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />}
                    {index === 4 && <Headphones className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />}
                    {index === 5 && <Share2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />}
                    <span className="text-base font-light text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guest Application Form */}
      <section id="guest-form" ref={formRef} className="py-16 sm:py-24 bg-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div className="text-center space-y-6">
              <div
                className={`flex items-center justify-center space-x-3 transition-all duration-700 ${
                  isFormVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                <div className="w-12 h-0.5 bg-black"></div>
                <span className="text-sm font-light tracking-widest uppercase text-gray-600">Apply</span>
                <div className="w-12 h-0.5 bg-black"></div>
              </div>

              <div
                className={`transition-all duration-700 delay-200 ${
                  isFormVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter text-black">
                  Join the
                  <span className="text-green-500"> Conversation</span>
                </h2>
                <div
                  className={`w-16 h-1 bg-green-500 mx-auto mt-6 transition-all duration-1000 delay-700 ${
                    isFormVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
                  }`}
                ></div>
                <p className="text-lg font-light text-gray-700 max-w-2xl mx-auto mt-4">
                  Ready to share your story? Fill out the form below and we'll get back to you soon.
                </p>
              </div>
            </div>

            <div
              className={`transition-all duration-700 delay-400 ${
                isFormVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <Card className="border-0 shadow-lg bg-gray-50/50">
                <CardContent className="p-8 sm:p-12">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-black tracking-wide">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="border-gray-300 focus:border-green-500 font-light"
                          placeholder="Your full name"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-black tracking-wide">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="border-gray-300 focus:border-green-500 font-light"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="company" className="text-sm font-medium text-black tracking-wide">
                          Company/Organization
                        </label>
                        <Input
                          id="company"
                          name="company"
                          type="text"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="border-gray-300 focus:border-green-500 font-light"
                          placeholder="Your company or organization"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="expertise" className="text-sm font-medium text-black tracking-wide">
                          Area of Expertise *
                        </label>
                        <Input
                          id="expertise"
                          name="expertise"
                          type="text"
                          required
                          value={formData.expertise}
                          onChange={handleInputChange}
                          className="border-gray-300 focus:border-green-500 font-light"
                          placeholder="e.g., Digital Marketing, Design, Tech"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-black tracking-wide">
                        Tell Us Your Story *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        className="border-gray-300 focus:border-green-500 font-light min-h-[120px]"
                        placeholder="What's your story? What unique insights or experiences would you like to share with our audience?"
                      />
                    </div>

                    <div className="pt-4">
                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-green-500 hover:bg-green-600 text-black font-medium tracking-wide"
                      >
                        Submit Application
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
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
