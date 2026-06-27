import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <Navbar />

      <div style={{ textAlign: "center", marginTop: "80px" }}>
        <h1>🚀 Welcome to CodeMentor AI</h1>

        <p>Learn Programming with AI Mentors</p>

        <br />

        <h3>Our Features</h3>

        <p>👨‍🏫 Expert Mentors</p>
        <p>📚 Online Courses</p>
        <p>🤖 AI Chat Assistant</p>
        <p>👨‍🎓 Student Dashboard</p>
      </div>
    </>
  );
}

export default Home;