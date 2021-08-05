import axios from "axios";

var baseDomain = "http://localhost:3000";
const baseURL = `${baseDomain}`

const instance = axios.create({
  baseURL
});

export default instance;
