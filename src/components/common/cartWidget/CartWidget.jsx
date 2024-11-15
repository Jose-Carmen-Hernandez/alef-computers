import { Link } from "react-router-dom";
import "./cartWidget.css";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";
//consumir context
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { Badge } from "@mui/material";

//indicamos a useContext cual es el contexto que deseamos consumir:
const CartWidget = ({ darkMode }) => {
  const { cart, getCartQuantity } = useContext(CartContext); //devuelve el objeto de configuracion value={}
  console.log(cart);

  let totalItemsInCart = getCartQuantity();
  return (
    <Link className="cart" to="/cart">
      <Badge badgeContent={totalItemsInCart} color="secondary" showZero={true}>
        <ShoppingCartTwoToneIcon
          fontSize="large"
          className={darkMode ? "icon icon-dark" : "icon"}
        />
      </Badge>
    </Link>
  );
};

export default CartWidget;
