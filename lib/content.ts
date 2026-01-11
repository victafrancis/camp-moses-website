import homeData from "@/content/home.json"
import navigationData from "@/content/navigation.json"
import directorsData from "@/content/directors.json"
import timelineData from "@/content/timeline.json"
import kubosData from "@/content/kubos.json"
import contactData from "@/content/contact.json"
import donateData from "@/content/donate.json"
import galleryData from "@/content/gallery.json"

export function getHomeContent() {
  return homeData
}

export function getNavigationContent() {
  return navigationData
}

export function getDirectorsContent() {
  return directorsData
}

export function getTimelineContent() {
  return timelineData
}

export function getKubosContent() {
  return kubosData
}



export function getContactContent() {
  return contactData
}

export function getDonateContent() {
  return donateData
}

// Get all kubos as array
export function getAllKubos() {
  return Object.values(kubosData)
}

// Get gallery content
export function getGalleryContent() {
  return galleryData
}

export function getGalleryBySlug(slug: string) {
  return galleryData[slug as keyof typeof galleryData] || null
}
