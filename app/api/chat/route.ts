import { type NextRequest } from "next/server"
import { OpenAI } from "openai"
import { streamText } from "ai"

export const runtime = "edge"

export async function POST(req: NextRequest) {
  const { messages } = await req.json()

  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  })

  const response = await streamText({
    model: "gpt-4o-mini",
    messages,
    provider: openai,
  })

  return response.toAIStreamResponse()
}
