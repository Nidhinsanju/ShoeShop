import * as React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import useFetchProduct from "./Hooks/usefetchproduct";
import { useState } from "react";
import sharedFunction from "./Constents/onclick";

function Dashboard() {
  const navigate = useNavigate();
  // const addproduct = addproduct();
  const [products, setProducts] = useFetchProduct();
  const [ID, setID] = useState();

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
                setID(product.ProductID);
                window.sharedFunction();
                navigate("/shophub/cart/");
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
