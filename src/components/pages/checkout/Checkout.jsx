import "./checkout.css";
const Checkout = ({ darkMode }) => {
  return (
    <div className={darkMode ? "checkout checkout-dark" : "checkout"}>
      <h1>Checkout</h1>
    </div>
  );
};

export default Checkout;
