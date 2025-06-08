"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight, Menu, X, Calendar, User, Tag } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { useParams } from "next/navigation"

// Portfolio data
const portfolioData = {
  "summer-2024-lookbook": {
    title: "Summer 2024 Lookbook",
    subtitle: "Seasonal Collection",
    description:
      "A vibrant exploration of summer fashion trends, featuring bold colors and relaxed silhouettes that capture the essence of the season.",
    client: "CTZNS Internal",
    date: "March 2024",
    category: "Fashion Photography",
    challenge:
      "Create a cohesive visual narrative that showcases our summer collection while maintaining the brand's distinctive aesthetic and appealing to our target demographic of urban creatives.",
    solution:
      "We developed a concept centered around 'Urban Oasis,' blending city environments with natural elements to create striking visual contrasts. The shoot took place across multiple Houston locations, incorporating architectural elements with carefully selected props and styling.",
    result:
      "The lookbook generated significant engagement across social platforms, with a 43% increase in engagement compared to previous seasonal campaigns. The collection saw a 28% boost in sales within the first two weeks of launch.",
    mainImage:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&h=600",
    gallery: [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400",
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400",
      "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400",
    ],
    testimonial: {
      quote:
        "The Summer 2024 Lookbook perfectly captured our vision for the collection. The creative direction was spot-on, and the results exceeded our expectations.",
      author: "Maya Johnson, Creative Director",
      company: "CTZNS Fashion Division",
    },
  },
  "winter-2023-lookbook": {
    title: "Winter 2023 Lookbook",
    subtitle: "Seasonal Collection",
    description:
      "An atmospheric exploration of winter fashion, featuring layered textures and a moody color palette that evokes the season's introspective mood.",
    client: "CTZNS Internal",
    date: "October 2023",
    category: "Fashion Photography",
    challenge:
      "Develop a winter collection lookbook that stands out in a crowded market while maintaining our brand's unique voice and aesthetic principles.",
    solution:
      "We created a concept titled 'Urban Frost,' combining industrial settings with winter elements. The shoot utilized natural light and carefully selected locations throughout Houston to create a sense of winter atmosphere despite the city's mild climate.",
    result:
      "The lookbook received critical acclaim in several fashion publications and drove a 35% increase in winter collection sales compared to the previous year.",
    mainImage:
      "https://images.unsplash.com/photo-1542744094-3a31f272c490?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&h=600",
    gallery: [
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400",
      "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400",
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400",
    ],
    testimonial: {
      quote:
        "The Winter 2023 Lookbook perfectly balanced artistic vision with commercial appeal. The team's attention to detail and understanding of our brand was impressive.",
      author: "Thomas Reed, Marketing Director",
      company: "CTZNS Fashion Division",
    },
  },
  "spring-2023-lookbook": {
    title: "Spring 2023 Lookbook",
    subtitle: "Seasonal Collection",
    description:
      "A fresh and vibrant showcase of spring fashion, featuring light fabrics and a pastel color palette that celebrates renewal and growth.",
    client: "CTZNS Internal",
    date: "January 2023",
    category: "Fashion Photography",
    challenge:
      "Create a spring lookbook that feels fresh and innovative while maintaining brand consistency and showcasing the versatility of the collection.",
    solution:
      "We developed a concept called 'Urban Bloom,' shooting in various Houston locations where nature and city intersect. The creative direction emphasized movement and natural light to capture the essence of spring.",
    result:
      "The lookbook helped establish our spring collection as our most successful seasonal launch to date, with a 52% increase in social media engagement and a 40% boost in sales compared to the previous spring.",
    mainImage:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&h=600",
    gallery: [
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400",
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400",
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400",
    ],
    testimonial: {
      quote:
        "The Spring 2023 Lookbook perfectly captured the essence of our collection. The creative direction was innovative yet accessible, resulting in our most successful spring launch ever.",
      author: "Sophia Chen, Product Manager",
      company: "CTZNS Fashion Division",
    },
  },
  "houston-fashion-week-2024": {
    title: "Houston Fashion Week 2024",
    subtitle: "Event Photography",
    description:
      "Comprehensive coverage of Houston Fashion Week 2024, capturing runway moments, backstage preparations, and the vibrant atmosphere of the city's premier fashion event.",
    client: "Houston Fashion Council",
    date: "February 2024",
    category: "Event Photography",
    challenge:
      "Document the multi-day fashion week event with a distinctive visual approach that stands out from standard event coverage while meeting tight deadlines for daily content delivery.",
    solution:
      "We deployed a team of photographers using a coordinated visual strategy that combined documentary-style candids with editorial-quality composed shots. Our workflow included on-site editing to deliver daily highlight packages.",
    result:
      "Our coverage was featured in multiple publications including Vogue Digital and WWD. The Houston Fashion Council reported a 65% increase in social media engagement compared to previous years' events.",
    mainImage:
      "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&h=600",
    gallery: [
      "https://images.unsplash.com/photo-1509319117193-57bab727e09d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400",
      "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400",
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400",
    ],
    testimonial: {
      quote:
        "CTZNS delivered exceptional coverage of our event. Their team captured not just the fashion, but the energy and excitement of Houston Fashion Week in a way that truly elevated our brand.",
      author: "Elena Martinez, Executive Director",
      company: "Houston Fashion Council",
    },
  },
  "downtown-houston-editorial": {
    title: "Downtown Houston Editorial",
    subtitle: "Urban Fashion Editorial",
    description:
      "A striking editorial shoot set against the dramatic architecture of downtown Houston, blending high fashion with urban grit.",
    client: "Houston Style Magazine",
    date: "January 2024",
    category: "Editorial Photography",
    challenge:
      "Create a fashion editorial that showcases Houston's urban landscape in a fresh way while highlighting key seasonal fashion pieces for a major magazine feature.",
    solution:
      "We scouted unique architectural locations throughout downtown Houston, focusing on interesting textures, lines, and light patterns. The shoot was scheduled during 'golden hour' to maximize the dramatic interplay of light and shadow with the city's architecture.",
    result:
      "The editorial was featured as a 12-page spread in Houston Style Magazine's Spring issue and received an American Photography Award nomination for editorial excellence.",
    mainImage:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&h=600",
    gallery: [
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400",
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400",
      "https://images.unsplash.com/photo-1550614000-4895a10e1bfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400",
    ],
    testimonial: {
      quote:
        "The Downtown Houston Editorial exceeded our expectations in every way. CTZNS brought a unique vision that transformed familiar city locations into something extraordinary.",
      author: "Marcus Williams, Editor-in-Chief",
      company: "Houston Style Magazine",
    },
  },
  "brand-identity-revolution": {
    title: "Brand Identity Revolution",
    subtitle: "Brand Transformation",
    description:
      "A comprehensive brand overhaul for a tech startup, transforming their visual identity from generic to distinctive and memorable.",
    client: "NexTech Solutions",
    date: "November 2023",
    category: "Brand Identity",
    challenge:
      "Revitalize a tech startup's brand identity that had become generic and forgettable in a crowded market, while maintaining elements of recognition with their existing customer base.",
    solution:
      "We conducted extensive market research and stakeholder interviews to identify the company's unique value proposition. The design process focused on creating a visual system that communicated innovation and reliability while standing out from competitors.",
    result:
      "The rebranding led to a 45% increase in brand recognition in market testing and a 30% boost in website engagement metrics. The client reported improved conversion rates for new business pitches.",
    mainImage:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&h=600",
    gallery: [
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400",
      "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400",
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400",
    ],
    testimonial: {
      quote:
        "CTZNS transformed our brand from forgettable to remarkable. Their strategic approach to the redesign has completely changed how potential clients perceive our company.",
      author: "Alex Rivera, CEO",
      company: "NexTech Solutions",
    },
  },
  "galveston-beach-photoshoot": {
    title: "Galveston Beach Photoshoot",
    subtitle: "Location Fashion Photography",
    description:
      "A stunning beachside fashion shoot capturing the natural beauty of Galveston's coastline paired with contemporary summer fashion.",
    client: "Gulf Coast Style",
    date: "May 2023",
    category: "Location Photography",
    challenge:
      "Create a fashion story that authentically captures the Gulf Coast aesthetic while elevating the featured clothing beyond typical beach photography clichés.",
    solution:
      "We scheduled the shoot during varied times of day to capture different lighting conditions, from misty dawn to golden sunset. The creative direction emphasized the interplay between structured fashion and the organic textures of the coastline.",
    result:
      "The photoshoot was featured in Gulf Coast Style's summer issue and generated significant social media engagement, with several images becoming the publication's most-shared content of the year.",
    mainImage:
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&h=600",
    gallery: [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400",
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400",
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400",
    ],
    testimonial: {
      quote:
        "The Galveston Beach Photoshoot perfectly captured the essence of coastal style while bringing a sophisticated editorial quality that elevated our publication.",
      author: "Jasmine Torres, Art Director",
      company: "Gulf Coast Style Magazine",
    },
  },
  "brand-identity-for-the-juice-box": {
    title: "Brand Identity for 'The Juice Box'",
    subtitle: "Brand Development",
    description:
      "A vibrant and playful brand identity for a new cold-pressed juice bar in Houston's Heights neighborhood.",
    client: "The Juice Box",
    date: "April 2023",
    category: "Brand Identity",
    challenge:
      "Create a distinctive brand identity for a new juice bar that would stand out in a competitive market while appealing to health-conscious consumers and reflecting the neighborhood's artistic character.",
    solution:
      "We developed a brand strategy centered around the concept of 'Vibrant Living' and created a visual identity featuring hand-drawn illustrations, a bright color palette inspired by fresh produce, and playful typography.",
    result:
      "The brand identity helped The Juice Box achieve 200% of projected sales in their first quarter. Their Instagram following grew to over 10,000 in the first three months, driven by the distinctive visual identity.",
    mainImage:
      "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&h=600",
    gallery: [
      "https://images.unsplash.com/photo-1525385133512-2f3bdd039054?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400",
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400",
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400",
    ],
    testimonial: {
      quote:
        "CTZNS created a brand identity that perfectly captures our energy and values. The design has become a key part of our success and customers frequently comment on how much they love our branding.",
      author: "Olivia Park, Founder",
      company: "The Juice Box",
    },
  },
  "social-media-campaign-for-urban-grind": {
    title: "Social Media Campaign for 'Urban Grind'",
    subtitle: "Digital Marketing",
    description:
      "A dynamic social media campaign for a specialty coffee shop chain, highlighting their artisanal approach and community connections.",
    client: "Urban Grind Coffee",
    date: "August 2023",
    category: "Social Media",
    challenge:
      "Develop a social media campaign that would differentiate Urban Grind from other specialty coffee shops while driving foot traffic to their three Houston locations.",
    solution:
      "We created a 12-week content strategy focused on 'Coffee Culture Redefined,' featuring behind-the-scenes content, barista spotlights, and customer stories. The visual approach emphasized authentic moments with a consistent editing style.",
    result:
      "The campaign increased Instagram engagement by 78% and contributed to a 25% increase in store traffic. The client reported that new customers frequently mentioned seeing their social media content.",
    mainImage:
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&h=600",
    gallery: [
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400",
      "https://images.unsplash.com/photo-1514066558159-fc8c737ef259?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400",
      "https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400",
    ],
    testimonial: {
      quote:
        "The social media campaign CTZNS developed transformed our online presence and had a direct impact on our business. Their understanding of our brand and audience was exceptional.",
      author: "Daniel Kim, Marketing Manager",
      company: "Urban Grind Coffee",
    },
  },
  "website-design-for-the-plant-project": {
    title: "Website Design for 'The Plant Project'",
    subtitle: "Web Design",
    description:
      "A visually rich and user-friendly e-commerce website for a boutique plant shop, balancing aesthetic appeal with functional shopping experience.",
    client: "The Plant Project",
    date: "July 2023",
    category: "Web Design",
    challenge:
      "Design an e-commerce website that would showcase the client's unique plant inventory while providing an intuitive shopping experience and reflecting their brand's focus on biophilic design.",
    solution:
      "We created a custom website with a minimalist design that puts the focus on high-quality plant photography. The user experience was carefully crafted to simplify the plant selection process with detailed care information and visual filtering options.",
    result:
      "The new website increased online sales by 150% and reduced cart abandonment by 35%. The average time spent on site increased from 1:45 to 4:20 minutes.",
    mainImage:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&h=600",
    gallery: [
      "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400",
      "https://images.unsplash.com/photo-1487014679447-9f8336841d58?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400",
      "https://images.unsplash.com/photo-1545239351-ef35f43d514b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400",
    ],
    testimonial: {
      quote:
        "CTZNS delivered a website that perfectly balances beauty and functionality. Our customers frequently comment on how enjoyable the shopping experience is, and our online sales have more than doubled.",
      author: "Leila Washington, Owner",
      company: "The Plant Project",
    },
  },
}

