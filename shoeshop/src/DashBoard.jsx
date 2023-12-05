import * as React from "react";
import { useState, useEffect } from "react";
import { BACKEND_URL } from "./Constents/api";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

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
          // }
        });
      });
    } catch (error) {
      alert("Failed to fetch");
    }
  }, []);

  return (
    <div
      style={{
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
              height: "auto",
              maxheight: "250px",
              width: "auto",
              maxwidth: "250px",
              display: "flex",
              flexDirection: "column",
              minHeight: "250px",
              margin: "50px",
            }}
          >
            <h2 className="font-mono ... text-xl ...">{product.Title}</h2>
            <h5 className="font-serif ... ">{product.Description}</h5>
            <h4>{product.Price}</h4>
            <img
              style={{
                width: "320px",
                height: "415px",
                maxheight: "250px",
                maxwidth: "200px",
              }}
              src={product.imageLink}
            ></img>
            <Button
              variant="contained"
              size="medium"
              onClick={() => {
                navigate("/shophub/cart/" + product.ProductID);
              }}
            >
              Add to cart
            </Button>
          </div>
        );
      })}
    </div>
  );
}
export default Dashboard;
