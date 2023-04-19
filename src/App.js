import { Navbar } from './components/Navbar/Navbar';
import { ItemListContainer} from './components/ItemListContainer/ItemListContainer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Nosotros from './components/Nosotros/Nosotros'
import Productos from './components/Productos/Productos'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';



function App() {
  
  return (
    
    
    <BrowserRouter>
    
    <Navbar/>
    

    <Routes>

      <Route path='/' element = { <ItemListContainer /> }/> */hacer un futuro inicio/*
      <Route path= 'Nosotros' element= { <Nosotros  />  } />
      <Route path= '/Productos/:categoryId' element= { <Productos /> } />
      <Route path= '/Detail/:itemID' element= { <ItemDetailContainer /> } />
      <Route path= '*' element= { <Navigate to= {"/"} /> } />

    </Routes>
    
    </BrowserRouter>
  
  )

}

export default App;


    

  
  
