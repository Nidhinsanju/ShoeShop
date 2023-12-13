import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import useFetchUser from "./Hooks/useFetchUser";

//1.first check the user logged in or not

function Cart() {
  const navigate = useNavigate("");
  const [user, setUser] = useFetchUser({});
  const [products, setProducts] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token === "null") {
      alert("login to view ur cart");
      navigate("/shophub/login");
    } else {
      try {
        if (user.Product !== undefined) {
          setProducts(user.Product);
        }
      } catch (error) {
        console.log(error);
      }
    }
  }, [user]);

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

//...........................................................................................................................

export default Cart;
