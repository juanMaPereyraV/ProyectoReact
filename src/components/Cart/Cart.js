import { useContext } from "react"
import { CartContext } from "../context/CartContext.js.js"
import {BsFillTrashFill} from 'react-icons/bs'


const Cart = () =>{

    const {Cart, vaciarCarrito, removerItem, totalCarrito} = useContext (CartContext)

    return (
        <div className="container my-5">
            <h2>Tu Compra</h2>
            <hr/>

            {
                Cart.map ((item) => 
                <div key= {item.Id}>
                    <h4> {item.Nombre} </h4>
                    <img src={item.img} alt= {item.Nombre}/>
                    <div>
                    <small>Cantidad: {item.cantidad} </small> <small>Precio x Unidad: {item.Precio} </small>
                    </div>
                    <p>Precio Total: {item.Precio * item.cantidad} </p>
                    <button onClick= {()=> removerItem (item.id)} className="btn btn-danger"><BsFillTrashFill/></button>
                    <hr/>


                </div>)

            }
                <h3>TOTAL: $ {totalCarrito ()} </h3>
                <button onClick= {vaciarCarrito} className="btn btn-danger m-2">Vaciar Carrito</button>
        </div>

    )
}

export default Cart