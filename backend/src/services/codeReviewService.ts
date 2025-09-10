import OpenAI from "openai"

export async function reviewCodeWithOllama(code: string) {
  const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

  const response = await client.responses.create({
    model: "gpt-4o",
    input: `Review this code and give me a real and professional feedback: ${code}`,
  })

  return { feedback: "Código recibido correctamente" }
}
