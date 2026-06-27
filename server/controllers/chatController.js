const Chat = require("../models/chat");

// CREATE Chat
const createChat = async (req, res) => {
  try {
    const { question } = req.body;

    // Temporary AI Response
    const answer = `AI Response: You asked "${question}"`;

    const chat = await Chat.create({
      question,
      answer,
    });

    res.status(201).json(chat);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// GET All Chats
const getChats = async (req, res) => {
  try {
    const chats = await Chat.find();
    res.status(200).json(chats);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

module.exports = {
  createChat,
  getChats,
};