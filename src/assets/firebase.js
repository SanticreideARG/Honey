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

const getProductos = async() => {
    const productos = await getDocs(collection(db, "productos"))
    const items = productos.docs.map(prod => {return {...prod.data(), id: prod.id}})
    return items
}

const getProducto = async (id) => {
    const prod = await getDoc(doc(db, "productos",id))
    let item
    if(prod.data()) {
        item = {...prod.data(), id: prod.id}
    } else {
        item = "Producto no encontrado"
    }
    
    return item
}



const createProducto = async (objProducto) => {
    const estado = await addDoc(collection(db, "productos"), {
        idCategoria: objProducto.idCategoria,
        nombre: objProducto.nombre,
        marca: objProducto.marca,
        descripcion: objProducto.descripcion,
        precio: objProducto.precio,
        stock: objProducto.stock,
        talle: objProducto.talle,
        img: objProducto.img,
        img2: objProducto.img2,
        oferta: objProducto.oferta,
        novedad: objProducto.novedad
    })

    return estado
}

const updateProducto = async(id, info) => {
    const estado = await updateDoc(doc(db, "productos",id), info)
    return estado
}

const deleteProducto = async(id) => {
    const estado = await deleteDoc(doc(db,"productos", id))
    return estado
}


//CREATE AND READ ORDENES DE COMPRA

const createOrdenCompra = async (cliente, preTotal, fecha) => {
    const ordenCompra = await addDoc(collection(db, "ordenCompra"), {
        nombre: cliente.nombre,
        apellido: cliente.apellido,
        email: cliente.email,
        celular:cliente.celular,
        direccion: cliente.direccion,
        payment: cliente.payment,
        fecha: fecha,
        precioTotal: preTotal
    })

    return ordenCompra
}

const getOrdenCompra = async(id) => {
    const item = await getDoc(doc(db, "ordenCompra", id))
    const ordenCompra = {...item.data(), id: item.id}
    return ordenCompra
}

export {getProductos, getProducto, createProducto, updateProducto, deleteProducto, createOrdenCompra, getOrdenCompra}
