import Repository from "./Repository";
// import store from "@/store";

const jsonHeader = {
  headers: {
    "Content-Type": "application/json"
  }
}

export default {
  getUser(id) {
    return Repository.get(`/${id}`, jsonHeader);
  },
  regUser(payload) {
    return Repository.post("/register", payload, jsonHeader);
  },
  authUser(payload) {
    return Repository.post("/login", payload, jsonHeader);
  }
}
