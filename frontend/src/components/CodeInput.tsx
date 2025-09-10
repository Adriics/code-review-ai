import TextareaAutosize from "@mui/material/TextareaAutosize"

interface CodeInputProps {
  value: string
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}

export default function CodeInput(props: CodeInputProps) {
  return (
    <TextareaAutosize
      aria-label="minimum height"
      minRows={25}
      placeholder="Paste your code"
      style={{
        width: "50%",
        border: "2px solid blue",
      }}
      value={props.value}
      onChange={props.onChange}
    />
  )
}
