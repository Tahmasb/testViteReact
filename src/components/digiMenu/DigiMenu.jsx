import { useState } from "react";
import { useEffect } from "react";

export default function DigiMenu() {
  const [categories, setCategories] = useState([]);
  const getCategories = async function () {
    let res = await fetch("https://app.teamvokala.com/api/category");
    let data = await res.json();
    setCategories(data.data);
  };
  useEffect(() => {
    getCategories();
  }, []);
  return (
    <>
      {console.log(categories)}
      <h1>digi menu</h1>;
    </>
  );
}
