import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { CartContextProvider } from '../context/CartContext';
import Navbar from './Navbar/Navbar';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import Cart from './Cart/Cart';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import OffersContainer from './OffersSection/OffersSection';
import NewProducts from './NewProducts/NewProducts';
import Checkout from './Checkout/Checkout'
import Footer from './Footer/Footer';

const App = () => {
  
  return (
    <>
      <BrowserRouter>
      <CartContextProvider>
        <Navbar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/product/:id' element={<ItemDetailContainer/>}/>
          <Route path='/offers' element={<OffersContainer/>}/>
          <Route path='/newproducts' element={<NewProducts/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/category/:category' element={<ItemListContainer/>}/>
          <Route path='/checkout' element={<Checkout/>}></Route>
        </Routes>
        <Footer>
        </Footer>
        </CartContextProvider>   
      </BrowserRouter>
      
    </>
   
  );
}

export default App;
