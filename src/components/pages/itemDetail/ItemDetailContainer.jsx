import ItemDetail from "./ItemDetail";
import products from "../../../products";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import { toast } from "sonner";

const ItemDetailContainer = ({ darkMode }) => {
  const { id } = useParams();
  const { addToCart, getTotalQuantity } = useContext(CartContext);
  const [item, setItem] = useState({}); //aqui se guarda el item en el useState

  let totalInCart = getTotalQuantity(id);

  useEffect(() => {
    //buscar el producto por id en el array de productos:
    let productSelected = products.find((product) => product.id === id);
    console.log("producto encontrado", productSelected);

    setItem(productSelected);
  }, [id]);
  //Aqui en el componente padre se declara la funcion agregar al carrito, y se ejecuta dentro del componente Counter.jsx.
  const agregarAlCarrito = (cantidad) => {
    let objetoAgregado = { ...item, quantity: cantidad };
    addToCart(objetoAgregado); //viene de CartContext
    //console.log("Producto agregado al carrito: ", objetoAgregado);
    toast.success("Producto agregado");
  };

  /* el componente presentacional recibe el item por props */
  return (
    <ItemDetail
      darkMode={darkMode}
      item={item}
      agregarAlCarrito={agregarAlCarrito}
      totalInCart={totalInCart}
    />
  );
};

export default ItemDetailContainer;
