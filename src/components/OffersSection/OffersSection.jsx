import { useState, useEffect } from "react";
import { getProductos } from "../../assets/firebase.js";
import ItemList from "../itemList/itemList.jsx";
import bannerw from './img/ofertashorizontal.webp';
import bannerv from './img/ofertasvertical.webp';

const OffersContainer = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    getProductos().then((products) => {
        const productsList = products.filter(
          (prod) => prod.oferta === true
        );
        const cardProducts = ItemList({ productsList });
        setProductos(cardProducts);
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
