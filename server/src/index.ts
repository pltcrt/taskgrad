import express from "express";
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Таскград API работает 🚀");
});

app.listen(3000, () => console.log("Server started on http://localhost:3000"));
