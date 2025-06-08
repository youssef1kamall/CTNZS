"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  ArrowRight,
  ExternalLink,
  Users,
  Target,
  Zap,
  Globe,
  Camera,
  Code,
  Palette,
  TrendingUp,
  Instagram,
  Twitter,
  Youtube,
  Linkedin,
  Menu,
  X,
  Mic,
} from "lucide-react"
import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"

export default function AboutPage() {
  const [isHeroVisible, setIsHeroVisible] = useState(false)
  const [isStoryVisible, setIsStoryVisible] = useState(false)
  const [isTeamVisible, setIsTeamVisible] = useState(false)
  const [isArticlesVisible, setIsArticlesVisible] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const heroRef = useRef<HTMLElement>(null)
  const storyRef = useRef<HTMLElement>(null)
  const teamRef = useRef<HTMLElement>(null)
  const articlesRef = useRef<HTMLElement>(null)

  // Intersection observers for animations
  useEffect(() => {
    const observers = [
      {
        ref: heroRef,
        setter: setIsHeroVisible,
        threshold: 0.3,
      },
      {
        ref: storyRef,
        setter: setIsStoryVisible,
        threshold: 0.2,
      },
      {
        ref: teamRef,
        setter: setIsTeamVisible,
        threshold: 0.2,
      },
      {
        ref: articlesRef,
        setter: setIsArticlesVisible,
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

  const teamMembers = [
    {
      name: "Godswill Muofhe",
      role: "Founder & Creative Director",
      department: "Leadership",
      description: "Visionary leader driving the creative direction and strategic growth of Citizens of the Internet.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
      accent: "green",
      icon: <Target className="h-4 w-4 text-white" />,
    },
    {
      name: "Astrid",
      role: "Lead Designer",
      department: "Graphic Design Department",
      description: "Creating stunning visual identities and brand experiences that make audiences do a double take.",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
      accent: "red",
      icon: <Palette className="h-4 w-4 text-white" />,
    },
    {
      name: "Mafaz",
      role: "Marketing Strategist",
      department: "Marketing and Sales Department",
      description:
        "Driving growth through innovative marketing strategies and building meaningful client relationships.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
      accent: "yellow",
      icon: <TrendingUp className="h-4 w-4 text-black" />,
    },
    {
      name: "Eduardo",
      role: "Media Producer",
      department: "Media Production Department",
      description: "Bringing stories to life through compelling video content and cutting-edge production techniques.",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
      accent: "green",
      icon: <Camera className="h-4 w-4 text-white" />,
    },
    {
      name: "Youssef",
      role: "Tech Lead",
      department: "Information and Technology Department",
      description:
        "Building robust digital solutions and ensuring seamless technology integration across all projects.",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
      accent: "red",
      icon: <Code className="h-4 w-4 text-white" />,
    },
  ]

  const articles = [
    {
      title: "Exploring Life & Business with Godswill Muofhe",
      publication: "VoyageHouston",
      description:
        "An in-depth look at the journey behind Citizens of the Internet and the vision driving our creative studio.",
      url: "https://voyagehouston.com/interview/exploring-life-business-with-godswill-muofhe-of-citizens-of-the-internet/",
      image:
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      accent: "green",
    },
    {
      title: "Meet Godswill Muofhe",
      publication: "Bold Journey",
      description: "Discover the bold journey of building a creative studio that pushes boundaries and breaks limits.",
      url: "https://boldjourney.com/meet-godswill-muofhe/",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      accent: "red",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-black/10 bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/ctzns-logo.png"
                alt="CTZNS - Citizens of the Internet"
                width={200}
                height={48}
                className="h-8 sm:h-10 md:h-12 w-auto"
                priority
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
                <span className="text-sm font-light tracking-widest uppercase text-gray-600">About Us</span>
                <div className="w-12 h-0.5 bg-black"></div>
              </div>

              <div
                className={`transition-all duration-700 delay-200 ${
                  isHeroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-black leading-none">
                  CITIZENS OF THE
                  <span className="block text-green-500 relative">INTERNET</span>
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
                <p className="text-lg sm:text-xl font-light text-gray-700 max-w-4xl mx-auto leading-relaxed">
                  A diverse creative studio made up of young adults, all connected through the internet and united by
                  our Houston roots. We create content that makes viewers do a double take.
                </p>
              </div>
            </div>

            {/* Mission Values */}
            <div
              className={`grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto transition-all duration-700 delay-600 ${
                isHeroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              {[
                { icon: <Zap className="h-5 w-5" />, text: "Push Boundaries", accent: "green" },
                { icon: <Users className="h-5 w-5" />, text: "Break Limits", accent: "red" },
                { icon: <Globe className="h-5 w-5" />, text: "Create Reality", accent: "yellow" },
              ].map((value, index) => (
                <div key={index} className="text-center space-y-3 group">
                  <div
                    className={`w-12 h-12 mx-auto rounded-sm flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
                      value.accent === "green"
                        ? "bg-green-500"
                        : value.accent === "red"
                          ? "bg-red-500"
                          : "bg-yellow-400"
                    }`}
                  >
                    <div className={value.accent === "yellow" ? "text-black" : "text-white"}>{value.icon}</div>
                  </div>
                  <p className="text-sm font-light tracking-wide text-gray-700">{value.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section ref={storyRef} className="py-16 sm:py-24 bg-white relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className={`absolute top-20 left-10 w-40 h-40 bg-green-500/3 rounded-full transition-all duration-1000 ${
              isStoryVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
            }`}
          ></div>
          <div
            className={`absolute bottom-20 right-10 w-32 h-32 bg-red-500/3 rounded-full transition-all duration-1000 delay-300 ${
              isStoryVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
            }`}
          ></div>
          <div
            className={`absolute top-1/2 left-1/3 w-24 h-24 bg-yellow-400/3 rounded-full transition-all duration-1000 delay-500 ${
              isStoryVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
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
                    isStoryVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                >
                  <div className="w-12 h-0.5 bg-black"></div>
                  <span className="text-sm font-light tracking-widest uppercase text-gray-600">Our Mission</span>
                </div>

                <div
                  className={`transition-all duration-700 delay-200 ${
                    isStoryVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                >
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter text-black">
                    Creating Digital
                    <span className="block text-green-500 relative">
                      Experiences
                      {/* Animated underline */}
                      <div
                        className={`absolute bottom-0 left-0 h-1 bg-green-500/20 transition-all duration-1000 delay-700 ${
                          isStoryVisible ? "w-full" : "w-0"
                        }`}
                      ></div>
                    </span>
                  </h2>
                </div>
                <div
                  className={`w-16 h-1 bg-green-500 transition-all duration-1000 delay-700 ${
                    isStoryVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
                  }`}
                ></div>
              </div>

              <div
                className={`space-y-6 text-base sm:text-lg font-light text-gray-700 leading-relaxed transition-all duration-700 delay-400 ${
                  isStoryVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <p>
                  We believe in the power of authentic digital storytelling. Our mission is to bridge the gap between
                  traditional business needs and internet culture, creating content that resonates with modern
                  audiences.
                </p>
                <p>
                  From Houston to the world, we're building a community of digital citizens who aren't afraid to push
                  creative boundaries and challenge conventional thinking.
                </p>
                <p>
                  Every project we take on is an opportunity to create something that makes people stop scrolling and
                  pay attention. That's the CTZNS difference.
                </p>
              </div>

              <div
                className={`grid grid-cols-2 gap-6 pt-4 transition-all duration-700 delay-600 ${
                  isStoryVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <div className="space-y-3 group">
                  <div className="w-8 h-8 bg-red-500 rounded-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Camera className="h-4 w-4 text-white" />
                  </div>
                  <h3 className="font-semibold text-black tracking-wide">Content Creation</h3>
                  <p className="text-sm font-light text-gray-600">Memes, edits, and viral content that connects</p>
                </div>
                <div className="space-y-3 group">
                  <div className="w-8 h-8 bg-yellow-400 rounded-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Globe className="h-4 w-4 text-black" />
                  </div>
                  <h3 className="font-semibold text-black tracking-wide">Digital Strategy</h3>
                  <p className="text-sm font-light text-gray-600">Mature aesthetics with creative edge</p>
                </div>
              </div>
            </div>

            {/* Right Side - Visual Element */}
            <div className="relative">
              <div
                className={`transition-all duration-1000 ${
                  isStoryVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
                }`}
              >
                <div className="aspect-square bg-gray-50/50 rounded-sm relative overflow-hidden border border-gray-100">
                  <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600"
                    alt="Team collaboration"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent"></div>

                  {/* Floating accent elements */}
                  <div className="absolute top-6 right-6 w-4 h-4 bg-green-500 rounded-full"></div>
                  <div className="absolute bottom-8 left-8 w-6 h-6 bg-yellow-400/80 rounded-sm"></div>
                  <div className="absolute top-1/2 left-4 w-2 h-16 bg-red-500/60"></div>
                </div>

                {/* Floating elements around the image */}
                <div className="absolute -top-4 -left-4 w-8 h-8 border-2 border-green-500 rounded-full"></div>
                <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-black/5 rounded-sm"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Animated side accents */}
        <div
          className={`absolute top-32 left-0 w-1 bg-green-500/40 transition-all duration-1000 delay-1000 ${
            isStoryVisible ? "h-32 opacity-100" : "h-0 opacity-0"
          }`}
        ></div>
        <div
          className={`absolute bottom-32 right-0 w-1 bg-black/20 transition-all duration-1000 delay-1100 ${
            isStoryVisible ? "h-32 opacity-100" : "h-0 opacity-0"
          }`}
        ></div>
      </section>

      {/* Team Section */}
      <section ref={teamRef} className="py-16 sm:py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12 sm:space-y-16">
            <div className="text-center space-y-6">
              <div
                className={`flex items-center justify-center space-x-3 transition-all duration-700 ${
                  isTeamVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                <div className="w-12 h-0.5 bg-black"></div>
                <span className="text-sm font-light tracking-widest uppercase text-gray-600">Our Team</span>
                <div className="w-12 h-0.5 bg-black"></div>
              </div>

              <div
                className={`transition-all duration-700 delay-200 ${
                  isTeamVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter text-black">
                  Meet the
                  <span className="text-green-500"> Citizens</span>
                </h2>
                <div
                  className={`w-16 h-1 bg-green-500 mx-auto mt-6 transition-all duration-1000 delay-700 ${
                    isTeamVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
                  }`}
                ></div>
                <p className="text-lg font-light text-gray-700 max-w-2xl mx-auto mt-4">
                  A diverse group of creatives, strategists, and digital natives working together to push boundaries.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className={`transition-all duration-700 ${
                    isTeamVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                  }`}
                  style={{ transitionDelay: `${400 + index * 150}ms` }}
                >
                  <Card className="border-0 shadow-none bg-gray-50/50 hover:shadow-lg transition-all duration-300 group relative overflow-hidden">
                    {/* Floating accent elements */}
                    <div
                      className={`absolute top-4 right-4 w-3 h-3 rounded-full transition-all duration-500 group-hover:scale-125 ${
                        member.accent === "green" ? "bg-green-500" : "bg-red-500"
                      }`}
                    ></div>

                    <CardContent className="p-6 text-center space-y-6 relative">
                      {/* Profile Image */}
                      <div className="relative">
                        <div className="w-24 h-24 mx-auto rounded-sm overflow-hidden group-hover:scale-105 transition-transform duration-300">
                          <img
                            src={member.image || "/placeholder.svg"}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* Icon overlay */}
                        <div
                          className={`absolute -bottom-2 -right-2 w-8 h-8 rounded-sm flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
                            member.accent === "green" ? "bg-green-500" : "bg-red-500"
                          }`}
                        >
                          <Mic className="h-4 w-4 text-white" />
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div className="space-y-1">
                          <h3 className="text-xl font-bold text-black tracking-wide group-hover:text-gray-800 transition-colors">
                            {member.name}
                          </h3>
                          <p className="text-sm font-medium text-gray-700">{member.role}</p>
                          <p className="text-xs font-light tracking-wide text-gray-500 uppercase">
                            {member.department}
                          </p>
                        </div>

                        <p className="text-sm font-light text-gray-600 leading-relaxed">{member.description}</p>

                        {/* Animated line */}
                        <div
                          className={`mx-auto h-0.5 transition-all duration-500 group-hover:w-12 w-0 ${
                            member.accent === "green" ? "bg-green-500" : "bg-red-500"
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

      {/* Articles Section */}
      <section ref={articlesRef} className="py-16 sm:py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12 sm:space-y-16">
            <div className="text-center space-y-6">
              <div
                className={`flex items-center justify-center space-x-3 transition-all duration-700 ${
                  isArticlesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                <div className="w-12 h-0.5 bg-black"></div>
                <span className="text-sm font-light tracking-widest uppercase text-gray-600">Featured In</span>
                <div className="w-12 h-0.5 bg-black"></div>
              </div>

              <div
                className={`transition-all duration-700 delay-200 ${
                  isArticlesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter text-black">
                  Press &<span className="text-green-500"> Recognition</span>
                </h2>
                <div
                  className={`w-16 h-1 bg-green-500 mx-auto mt-6 transition-all duration-1000 delay-700 ${
                    isArticlesVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
                  }`}
                ></div>
                <p className="text-lg font-light text-gray-700 max-w-2xl mx-auto mt-4">
                  Our story and impact have been featured in leading publications.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {articles.map((article, index) => (
                <a
                  key={index}
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group cursor-pointer transition-all duration-700 ${
                    isArticlesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                  }`}
                  style={{ transitionDelay: `${400 + index * 200}ms` }}
                >
                  <Card className="border-0 shadow-none bg-gray-50/50 hover:shadow-lg transition-all duration-300 group relative overflow-hidden">
                    {/* Floating accent elements */}
                    <div
                      className={`absolute top-4 right-4 w-3 h-3 rounded-full transition-all duration-500 group-hover:scale-125 ${
                        article.accent === "green" ? "bg-green-500" : "bg-red-500"
                      }`}
                    ></div>

                    <CardContent className="p-0 relative">
                      {/* Article Image */}
                      <div className="aspect-video rounded-t-sm overflow-hidden">
                        <img
                          src={article.image || "/placeholder.svg"}
                          alt={article.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                      </div>

                      <div className="p-6 space-y-4">
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span
                              className={`text-xs font-medium tracking-wide uppercase ${
                                article.accent === "green" ? "text-green-600" : "text-red-600"
                              }`}
                            >
                              {article.publication}
                            </span>
                            <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-black transition-colors" />
                          </div>
                          <h3 className="text-lg sm:text-xl font-bold text-black tracking-wide group-hover:text-gray-800 transition-colors">
                            {article.title}
                          </h3>
                          <p className="text-sm font-light text-gray-600 leading-relaxed">{article.description}</p>
                        </div>

                        {/* Animated line */}
                        <div
                          className={`h-0.5 transition-all duration-500 group-hover:w-12 w-0 ${
                            article.accent === "green" ? "bg-green-500" : "bg-red-500"
                          }`}
                        ></div>
                      </div>
                    </CardContent>
                  </Card>
                </a>
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
              <Image
                src="/images/ctzns-logo.png"
                alt="CTZNS - Citizens of the Internet"
                width={160}
                height={40}
                className="h-8 sm:h-10 w-auto mx-auto md:mx-0"
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
