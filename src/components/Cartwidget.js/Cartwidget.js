import { FaCartPlus } from "react-icons/fa";
import './Cartwidget.scss'

const Cartwidget = () => {

    return (

        <div className="Carrito">
            <FaCartPlus/>
            <span>0</span>

        </div>
    )
}

export default Cartwidget