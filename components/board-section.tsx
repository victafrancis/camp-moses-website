import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { getDirectorsContent } from "@/lib/content"

export function BoardSection() {
  const { title, description, members } = getDirectorsContent()

  return (
    <section id="board" className="py-20 camp-bg-beige">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 camp-text-green font-serif">{title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {members.map((member, index) => (
            <Card key={index} className="border-[#8B6F47] hover:shadow-lg transition-shadow">
              <CardContent className="flex flex-col items-center text-center pt-6">
                <Avatar className="w-24 h-24 mb-4">
                  <AvatarImage src={member.image || "/placeholder.svg"} alt={member.name} />
                  <AvatarFallback className="bg-camp-green-old text-white text-2xl">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <h3 className="font-bold text-xl mb-1 camp-text-green font-serif">{member.name}</h3>
                <p className="text-[#8B6F47] font-semibold mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{member.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
