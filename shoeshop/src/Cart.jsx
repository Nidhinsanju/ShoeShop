import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import useFetchUser from "./Hooks/useFetchUser";


//1.first check the user logged in or not
//2.if user is logged in and if he has products in the cart display it
//3.if the user has no products in the cart show him no products

function Cart() {
  const navigate = useNavigate("");
  const [user, setUser] = useFetchUser();
  const [products, setProducts] = useState();
  const [cartitem, setCartitem] = useState();

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <div>
      {cartitem?.map((data) => {
        return (
          <div>
            <h3>{data.username}</h3>
          </div>
        );
      })}
      hello world
      {<ListCart products={products} />}
    </div>
  );
  //...........................................................................................................................

  function ListCart(props) {
    const products = props.products1;
    if (products?.length === 0) {
      {
        console.log("length is 0");
      }
      return (
        <div>
          <main>Cart is Empty</main>
        </div>
      );
    }
    return (
      <div>
        <main>
          {products?.map((data) => {
            return (
              <div>
                <Card style={{ margin: "20px" }}>
                  <h1>{data.Title}</h1>
                  <h2>{data.Description}</h2>
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
              </div>
            );
          })}
        </main>
      </div>
    );
  }
}

export default Cart;
