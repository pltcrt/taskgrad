import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

type LoginFormProps = {
  setUserId: (id: number) => void;
  setToken: (token: string) => void;
};

export default function LoginForm({ setUserId, setToken }: LoginFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/login", { email, password });
      const { token, userId } = res.data;
      setToken(token);
      setUserId(userId);

      // Сохраняем токен в localStorage
      localStorage.setItem("token", token);

      // Переходим на страницу задач
      navigate("/tasks");
    } catch (err) {
      alert("Login failed");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-80">
      <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" className="p-2 border rounded" />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" className="p-2 border rounded" />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">Login</button>
    </form>
  );
}