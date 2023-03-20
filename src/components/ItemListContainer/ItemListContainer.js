import './ItemListContainer.scss'
import { useEffect, useState } from 'react';
import { pedirDatos } from '../../helpers/pedirDatos';
import ItemList from '../ItemList/ItemList';



export const ItemListContainer = ({greeting}) => {
    

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState (true)

    

    useEffect (()=>{
        setLoading(true)
        
        pedirDatos ()
        .then ((res) =>{
            setProductos(res)
            setLoading (false)
        })
        .catch ((error) =>{
            console.log (error)
            
        })
        .finally (()=>{
            setLoading (false)
        })
    }, [])
 

    
    

    return (
        <div className="list-container">
        <p>{greeting}</p>

        {
            loading ? <h2>Cargando...</h2> : <ItemList items= {productos} /> 
        }

        
        </div>
    )
}



export default ItemListContainer