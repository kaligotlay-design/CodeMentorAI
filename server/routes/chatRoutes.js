const express = require("express");
const router = express.Router();

const {
  createChat,
  getChats,
} = require("../controllers/chatController");

// CREATE Chat
router.post("/", createChat);

// GET All Chats
router.get("/", getChats);

module.exports = router;