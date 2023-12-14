import { useState, useEffect } from "react";
import { BACKEND_URL } from "../Constents/api";
import { Navigate, useNavigate } from "react-router-dom";

export default function useFetchProduct() {
  const navigate = useNavigate;
  const [product, setProducts] = useState([]);
  useEffect(() => {
    try {
      fetch(BACKEND_URL + "/user/products", {
        method: "Get",
      }).then((res) => {
        res.json().then((data) => {
          // if (data.products === string) {
          setProducts(data.products);

          // }
        });
      });
    } catch (error) {
      useEffect(() => {
        alert("Failed to fetch");
        navigate("/shophub/error");
        console.log(error);
      });
    }
  }, []);

  return [product, setProducts];
}
