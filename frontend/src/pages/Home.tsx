import React, { useEffect, useState } from "react"
import ButtonSend from "../components/Button"
import CodeInput from "../components/CodeInput"
import { sendCodeForReview } from "../services/CodeReviewService"
import FeedbackSection from "../components/Feedback"

export function Home() {
  const [code, setCode] = useState("")
  const [isEnabled, setIsEnabled] = useState<boolean>(false)
  const [feedback, setFeedback] = useState("")

  useEffect(() => {
    setIsEnabled(code.trim().length > 0)
  }, [code])

  async function callService(code: string) {
    console.log("Service va a ser llamado")
    const response = await sendCodeForReview(code)
    console.log("Service ha sido llamado")
    setFeedback(response.feedback)
  }

  return (
    <>
      <h1 className="p-10">CODE AI REVIEWER</h1>
      <div className="flex w-full gap-8">
        <CodeInput
          value={code}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setCode(e.target.value)
          }
        />
        <FeedbackSection feedback={feedback} />
      </div>
      <ButtonSend onClick={() => callService(code)} isEnabled={isEnabled} />
    </>
  )
}
