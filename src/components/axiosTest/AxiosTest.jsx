import axios from "axios";
import { useEffect } from "react";

export default function AxiosTest() {
  const axiosInstance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
  });

  useEffect(() => {
    axiosInstance
      .get("/posts")
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  }, []);
  return <h1>test console</h1>;
}
