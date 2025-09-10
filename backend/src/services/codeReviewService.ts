export async function reviewCodeWithOllama(code: string) {
  const response = await fetch("http://localhost:11434/api/generate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "codellama",
      prompt: `Review this code and give me a real and professional feedback and improves in code, in spanish: ${code}`,
    }),
  })

  if (!response.ok) {
    throw new Error(`Ollama request failed: ${response.status}`)
  }

  const text = await response.text() // esto es el stream de JSONs línea por línea
  const lines = text.split("\n")
  let feedback = ""

  for (const line of lines) {
    if (!line.trim()) continue // saltar líneas vacías
    try {
      const obj = JSON.parse(line)
      feedback += obj.response || ""
      if (obj.done) break // si ya terminó, parar
    } catch (e) {
      console.warn("No es JSON válido:", line)
    }
  }

  return feedback || "No feedback received"
}
