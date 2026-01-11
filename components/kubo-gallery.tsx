"use client"

import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ImageLightbox } from "@/components/image-lightbox"
import { ArrowRight } from "lucide-react"
import { getHomeContent, getAllKubos } from "@/lib/content"

export function KuboGallery() {
  const content = getHomeContent()
  const kubos = getAllKubos()

  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [selectedKubo, setSelectedKubo] = useState<any>(null)

  const handleOpenLightbox = (kubo: any) => {
    if (!kubo.gallery || kubo.gallery.length === 0) return
    setSelectedKubo(kubo)
    setLightboxOpen(true)
  }

  return (
    <>
      <section id="kubos" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 camp-text-green font-serif">
              {content.kubosSection.title}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{content.kubosSection.description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {kubos.map((kubo) => (
              <Card key={kubo.id} className="overflow-hidden border-[#8B6F47] hover:shadow-lg transition-shadow">
                <h3 className="text-xl text-center font-bold mb-2 camp-text-green font-serif">{kubo.name}</h3>
                <button
                  onClick={() => handleOpenLightbox(kubo)}
                  className="w-full focus:outline-none"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={kubo.image || "/placeholder.svg"}
                      alt={kubo.name}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </button>
                <CardContent className="p-6">
                  <Button
                    onClick={() => handleOpenLightbox(kubo)}
                    className="w-full bg-accent hover:bg-accent/90 text-white font-medium py-2 px-4 rounded transition-all flex items-center justify-center gap-2"
                  >
                    View Images <ArrowRight className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <ImageLightbox images={selectedKubo?.gallery || []} open={lightboxOpen} onOpenChange={setLightboxOpen} initialIndex={0} />
    </>
  )
}
