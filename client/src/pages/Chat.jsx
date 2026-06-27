import Navbar from "../components/Navbar";
import { useState } from "react";

function Chat() {
  const [question, setQuestion] = useState("");

  const askAI = () => {
    alert("AI Response will be connected with backend.");
  };

  return (
    <>
      <Navbar />

      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <h1>🤖 AI Chat</h1>

        <textarea
          rows="5"
          cols="50"
          placeholder="Ask any programming question..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />

        <br /><br />

        <button onClick={askAI}>Ask AI</button>
      </div>
    </>
  );
}

export default Chat;