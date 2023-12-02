import { useState, useEffect } from "react";
import { BACKEND_URL } from "../Constents/api";

export default function useFetchProduct() {
  const [product, setProducts] = useState([]);
  useEffect(() => {
    try {
      fetch(BACKEND_URL + "/user/me", {
        method: "post",
        body: {
          coustomerID: coustomerID,
        },
      }).then((res) => {
        res.json().then((data) => {
          // if (data.products === string) {
          setProducts(data.products);
          console.log(data);
          // }
        });
      });
    } catch (error) {
      alert("Failed to fetch");
      console.log(error);
    }
  }, []);

  return [product, setProducts];
}
