import * as React from "react";
import { useState, useEffect } from "react";
import { BACKEND_URL } from "./Constents/api";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    try {
      fetch(BACKEND_URL + "/user/products", {
        method: "Get",
      }).then((res) => {
        res.json().then((data) => {
          // if (data.products === string) {
          setProducts(data.products);
          console.log(data.products);
          // }
        });
      });
    } catch (error) {
      alert("Failed to fetch");
      console.log(error);
    }
  }, []);

  return (
    <div
      style={{
        backgroundColor: "orange",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        rowGap: "10x px",
      }}
    >
      {products.map((product) => {
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              border: "2px black solid ",
              padding: "10px",
              minWidth: "20%",
            }}
          >
            <h2>{product.Title}</h2>
            <h5>{product.Description}</h5>
            <h4>{product.Price}</h4>
            <img src={product.imageLink}></img>
            <button
              onClick={() => {
                navigate("/shophub/cart/" + product.ProductID);
              }}
            >
              Add to cart
            </button>
          </div>
        );
      })}
    </div>
  );
}
export default Dashboard;
