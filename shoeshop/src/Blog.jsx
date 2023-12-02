import Card from "@mui/material/Card";
import { useNavigate } from "react-router-dom";
import useFetchProduct from "./Hooks/usefetchproduct";

function Blog() {
  const navigate = useNavigate();
  const [product, setProducts] = useFetchProduct();
  console.log(product);

  return (
    <div>
      <main>
        {product.map((data) => {
          return (
            <ul style={{ display: "flex" }}>
              <Card>
                <button
                  style={{
                    maxHeight: "50px",
                    maxWidth: "60px",
                    borderRadius: "20px",
                  }}
                  onClick={() => {
                    navigate("/shophub/shop/" + data.ProductID);
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
                  <img src={data.imageLink} alt="image" />
                </div>
              </Card>
            </ul>
          );
        })}
      </main>
    </div>
  );
}

export default Blog;
