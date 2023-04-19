import ItemCount from "../ItemCount/ItemCount"
import {useState} from "react"


const ItemDetail = ({item} ) => {
        const [cantidad, setCantidad] = useState (1)
    
        const handleAgregar = () => {
            const newItem ={
                ...item,
                cantidad
            }

            console.log (newItem)
        }

        return (

        <div>
            <h2>{item.Nombre} </h2>
            <hr/>
            <img src= {item.img} alt = {item.Nombre} />
            <p>{item.Descripcion} </p>
            <p>Precio $ {item.Precio} </p>

            <ItemCount
                max={item.stock} 
                cantidad = {cantidad}
                setCantidad={setCantidad}
                agregar = {handleAgregar}
                />

        </div>


    )


}

export default ItemDetail