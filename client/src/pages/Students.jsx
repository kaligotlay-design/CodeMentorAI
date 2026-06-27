import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import API from "../services/api";

function Students() {
  const [students, setStudents] = useState([]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [course, setCourse] = useState("");
  const [mentor, setMentor] = useState("");

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const res = await API.get("/students");
      setStudents(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const addStudent = async () => {
    try {
      await API.post("/students", {
        name,
        email,
        phone,
        course,
        mentor,
      });

      alert("✅ Student Added");

      setName("");
      setEmail("");
      setPhone("");
      setCourse("");
      setMentor("");

      fetchStudents();
    } catch (err) {
      alert(err.response?.data?.message || "Error");
    }
  };

  const deleteStudent = async (id) => {
    try {
      await API.delete(`/students/${id}`);
      alert("✅ Student Deleted");
      fetchStudents();
    } catch (err) {
      alert("Delete Failed");
    }
  };

  return (
    <>
      <Navbar />

      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <h1>👨‍🎓 Students</h1>

        <div style={{ marginBottom: "20px" }}>
          <input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ marginLeft: "10px" }}
          />

          <br /><br />

          <input
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <input
            placeholder="Course"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            style={{ marginLeft: "10px" }}
          />

          <input
            placeholder="Mentor"
            value={mentor}
            onChange={(e) => setMentor(e.target.value)}
            style={{ marginLeft: "10px" }}
          />

          <br /><br />

          <button onClick={addStudent}>➕ Add Student</button>
        </div>

        <table
          border="1"
          style={{
            width: "95%",
            margin: "20px auto",
            borderCollapse: "collapse",
          }}
        >
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Course</th>
              <th>Mentor</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {students.length > 0 ? (
              students.map((student) => (
                <tr key={student._id}>
                  <td>{student.name}</td>
                  <td>{student.email}</td>
                  <td>{student.phone}</td>
                  <td>{student.course}</td>
                  <td>{student.mentor}</td>
                  <td>{student.status}</td>
                  <td>
                    <button
                      onClick={() => deleteStudent(student._id)}
                      style={{
                        background: "red",
                        color: "white",
                        border: "none",
                        padding: "6px 12px",
                        cursor: "pointer",
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7">No Students Found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Students;