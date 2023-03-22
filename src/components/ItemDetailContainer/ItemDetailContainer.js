import './ItemDetailContainer.scss'
import { useEffect, useState } from "react"
import { pedirDatos } from "../../helpers/pedirDatos"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"




const ItemDetailContainer = () => {

    const [item, setItem] = useState (null)
    const [loading, setLoading] = useState (true)
    const {itemID} = useParams ()

  
    
    
    useEffect (() => {
         setLoading (true)

        pedirDatos ()
            .then ((res) => {
                
                setItem ( res.find ((prod) => prod.Id === Number (itemID)) )
             })
             
             .finally (() => {
                setLoading (false)
             })
    }, [itemID])

    return (

        <div className="container my-5">
            
            <h2 className="detalle"> Detalle del Producto </h2>
            {
                loading
                    ? <h2 className="loading"> Cargando...</h2>
                    : <ItemDetail item = {item}/>
            }
        </div>
            


    )
}


export default ItemDetailContainer