import { initializeApp } from "firebase/app";
import {getFirestore, collection, addDoc, getDocs, getDoc, doc, updateDoc, deleteDoc} from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "honey-website-e94f8.firebaseapp.com",
  projectId: "honey-website-e94f8",
  storageBucket: "honey-website-e94f8.appspot.com",
  messagingSenderId: "980114157445",
  appId: "1:980114157445:web:10e98505422ffd700d1eec"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore();

const cargarBDD = async () =>{
    const promise = await fetch('./json/productos.json');
    const productos = await promise.json();
    productos.forEach(async (prod) =>{
        await  addDoc(collection(db, "productos"), {
            idCategoria: prod.idCategoria,
            nombre: prod.nombre,
            marca: prod.marca,
            descripcion: prod.descripcion,
            precio: prod.precio,
            stock: prod.stock,
            talle: prod.talle,
            img: prod.img,
            img2: prod.img2,
            oferta: prod.oferta,
            novedad: prod.novedad

        })
    })
}

export {cargarBDD}
// "id":
// "idCategoria": 
// "nombre": "Saco de Gamuza",
// "marca": "Yanel",
// "descripcion": 
// "precio":
// "stock":
// "talle":
// "img":
// "img2": 
// "oferta": 
// "novedad":