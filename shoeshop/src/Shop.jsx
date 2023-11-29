import Card from "@mui/material/Card";
import shoe1 from "./image/shoe-1.svg";
import expand from "./image/expand.svg";
import shopbag from "./image/shopping-bag.svg";

function Shop() {
  const Products = "";
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
                src={shoe1}
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
              {/* {Products.map((data) => {
                return (
                  <div>
                    <Card style={{ padding: "30px " }}>
                      <img src={data.imagelink} alt="image" />
                    </Card>
                  </div>
                );
              })} */}
            </div>
            <button style={{ padding: "10px" }} type="disabled">
              Add to cart
            </button>
          </main>
        </Card>
      </div>
      <RelatedProducts />
    </div>
  );

  function RelatedProducts() {
    const products = [
      {
        ProductID: 1,
        title: "Full stack developer",
        descrption: "learn fully",
      },
      {
        ProductID: 2,
        title: "enjoy life",
        descrption: "do whatever u want",
      },
      {
        ProductID: 3,
        title: "enjoy life",
        descrption: "do whatever u want",
      },
      {
        ProductID: 4,
        title: "enjoy life",
        descrption: "do whatever u want",
      },
      {
        ProductID: 5,
        title: "enjoy life",
        descrption: "do whatever u want",
      },
    ];
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
                  >
                    <img src={expand} style={{ maxHeight: "20px" }} />
                  </button>
                  <button
                    style={{
                      maxHeight: "50px",
                      maxWidth: "60px",
                      borderRadius: "20px",
                    }}
                  >
                    <img src={shopbag} style={{ maxHeight: "20px" }} />
                  </button>
                  <li>{data.ProductID}</li>
                  <li>{data.title}</li>
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