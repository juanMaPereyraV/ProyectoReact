import { useContext } from "react"
import { CartContext } from "../context/CartContext.js"
import {BsFillTrashFill} from 'react-icons/bs'
import "./Cart.scss"
import {Link} from "react-router-dom"


const Cart = () =>{

    const {cart, vaciarCarrito, removeItem, totalCarrito} = useContext (CartContext)

    if (cart.length === 0){
        return (
            <div className="card">
                <h2>No tiene productos agregados</h2>
                    <hr/>
                    <Link className="btn btn-primary" to="/"> Volver</Link>

            </div>

        )


    }

    return (
        <div className="card">
                <h2>Tu Compra</h2>
            <hr/>

            {
                cart.map ((item) => 
                <div key= {item.Id}>
                    <h4> {item.Nombre} </h4>
                    <img src={item.img} alt= {item.Nombre}/>
                    <div>
                    <small>Cantidad: {item.cantidad} </small> <small>Precio x Unidad: {item.Precio} </small>
                    </div>
                    <p>Precio Total: {item.Precio * item.cantidad} </p>
                    <button onClick= {()=> removeItem (item.id)} className="btn btn-primary"><BsFillTrashFill/></button>
                    <hr/>


                </div>)

            }
                <h3>TOTAL: $ {totalCarrito ()} </h3>
                <button onClick= {vaciarCarrito} className="btn btn-primary">Vaciar Carrito</button>
                
        </div>

    )
}

export default Cart
          
            
        

            