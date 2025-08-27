import React from "react";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";

export default function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6 bg-gray-900 text-white">
      <h1 className="text-4xl font-bold">Taskgrad MVP</h1>
      <RegisterForm />
      <LoginForm />
    </div>
  );
}