import { Box, Button, LinearProgress } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import "./cartContainer.css";
import { CartContext } from "../../../context/CartContext";
import CartProducts from "../cartProducts/CartProducts";

//cart y resetCart vienen de CartContext.jsx
const CartContainer = ({ darkMode }) => {
  const { cart, resetCart, getTotalPay } = useContext(CartContext);

  let totalCartPay = getTotalPay(); //devuelve un numero

  return (
    <div className={darkMode ? "cart-list dark-cart-list" : "cart-list"}>
      <CartProducts cart={cart} />

      {cart.length > 0 ? (
        <div className="cart-buttons">
          {/* cuando una funcion no espera argumentos se ejecuta asi:  onClick={resetCart}*/}
          <Button variant="contained" color="error" onClick={resetCart}>
            vaciar carrito
          </Button>
          <h3 className="total-pay">Total a pagar: ${totalCartPay}</h3>
          <Link to="/checkout">
            <Button variant="contained">finalizar compra</Button>
          </Link>
        </div>
      ) : (
        <div className="carrito-vacio">
          <h2>¡El carrito está vacío. Por favor agrégue algún producto!</h2>

          <Box sx={{ width: "75%" }}>
            <LinearProgress />
          </Box>
        </div>
      )}
    </div>
  );
};

export default CartContainer;
