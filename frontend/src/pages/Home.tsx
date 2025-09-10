import React, { useState } from "react"
import ButtonSend from "../components/Button"
import CodeInput from "../components/CodeInput"

export function Home() {
  const [code, setCode] = useState("")
  const [isEnabled, setIsEnabled] = useState<boolean>(false)

  return (
    <>
      <CodeInput
        value={code}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          setCode(e.target.value)
        }
      />
      {code && setIsEnabled}
      <ButtonSend isEnabled={isEnabled} />
    </>
  )
}
