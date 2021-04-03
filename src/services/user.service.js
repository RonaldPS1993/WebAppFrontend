import axios from "axios";
import authHeader from "./auth-header";



const getPublicContent = () => {
  return axios.get("http://localhost:3001/api/users");
};

const getUserBoard = () => {
  return axios.get("http://localhost:3001/api/users", { headers: authHeader() });
};

export default {
  getPublicContent,
  getUserBoard,
};