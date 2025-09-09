export async function sendCodeForReview(code: string) {
  const res = await fetch("http://localhost:3000/api/review", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ code }),
  })
  return res.json()
}
