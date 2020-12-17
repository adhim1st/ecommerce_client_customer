import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000",
  // baseURL: "https://e-commerce-adhim1st.herokuapp.com",
});

export default instance;
