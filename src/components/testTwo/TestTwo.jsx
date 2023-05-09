import React from "react";
import axios from "axios";
export default function App() {
  const [img, setImg] = React.useState("");
  const myFormData = new FormData();
  const handleChange = (e) => {
    setImg(e.target.files[0]);
    myFormData.append("images", img);
    console.log(myFormData);
  };
  const handleSendImages = () => {
    axios.post("http://127.0.0.1:8000/api/uploader", myFormData);
  };
  return (
    <div>
      <input type="file" onChange={handleChange} />
      <button onClick={handleSendImages}>send</button>
    </div>
  );
}
