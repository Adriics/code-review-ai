interface FeedbackSectionProps {
  feedback: string
}

export default function FeedbackSection({ feedback }: FeedbackSectionProps) {
  return (
    <textarea
      readOnly
      value={feedback}
      style={{
        border: "2px solid green", // borde verde
        borderRadius: "4px", // bordes redondeados opcional
        padding: "8px", // espacio interno
        width: "70%", // que ocupe todo el ancho del Box
        height: "600px",
        resize: "none", // opcional: que no se pueda redimensionar
      }}
    />
  )
}
