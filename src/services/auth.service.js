import axios from "axios";



const register = (customer_id, passwords, cust_first_name, cust_last_name, nickname, phone_number) => {
  return axios.post('http://localhost:3001/api/users', {
    customer_id,
    passwords,
    cust_first_name,
    cust_last_name,
    nickname,
    phone_number
  });
};

const login = (customer_id, passwords) => {
  return axios
    .post('http://localhost:3001/api/users/login', {
    customer_id,
      passwords,
    })
    .then((response) => {
      if (response.data.results) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

export default {
  register,
  login,
  logout,
  getCurrentUser,
};