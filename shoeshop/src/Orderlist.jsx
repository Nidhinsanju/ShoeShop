import { BACKEND_URL } from "./Constents/api";

function Orderlist() {
  fetch(BACKEND_URL+"", {
    headers: "Get",
    body: {
      customerID: "",
    },
  })
    .then((res) => {
      JSON.stringify(res);
    })
    .then((data) => {
      const result = data;
      console.log(result, "hi1");
    });

  return (
    <div>
      <main style={{ display: "flex" }}>
        <div>HELO</div>
      </main>
    </div>
  );
}

export default Orderlist;
