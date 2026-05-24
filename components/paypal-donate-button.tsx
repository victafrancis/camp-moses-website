"use client"

import Script from "next/script"
import { useState, useEffect } from "react"

export function PayPalDonateButton() {
  const [scriptLoaded, setScriptLoaded] = useState(false)

  useEffect(() => {
    if (scriptLoaded && typeof window !== "undefined" && (window as any).PayPal) {
      ;(window as any).PayPal.Donation.Button({
        env: "production",
        hosted_button_id: "LJMSQ2AQDEALC",
        image: {
          src: "https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif",
          alt: "Donate with PayPal button",
          title: "PayPal - The safer, easier way to pay online!",
        },
      }).render("#donate-button")
    }
  }, [scriptLoaded])

  return (
    <div id="donate-button-container" className="flex justify-center">
      <div id="donate-button"></div>
      <Script
        src="https://www.paypalobjects.com/donate/sdk/donate-sdk.js"
        strategy="lazyOnload"
        onLoad={() => setScriptLoaded(true)}
      />
    </div>
  )
}
