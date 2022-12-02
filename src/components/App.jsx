import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
// import Layout from "./pages/Layout"; // Optional, but useful
//context
import { CartContextProvider } from '../context/CartContext';
//components
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import Navbar from './Navbar/Navbar';
import Cart from './Cart/Cart';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import OffersContainer from './OffersSection/OffersSection';
import NewProducts from './NewProducts/NewProducts';
import Checkout from './Checkout/Checkout'
import Footer from './Footer/Footer';
import Terminos from './Terminos/Terminos';
import Faq from './Faq/Faq';
import Contact from './Contact/Contact';
import Sucess from './Sucess/Sucess';
import NotFound from './NotFound/NotFound';
import AdminLogin from './AdminLogin/AdminLogin';
import AdminBoard from './AdminBoard/AdminBoard';

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
          <Route path='/terminos' element={<Terminos/>}></Route>
          <Route path='/faq' element={<Faq/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/sucess/*' element={<Sucess/>}></Route>
          <Route path='/admin' element={<AdminLogin/>}></Route>
          <Route path='/adminBoard' element={<AdminBoard/>}></Route>
          <Route path='*' element = {<NotFound/>} />
        </Routes>
        <Footer></Footer>
        </CartContextProvider>   
      </BrowserRouter>
      
    </>
   
  );
}

export default App;
