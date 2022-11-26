import { useState, useEffect } from "react";
import ItemList from "../itemList/itemList.jsx";
import { consultarBDD } from "../../assets/funciones.js";
import { useParams } from "react-router-dom";
import bannerw from './img/followusoninsta.png';
import bannerv from './img/followusoninstavertical.png';


const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    if (category) {
      consultarBDD("../json/productos.json").then((products) => {
        const productsList = products.filter(
          (prod) => prod.idCategoria === parseInt(category)
        );
        const cardProductos = ItemList({ productsList });
        setProductos(cardProductos);
      });
    } else {
      consultarBDD("./json/productos.json").then((productsList) => {
        const cardProductos = ItemList({ productsList });
        setProductos(cardProductos);
      });
    }
  }, [category]);

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

export default ItemListContainer;
