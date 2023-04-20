import { Navbar } from './components/Navbar/Navbar';
import { ItemListContainer} from './components/ItemListContainer/ItemListContainer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Nosotros from './components/Nosotros/Nosotros'
import Productos from './components/Productos/Productos'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './components/context/CartContext.js';
import Cart from './components/Cart/Cart'







function App() {
 

  return (
    
    
    <CartProvider>
    
    <BrowserRouter>
    
    <Navbar/>
    

    <Routes>

      <Route path='/' element = { <ItemListContainer /> }/> */hacer un futuro inicio/*
      <Route path= 'Nosotros' element= { <Nosotros  />  } />
      <Route path= '/cart' element= { <Cart  />  } />
      <Route path= '/Productos/:categoryId' element= { <Productos /> } />
      <Route path= '/Detail/:itemID' element= { <ItemDetailContainer /> } />
      <Route path= '*' element= { <Navigate to= {"/"} /> } />
     

    </Routes>
    
    </BrowserRouter>
    </CartProvider>
    
  )

}

export default App;


    

  
  
