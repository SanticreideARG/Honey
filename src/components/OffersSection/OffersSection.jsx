import { useState, useEffect } from "react";
import { consultarBDD } from "../../assets/funciones";
import ItemList from "../itemList/itemList.jsx";

const OffersContainer = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    consultarBDD("../json/productos.json").then((products) => {
        const productsList = products.filter(
          (prod) => prod.oferta === true
        );
        const cardProductos = ItemList({ productsList });
        setProductos(cardProductos);
      });
  }, []);

  return (
    <div className="container-margin">
            <h1 className="text-center pt-4 pb-3">Ofertas</h1>
      <div className="container-productos">{productos}</div>
    </div>
  );
};


export default OffersContainer;
