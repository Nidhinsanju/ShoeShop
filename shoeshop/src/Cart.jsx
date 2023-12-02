import { useState } from "react";
import { useParams } from "react-router-dom";

function Cart() {
  const [cart, setCart] = useState();
  const CustomerID = useParams();
  console.log(CustomerID);
u
  return (
    <div>
      <main>
        <h1>HELLO</h1>
        <div>{""}</div>
      </main>
    </div>
  );
}

export default Cart;
