import { Request, Response } from "express"

export const getTestMessage = (req: Request, res: Response) => {
  res.json({ message: "Backend funcionando correctamente " })
}
