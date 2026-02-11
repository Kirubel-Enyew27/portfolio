import axios from "axios";

export async function sendMessage(data: {
  name: string;
  email: string;
  message: string;
}) {
  return axios.post("https://portfolio-nlei.onrender.com/api/contact", data);
}
