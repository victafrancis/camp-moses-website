"use client"

import { VideoEmbed } from "./video-embed"
import { getTimelineContent } from "@/lib/content"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ImageIcon } from "lucide-react"

interface TimelineEvent {
  year: string
  title: string
  description: string
  videoId?: string
  gallerySlug?: string
  thumbnailImage?: string
}

export function Timeline() {
  const { title, description, events } = getTimelineContent()

  return (
    <section id="timeline" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 camp-text-green font-serif">{title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{description}</p>
        </div>

        <div className="max-w-4xl mx-auto">
          {events.map((event, index) => (
            <article key={index} className="relative pl-8 pb-12 border-l-2 camp-border-brown last:pb-0">
              {/* Timeline dot */}
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-camp-green-old border-4 border-white" />

              <time className="text-[#8B6F47] font-bold text-xl mb-2 block">{event.year}</time>
              <h3 className="text-2xl font-bold mb-3 camp-text-green font-serif">{event.title}</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">{event.description}</p>

              {event.gallerySlug ? (
                <>
                  {event.thumbnailImage && (
                    <Link href={`/gallery/${event.gallerySlug}`} className="block mb-4 overflow-hidden rounded-lg">
                      <div className="relative h-48 md:h-64 w-full max-w-md group cursor-pointer">
                        Image thumbnail that links to gallery
                        <Image
                          src={event.thumbnailImage || "/placeholder.svg"}
                          alt={event.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors" />
                      </div>
                    </Link>
                  )}
                  <Button asChild className="bg-accent hover:bg-accent/90 text-white">
                    <Link href={`/gallery/${event.gallerySlug}`}>
                      <ImageIcon className="mr-2 h-4 w-4" />
                      View Gallery
                    </Link>
                  </Button>
                </>
              ) : event.videoId ? (
                <VideoEmbed videoId={event.videoId} title={event.title} className="max-w-2xl" />
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
