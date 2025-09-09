import Button from "@mui/material/Button"

interface ButtonSendProps {
  isEnabled: boolean
}

export default function ButtonSend(props: ButtonSendProps) {
  return (
    <Button variant="contained" disabled={props.isEnabled}>
      Send
    </Button>
  )
}
