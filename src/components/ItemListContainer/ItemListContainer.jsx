import { useState, useEffect } from "react";
import ItemList from "../itemList/itemList.jsx";
import { useParams } from "react-router-dom";
import bannerw from './img/followusoninsta.png';
import bannerv from './img/followusoninstavertical.png';
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
        const cardProductos = ItemList({ productsList });
        setProductos(cardProductos);
      });
    } else {
      getProductos().then((productsList) => {
        const cardProductos = ItemList({ productsList });
        setProductos(cardProductos);
      });
    }
  }, [category]);

  return (
    <>
    { (category) ?
    <div>
       <div className="container-fluid">
       <div className="container-productos">{productos}</div>
       <br></br>
       <br></br>
       </div>
    </div>
    :
    <div>
        <img className="banner-wide" src={bannerw} alt="" />
        <img className="banner-vertical" src={bannerv} alt="" />
        <div className="container-fluid">
        <div className="container-productos">{productos}</div>
    </div>
    </div>
    }
    </>
  );
};

export default ItemListContainer;
