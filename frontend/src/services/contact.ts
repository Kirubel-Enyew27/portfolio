import axios from "axios";

export async function sendMessage(data: {
  name: string;
  email: string;
  message: string;
}) {
  return axios.post("http://localhost:8080/api/contact", data);
}
