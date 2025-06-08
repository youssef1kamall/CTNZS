"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  ArrowRight,
  ShoppingBag,
  Truck,
  ShieldCheck,
  Zap,
  Instagram,
  Twitter,
  Youtube,
  Linkedin,
  Menu,
  X,
} from "lucide-react"
import { useState, useEffect, useRef } from "react"
import Link from "next/link"

export default function ProductsPage() {
  const [isHeroVisible, setIsHeroVisible] = useState(false)
  const [isProductsVisible, setIsProductsVisible] = useState(false)
  const [isContactVisible, setIsContactVisible] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const heroRef = useRef<HTMLElement>(null)
  const productsRef = useRef<HTMLElement>(null)
  const contactRef = useRef<HTMLElement>(null)

  // Intersection observers for animations
  useEffect(() => {
    const observers = [
      {
        ref: heroRef,
        setter: setIsHeroVisible,
        threshold: 0.3,
      },
      {
        ref: productsRef,
        setter: setIsProductsVisible,
        threshold: 0.2,
      },
      {
        ref: contactRef,
        setter: setIsContactVisible,
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

  const products = [
    {
      name: "CTZNS Hoodie",
      price: "$65.00",
      description: "Premium quality hoodie with embroidered logo. Comfortable, stylish, and perfect for everyday wear.",
      image:
        "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500",
      accent: "green",
      isNew: true,
      sizes: ["S", "M", "L", "XL"],
    },
    {
      name: "Digital Citizen Tee",
      price: "$35.00",
      description: "Soft cotton t-shirt with minimalist design. Features our signature 'Digital Citizen' graphic.",
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500",
      accent: "red",
      isBestseller: true,
      sizes: ["S", "M", "L", "XL", "XXL"],
    },
    {
      name: "Internet Culture Cap",
      price: "$28.00",
      description: "Embroidered cap with adjustable strap. Represent your digital citizenship in style.",
      image:
        "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500",
      accent: "yellow",
      sizes: ["One Size"],
    },
    {
      name: "COTI Sticker Pack",
      price: "$12.00",
      description:
        "Set of 5 premium vinyl stickers featuring our most popular designs and internet culture references.",
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500",
      accent: "green",
      sizes: ["One Size"],
    },
    {
      name: "Boundary Pusher Tote",
      price: "$25.00",
      description: "Heavy-duty canvas tote bag with 'Boundary Pusher' print. Perfect for carrying your essentials.",
      image:
        "https://images.unsplash.com/photo-1622560480654-d96214fdc887?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500",
      accent: "red",
      sizes: ["One Size"],
    },
    {
      name: "Reality Creator Mug",
      price: "$18.00",
      description: "Ceramic mug with 'Reality Creator' design. Start your day with a reminder of your creative power.",
      image:
        "https://images.unsplash.com/photo-1577937927133-66ef06acdf18?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500",
      accent: "yellow",
      isNew: true,
      sizes: ["One Size"],
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
                <ShoppingBag className="mr-2 h-4 w-4" />
                Cart (0)
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
                <ShoppingBag className="mr-2 h-4 w-4" />
                Cart (0)
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Side - Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div
                  className={`flex items-center space-x-3 transition-all duration-700 ${isHeroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                >
                  <div className="w-12 h-0.5 bg-black"></div>
                  <span className="text-sm font-light tracking-widest uppercase text-gray-600">Merchandise</span>
                </div>

                <div
                  className={`transition-all duration-700 delay-200 ${isHeroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                >
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter text-black leading-none">
                    CTZNS
                    <span className="block text-green-500 relative">
                      MERCH
                      {/* Animated underline */}
                      <div
                        className={`absolute bottom-0 left-0 h-1 bg-green-500/20 transition-all duration-1000 delay-700 ${isHeroVisible ? "w-full" : "w-0"
                          }`}
                      ></div>
                    </span>
                  </h1>
                </div>
                <div
                  className={`w-16 h-1 bg-green-500 transition-all duration-1000 delay-700 ${isHeroVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
                    }`}
                ></div>

                <div
                  className={`transition-all duration-700 delay-400 ${isHeroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                >
                  <p className="text-lg sm:text-xl font-light text-gray-700 leading-relaxed">
                    Wear your digital citizenship with pride. Our exclusive merchandise represents the Citizens of the
                    Internet community and our values of creativity, innovation, and boundary-pushing design.
                  </p>
                </div>
              </div>

              <div
                className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-600 ${isHeroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
              >
                <Button
                  size="lg"
                  className="bg-green-500 hover:bg-green-600 text-black font-medium tracking-wide"
                  onClick={() => {
                    const element = document.getElementById("products")
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" })
                    }
                  }}
                >
                  <ShoppingBag className="mr-2 h-4 w-4" />
                  Shop Now
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-black text-black hover:bg-black hover:text-white font-light tracking-wide"
                >
                  View Lookbook
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>

              {/* Product Features */}
              <div
                className={`grid grid-cols-3 gap-6 pt-8 transition-all duration-700 delay-800 ${isHeroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
              >
                <div className="text-center space-y-2">
                  <div className="w-10 h-10 bg-green-500 rounded-sm flex items-center justify-center mx-auto">
                    <ShieldCheck className="h-5 w-5 text-white" />
                  </div>
                  <div className="text-xs sm:text-sm font-light tracking-wide text-gray-600">Premium Quality</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="w-10 h-10 bg-red-500 rounded-sm flex items-center justify-center mx-auto">
                    <Truck className="h-5 w-5 text-white" />
                  </div>
                  <div className="text-xs sm:text-sm font-light tracking-wide text-gray-600">Fast Shipping</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="w-10 h-10 bg-yellow-400 rounded-sm flex items-center justify-center mx-auto">
                    <Zap className="h-5 w-5 text-black" />
                  </div>
                  <div className="text-xs sm:text-sm font-light tracking-wide text-gray-600">Unique Designs</div>
                </div>
              </div>
            </div>

            {/* Right Side - Featured Product */}
            <div
              className={`transition-all duration-1000 ${isHeroVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
                }`}
            >
              <div className="aspect-[4/5] bg-gray-50/50 rounded-sm relative overflow-hidden border border-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800"
                  alt="CTZNS Hoodie"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-green-500 text-white font-light">New Arrival</Badge>
                </div>

                {/* Floating accent elements */}
                <div className="absolute top-6 left-6 w-4 h-4 bg-green-500 rounded-full"></div>
                <div className="absolute bottom-8 right-8 w-6 h-6 bg-yellow-400/80 rounded-sm"></div>
                <div className="absolute top-1/2 right-4 w-2 h-16 bg-red-500/60"></div>
              </div>

              {/* Floating elements around the image */}
              <div className="absolute -top-4 -right-4 w-8 h-8 border-2 border-green-500 rounded-full"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-black/5 rounded-sm"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" ref={productsRef} className="py-16 sm:py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12 sm:space-y-16">
            <div className="text-center space-y-6">
              <div
                className={`flex items-center justify-center space-x-3 transition-all duration-700 ${isProductsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
              >
                <div className="w-12 h-0.5 bg-black"></div>
                <span className="text-sm font-light tracking-widest uppercase text-gray-600">Shop</span>
                <div className="w-12 h-0.5 bg-black"></div>
              </div>

              <div
                className={`transition-all duration-700 delay-200 ${isProductsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter text-black">
                  Our
                  <span className="text-green-500"> Collection</span>
                </h2>
                <div
                  className={`w-16 h-1 bg-green-500 mx-auto mt-6 transition-all duration-1000 delay-700 ${isProductsVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
                    }`}
                ></div>
                <p className="text-lg font-light text-gray-700 max-w-2xl mx-auto mt-4">
                  Express your digital citizenship with our exclusive merchandise collection.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <div
                  key={index}
                  className={`transition-all duration-700 ${isProductsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                    }`}
                  style={{ transitionDelay: `${400 + index * 150}ms` }}
                >
                  <Card className="border-0 shadow-none bg-gray-50/50 hover:shadow-lg transition-all duration-300 group relative overflow-hidden">
                    {(product.isNew || product.isBestseller) && (
                      <div className="absolute top-4 right-4 z-10">
                        <Badge
                          className={`${product.isNew ? "bg-green-500 text-white" : "bg-yellow-400 text-black"
                            } font-light`}
                        >
                          {product.isNew ? "New" : "Bestseller"}
                        </Badge>
                      </div>
                    )}

                    {/* Floating accent elements */}
                    <div
                      className={`absolute top-4 left-4 w-3 h-3 rounded-full transition-all duration-500 group-hover:scale-125 ${product.accent === "green"
                        ? "bg-green-500"
                        : product.accent === "red"
                          ? "bg-red-500"
                          : "bg-yellow-400"
                        }`}
                    ></div>

                    <CardContent className="p-0 relative">
                      {/* Product Image */}
                      <div className="aspect-[4/5] relative overflow-hidden">
                        <img
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                      </div>

                      <div className="p-6 space-y-4">
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <h3 className="text-lg font-bold text-black tracking-wide group-hover:text-gray-800 transition-colors">
                              {product.name}
                            </h3>
                            <span className="font-semibold text-black">{product.price}</span>
                          </div>
                          <p className="text-sm font-light text-gray-600 leading-relaxed line-clamp-2">
                            {product.description}
                          </p>
                        </div>

                        <div className="space-y-4">
                          {/* Sizes */}
                          <div className="space-y-2">
                            <p className="text-xs font-medium text-gray-500 uppercase">Sizes</p>
                            <div className="flex flex-wrap gap-2">
                              {product.sizes.map((size, sizeIndex) => (
                                <div
                                  key={sizeIndex}
                                  className="px-2 py-1 border border-gray-200 text-xs font-light text-gray-700 hover:border-black transition-colors cursor-pointer"
                                >
                                  {size}
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Add to Cart Button */}
                          <Button
                            className={`w-full text-white font-light tracking-wide group-hover:scale-105 transition-all duration-300 ${product.accent === "green"
                              ? "bg-green-500 hover:bg-green-600"
                              : product.accent === "red"
                                ? "bg-red-500 hover:bg-red-600"
                                : "bg-yellow-400 hover:bg-yellow-500 text-black"
                              }`}
                          >
                            <ShoppingBag className="mr-2 h-4 w-4" />
                            Add to Cart
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Custom Order Section */}
      <section ref={contactRef} className="py-16 sm:py-24 bg-gray-50/50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Side - Image */}
            <div
              className={`transition-all duration-1000 ${isContactVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
                }`}
            >
              <div className="aspect-square bg-white rounded-sm relative overflow-hidden border border-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1622560480654-d96214fdc887?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600"
                  alt="Custom merchandise"
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

            {/* Right Side - Form */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div
                  className={`flex items-center space-x-3 transition-all duration-700 ${isContactVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                >
                  <div className="w-12 h-0.5 bg-black"></div>
                  <span className="text-sm font-light tracking-widest uppercase text-gray-600">Custom Orders</span>
                </div>

                <div
                  className={`transition-all duration-700 delay-200 ${isContactVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                >
                  <h2 className="text-3xl sm:text-4xl font-black tracking-tighter text-black">
                    Need Custom
                    <span className="text-green-500 relative">
                      {" "}
                      Merchandise?
                      {/* Animated underline */}
                      <div
                        className={`absolute bottom-0 left-0 h-1 bg-green-500/20 transition-all duration-1000 delay-700 ${isContactVisible ? "w-full" : "w-0"
                          }`}
                      ></div>
                    </span>
                  </h2>
                </div>
                <div
                  className={`w-16 h-1 bg-green-500 transition-all duration-1000 delay-700 ${isContactVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
                    }`}
                ></div>

                <div
                  className={`transition-all duration-700 delay-400 ${isContactVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                >
                  <p className="text-base font-light text-gray-700 leading-relaxed">
                    Looking for custom merchandise for your brand, event, or organization? We offer bulk orders and
                    custom designs. Fill out the form below to get started.
                  </p>
                </div>
              </div>

              <div
                className={`space-y-6 transition-all duration-700 delay-600 ${isContactVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-700">
                      Name
                    </label>
                    <Input id="name" placeholder="Your name" className="bg-white border-gray-200" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="Your email" className="bg-white border-gray-200" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="project" className="text-sm font-medium text-gray-700">
                    Project Details
                  </label>
                  <Textarea
                    id="project"
                    placeholder="Tell us about your project, quantity needed, and timeline"
                    className="bg-white border-gray-200 min-h-[120px]"
                  />
                </div>

                <Button
                  size="lg"
                  className="bg-green-500 hover:bg-green-600 text-black font-medium tracking-wide w-full"
                >
                  Submit Inquiry
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
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
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
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
