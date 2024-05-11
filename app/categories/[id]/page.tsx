interface ICategoryIdProps {
  id: string
}

export default function CategoryId({ params }: { params: ICategoryIdProps }) {
  return (
    <div>
      <h1>CATEGORY ID - HUB</h1>
      <p>Post: {params.id}</p>
    </div>
  )
}
