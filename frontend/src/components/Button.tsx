import Button from "@mui/material/Button"

interface ButtonSendProps {
  isEnabled: boolean
  onClick: () => void
}

export default function ButtonSend({ isEnabled, onClick }: ButtonSendProps) {
  return (
    <Button onClick={onClick} variant="contained" disabled={!isEnabled}>
      Send
    </Button>
  )
}
