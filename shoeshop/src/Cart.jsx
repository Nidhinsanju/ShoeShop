import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import { Navigate } from "react-router-dom";
function Cart() {
  const navigate = useNavigate("");
  const params = useParams("");
  const [cart, setCart] = useState("");

  return (
    <div>
      <main>
        <h1>HELLO</h1>
        <div></div>
      </main>
      <ListCart />
    </div>
  );

  function ListCart() {
    const products = [
      {
        ProductID: 1,
        Title: "Nike shoe",
        Description: "JUST DO IT",
        Price: 6999,
        imageLink:
          "https://assets.ajio.com/medias/sys_master/root/20221110/z5Lv/636cd4acaeb269659c84b85f/-473Wx593H-469331513-white-MODEL.jpg",
        Onair: true,
      },
      {
        ProductID: 2,
        Title: "Nike shoe2",
        Description: "JUST DO IT",
        Price: 6999,
        imageLink:
          "https://assets.ajio.com/medias/sys_master/root/20221110/z5Lv/636cd4acaeb269659c84b85f/-473Wx593H-469331513-white-MODEL.jpg",
        Onair: true,
      },
    ];
    return (
      <div>
        <main>
          {products.map((data) => {
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
