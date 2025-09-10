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

  return (
    <>
      <CodeInput
        value={code}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          setCode(e.target.value)
        }
      />

      <ButtonSend
        onClick={() => sendCodeForReview(code)}
        isEnabled={isEnabled}
      />

      <FeedbackSection feedback={feedback} />
    </>
  )
}
