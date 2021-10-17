import  axios from "axios";
export const instance = axios.create({
  baseURL: "https://616af4b516e7120017fa116b.mockapi.io",
  headers: { "Content-Type": "application/json" }
});
