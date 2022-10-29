import React from 'react'
import "./App.css";
import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import ItemListContainer from "./ItemListContainer/ItemListContainer";

const App = () => {
  return (
    <>
     <Navbar/>
     <Home/> 
     <ItemListContainer />
    </>
   
  );
}
export default App;
