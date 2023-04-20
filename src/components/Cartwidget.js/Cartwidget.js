import { FaCartPlus } from "react-icons/fa";
import './Cartwidget.scss'
import { useContext } from "react";
import { CartContext } from "../../components/context/CartContext.js"

const Cartwidget = () => {
const {totalCantidad} = useContext (CartContext)

    return (

        <div className="Carrito">
            <FaCartPlus/>
            <span className="numCart">{totalCantidad()} </span>

        </div>
    )
}

export default Cartwidget