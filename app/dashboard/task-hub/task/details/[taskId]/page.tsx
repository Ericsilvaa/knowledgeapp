interface ITaskIdProps {
  taskId: string
}

export default function TaskId({ params }: { params: ITaskIdProps }) {
  return (
    <div>
      <h1>TASK ID - HUB</h1>
      <p>Post: {params.taskId}</p>
    </div>
  )
}

// example
// async function GetTaskDetailByID(params: { taskId: string }) {
//   const id = params.taskId;
//   const res = await fetch(`https://restaurant-api.dicoding.dev/detail/${id}`);
//   const data = await res.json();
//   return data.restaurant
// };
