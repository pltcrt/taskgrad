import { useState } from "react";
import axios from "axios";

type TaskFormProps = { userId: number; onTaskCreated?: () => void };

export default function TaskForm({ userId, onTaskCreated }: TaskFormProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [difficulty, setDifficulty] = useState(1);
  const [attribute, setAttribute] = useState("strength");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await axios.post("/api/tasks", { title, description, difficulty, attribute, userId });
    setTitle("");
    setDescription("");
    if (onTaskCreated) onTaskCreated();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-80">
      <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Task Title" className="p-2 border rounded" />
      <textarea value={description} onChange={e => setDescription(e.target.value)} placeholder="Description" className="p-2 border rounded" />
      <select value={difficulty} onChange={e => setDifficulty(Number(e.target.value))} className="p-2 border rounded">
        <option value={1}>Easy</option>
        <option value={2}>Medium</option>
        <option value={3}>Hard</option>
      </select>
      <select value={attribute} onChange={e => setAttribute(e.target.value)} className="p-2 border rounded">
        <option value="strength">Strength</option>
        <option value="intelligence">Intelligence</option>
        <option value="spirit">Spirit</option>
        <option value="charisma">Charisma</option>
        <option value="wealth">Wealth</option>
      </select>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">Add Task</button>
    </form>
  );
}