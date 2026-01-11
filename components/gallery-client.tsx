"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ImageLightbox } from "@/components/image-lightbox"
import { Play } from "lucide-react"

interface GalleryItem {
  type: "image" | "video"
  src: string
  alt: string
}

interface GalleryClientProps {
  media: GalleryItem[]
}

export function GalleryClient({ media }: GalleryClientProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)
  const [videoOpen, setVideoOpen] = useState(false)
  const [selectedVideo, setSelectedVideo] = useState<string>("")

  const images = media.filter((item) => item.type === "image")
  const imageIndices = media.reduce((acc: number[], item, idx) => {
    if (item.type === "image") acc.push(idx)
    return acc
  }, [])

  const openLightbox = (mediaIndex: number) => {
    const imageIndex = imageIndices.indexOf(mediaIndex)
    setLightboxIndex(imageIndex)
    setLightboxOpen(true)
  }

  const openVideo = (src: string) => {
    setSelectedVideo(src)
    setVideoOpen(true)
  }

  const closeVideo = () => {
    setVideoOpen(false)
    setSelectedVideo("")
  }

  // Handle keyboard events for video modal
  useEffect(() => {
    if (!videoOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeVideo()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [videoOpen])

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {media && media.length > 0 ? (
          media.map((item, index) => (
            <div key={index} className="w-full">
              {item.type === "image" ? (
                <button
                  onClick={() => openLightbox(index)}
                  className="relative w-full aspect-square overflow-hidden rounded-lg group cursor-pointer bg-gray-200"
                >
                  <Image
                    src={item.src || "/placeholder.svg"}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                </button>
              ) : (
                <button
                  onClick={() => openVideo(item.src)}
                  className="relative w-full aspect-square overflow-hidden rounded-lg group cursor-pointer"
                >
                  <video
                    src={item.src}
                    preload="metadata"
                    muted
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onLoadedMetadata={(e) => {
                      // Ensure video shows first frame
                      const video = e.target as HTMLVideoElement
                      video.currentTime = 0
                    }}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                    <Play className="h-12 w-12 text-white group-hover:scale-110 transition-transform drop-shadow-lg" />
                  </div>
                </button>
              )}
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-muted-foreground">No media available for this gallery.</p>
          </div>
        )}
      </div>

      {/* Lightbox Modal for Images */}
      {images.length > 0 && (
        <ImageLightbox
          images={images}
          open={lightboxOpen}
          onOpenChange={setLightboxOpen}
          initialIndex={lightboxIndex}
        />
      )}

      {/* Video Modal */}
      {videoOpen && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={closeVideo}
        >
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={closeVideo}
              className="absolute -top-12 right-0 text-white hover:bg-white/20 h-10 w-10 rounded flex items-center justify-center"
            >
              ✕
            </button>
            <video
              src={selectedVideo}
              controls
              autoPlay
              className="w-full rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </>
  )
}
