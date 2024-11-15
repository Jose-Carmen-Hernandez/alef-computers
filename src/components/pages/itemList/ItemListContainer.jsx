import "./itemListContainer.css";
import products from "../../../products";
import { useEffect, useState } from "react";
import ItemList from "./ItemList.jsx";
import Loading from "../../common/loading/Loading.jsx";
import { useParams } from "react-router-dom";

//cuando estamos en el home, categoryName es "undefined"
//cuando estamos en una categoria, categoryaname toma el nombre de la categoria

const ItemListContainer = ({ darkMode }) => {
  const { categoryName } = useParams();
  console.log("category: ", categoryName);

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const categoryProducts = products.filter(
      (product) => product.category === categoryName
    );

    const getProducts = new Promise((res, rej) => {
      res(categoryName ? categoryProducts : products);

      setTimeout(() => {
        if (products.length === 0) {
          rej("No hay productos");
        } else {
          res(products);
          setLoading(false);
        }
      }, 2500); //tiempo de retardo
    });
    getProducts
      .then((res) => {
        setItems(res);
      })
      .catch((error) => {
        console.error("Error", error);
      });
  }, [categoryName]); //la promesa se resuelve cada vez que cambia la categoria.
  return loading ? (
    <Loading />
  ) : (
    <>
      <div>
        <h2 className={darkMode ? "offer offer-dark" : "offer offer-light"}>
          ¡Toda la tienda con 20% de descuento + 18 msi con Master Card!
        </h2>
      </div>
      <div
        className={
          darkMode ? "list-container list-container-dark" : "list-container"
        }
      >
        <ItemList items={items} darkMode={darkMode} />
      </div>
    </>
  );
};

export default ItemListContainer;
