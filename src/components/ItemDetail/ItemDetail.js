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
            {item.stock <= 5 && <p><strong>Quedan sólo {item.stock} unidades!</strong></p>}
            <p>Precio $ {item.Precio} </p>

            {
                item.stock === 0
                ? <h4> No hay Stock de este producto</h4>
                :
                isInCart (item.Id)
                ? <Link to = "/cart" className="btn btn-success"> Finalizar Compra</Link>
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