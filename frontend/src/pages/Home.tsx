import React, { useEffect, useState } from "react"
import ButtonSend from "../components/Button"
import CodeInput from "../components/CodeInput"

export function Home() {
  const [code, setCode] = useState("")
  const [isEnabled, setIsEnabled] = useState<boolean>(false)

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

      <ButtonSend isEnabled={isEnabled} />
    </>
  )
}
