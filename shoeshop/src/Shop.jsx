import Card from "@mui/material/Card";
import useFetchProduct from "./Hooks/usefetchproduct";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Shop() {
  const [product, setProducts] = useFetchProduct();
  const [ID, setID] = useState("");

  const navigate = useNavigate();
  return (
    <div>
      <div>
        <Card style={{ margin: "20px", border: "red solid 200px " }}>
          <main>
            <h2>Product Details</h2>
            <div>
              <h3>Model name</h3>
              <img
                className="MainProduct"
                src={product.imageLink}
                alt="product Image"
                style={{
                  maxHeight: "10%",
                  maxWidth: "26%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              />
            </div>
            <div>
              {product.map((data) => {
                return (
                  <div>
                    <Card style={{ padding: "30px " }}>
                      <img
                        style={{ maxWidth: "8%", maxHeight: "10%" }}
                        src={data.imageLink}
                        alt="image"
                      />
                      <button
                        style={{ padding: "10px" }}
                        type="disabled"
                        onClick={() => {
                          setID(data.ProductID);
                          navigate("/shophub/cart/");
                        }}
                      >
                        Add to cart
                      </button>
                    </Card>
                  </div>
                );
              })}
            </div>
          </main>
        </Card>
      </div>
      <RelatedProducts product={product} />
    </div>
  );

  function RelatedProducts(props) {
    const products = props.product;
    return (
      <div>
        <div>
          <ul>
            {products.map((data) => {
              return (
                <Card style={{ padding: "10px", margin: "10px" }}>
                  <button
                    style={{
                      maxHeight: "50px",
                      maxWidth: "60px",
                      borderRadius: "20px",
                    }}
                    onClick={() => {
                      navigate("/shophub/cart/");
                    }}
                  >
                    <img
                      src="https://www.svgrepo.com/show/521840/shopping-bag.svg"
                      style={{ maxHeight: "20px" }}
                    />
                  </button>
                  <img
                    style={{ maxWidth: "8%", maxHeight: "10%" }}
                    src={data.imageLink}
                    alt="image"
                  />
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
                      src="https://www.svgrepo.com/show/470814/expand.svg"
                      style={{ maxHeight: "20px" }}
                    />
                  </button>
                  <li>{data.ProductID}</li>
                  <li>{data.Description}</li>
                  <li>{data.Title}</li>
                </Card>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}
export default Shop;
