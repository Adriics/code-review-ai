import TextareaAutosize from "@mui/material/TextareaAutosize"

export default function CodeInput() {
  return (
    <TextareaAutosize
      aria-label="minimum height"
      minRows={20}
      placeholder="Minimum 3 rows"
      style={{ width: 500 }}
    />
  )
}
