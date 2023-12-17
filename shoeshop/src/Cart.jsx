import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import { BACKEND_URL } from "./Constents/api";

//1.first check the user logged in or not

function Cart() {
  const navigate = useNavigate("");
  const [products, setProducts] = useState([]);
  const token = localStorage.getItem("token");
  const CustomerId = localStorage.getItem("CustomerID");

  if (token === "null") {
    useEffect(() => {
      alert("User not logged in");
      navigate("/shophub/login");
    });
  } else {
    const value = JSON.stringify({ CustomerId: CustomerId });
    fetch(BACKEND_URL + "/user/cart/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: value,
    }).then((res) => {
      res.json().then((data) => {
        setProducts(data.cart.products);
      });
    });

    return (
      <div>
        {products.length > 0 ? (
          products.map((data) => (
            <Card style={{ margin: "20px" }}>
              <h2>{data.Description}</h2>
              <h1>hi{data.title}</h1>
              <h2>{data.price}</h2>
              <img
                style={{ maxHeight: "8%", maxWidth: "10%" }}
                src={data.imageLink}
                alt="image"
              />
              <Button
                variant="outlined"
                onClick={() => {
                  navigate("/shophub/error");
                }}
              >
                Buy now
              </Button>
            </Card>
          ))
        ) : (
          <div>No items in cart to display</div>
        )}
      </div>
    );
  }
}

//...........................................................................................................................

export default Cart;
