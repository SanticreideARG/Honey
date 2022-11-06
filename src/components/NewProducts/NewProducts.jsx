import { useState, useEffect } from "react";
import { consultarProductos } from "../../assets/funciones";
import ItemList from "../itemList/itemList.jsx";

const NewProducts = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
      consultarProductos("../json/productos.json").then((products) => {
        const productsList = products.filter(
          (prod) => prod.novedad === true
        );
        const cardProductos = ItemList({ productsList });
        setProductos(cardProductos);
      });
  }, []);

  return (
    <div className="container-margin">
      <h1 className="text-center pt-4 pb-3">Novedades</h1>
      <div className="container-productos">{productos}</div>
    </div>
  );
};


export default NewProducts;
