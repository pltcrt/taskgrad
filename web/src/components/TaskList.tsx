import { useEffect, useState } from "react";
import axios from "axios";

type Task = {
  id: number;
  title: string;
  description?: string;
  difficulty: number;
  attribute: string;
  completed: boolean;
};

type TaskListProps = { userId: number };

export default function TaskList({ userId }: TaskListProps) {
  const [tasks, setTasks] = useState<Task[]>([]);

  const fetchTasks = async () => {
    const res = await axios.get(`/api/tasks/${userId}`);
    setTasks(res.data);
  };

  const deleteTask = async (id: number) => {
    await axios.delete(`/api/tasks/${id}`);
    fetchTasks();
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="flex flex-col gap-2 w-80">
      {tasks.map(task => (
        <div key={task.id} className="flex justify-between p-2 border rounded bg-gray-800 text-white">
          <div>
            <div className="font-bold">{task.title}</div>
            <div className="text-sm">{task.description}</div>
            <div className="text-xs">Attribute: {task.attribute} | Difficulty: {task.difficulty}</div>
          </div>
          <button onClick={() => deleteTask(task.id)} className="bg-red-500 p-1 rounded">Delete</button>
        </div>
      ))}
    </div>
  );
}
