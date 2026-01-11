interface VideoEmbedProps {
  videoId?: string
  title: string
  className?: string
  autoplay?: boolean
}

export function VideoEmbed({ videoId = "dQw4w9WgXcQ", title, className = "", autoplay = false }: VideoEmbedProps) {
  const autoplayParams = autoplay ? "?autoplay=1&mute=1" : ""
  return (
    <div className={`relative w-full aspect-video rounded-lg overflow-hidden shadow-lg ${className}`}>
      <iframe
        src={`https://www.youtube.com/embed/${videoId}${autoplayParams}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 w-full h-full"
      />
    </div>
  )
}
