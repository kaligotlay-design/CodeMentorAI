const express = require("express");
const cors = require("cors");
require("dotenv").config();

const authMiddleware = require("./middleware/authMiddleware");

const app = express();

// CORS
app.use(
  cors({
    origin: [
      "https://code-mentor-ai-amber.vercel.app",
      "https://code-mentor-fde7h33ei-yuva-design.vercel.app",
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());

// Routes
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/mentors", require("./routes/mentorRoutes"));
app.use("/api/courses", require("./routes/courseRoutes"));
app.use("/api/chat", require("./routes/chatRoutes"));
app.use("/api/students", require("./routes/studentRoutes"));

// Protected Route
app.get("/api/profile", authMiddleware, (req, res) => {
  res.json({
    message: "Welcome! This is a Protected Route.",
    user: req.user,
  });
});

app.delete("/test-delete", (req, res) => {
  res.json({
    message: "Delete Route Working",
  });
});

// Test Route
app.get("/", (req, res) => {
  res.send("🚀 CodeMentor AI Backend is Running...");
});

module.exports = app;