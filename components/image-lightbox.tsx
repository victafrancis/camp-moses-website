"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import Image from "next/image"

interface ImageLightboxProps {
  images: { src: string; alt: string }[]
  open: boolean
  onOpenChange: (open: boolean) => void
  initialIndex: number
}

export function ImageLightbox({ images, open, onOpenChange, initialIndex }: ImageLightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  // Update currentIndex when initialIndex changes or images change
  useEffect(() => {
    if (images.length > 0) {
      setCurrentIndex(Math.min(initialIndex, images.length - 1))
    } else {
      setCurrentIndex(0)
    }
  }, [initialIndex, images])

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    setTouchEnd(e.changedTouches[0].clientX)
    handleSwipe()
  }

  const handleSwipe = () => {
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      goToNext()
    } else if (isRightSwipe) {
      goToPrevious()
    }
  }

  useEffect(() => {
    if (!open) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goToPrevious()
      if (e.key === "ArrowRight") goToNext()
      if (e.key === "Escape") onOpenChange(false)
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [open, currentIndex])

  // Safety check: if no images or empty, don't render anything
  if (!images || images.length === 0) {
    return null
  }

  const safeIndex = Math.max(0, Math.min(currentIndex, images.length - 1))

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl h-[90vh] p-0 bg-black/95">
        <DialogHeader className="sr-only">
          <DialogTitle>Image Lightbox</DialogTitle>
          <DialogDescription>
            View images in full size. Use arrow keys to navigate or swipe on mobile devices.
          </DialogDescription>
        </DialogHeader>
        <div
          ref={containerRef}
          className="relative w-full h-full flex items-center justify-center"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Close button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 z-50 text-white hover:bg-white/20"
            onClick={() => onOpenChange(false)}
          >
            <X className="h-6 w-6" />
          </Button>

          {/* Previous button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 z-50 text-white hover:bg-white/20"
            onClick={goToPrevious}
            aria-label="Previous image"
          >
            <ChevronLeft className="h-8 w-8" />
          </Button>

          {/* Image */}
          <div className="relative w-full h-full p-4 md:p-12">
            <Image
              src={images[safeIndex].src || "/placeholder.svg"}
              alt={images[safeIndex].alt}
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Next button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 z-50 text-white hover:bg-white/20"
            onClick={goToNext}
            aria-label="Next image"
          >
            <ChevronRight className="h-8 w-8" />
          </Button>

          {/* Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white bg-black/50 px-4 py-2 rounded-full text-sm">
            {safeIndex + 1} / {images.length}
          </div>

          {/* Mobile swipe hint */}
          <div className="absolute bottom-16 left-1/2 -translate-x-1/2 text-white/60 text-xs md:hidden">
            Swipe to navigate
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
