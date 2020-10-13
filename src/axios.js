import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-d007d.cloudfunctions.net/api",
});

export default instance;
