interface Props {
  title: string
}

export default function Card({title}: Props) {
  return (
    <>
        <h3>{title}</h3>
    </>
  )
}
