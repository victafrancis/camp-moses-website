import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { VideoEmbed } from "@/components/video-embed"
import { Timeline } from "@/components/timeline"
import { BoardSection } from "@/components/board-section"
import { NewsletterSection } from "@/components/newsletter-section"
import { KuboGallery } from "@/components/kubo-gallery"
import { ArrowRight, Heart, Users, TreePine, HandHeart, Sprout, Map, Users2 } from "lucide-react"
import { getHomeContent, getContactContent } from "@/lib/content"

export const metadata: Metadata = {
  title: "Camp Moses - Christian Retreat Center in Tapaz, Capiz",
  description: "Experience life-changing Christian retreats at Camp Moses in Tapaz, Capiz, Philippines. Family camps, youth programs, and spiritual renewal in nature with God.",
  keywords: ["Christian retreat center", "family camp Philippines", "youth ministry Tapaz", "spiritual retreat Capiz", "Camp Moses", "Christian camp Philippines"],
  openGraph: {
    title: "Camp Moses - Discover Nature, Rediscover Your Soul",
    description: "A sanctuary Christian retreat center in Tapaz, Capiz. Experience life-changing retreats, youth camps, and connect with God in nature.",
    type: "website",
    siteName: "Camp Moses",
    locale: "en_PH",
    images: [
      {
        url: "/camp-moses-skyline.webp",
        width: 1200,
        height: 630,
        alt: "Camp Moses - Skyline View",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Camp Moses - Discover Nature, Rediscover Your Soul",
    description: "A sanctuary Christian retreat center in Tapaz, Capiz",
    images: ["/camp-moses-skyline.webp"],
  },
}

export default function HomePage() {
  const content = getHomeContent()
  const contact = getContactContent()

  const visionIcons = [Users, TreePine, HandHeart]

  const impactIcons: { [key: string]: any } = {
    Sprout: Sprout,
    Map: Map,
    Users2: Users2,
  }

  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-end justify-center text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src={content.hero.backgroundImage || "/placeholder.svg"}
            alt="Camp Moses landscape"
            fill
            className="object-cover brightness-75"
            priority
          />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pb-20">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance font-serif">{content.hero.title}</h1>
          <p className="text-xl md:text-2xl mb-8 text-white/95">{content.hero.subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white text-lg px-8">
              <Link href={content.hero.ctaButtons[0].href}>
                {content.hero.ctaButtons[0].text} <Heart className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white/10 hover:bg-white/20 text-white border-white text-lg px-8"
            >
              <Link href={content.hero.ctaButtons[1].href}>
                {content.hero.ctaButtons[1].text} <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Welcome to Camp Moses Section */}
      <section id="about" className="py-20 camp-bg-beige">
        <div className="container mx-auto px-4">
          {/* Logo Placeholder */}
          <div className="flex justify-center mb-16">
            <div className="rounded-full flex items-center justify-center">
              <Image
                src={content.mission.logoImage || "/placeholder.svg"}
                alt="Camp Moses Logo"
                width={400}
                height={400}
                className="rounded-full"
              />
            </div>
          </div>

          {/* Welcome Title and Description */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 camp-text-green font-serif">{content.mission.title}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">{content.mission.description}</p>
          </div>

          {/* Scripture and Mission Video - Two Column Layout */}
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              {/* Scripture Quote */}
              <div className="p-8 bg-white rounded-lg shadow-md camp-border-brown border-l-4">
                <blockquote className="text-xl md:text-2xl font-serif italic camp-text-green mb-4 text-pretty">
                  "{content.mission.scripture.text}"
                </blockquote>
                <cite className="text-[#8B6F47] font-semibold">— {content.mission.scripture.reference}</cite>
              </div>

              {/* Mission Video */}
              <div>
                <VideoEmbed videoId={content.mission.missionVideo} title="Our Mission at Camp Moses" autoplay={true} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Mission Statement */}
          <div className="max-w-4xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center camp-text-green font-serif">
              {content.mission.missionTitle}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed text-center">
              {content.mission.missionStatement}
            </p>
          </div>

          {/* Vision */}
          <div className="max-w-4xl mx-auto mb-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 camp-text-green font-serif">{content.vision.title}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">{content.vision.statement}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
              {content.vision.promises.map((promise, index) => {
                const IconComponent = visionIcons[index]
                return (
                  <Card key={index} className="border-camp-green-old bg-camp-beige hover:shadow-lg transition-shadow">
                    <CardContent className="p-8 text-center">
                      <div className="flex justify-center mb-4">
                        <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center">
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold mb-4 camp-text-green font-serif">{promise.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{promise.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>

          {/* The Beginning Video */}
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-8 text-center camp-text-green font-serif">
              The Beginning
            </h3>
            <VideoEmbed videoId={content.mission.theBeginningVideo} title="The Beginning" />
          </div>
        </div>
      </section>

      <section id="impact" className="py-20 camp-bg-beige">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 camp-text-green font-serif">{content.impact.title}</h2>
            <p className="text-lg text-muted-foreground">{content.impact.description}</p>
          </div>

          {/* Impact Stats Grid */}
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {content.impact.stats.map((stat, index) => {
                const IconComponent = impactIcons[stat.icon]
                return (
                  <div key={index} className="flex flex-col items-center text-center">
                    {/* Icon */}
                    <div className="mb-6 p-4 rounded-full bg-accent">
                      <IconComponent className="w-12 h-12 text-white" />
                    </div>
                    {/* Stat Number */}
                    <div className="text-5xl md:text-6xl font-bold text-accent mb-3 font-serif">{stat.number}</div>
                    {/* Stat Text */}
                    <p className="text-lg font-medium camp-text-green">{stat.text}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <Timeline />

      {/* Donation Teaser */}
      <section className="py-20 camp-bg-green text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">{content.donationTeaser.title}</h2>
            <p className="text-xl mb-8 text-white/95 leading-relaxed text-pretty">
              {content.donationTeaser.description}
            </p>
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white text-lg px-8">
              <Link href="/donate">
                {content.donationTeaser.ctaText} <Heart className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Kubos */}
      <KuboGallery />

      {/* Board of Directors */}
      <BoardSection />

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 camp-text-green font-serif">
              {content.contactSection.title}
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">{content.contactSection.description}</p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Address */}
              <div className="flex flex-col items-center text-center group">
                <div className="w-24 h-24 rounded-full bg-accent mb-6 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3 camp-text-green font-serif">Location</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">{contact.address}</p>
              </div>

              {/* Phone */}
              <div className="flex flex-col items-center text-center group">
                <div className="w-24 h-24 rounded-full bg-accent mb-6 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3 camp-text-green font-serif">Phone</h3>
                <a
                  href={`tel:+63${contact.phone.replace(/-/g, "")}`}
                  className="text-lg text-muted-foreground hover:text-accent transition-colors font-medium"
                >
                  {contact.phone}
                </a>
              </div>

              {/* Email */}
              <div className="flex flex-col items-center text-center group">
                <div className="w-24 h-24 rounded-full bg-accent mb-6 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M15 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3 camp-text-green font-serif">Email</h3>
                <a
                  href={`mailto:${contact.email}`}
                  className="text-lg text-muted-foreground hover:text-accent transition-colors font-medium"
                >
                  {contact.email}
                </a>
              </div>

              {/* Facebook */}
              <div className="flex flex-col items-center text-center group">
                <div className="w-24 h-24 rounded-full bg-accent mb-6 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                  <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3 camp-text-green font-serif">Follow Us</h3>
                <a
                  href={contact.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-muted-foreground hover:text-accent transition-colors font-medium"
                >
                  {contact.facebook}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <NewsletterSection />
    </main>
  )
}
