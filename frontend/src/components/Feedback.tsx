import Box from "@mui/material/Box"

interface FeedbackSectionProps {
  feedback: string
}

export default function FeedbackSection({ feedback }: FeedbackSectionProps) {
  return (
    <Box sx={{ display: "flex" }}>
      <textarea readOnly>{feedback}</textarea>
    </Box>
  )
}
