import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { GalleryClient } from "@/components/gallery-client"
import { getGalleryBySlug } from "@/lib/content"
import { ArrowLeft } from "lucide-react"

interface GalleryItem {
  type: "image" | "video"
  src: string
  alt: string
}

interface Gallery {
  slug: string
  title: string
  description: string
  year: string
  media: GalleryItem[]
}

interface GalleryPageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: GalleryPageProps): Promise<Metadata> {
  const { slug } = await params
  const gallery = getGalleryBySlug(slug) as Gallery | null

  if (!gallery) {
    return {
      title: "Gallery Not Found - Camp Moses",
      description: "The requested gallery could not be found.",
    }
  }

  return {
    title: `${gallery.title} - Camp Moses Gallery`,
    description: gallery.description,
    keywords: ["Camp Moses", "gallery", gallery.title, gallery.year, "photos", "videos"],
    openGraph: {
      title: `${gallery.title} - Camp Moses`,
      description: gallery.description,
      type: "website",
      images: gallery.media.filter(item => item.type === "image").slice(0, 3).map(item => ({
        url: item.src,
        alt: item.alt,
      })),
    },
    twitter: {
      card: "summary_large_image",
      title: `${gallery.title} - Camp Moses`,
      description: gallery.description,
      images: gallery.media.filter(item => item.type === "image").slice(0, 1).map(item => item.src),
    },
  }
}

export default async function GalleryPage({ params }: GalleryPageProps) {
  const { slug } = await params
  const gallery = getGalleryBySlug(slug) as Gallery | null

  if (!gallery) {
    return (
      <main className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Gallery Not Found</h1>
          <p className="text-muted-foreground mb-6">The gallery you're looking for doesn't exist.</p>
          <Button asChild>
            <Link href="/">Return Home</Link>
          </Button>
        </div>
      </main>
    )
  }

  const images = gallery.media.filter((item) => item.type === "image")

  return (
    <main className="py-12">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <Button asChild variant="ghost" className="mb-6">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>

        {/* Hero Section */}
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <p className="text-sm font-semibold text-accent mb-2">{gallery.year}</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-camp-green font-serif">{gallery.title}</h1>
          <p className="text-lg text-gray-700 leading-relaxed">{gallery.description}</p>
        </div>

        {/* Gallery Grid */}
        <div className="max-w-6xl mx-auto mb-16">
          <GalleryClient media={gallery.media} />
        </div>

        {/* Back to Timeline */}
        <div className="max-w-2xl mx-auto text-center">
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white">
            <Link href="/#timeline">View Timeline</Link>
          </Button>
        </div>
      </div>
    </main>
  )
}
