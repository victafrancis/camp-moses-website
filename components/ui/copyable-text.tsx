"use client"

import { Copy } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface CopyableTextProps {
  text: string
}

export function CopyableText({ text }: CopyableTextProps) {
  const { toast } = useToast()

  const copyToClipboard = () => {
    navigator.clipboard.writeText(text).then(() => {
      toast({
        title: "Copied to clipboard!",
        duration: 3000,
        className: "border-2 border-camp-orange",
      })
    })
  }

  return (
    <div className="relative bg-gray-50 p-3 rounded border cursor-pointer" onClick={copyToClipboard}>
      <p className="text-foreground font-medium">{text}</p>
      <Copy className="absolute top-2 right-2 w-4 h-4 text-gray-500" />
    </div>
  )
}
