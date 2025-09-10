import Button from "@mui/material/Button"

interface ButtonSendProps {
  isEnabled: boolean
}

export default function ButtonSend({ isEnabled }: ButtonSendProps) {
  return (
    <Button variant="contained" disabled={!isEnabled}>
      Send
    </Button>
  )
}
