import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();
app.use(express.json());

const JWT_SECRET = "your_secret_key"; // в реальном проекте — .env

// Register
app.post("/api/register", async (req, res) => {
  const { email, password, nickname } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    const user = await prisma.user.create({
      data: { email, password: hashedPassword, nickname },
    });
    res.json({ message: "User created", userId: user.id });
  } catch (err) {
    res.status(400).json({ error: "Email already exists" });
  }
});

// Login
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) return res.status(400).json({ error: "User not found" });

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.status(400).json({ error: "Invalid password" });

  const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: "7d" });
  res.json({ token, userId: user.id, nickname: user.nickname });
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));

// Create Task
app.post("/api/tasks", async (req, res) => {
  const { title, description, difficulty, attribute, xpReward, goldReward, attributeReward, userId } = req.body;
  try {
    const task = await prisma.task.create({
      data: { title, description, difficulty, attribute, xpReward, goldReward, attributeReward, userId },
    });
    res.json(task);
  } catch (err) {
    res.status(400).json({ error: "Failed to create task" });
  }
});

// Get all tasks for a user
app.get("/api/tasks/:userId", async (req, res) => {
  const { userId } = req.params;
  const tasks = await prisma.task.findMany({ where: { userId: Number(userId) } });
  res.json(tasks);
});

// Update task
app.put("/api/tasks/:id", async (req, res) => {
  const { id } = req.params;
  const { title, description, difficulty, attribute, xpReward, goldReward, attributeReward, completed } = req.body;
  try {
    const task = await prisma.task.update({
      where: { id: Number(id) },
      data: { title, description, difficulty, attribute, xpReward, goldReward, attributeReward, completed },
    });
    res.json(task);
  } catch (err) {
    res.status(400).json({ error: "Failed to update task" });
  }
});

// Delete task
app.delete("/api/tasks/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.task.delete({ where: { id: Number(id) } });
    res.json({ message: "Task deleted" });
  } catch (err) {
    res.status(400).json({ error: "Failed to delete task" });
  }
});