import Card from "@mui/material/Card";

function Shop() {
  return (
    <div>
      <div>
        <Card style={{ margin: "20px", border: "red solid 200px " }}>
          <main>
            <h3>Model name</h3>
            <img className="MainProduct" src="image" alt="product Image" />
            <div>
              <img></img>
              <img></img>
              <img></img>
            </div>
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
