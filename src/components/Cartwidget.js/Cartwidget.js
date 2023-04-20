import { FaCartPlus } from "react-icons/fa";
import './Cartwidget.scss'
import { useContext } from "react";
import { CartContext } from ".././context/CartContext.js"
import { Link } from 'react-router-dom'

const Cartwidget = () => {
const {totalCantidad, cart} = useContext (CartContext)

    return (
        <Link to="/cart" className={`cart-widget ${cart.length > 0 ? 'cart-widget-active' : ''}`}>
        <FaCartPlus className='cart-icon'/>
        <span>{totalCantidad()}</span>
    </Link>
    )
}

export default Cartwidget