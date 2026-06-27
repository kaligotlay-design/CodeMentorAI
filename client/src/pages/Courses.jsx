import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import API from "../services/api";

function Courses() {
  const [courses, setCourses] = useState([]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [technology, setTechnology] = useState("");
  const [price, setPrice] = useState("");
  const [duration, setDuration] = useState("");
  const [level, setLevel] = useState("");
  const [mentorName, setMentorName] = useState("");

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const res = await API.get("/courses");
      setCourses(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const addCourse = async () => {
    try {
      await API.post("/courses", {
        title,
        description,
        technology,
        price,
        duration,
        level,
        mentorName,
      });

      alert("✅ Course Added");

      setTitle("");
      setDescription("");
      setTechnology("");
      setPrice("");
      setDuration("");
      setLevel("");
      setMentorName("");

      fetchCourses();
    } catch (err) {
      alert(err.response?.data?.message || "Error");
    }
  };

  const deleteCourse = async (id) => {
    try {
      await API.delete(`/courses/${id}`);
      alert("✅ Course Deleted");
      fetchCourses();
    } catch (err) {
      alert("Delete Failed");
    }
  };

  return (
    <>
      <Navbar />

      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <h1>📚 Courses</h1>

        <div style={{ marginBottom: "20px" }}>
          <input
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <input
            placeholder="Technology"
            value={technology}
            onChange={(e) => setTechnology(e.target.value)}
            style={{ marginLeft: "10px" }}
          />

          <input
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            style={{ marginLeft: "10px" }}
          />

          <br /><br />

          <input
            placeholder="Duration"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />

          <input
            placeholder="Level"
            value={level}
            onChange={(e) => setLevel(e.target.value)}
            style={{ marginLeft: "10px" }}
          />

          <input
            placeholder="Mentor Name"
            value={mentorName}
            onChange={(e) => setMentorName(e.target.value)}
            style={{ marginLeft: "10px" }}
          />

          <br /><br />

          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="3"
            cols="50"
          />

          <br /><br />

          <button onClick={addCourse}>
            ➕ Add Course
          </button>
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
              <th>Title</th>
              <th>Technology</th>
              <th>Price</th>
              <th>Duration</th>
              <th>Level</th>
              <th>Mentor</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {courses.length > 0 ? (
              courses.map((course) => (
                <tr key={course._id}>
                  <td>{course.title}</td>
                  <td>{course.technology}</td>
                  <td>₹{course.price}</td>
                  <td>{course.duration}</td>
                  <td>{course.level}</td>
                  <td>{course.mentorName}</td>

                  <td>
                    <button
                      onClick={() => deleteCourse(course._id)}
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
                <td colSpan="7">No Courses Found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Courses;