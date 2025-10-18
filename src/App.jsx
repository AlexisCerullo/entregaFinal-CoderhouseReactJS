import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error from './components/Error';
import { CartProvider } from './context/CartContext';
import CartContainer from './components/CartContainer';
import Checkout from './components/Checkout';
import Footer from './components/Footer';

function App() {

  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer mensaje='Bienvenido a Tienda Tech!' />} />
          <Route path='/category/:type' element={<ItemListContainer mensaje='Categoria: ' />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<CartContainer/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='*' element={<Error />} />
        </Routes>
        <Footer />
      </CartProvider>

    </BrowserRouter>
    
  )
}

export default App
