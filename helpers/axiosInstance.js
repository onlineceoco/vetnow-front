import axios from "axios";
import { api } from "./UrlConfig";

function setAuthToken(token) {
  if (token) {
    return axios.create({
      baseURL: api,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}
export const axiosInstance = axios.create({
  baseURL: api,
});

export default setAuthToken;
