import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
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
//svg
import errorImage from './Sucess/img/error.svg'

const App = () => {
  
  return (
    <>
      <BrowserRouter onUpdate={() => window.scrollTo(0, 0)}>
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
          <Route path='/sucess' element={<Sucess/>}></Route>
          <Route path='*' element = {<h3 className='center-this mt-4'>Ruta no encontrada</h3>} />
        </Routes>
        <Footer></Footer>
        </CartContextProvider>   
      </BrowserRouter>
      
    </>
   
  );
}

export default App;
