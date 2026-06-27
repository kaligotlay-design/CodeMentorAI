import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import API from "../services/api";

function Mentors() {
  const [mentors, setMentors] = useState([]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [technology, setTechnology] = useState("");
  const [experience, setExperience] = useState("");
  const [bio, setBio] = useState("");

  useEffect(() => {
    fetchMentors();
  }, []);

  const fetchMentors = async () => {
    try {
      const res = await API.get("/mentors");
      setMentors(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const addMentor = async () => {
    try {
      await API.post("/mentors", {
        name,
        email,
        technology,
        experience,
        bio,
      });

      alert("✅ Mentor Added");

      setName("");
      setEmail("");
      setTechnology("");
      setExperience("");
      setBio("");

      fetchMentors();
    } catch (err) {
      alert(err.response?.data?.message || "Error");
    }
  };

  const deleteMentor = async (id) => {
    try {
      await API.delete(`/mentors/${id}`);

      alert("✅ Mentor Deleted");

      fetchMentors();
    } catch (err) {
      alert("Delete Failed");
    }
  };

  return (
    <>
      <Navbar />

      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <h1>👨‍🏫 Mentors</h1>

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

          <input
            placeholder="Technology"
            value={technology}
            onChange={(e) => setTechnology(e.target.value)}
            style={{ marginLeft: "10px" }}
          />

          <br /><br />

          <input
            placeholder="Experience"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
          />

          <input
            placeholder="Bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            style={{ marginLeft: "10px", width: "250px" }}
          />

          <br /><br />

          <button onClick={addMentor}>
            ➕ Add Mentor
          </button>
        </div>

        <table
          border="1"
          style={{
            margin: "20px auto",
            width: "95%",
            borderCollapse: "collapse",
          }}
        >
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Technology</th>
              <th>Experience</th>
              <th>Bio</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {mentors.length > 0 ? (
              mentors.map((mentor) => (
                <tr key={mentor._id}>
                  <td>{mentor.name}</td>
                  <td>{mentor.email}</td>
                  <td>{mentor.technology}</td>
                  <td>{mentor.experience} Years</td>
                  <td>{mentor.bio}</td>

                  <td>
                    <button
                      onClick={() => deleteMentor(mentor._id)}
                      style={{
                        background: "red",
                        color: "white",
                        border: "none",
                        padding: "8px 14px",
                        borderRadius: "5px",
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
                <td colSpan="6">No Mentors Found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Mentors;