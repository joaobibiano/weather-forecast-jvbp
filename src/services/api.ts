import Axios from "axios";

const dev = process.env.NODE_ENV === "development";

export const clientApi = Axios.create({
  baseURL: dev ? "http://localhost:3000/api" : "URL_PRODUCTION",
});
