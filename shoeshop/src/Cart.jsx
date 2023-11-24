function Cart() {
  const title = "Shopping Cart New";
  const totalValue = 0;
  const ShippingValue = "free Shipping ";
  return (
    <div>
      <main>
        <h1>{title}</h1>
        <div>
          <h3>total:{totalValue}</h3>
          <h3>Shipping:{ShippingValue}</h3>
        </div>
      </main>
    </div>
  );
}

export default Cart;
