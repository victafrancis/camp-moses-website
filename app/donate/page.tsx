import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, Smartphone, FileText, Heart } from "lucide-react"
import { getDonateContent } from "@/lib/content"
import { CopyableText } from "@/components/ui/copyable-text"

export const metadata: Metadata = {
  title: "Donate - Support Camp Moses",
  description:
    "Your generous donation helps us maintain facilities, run youth programs, and transform lives through Camp Moses ministry.",
}

export default function DonatePage() {
  const content = getDonateContent()

  return (
    <main className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <Heart className="w-16 h-16 mx-auto mb-6 text-camp-orange" />
          <h1 className="text-4xl md:text-6xl font-bold mb-6 camp-text-green font-serif">{content.title}</h1>
          <p className="text-xl text-muted-foreground leading-relaxed text-pretty">{content.description}</p>
        </div>

        {/* How Funds Are Used */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="border-[#8B6F47]">
            <CardHeader>
              <CardTitle className="text-2xl camp-text-green font-serif">{content.impactSection.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {content.impactSection.items.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full bg-camp-green-old flex items-center justify-center flex-shrink-0">
                    {item.icon === "heart" && <Heart className="h-8 w-8 text-white" />}
                    {item.icon === "building" && <Building2 className="h-8 w-8 text-white" />}
                  </div>
                  <div>
                    <h3 className="font-bold mb-2 font-serif text-lg">{item.title}</h3>
                    <p className="text-base text-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Donation Methods */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center camp-text-green font-serif">
            {content.donationMethods.title}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {content.donationMethods.methods.map((method, index) => (
              <Card key={index} className="border-[#8B6F47] hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  {method.icon === "building" && <Building2 className="w-16 h-16 mb-6 text-camp-green-old" />}
                  {method.icon === "smartphone" && <Smartphone className="w-16 h-16 mb-6 text-camp-green-old" />}
                  {method.icon === "file-text" && <FileText className="w-16 h-16 mb-6 text-camp-green-old" />}
                  <CardTitle className="camp-text-green font-serif text-xl mb-2">{method.title}</CardTitle>
                  <CardDescription className="text-base">{method.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 text-base">
                  {method.type === "etransfer" && (
                    <>
                      <div>
                        <p className="font-semibold font-serif text-lg">Recipient:</p>
                        <p className="text-foreground font-medium">{method.details.recipient}</p>
                      </div>
                      <div className="my-4">
                        <p className="font-semibold font-serif text-lg mb-2">Email Address:</p>
                        <CopyableText text={method.details.email || ""} />
                      </div>
                      <div className="bg-red-50 border-2 border-red-200 p-6 rounded-lg mt-4">
                        <div className="flex items-start gap-3">
                          <span className="text-2xl">⚠️</span>
                          <div>
                            <p className="font-bold text-red-800 text-lg mb-2">IMPORTANT FOR TAX RECEIPTS</p>
                            <p className="text-red-700 leading-relaxed">{method.details.important}</p>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                  {method.type === "cheque" && (
                    <>
                      <div className="mb-4">
                        <p className="font-semibold font-serif text-lg mb-2">Make cheques payable to:</p>
                        <p className="text-foreground font-medium bg-gray-50 p-3 rounded border">{method.details.payableTo}</p>
                      </div>
                      <div>
                        <p className="font-semibold font-serif text-lg mb-2">Mail to:</p>
                        <div className="bg-gray-50 p-4 rounded border font-medium text-foreground whitespace-pre-line leading-relaxed">
                          {method.details.mailAddress}
                        </div>
                      </div>
                    </>
                  )}
                  {(method.type === "online-canada" || method.type === "online-us") && (
                    <>
                      {method.type === "online-us" && (
                        <>
                          <div className="mb-3">
                            <p className="font-semibold font-serif text-lg mb-1">Organization:</p>
                            <CopyableText text={method.details.organizationName || ""} />
                          </div>
                          <div className="mb-3">
                            <p className="font-semibold font-serif text-lg mb-1">Recipient Code:</p>
                            <CopyableText text={method.details.recipientCode || ""} />
                          </div>
                        </>
                      )}
                      <p className="text-foreground leading-relaxed mb-4">
                        {method.details.note}
                      </p>
                      <a
                        href={method.details.buttonUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-full px-6 py-3 bg-camp-orange text-white font-semibold text-lg rounded-md hover:bg-camp-orange-hover transition-colors"
                      >
                        {method.details.buttonText}
                      </a>
                    </>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Tax Information */}
        <div className="max-w-4xl mx-auto mt-16 p-8 bg-camp-green-old text-white rounded-lg border-2 border-camp-green-old">
          <div className="flex items-center gap-4 mb-4">
            <FileText className="w-12 h-12" />
            <h3 className="text-3xl font-bold font-serif">{content.taxInfo.title}</h3>
          </div>
          <p className="text-lg leading-relaxed opacity-95">{content.taxInfo.description}</p>
        </div>

        {/* Thank You Message */}
        <div className="text-center mt-16 max-w-2xl mx-auto">
          <Heart className="w-16 h-16 mx-auto mb-6 text-camp-green-old" />
          <h3 className="text-2xl font-bold mb-4 camp-text-green font-serif">{content.thankYou.title}</h3>
          <p className="text-foreground font-medium leading-relaxed text-pretty">{content.thankYou.message}</p>
        </div>
      </div>
    </main>
  )
}
