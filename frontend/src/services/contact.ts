import axios from "axios";

export async function submitContact(data: {
  name: string;
  email: string;
  message: string;
}) {
  return axios.post("http://localhost:8080/api/contact", data);
}
