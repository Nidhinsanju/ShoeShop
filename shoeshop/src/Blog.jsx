import Card from "@mui/material/Card";
import { useNavigate } from "react-router-dom";
import useFetchProduct from "./Hooks/usefetchproduct";

function Blog() {
  const navigate = useNavigate();
  const [product, setProducts] = useFetchProduct();

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        rowGap: "10x px",
      }}
    >
      {product.map((data) => {
        return (
          <Card
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
            <button
               style={{
                maxHeight: "50px",
                maxWidth: "60px",
                borderRadius: "20px",
              }}
              onClick={() => {
                navigate("/shophub/shop/");
              }}
            >
              <img
                style={{ maxHeight: "20px" }}
                src="https://www.svgrepo.com/show/470814/expand.svg"
                alt="shoping bag"
              />
            </button>
            <button
              style={{
                maxHeight: "50px",
                maxWidth: "60px",
                borderRadius: "20px",
                marginLeft: "20px",
              }}
              onClick={() => {
                navigate("/shophub/cart/");
              }}
            >
              <img
                style={{ maxHeight: "20px" }}
                src="https://www.svgrepo.com/show/521840/shopping-bag.svg"
                alt="shoping bag"
              />
            </button>
            <div
              style={{
                maxWidth: "30%",
                minWidth: "20%",
                minHeight: "20%",
                maxHeight: "20%",
              }}
            >
              <h3>{data.Title}</h3>
              <li>{data.ProductID}</li>
              <h4>{data.Description}</h4>
              <img
                style={{
                  width: "520px",
                  height: "325px",
                  maxheight: "350px",
                  maxwidth: "400px",
                }}
                src={data.imageLink}
                alt="image"
              />
            </div>
          </Card>
        );
      })}
    </div>
  );
}

export default Blog;
