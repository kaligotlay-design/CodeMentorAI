import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    alert("Logged Out Successfully");
    navigate("/login");
  };

  return (
    <nav
      style={{
        background: "#1e293b",
        color: "white",
        padding: "15px 30px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h2>🤖 CodeMentor AI</h2>

      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        <Link
          to="/dashboard"
          style={{ color: "white", textDecoration: "none" }}
        >
          Dashboard
        </Link>

        <Link
          to="/mentors"
          style={{ color: "white", textDecoration: "none" }}
        >
          Mentors
        </Link>

        <Link
          to="/courses"
          style={{ color: "white", textDecoration: "none" }}
        >
          Courses
        </Link>

        <Link
          to="/students"
          style={{ color: "white", textDecoration: "none" }}
        >
          Students
        </Link>

        <Link
          to="/chat"
          style={{ color: "white", textDecoration: "none" }}
        >
          AI Chat
        </Link>

        <button
          onClick={logout}
          style={{
            background: "red",
            color: "white",
            border: "none",
            padding: "8px 15px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;