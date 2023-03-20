import { Navbar } from './components/Navbar/Navbar';
import { ItemListContainer} from './components/ItemListContainer/ItemListContainer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';





function App() {
  return (
    
  <div>
    <Navbar/>
    <ItemListContainer greeting={" Todo lo que necesites para un AutoCultivo Exitoso"}/>

    

  </div>
  
  )

}

export default App;
