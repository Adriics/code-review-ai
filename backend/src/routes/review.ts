import { Router } from "express"
import { reviewCodeWithOllama } from "../services/codeReviewService"

const router = Router()

router.post("/", async (req, res) => {
  try {
    const { code } = req.body

    if (!code) {
      return res.status(400).json({ error: "Code is required" })
    }

    const feedback = await reviewCodeWithOllama(code)

    res.json({ feedback })
  } catch (error: any) {
    console.error(error)
    res.status(500).json({ error: error.message })
  }
})

export default router
