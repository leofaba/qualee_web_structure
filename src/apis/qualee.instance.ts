import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_QUALEE_API,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default instance;
