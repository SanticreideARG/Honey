import { useState, useEffect } from "react";
import { consultarBDD } from "../../assets/funciones";
import ItemList from "../itemList/itemList.jsx";
import bannerw from './img/ofertashorizontal.png';
import bannerv from './img/ofertasvertical.png';

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
    <>
    <img className="banner-wide" src={bannerw} alt="" />
    <img className="banner-vertical" src={bannerv} alt="" />
    <div className="container-margin">
      <div className="container-productos">{productos}</div>
    </div>
    </>
  );
};


export default OffersContainer;
