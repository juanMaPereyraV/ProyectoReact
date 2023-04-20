import ItemCount from "../ItemCount/ItemCount"
import { CartContext } from "../context/CartContext.js"
import { useContext, useState } from 'react';
import { Link } from "react-router-dom"



const ItemDetail = ({item} ) => {

        const {agregarAlCarrito, isInCart} = useContext (CartContext)
        
        const [cantidad, setCantidad] = useState (1)
    
        const handleAgregar = () => {
            const newItem ={
                ...item,
                cantidad
            }
            
        
             
            agregarAlCarrito (newItem)
        }

        return (

        <div>
            <h2>{item.Nombre} </h2>
            <hr/>
            <img src= {item.img} alt = {item.Nombre} />
            <p>{item.Descripcion} </p>
            <p>Precio $ {item.Precio} </p>

            {
                isInCart (item.id)
                ? <Link to = "/Cart" className="btn btn-success"> Finalizar Compra</Link>
                : <ItemCount
                    max={item.stock} 
                    cantidad = {cantidad}
                    setCantidad={setCantidad}
                    agregar = {handleAgregar}
                />


            }

            
            

        </div>


    )


}

export default ItemDetail