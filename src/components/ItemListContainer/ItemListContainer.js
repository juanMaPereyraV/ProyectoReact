import './ItemListContainer.scss'
import { useEffect, useState } from 'react';
import { pedirDatos } from '../../helpers/pedirDatos';
import ItemList from '../ItemList/ItemList';
import {useParams} from 'react-router-dom'
import Loader from '../Loader/Loader'



export const ItemListContainer = ({greeting}) => {
    

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState (true)

    const {categoryId} = useParams ()
    console.log (categoryId)

    useEffect (()=>{
        setLoading(true)
        
        pedirDatos ()
        .then ((res) =>{
            if (categoryId){
                setProductos (res.filter ((prod) => prod.category === categoryId))
            } else {
                setProductos (res)
            }

        })
        .catch ((error) =>{
            console.log (error)
            
        })
        .finally (()=>{
            setLoading (false)
        })
    }, [categoryId])
    

    return (
        <div className="list-container">
        {
            loading
                    ? <Loader/>                
                    : <ItemList items= {productos} />   
        }
         
        </div>

)
}



export default ItemListContainer
        
        

        