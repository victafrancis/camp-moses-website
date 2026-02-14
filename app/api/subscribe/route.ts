import { NextResponse } from "next/server"

const MAILERLITE_API_URL = "https://api.mailerlite.com/api/v2/subscribers"

export async function POST(request: Request) {
  try {
    const { email } = (await request.json()) as { email?: string }

    if (!email) {
      return NextResponse.json({ error: "Email is required." }, { status: 400 })
    }

    const apiKey = process.env.MAILERLITE_API_KEY
    const groupId = process.env.MAILERLITE_GROUP_ID

    if (!apiKey || !groupId) {
      return NextResponse.json({ error: "MailerLite configuration is missing." }, { status: 500 })
    }

    const response = await fetch(MAILERLITE_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-MailerLite-ApiKey": apiKey,
      },
      body: JSON.stringify({
        email,
        groups: [groupId],
        resubscribe: true,
        type: "active",
      }),
    })

    const data = await response.json().catch(() => ({}))

    if (!response.ok) {
      const message = data?.error?.message || data?.message || "Unable to subscribe right now."
      return NextResponse.json({ error: message }, { status: response.status })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("MailerLite subscribe error:", error)
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 })
  }
}