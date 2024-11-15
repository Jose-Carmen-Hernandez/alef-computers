import Counter from "../../common/counter/Counter";
import "./itemDetail.css";

//se recibe el item, darkMode y agregarAlCarrito como prop desde el container.
//totalInCart viene de ItemDetailContainer.
const ItemDetail = ({ item, darkMode, agregarAlCarrito, totalInCart }) => {
  return (
    <div className={darkMode ? "item-detail item-detail-dark" : "item-detail "}>
      <div className="info-1">
        <h2 className="detail-title">{item.title}</h2>
        <img src={item?.imageUrl} alt={item.title} />
        <h3 className={darkMode ? "price price-dark" : "price"}>
          Precio: ${item?.price?.toFixed(2)}
        </h3>
      </div>
      <div className="info-1">
        <h3 className="infor">{item?.description}</h3>

        <span className={darkMode ? "stock stock-dark" : "stock "}>
          <b>Disponibles: </b>
          {item.stock} unidades.
        </span>

        {item.stock && totalInCart < item.stock ? (
          <Counter
            stock={item.stock}
            agregarAlCarrito={agregarAlCarrito}
            totalInCart={totalInCart}
          />
        ) : (
          <h3 className="no-more">
            &quot;No es posible agregar al carrito&quot;
          </h3>
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
