import express from "express"
import cors from "cors"
import testRoutes from "./routes/review"

const app = express()
app.use(cors())
app.use(express.json())

app.use("/api/test", testRoutes)

const PORT = 3000

app.listen(PORT, () => {
  console.log(`Backend listening in http://localhost:${PORT}`)
})
