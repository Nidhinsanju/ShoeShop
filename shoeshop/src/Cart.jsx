import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import { BACKEND_URL } from "./Constents/api";
import Shop from "./Shop";

function Cart() {
  const ID = Shop.ID;
  const [product, setProduct] = useState();
  const navigate = useNavigate("");
  useEffect(() => {
    try {
      fetch(
        BACKEND_URL + "/user/addproudct",
        {
          method: "Post",
        },
        {
          // ProductID: ID,
        }
      ).then((res) => {
        res.json().then((data) => {
          // if (data.products === string) {
          setProduct(data.product);
          console.log(data);
          // }
        });
      });
    } catch (error) {
      alert("Failed to fetch");
      console.log(error);
    }
  }, []);

  return (
    <div>
      <main>
        <h1>HELLO{ID}</h1>
        <div></div>
      </main>
      <ListCart product={product} />
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
