import { useState, useEffect } from "react";
import ItemList from "../itemList/itemList.jsx";
import { consultarProductos } from "../../assets/funciones.js";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    if (category) {
      consultarProductos("../json/productos.json").then((products) => {
        const productsList = products.filter(
          (prod) => prod.idCategoria === parseInt(category)
        );
        console.log(productsList);
        const cardProductos = ItemList({ productsList });
        setProductos(cardProductos);
      });
    } else {
      consultarProductos("./json/productos.json").then((productsList) => {
        const cardProductos = ItemList({ productsList });
        setProductos(cardProductos);
      });
    }
  }, [category]);

  return (
    <div className="container-margin">
      <div className="container-productos">{productos}</div>
    </div>
  );
};

export default ItemListContainer;
