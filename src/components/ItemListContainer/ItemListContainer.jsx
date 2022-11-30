import { useState, useEffect } from "react";
import ItemList from "../itemList/itemList.jsx";
import { useParams } from "react-router-dom";
import bannerw from "./img/followusoninsta.webp";
import bannerv from "./img/followusoninstavertical.webp";
import { getProductos } from "../../assets/firebase.js";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    if (category) {
      getProductos().then((products) => {
        const productsList = products.filter(
          (prod) => prod.idCategoria === parseInt(category)
        );
        const cardProducts = ItemList({ productsList });
        setProductos(cardProducts);
      });
    } else {
      getProductos().then((productsList) => {
        const cardProducts = ItemList({ productsList });
        setProductos(cardProducts);
      });
    }
  }, [category]);

  return (
    <>
      {category ? (
        <div>
          <div className="container-fluid">
            <div className="container-productos">{productos}</div>
            <br></br>
            <br></br>
          </div>
        </div>
      ) : (
        <div>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/honey.sanma/"
          >
            <img className="banner-wide" src={bannerw} alt="" />
            <img className="banner-vertical" src={bannerv} alt="" />
          </a>
          <div className="container-fluid">
            <div className="container-productos">{productos}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default ItemListContainer;
