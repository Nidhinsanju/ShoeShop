import Card from "@mui/material/Card";
import shopbag from "./image/shopping-bag.svg";
import expand from "./image/expand.svg";
import { useNavigate } from "react-router-dom";

function Blog() {
  const navigate = useNavigate();
  //   fetch("", {
  //     headers: "Get",
  //   })
  //     .then((res) => {
  //       JSON.stringify(res);
  //     })
  //     .then((data) => {
  //       const newProducts = data;
  //       console.log(newProducts);
  //     });

  const data = [
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
      <main>
        {data.map((data) => {
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
                    const id = data.ProductID;
                    console.log("size", id);
                    navigate("/shophub/shop/" + id);
                  }}
                >
                  <img
                    style={{ maxHeight: "20px" }}
                    src={expand}
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
                    const id = data.ProductID;
                    console.log("cart", id);
                    navigate("/shophub/cart/");
                  }}
                >
                  <img
                    style={{ maxHeight: "20px" }}
                    src={shopbag}
                    alt="shoping bag"
                  />
                </button>
                <li>{data.title}</li>
                <li>{data.ProductID}</li>
                <li>{data.descrption}</li>
              </Card>
            </ul>
          );
        })}
      </main>
    </div>
  );
}

export default Blog;
