import { useState, useEffect } from "react";
import ItemList from "../itemList/itemList.jsx";
import bannerw from './img/coleccionverano2022horizontal.png';
import bannerv from './img/coleccionverano2022vertical.png';
import { getProductos } from "../../assets/firebase.js";

const NewProducts = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    getProductos().then((products) => {
        const productsList = products.filter(
          (prod) => prod.novedad === true
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


export default NewProducts;
