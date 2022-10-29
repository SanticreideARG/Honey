import React from 'react'
import './Home.css';

const Home = () => {
    const ConsularBDD = () =>{
        fetch('./json/products.json')
        .then(promise => promise.json())
        .then(products => {
            const cardProducts = products.map(prod => 
                <div className="card" style={{width: '18rem'}}>
                <img src={`./img/${prod.imagen}`} className="card-img-top" alt="..." />
                <div className="card-body">
                <h5 className="card-title">{prod.nombre}</h5>
                <p className="card-text">{prod.descripcion}</p>
                </div>
                <ul className="list-group list-group-flush">
               <li className="list-group-item">$ {prod.precio}</li>
               <li className="list-group-item">{prod.categoria}</li>
               <li className="list-group-item">Talle: {prod.talle}</li>
             </ul>
            </div>)
            ConsularBDD()

        })
    }

    return (
        <main>
            
        </main>
    );
}

export default Home;
