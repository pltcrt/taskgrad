import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";

export default function App() {
  const [userId, setUserId] = useState<number | null>(null);
  const [token, setToken] = useState<string | null>(null);

  return (
    <Router>
      <Routes>
        {/* Если пользователь уже залогинен, редирект на задачи */}
        <Route
          path="/login"
          element={
            userId ? (
              <Navigate to="/tasks" />
            ) : (
              <LoginForm setUserId={setUserId} setToken={setToken} />
            )
          }
        />
        <Route
          path="/register"
          element={
            userId ? (
              <Navigate to="/tasks" />
            ) : (
              <RegisterForm />
            )
          }
        />
        <Route
          path="/tasks"
          element={
            userId ? (
              <div className="flex flex-col items-center gap-6 min-h-screen bg-gray-900 text-white p-4">
                <h1 className="text-3xl font-bold">Taskgrad Tasks</h1>
                <TaskForm userId={userId} />
                <TaskList userId={userId} />
              </div>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        {/* Главная страница редиректит на login */}
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}