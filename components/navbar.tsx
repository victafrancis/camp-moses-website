"use client"

import * as React from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { getNavigationContent } from "@/lib/content"

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const navContent = getNavigationContent()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white shadow-sm">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center space-x-2 flex-shrink-0">
          <span className="text-2xl font-bold font-serif text-primary">{navContent.logo}</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navContent.navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-sm font-medium text-primary hover:text-accent transition-colors"
            >
              {link.label}
            </Link>
          ))}

          <Button
            asChild
            className="ml-4 rounded-full font-semibold bg-accent hover:bg-accent/90 text-white transition-all hover:shadow-lg"
          >
            <Link href={navContent.donateButton.href}>{navContent.donateButton.text}</Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="h-10 w-10 text-primary">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full sm:w-96 p-0">
            <div className="flex flex-col h-full">
              <nav className="flex-1 overflow-y-auto px-0 py-6">
                {navContent.navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center px-6 py-3 text-base font-medium text-primary transition-colors border-l-4 border-transparent hover:border-accent hover:bg-secondary"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              {/* Mobile Donate Button - Fixed at Bottom */}
              <div className="border-t border-gray-200 p-4">
                <Button
                  asChild
                  className="w-full rounded-full font-semibold bg-accent hover:bg-accent/90 text-white text-base h-12 transition-all hover:shadow-lg"
                >
                  <Link href={navContent.donateButton.href} onClick={() => setIsOpen(false)}>
                    {navContent.donateButton.mobileText}
                  </Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  )
}
