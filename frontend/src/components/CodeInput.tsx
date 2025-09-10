import TextareaAutosize from "@mui/material/TextareaAutosize"

interface CodeInputProps {
  value: string
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}

export default function CodeInput(props: CodeInputProps) {
  return (
    <TextareaAutosize
      aria-label="minimum height"
      minRows={20}
      placeholder="Paste your code"
      style={{ width: 500 }}
      value={props.value}
      onChange={props.onChange}
    />
  )
}
