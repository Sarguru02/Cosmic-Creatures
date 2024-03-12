import axios from "axios";

export default async function chat(message) {
    const res = await axios.post('chat/', { question: message })
    return res.data;
}
