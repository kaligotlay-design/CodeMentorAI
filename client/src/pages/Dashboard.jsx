import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function Dashboard() {
  const cardStyle = {
    width: "220px",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    textAlign: "center",
    background: "#f8f9fa",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  };

  return (
    <>
      <Navbar />

      <div style={{ padding: "30px" }}>
        <h1 style={{ textAlign: "center" }}>📊 CodeMentor AI Dashboard</h1>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
            marginTop: "40px",
          }}
        >
          <div style={cardStyle}>
            <h2>👨‍🏫 Mentors</h2>
            <p>Manage all mentors</p>
            <Link to="/mentors">
              <button>Open</button>
            </Link>
          </div>

          <div style={cardStyle}>
            <h2>📚 Courses</h2>
            <p>Manage all courses</p>
            <Link to="/courses">
              <button>Open</button>
            </Link>
          </div>

          <div style={cardStyle}>
            <h2>👨‍🎓 Students</h2>
            <p>Manage all students</p>
            <Link to="/students">
              <button>Open</button>
            </Link>
          </div>

          <div style={cardStyle}>
            <h2>🤖 AI Chat</h2>
            <p>Ask coding questions</p>
            <Link to="/chat">
              <button>Open</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;