import Link from "next/link"
import { MapPin, Mail, Phone } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="font-bold text-lg mb-4 font-serif">Camp Moses</h3>
            <p className="text-white/90 text-sm leading-relaxed">
              A sanctuary family camp and retreat center in Tapaz, Capiz. Discover Nature, Rediscover Your Soul.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 font-serif">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="text-white/90 hover:text-white text-sm transition-colors">
                Home
              </Link>
              <Link href="/#mission" className="text-white/90 hover:text-white text-sm transition-colors">
                Mission
              </Link>
              <Link href="/#timeline" className="text-white/90 hover:text-white text-sm transition-colors">
                Timeline
              </Link>
              <Link href="/#board" className="text-white/90 hover:text-white text-sm transition-colors">
                Board
              </Link>
              <Link href="/donate" className="text-white/90 hover:text-white text-sm transition-colors">
                Donate
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4 font-serif">Contact Us</h3>
            <div className="flex flex-col space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span className="text-white/90 text-sm">Barangay Candelaria Tapaz, Capiz Philippines</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <a
                  href="mailto:campmoses.tapaz@gmail.com"
                  className="text-white/90 hover:text-white text-sm transition-colors"
                >
                  campmoses.tapaz@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <a href="tel:+639054898299" className="text-white/90 hover:text-white text-sm transition-colors">
                  0905-489-8299
                </a>
              </div>
              {/* Facebook link */}
              <div className="flex items-center space-x-2">
                <a
                  href="https://facebook.com/campmosesph"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/90 hover:text-white text-sm transition-colors inline-flex items-center space-x-1"
                >
                  <span>facebook.com/campmosesph</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/80 text-sm">© {currentYear} Camp Moses. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