export default function PortfolioDetailPage() {
  const params = useParams()
  const slug = params.slug as string
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isHeroVisible, setIsHeroVisible] = useState(false)
  const [isDetailsVisible, setIsDetailsVisible] = useState(false)
  const [isGalleryVisible, setIsGalleryVisible] = useState(false)
  const heroRef = useRef<HTMLElement>(null)
  const detailsRef = useRef<HTMLElement>(null)
  const galleryRef = useRef<HTMLElement>(null)

  // Get portfolio data based on slug
  const portfolioItem = portfolioData[slug] || {
    title: "Portfolio Item Not Found",
    subtitle: "",
    description: "The requested portfolio item could not be found.",
    client: "",
    date: "",
    category: "",
    challenge: "",
    solution: "",
    result: "",
    mainImage: "/placeholder.svg?height=600&width=1000",
    gallery: [],
    testimonial: {
      quote: "",
      author: "",
      company: "",
    },
  }

  useEffect(() => {
    const observers = [
      {
        ref: heroRef,
        setter: setIsHeroVisible,
        threshold: 0.3,
      },
      {
        ref: detailsRef,
        setter: setIsDetailsVisible,
        threshold: 0.2,
      },
      {
        ref: galleryRef,
        setter: setIsGalleryVisible,
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

  // Get related portfolio items (excluding current one)
  const relatedItems = Object.entries(portfolioData)
    .filter(([itemSlug]) => itemSlug !== slug)
    .slice(0, 3)
    .map(([itemSlug, item]) => ({
      slug: itemSlug,
      title: item.title,
      image: item.mainImage,
      category: item.category,
    }))

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
                className="block text-gray-500 hover:text-black transition-colors text-[14px] font-light tracking-wide uppercase w-full text-left"
              >
                About
              </Link>
              <Link
                href="/services"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-gray-500 hover:text-black transition-colors text-[14px] font-light tracking-wide uppercase w-full text-left"
              >
                Services
              </Link>
              <Link
                href="/portfolio"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-gray-500 hover:text-black transition-colors text-[14px] font-light tracking-wide uppercase w-full text-left"
              >
                Portfolio
              </Link>
              <Link
                href="/podcast"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-gray-500 hover:text-black transition-colors text-[14px] font-light tracking-wide uppercase w-full text-left"
              >
                Podcast
              </Link>
              <Link
                href="/products"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-gray-500 hover:text-black transition-colors text-[14px] font-light tracking-wide uppercase w-full text-left"
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
          {/* Back to Portfolio Link */}
          <div className="mb-8">
            <Link
              href="/portfolio"
              className="inline-flex items-center text-gray-600 hover:text-black transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              <span className="text-sm font-light">Back to Portfolio</span>
            </Link>
          </div>

          <div className="text-center space-y-8 sm:space-y-12">
            <div className="space-y-6">
              <div
                className={`flex items-center justify-center space-x-3 transition-all duration-700 ${isHeroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
              >
                <div className="w-12 h-0.5 bg-black"></div>
                <span className="text-sm font-light tracking-widest uppercase text-gray-600">
                  {portfolioItem.category}
                </span>
                <div className="w-12 h-0.5 bg-black"></div>
              </div>

              <div
                className={`transition-all duration-700 delay-200 ${isHeroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
              >
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter text-black leading-none">
                  {portfolioItem.title}
                  <span className="block text-green-500 relative text-2xl sm:text-3xl md:text-4xl mt-2">
                    {portfolioItem.subtitle}
                  </span>
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
                <p className="text-lg sm:text-xl font-light text-gray-700 max-w-3xl mx-auto leading-relaxed">
                  {portfolioItem.description}
                </p>
              </div>
            </div>
          </div>

          {/* Main Image */}
          <div
            className={`mt-12 transition-all duration-1000 delay-600 ${isHeroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
          >
            <div className="aspect-[16/9] rounded-sm overflow-hidden">
              <img
                src={portfolioItem.mainImage || "/placeholder.svg"}
                alt={portfolioItem.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Project Details Section */}
      <section ref={detailsRef} className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Project Info - Left Column */}
            <div className="lg:col-span-1">
              <div
                className={`space-y-8 transition-all duration-700 ${isDetailsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
              >
                <div>
                  <h3 className="text-lg font-semibold text-black mb-4">Project Details</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <User className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-gray-700">Client</p>
                        <p className="text-base font-light text-black">{portfolioItem.client}</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Calendar className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-gray-700">Date</p>
                        <p className="text-base font-light text-black">{portfolioItem.date}</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Tag className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-gray-700">Category</p>
                        <p className="text-base font-light text-black">{portfolioItem.category}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Testimonial */}
                {portfolioItem.testimonial.quote && (
                  <div className="bg-gray-50 p-6 border-l-4 border-green-500 relative">
                    <div className="absolute top-0 right-0 w-16 h-16 bg-green-500/5 rounded-full"></div>
                    <blockquote className="text-base font-light text-gray-800 leading-relaxed italic relative z-10">
                      "{portfolioItem.testimonial.quote}"
                    </blockquote>
                    <div className="mt-4 text-sm">
                      <p className="font-medium text-black">{portfolioItem.testimonial.author}</p>
                      <p className="font-light text-gray-600">{portfolioItem.testimonial.company}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Project Description - Right Column */}
            <div className="lg:col-span-2">
              <div className="space-y-8">
                <div
                  className={`space-y-6 transition-all duration-700 delay-200 ${isDetailsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                >
                  <div>
                    <h3 className="text-xl font-semibold text-black mb-3">Challenge</h3>
                    <p className="text-base font-light text-gray-700 leading-relaxed">{portfolioItem.challenge}</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-black mb-3">Solution</h3>
                    <p className="text-base font-light text-gray-700 leading-relaxed">{portfolioItem.solution}</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-black mb-3">Result</h3>
                    <p className="text-base font-light text-gray-700 leading-relaxed">{portfolioItem.result}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      {portfolioItem.gallery && portfolioItem.gallery.length > 0 && (
        <section ref={galleryRef} className="py-16 sm:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6 mb-12">
              <div
                className={`flex items-center justify-center space-x-3 transition-all duration-700 ${isGalleryVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
              >
                <div className="w-8 sm:w-12 h-0.5 bg-black"></div>
                <span className="text-xs sm:text-sm font-light tracking-widest uppercase text-gray-600">Gallery</span>
                <div className="w-8 sm:w-12 h-0.5 bg-black"></div>
              </div>

              <div
                className={`transition-all duration-700 delay-200 ${isGalleryVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
              >
                <h2 className="text-3xl sm:text-4xl font-black tracking-tighter text-black">
                  Project <span className="text-green-500">Showcase</span>
                </h2>
                <div
                  className={`w-16 h-1 bg-green-500 mx-auto mt-4 transition-all duration-1000 delay-700 ${isGalleryVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
                    }`}
                ></div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {portfolioItem.gallery.map((image, index) => (
                <div
                  key={index}
                  className={`transition-all duration-700 ${isGalleryVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                    }`}
                  style={{ transitionDelay: `${400 + index * 150}ms` }}
                >
                  <div className="aspect-[4/3] rounded-sm hover:shadow-lg transition-all duration-300 group cursor-pointer relative overflow-hidden">
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`${portfolioItem.title} - Image ${index + 1}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Projects Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-12">
            <div className="flex items-center justify-center space-x-3">
              <div className="w-8 sm:w-12 h-0.5 bg-black"></div>
              <span className="text-xs sm:text-sm font-light tracking-widest uppercase text-gray-600">
                Explore More
              </span>
              <div className="w-8 sm:w-12 h-0.5 bg-black"></div>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black tracking-tighter text-black">
              Related <span className="text-green-500">Projects</span>
            </h2>
            <div className="w-16 h-1 bg-green-500 mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {relatedItems.map((item, index) => (
              <Link href={`/portfolio/${item.slug}`} key={index} className="block">
                <div className="aspect-[4/3] rounded-sm hover:shadow-lg transition-all duration-300 group cursor-pointer relative overflow-hidden">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>

                  {/* Title overlay at bottom left */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                    <span className="text-xs font-light text-white/80 uppercase tracking-wider">{item.category}</span>
                    <h3 className="text-white text-lg font-medium">{item.title}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/portfolio">
              <Button className="bg-green-500 hover:bg-green-600 text-black font-medium tracking-wide">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter">
                Ready to Create Your
                <span className="block text-green-400">Next Project?</span>
              </h2>
              <div className="w-16 h-1 bg-green-500 mx-auto"></div>
              <p className="text-lg font-light text-gray-300 leading-relaxed max-w-3xl mx-auto">
                Let's collaborate to bring your vision to life. Our team of creative professionals is ready to help you
                stand out in the digital landscape.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/services">
                <Button size="lg" className="bg-green-500 hover:bg-green-600 text-black font-medium tracking-wide">
                  View Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-black bg-white hover:bg-gray-100 font-light tracking-wide"
              >
                Get in Touch
              </Button>
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
