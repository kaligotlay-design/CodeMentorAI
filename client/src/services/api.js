import axios from "axios";

const API = axios.create({
  baseURL: "https://codementor-api-jua0.onrender.com/api",
});

export default API;