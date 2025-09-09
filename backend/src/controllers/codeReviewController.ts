import { Request, Response, Router } from "express"
import { reviewCodeWithOllama } from "../services/codeReviewService"

const router = Router()

router.post("/review", async (req: Request, res: Response) => {
  const { code } = req.body
  const review = await reviewCodeWithOllama(code)
  res.json(review)
})

export default router
