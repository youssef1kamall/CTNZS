"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  ArrowRight,
  Check,
  Clock,
  DollarSign,
  Palette,
  Share2,
  Globe,
  Video,
  Mail,
  FileText,
  Target,
  Zap,
  Users,
  Star,
  Instagram,
  Twitter,
  Youtube,
  Linkedin,
  Menu,
  X,
  ShoppingBag,
} from "lucide-react"
import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"

export default function ServicesPage() {
  const [isHeroVisible, setIsHeroVisible] = useState(false)
  const [isServicesVisible, setIsServicesVisible] = useState(false)
  const [isProcessVisible, setIsProcessVisible] = useState(false)
  const [isAddOnsVisible, setIsAddOnsVisible] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const heroRef = useRef<HTMLElement>(null)
  const servicesRef = useRef<HTMLElement>(null)
  const processRef = useRef<HTMLElement>(null)
  const addOnsRef = useRef<HTMLElement>(null)

  // Intersection observers for animations
  useEffect(() => {
    const observers = [
      {
        ref: heroRef,
        setter: setIsHeroVisible,
        threshold: 0.3,
      },
      {
        ref: servicesRef,
        setter: setIsServicesVisible,
        threshold: 0.2,
      },
      {
        ref: processRef,
        setter: setIsProcessVisible,
        threshold: 0.3,
      },
      {
        ref: addOnsRef,
        setter: setIsAddOnsVisible,
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

  const services = [
    {
      title: "Custom Merch & Apparel Design",
      price: "$800 – $2,500",
      timeline: "2–3 weeks",
      description: "Premium custom merchandise that elevates your brand identity.",
      features: [
        "Custom apparel design",
        "Brand-aligned merchandise",
        "Small batch production",
        "Quality material sourcing",
      ],
      idealFor: "Brands, creators, events, and businesses",
      accent: "red",
      icon: <ShoppingBag className="h-6 w-6 text-white" />,
      isNew: true,
    },
    {
      title: "Brand Identity Starter Kit",
      price: "$500 – $1,000",
      timeline: "1–2 weeks",
      description: "Clean, consistent branding is the foundation for trust and visibility.",
      features: [
        "Custom logo design",
        "Color palette & typography guide",
        "Brand guideline PDF",
        "Two rounds of revisions",
      ],
      idealFor: "Startups, rebrands, early-stage businesses",
      accent: "green",
      icon: <Palette className="h-6 w-6 text-white" />,
      popular: true,
    },
    {
      title: "Social Media Content Pack",
      price: "$200 – $500",
      timeline: "3–5 business days",
      description: "Polished, on-brand social content—without the agency retainer.",
      features: [
        "10 customizable design templates",
        "Instagram, Facebook, LinkedIn formats",
        "Preloaded with your brand assets",
        "Optional content writing prompts",
      ],
      idealFor: "Small businesses, influencers, solo creators",
      accent: "red",
      icon: <Share2 className="h-6 w-6 text-white" />,
    },
    {
      title: "Website Launch Bundle",
      price: "$1,000 – $2,000",
      timeline: "2–3 weeks",
      description: "A professional online presence launched fast.",
      features: [
        "One-page responsive website",
        "Mobile & desktop optimization",
        "Basic SEO & contact form",
        "Hosting/domain guidance",
      ],
      idealFor: "Consultants, freelancers, early businesses",
      accent: "yellow",
      icon: <Globe className="h-6 w-6 text-black" />,
    },
    {
      title: "Video Production Services",
      price: "Custom Quote",
      timeline: "1–2 weeks",
      description: "Extend your brand presence across platforms with professional media.",
      features: [
        "YouTube video editing",
        "Reels & Shorts creation",
        "Branded social video content",
        "YouTube thumbnails",
      ],
      idealFor: "Content creators, brands, YouTubers",
      accent: "green",
      icon: <Video className="h-6 w-6 text-white" />,
    },
  ]

  const addOns = [
    { name: "Brand naming assistance", icon: <FileText className="h-4 w-4" /> },
    { name: "Email marketing setup", icon: <Mail className="h-4 w-4" /> },
    { name: "Template customizations", icon: <Target className="h-4 w-4" /> },
    { name: "Social media strategy consulting", icon: <Users className="h-4 w-4" /> },
  ]

  const processSteps = [
    {
      step: "01",
      title: "Choose your package",
      description: "Select the service that fits your needs and budget",
      accent: "green",
    },
    {
      step: "02",
      title: "Fill out onboarding form",
      description: "Quick questionnaire to understand your vision",
      accent: "red",
    },
    {
      step: "03",
      title: "Collaborative check-ins",
      description: "Regular updates and feedback throughout the process",
      accent: "yellow",
    },
    {
      step: "04",
      title: "Launch-ready delivery",
      description: "Final assets delivered and ready to implement",
      accent: "green",
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
                className="h-[60px] w-[100px] md:h-[78px] md:w-[129px] lg:h-[91px] lg:w-[151px] object-contain"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="/about"
                className="text-gray-500 hover:text-black transition-colors text-[14px] md:text-[16px] lg:text-[18px] font-light tracking-wide uppercase"
              >
                About
              </Link>
              <Link
                href="/services"
                className="text-gray-500 hover:text-black transition-colors text-[14px] md:text-[16px] lg:text-[18px] font-light tracking-wide uppercase"
              >
                Services
              </Link>
              <Link
                href="/portfolio"
                className="text-gray-500 hover:text-black transition-colors text-[14px] md:text-[16px] lg:text-[18px] font-light tracking-wide uppercase"
              >
                Portfolio
              </Link>
              <Link
                href="/podcast"
                className="text-gray-500 hover:text-black transition-colors text-[14px] md:text-[16px] lg:text-[18px] font-light tracking-wide uppercase"
              >
                Podcast
              </Link>
              <Link
                href="/products"
                className="text-gray-500 hover:text-black transition-colors text-[14px] md:text-[16px] lg:text-[18px] font-light tracking-wide uppercase"
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
            className={`md:hidden border-t border-gray-100 bg-white transition-all duration-300 ease-in-out overflow-hidden ${mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
          >
            <div className="px-4 py-6 space-y-4">
              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-gray-500 hover:text-black transition-colors text-[14px] md:text-[16px] lg:text-[18px] font-light tracking-wide uppercase w-full text-left"
              >
                About
              </Link>
              <Link
                href="/services"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-gray-500 hover:text-black transition-colors text-[14px] md:text-[16px] lg:text-[18px] font-light tracking-wide uppercase w-full text-left"
              >
                Services
              </Link>
              <Link
                href="/portfolio"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-gray-500 hover:text-black transition-colors text-[14px] md:text-[16px] lg:text-[18px] font-light tracking-wide uppercase w-full text-left"
              >
                Portfolio
              </Link>
              <Link
                href="/podcast"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-gray-500 hover:text-black transition-colors text-[14px] md:text-[16px] lg:text-[18px] font-light tracking-wide uppercase w-full text-left"
              >
                Podcast
              </Link>
              <Link
                href="/products"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-gray-500 hover:text-black transition-colors text-[14px] md:text-[16px] lg:text-[18px] font-light tracking-wide uppercase w-full text-left"
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
            className={`absolute top-20 right-16 w-32 h-32 bg-green-500/5 rounded-full transition-all duration-1000 ${isHeroVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
              }`}
          ></div>
          <div
            className={`absolute bottom-20 left-16 w-24 h-24 bg-red-500/5 rounded-full transition-all duration-1000 delay-300 ${isHeroVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
              }`}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center space-y-8 sm:space-y-12">
            <div className="space-y-6">
              <div
                className={`flex items-center justify-center space-x-3 transition-all duration-700 ${isHeroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
              >
                <div className="w-12 h-0.5 bg-black"></div>
                <span className="text-sm font-light tracking-widest uppercase text-gray-600">Productized Services</span>
                <div className="w-12 h-0.5 bg-black"></div>
              </div>

              <div
                className={`transition-all duration-700 delay-200 ${isHeroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
              >
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-black leading-none">
                  CITIZENS OF THE
                  <span className="block text-green-500 relative">INTERNET</span>
                </h1>
                <div
                  className={`w-24 h-1 bg-green-500 mx-auto mt-6 transition-all duration-1000 delay-700 ${isHeroVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
                    }`}
                ></div>
              </div>

              <div
                className={`transition-all duration-700 delay-400 ${isHeroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
              >
                <p className="text-lg sm:text-xl font-light text-gray-700 max-w-4xl mx-auto leading-relaxed">
                  Houston-based studio helping small businesses and solo entrepreneurs stand out with clean design,
                  smart digital strategy, and scalable solutions.
                </p>
              </div>
            </div>

            {/* Value Props */}
            <div
              className={`grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-4xl mx-auto transition-all duration-700 delay-600 ${isHeroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
            >
              {[
                { icon: <DollarSign className="h-5 w-5" />, text: "Predictable pricing", accent: "green" },
                { icon: <Check className="h-5 w-5" />, text: "Clear deliverables", accent: "red" },
                { icon: <Zap className="h-5 w-5" />, text: "Fast turnaround", accent: "yellow" },
                { icon: <Star className="h-5 w-5" />, text: "No retainers", accent: "green" },
              ].map((prop, index) => (
                <div key={index} className="text-center space-y-3 group">
                  <div
                    className={`w-12 h-12 mx-auto rounded-sm flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${prop.accent === "green" ? "bg-green-500" : prop.accent === "red" ? "bg-red-500" : "bg-yellow-400"
                      }`}
                  >
                    <div className={prop.accent === "yellow" ? "text-black" : "text-white"}>{prop.icon}</div>
                  </div>
                  <p className="text-sm font-light tracking-wide text-gray-700">{prop.text}</p>
                </div>
              ))}
            </div>

            <div
              className={`transition-all duration-700 delay-800 ${isHeroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
            >
              <p className="text-base font-light text-gray-600 max-w-2xl mx-auto">
                Perfect for startups, creators, consultants, and brands who need quality creative fast.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={servicesRef} className="py-16 sm:py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12 sm:space-y-16">
            <div className="text-center space-y-6">
              <div
                className={`flex items-center justify-center space-x-3 transition-all duration-700 ${isServicesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
              >
                <div className="w-12 h-0.5 bg-black"></div>
                <span className="text-sm font-light tracking-wide uppercase text-gray-600">Services</span>
                <div className="w-12 h-0.5 bg-black"></div>
              </div>

              <div
                className={`transition-all duration-700 delay-200 ${isServicesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter text-black">
                  Choose Your
                  <span className="text-green-500"> Package</span>
                </h2>
                <div
                  className={`w-16 h-1 bg-green-500 mx-auto mt-6 transition-all duration-1000 delay-700 ${isServicesVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
                    }`}
                ></div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`transition-all duration-700 ${isServicesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                    }`}
                  style={{ transitionDelay: `${400 + index * 200}ms` }}
                >
                  <Card className="border-0 shadow-none bg-gray-50/50 hover:shadow-lg transition-all duration-300 group relative overflow-hidden h-full">
                    {/* Popular/New Badge */}
                    {(service.popular || service.isNew) && (
                      <div className="absolute top-4 right-4 z-10">
                        <Badge
                          className={`${service.popular ? "bg-green-500 text-white" : "bg-yellow-400 text-black"
                            } font-light tracking-wide`}
                        >
                          {service.popular ? "Popular" : "New"}
                        </Badge>
                      </div>
                    )}

                    {/* Floating accent elements */}
                    <div
                      className={`absolute top-6 left-6 w-3 h-3 rounded-full transition-all duration-500 group-hover:scale-125 ${service.accent === "green"
                        ? "bg-green-500"
                        : service.accent === "red"
                          ? "bg-red-500"
                          : "bg-yellow-400"
                        }`}
                    ></div>

                    <CardContent className="p-8 space-y-6 relative">
                      {/* Service Icon & Title */}
                      <div className="space-y-4">
                        <div
                          className={`w-16 h-16 rounded-sm flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${service.accent === "green"
                            ? "bg-green-500"
                            : service.accent === "red"
                              ? "bg-red-500"
                              : "bg-yellow-400"
                            }`}
                        >
                          {service.icon}
                        </div>

                        <div className="space-y-2">
                          <h3 className="text-xl sm:text-2xl font-bold text-black tracking-wide group-hover:text-gray-800 transition-colors">
                            {service.title}
                          </h3>
                          <p className="text-sm font-light text-gray-600 leading-relaxed">{service.description}</p>
                        </div>
                      </div>

                      {/* Pricing & Timeline */}
                      <div className="flex items-center justify-between py-4 border-t border-b border-gray-100">
                        <div className="space-y-1">
                          <div className="flex items-center space-x-2">
                            <DollarSign className="h-4 w-4 text-gray-500" />
                            <span className="font-semibold text-black">{service.price}</span>
                          </div>
                        </div>
                        <div className="space-y-1">
                          <div className="flex items-center space-x-2">
                            <Clock className="h-4 w-4 text-gray-500" />
                            <span className="text-sm font-light text-gray-600">{service.timeline}</span>
                          </div>
                        </div>
                      </div>

                      {/* Features List */}
                      <div className="space-y-3">
                        <h4 className="font-semibold text-black text-sm tracking-wide uppercase">What's Included:</h4>
                        <ul className="space-y-2">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start space-x-3">
                              <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span className="text-sm font-light text-gray-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Ideal For */}
                      <div className="space-y-2">
                        <h4 className="font-semibold text-black text-sm tracking-wide uppercase">Ideal For:</h4>
                        <p className="text-sm font-light text-gray-600">{service.idealFor}</p>
                      </div>

                      {/* CTA Button */}
                      <Button
                        className="w-full bg-black text-white hover:bg-gray-800 transition-all duration-300 font-light tracking-wide group-hover:scale-105"
                        size="lg"
                      >
                        Get Started
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Add-Ons Section */}
      <section ref={addOnsRef} className="py-16 sm:py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div className="text-center space-y-6">
              <div
                className={`flex items-center justify-center space-x-3 transition-all duration-700 ${isAddOnsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
              >
                <div className="w-12 h-0.5 bg-black"></div>
                <span className="text-sm font-light tracking-widest uppercase text-gray-600">Add-Ons</span>
                <div className="w-12 h-0.5 bg-black"></div>
              </div>

              <div
                className={`transition-all duration-700 delay-200 ${isAddOnsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter text-black">
                  Amplify Your
                  <span className="text-green-500"> Impact</span>
                </h2>
                <div
                  className={`w-16 h-1 bg-green-500 mx-auto mt-6 transition-all duration-1000 delay-700 ${isAddOnsVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
                    }`}
                ></div>
                <p className="text-lg font-light text-gray-700 max-w-2xl mx-auto mt-4">
                  Extend your digital strategy with thoughtful additional services.
                </p>
              </div>
            </div>

            <div
              className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 delay-400 ${isAddOnsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
            >
              {addOns.map((addon, index) => (
                <div
                  key={index}
                  className="bg-gray-50/50 p-6 rounded-sm hover:bg-gray-50 transition-all duration-300 group cursor-pointer relative overflow-hidden"
                >
                  {addon.isNew && (
                    <div className="absolute top-3 right-3">
                      <Badge className="bg-yellow-400 text-black font-light text-xs">New</Badge>
                    </div>
                  )}

                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-black rounded-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <div className="text-white">{addon.icon}</div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-black group-hover:text-gray-800 transition-colors">
                        {addon.name}
                      </h3>
                    </div>
                    <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-black transition-colors" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section ref={processRef} className="py-16 sm:py-24 bg-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12 sm:space-y-16">
            <div className="text-center space-y-6">
              <div
                className={`flex items-center justify-center space-x-3 transition-all duration-700 ${isProcessVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
              >
                <div className="w-12 h-0.5 bg-black"></div>
                <span className="text-sm font-light tracking-widest uppercase text-gray-600">Process</span>
                <div className="w-12 h-0.5 bg-black"></div>
              </div>

              <div
                className={`transition-all duration-700 delay-200 ${isProcessVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter text-black">
                  How It
                  <span className="text-green-500"> Works</span>
                </h2>
                <div
                  className={`w-16 h-1 bg-green-500 mx-auto mt-6 transition-all duration-1000 delay-700 ${isProcessVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
                    }`}
                ></div>
                <p className="text-lg font-light text-gray-700 max-w-2xl mx-auto mt-4">
                  Simple. Fast. Designed to grow with you.
                </p>
              </div>
            </div>

            {/* Vertical Process Steps */}
            <div className="max-w-3xl mx-auto">
              <div className="relative">
                {/* Connecting Line */}
                <div
                  className={`absolute left-8 top-8 bottom-8 w-0.5 bg-gray-300 transition-all duration-1000 delay-600 ${isProcessVisible ? "opacity-100" : "opacity-0"
                    }`}
                ></div>

                <div className="space-y-12">
                  {processSteps.map((step, index) => (
                    <div
                      key={index}
                      className={`relative flex items-start space-x-8 transition-all duration-700 ${isProcessVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                        }`}
                      style={{ transitionDelay: `${400 + index * 200}ms` }}
                    >
                      {/* Step Circle */}
                      <div className="relative flex-shrink-0">
                        <div
                          className={`w-16 h-16 rounded-full flex items-center justify-center text-white font-black text-lg shadow-lg transition-all duration-300 hover:scale-110 ${step.accent === "green"
                            ? "bg-green-500"
                            : step.accent === "red"
                              ? "bg-red-500"
                              : "bg-yellow-400 text-black"
                            }`}
                        >
                          {step.step}
                        </div>

                        {/* Pulse effect */}
                        <div
                          className={`absolute inset-0 rounded-full animate-ping opacity-20 ${step.accent === "green"
                            ? "bg-green-500"
                            : step.accent === "red"
                              ? "bg-red-500"
                              : "bg-yellow-400"
                            }`}
                          style={{ animationDelay: `${index * 0.5}s`, animationDuration: "2s" }}
                        ></div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 pt-2 pb-8">
                        <div className="space-y-3">
                          <h3 className="text-xl sm:text-2xl font-bold text-black tracking-wide group-hover:text-gray-800 transition-colors">
                            {step.title}
                          </h3>
                          <p className="text-base font-light text-gray-600 leading-relaxed max-w-lg">
                            {step.description}
                          </p>

                          {/* Accent line under text */}
                          <div
                            className={`w-12 h-1 rounded-full transition-all duration-500 ${step.accent === "green"
                              ? "bg-green-500/30"
                              : step.accent === "red"
                                ? "bg-red-500/30"
                                : "bg-yellow-400/30"
                              }`}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
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
            <Link href="/" className="text-center md:text-left">
              <img
                src="/images/ctzns-logo.png"
                alt="CTZNS - Citizens of the Internet"
                className="h-[60px] w-[100px] md:h-[78px] md:w-[129px] lg:h-[91px] lg:w-[151px] object-contain mx-auto md:mx-0"
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
