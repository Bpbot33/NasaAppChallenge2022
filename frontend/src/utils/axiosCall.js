import axios from "axios";

export default async function axiosCall(body) {
  const URL = "http://localhost:5000/search";
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
  };

  try {
    const res = await axios({
      url: URL,
      method: "POST",
      headers: headers,
      data: body,
    });
    return res;
  } catch (error) {
    if (error.response) {
      return error.response;
    }
  }
}
