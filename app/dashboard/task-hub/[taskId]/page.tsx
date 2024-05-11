import { useRouter } from 'next/router'

export default function TaskId() {
  const { query } = useRouter()
  return (
    <div>
      <h1>TASK ID - HUB</h1>
      <p>Post: {query.taskId}</p>
    </div>
  )
}
