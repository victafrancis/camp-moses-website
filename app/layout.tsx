import type React from "react"
import type { Metadata } from "next"
import { Inter, Merriweather } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ScrollToTopProvider } from "@/components/scroll-to-top-provider"
import { Toaster } from "@/components/ui/toaster"
import { getContactContent } from "@/lib/content"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-merriweather",
})

export const metadata: Metadata = {
  title: "Camp Moses - Connect with Nature, Family, and God",
  description:
    "A sanctuary family camp and retreat center in Tapaz, Capiz. Experience life-changing retreats, youth camps, and connect with God in nature.",
  keywords: ["camp", "retreat", "family camp", "Tapaz", "Capiz", "Philippines", "youth ministry", "christian retreat"],
  authors: [{ name: "Camp Moses" }],
  openGraph: {
    title: "Camp Moses - Connect with Nature, Family, and God",
    description: "A sanctuary family camp and retreat center in Tapaz, Capiz",
    type: "website",
    siteName: "Camp Moses",
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
    title: "Camp Moses - Connect with Nature, Family, and God",
    description: "A sanctuary family camp and retreat center in Tapaz, Capiz",
    images: ["/camp-moses-skyline.webp"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const contact = getContactContent()

  // Structured Data for Organization and WebSite
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://campmoses.org/#organization",
        name: "Camp Moses",
        url: "https://campmoses.org",
        logo: {
          "@type": "ImageObject",
          url: "https://campmoses.org/logo/Camp%20Moses%20Logo.png",
          width: 400,
          height: 400,
        },
        sameAs: [
          contact.facebookUrl,
        ],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: `+63-${contact.phone}`,
          contactType: "customer service",
          areaServed: "PH",
          availableLanguage: "English",
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Tapaz",
          addressRegion: "Capiz",
          addressCountry: "PH",
        },
        description: "A Christian retreat center dedicated to facilitating life-changing experiences where people can encounter God, strengthen family bonds, and find renewal in the beauty of His creation.",
        foundingDate: "2010",
        nonprofitStatus: "Nonprofit501c3",
      },
      {
        "@type": "WebSite",
        "@id": "https://campmoses.org/#website",
        url: "https://campmoses.org",
        name: "Camp Moses - Christian Retreat Center",
        description: "Experience life-changing Christian retreats at Camp Moses in Tapaz, Capiz, Philippines. Family camps, youth programs, and spiritual renewal in nature with God.",
        publisher: {
          "@id": "https://campmoses.org/#organization",
        },
        potentialAction: {
          "@type": "SearchAction",
          target: "https://campmoses.org/search?q={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
    ],
  }

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body suppressHydrationWarning className={`${inter.className} ${merriweather.variable} font-sans antialiased`}>
        <ScrollToTopProvider>
          <Navbar />
          {children}
          <Footer />
          <Analytics />
          <Toaster />
        </ScrollToTopProvider>
      </body>
    </html>
  )
}
