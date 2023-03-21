import './Navbar.scss'
import logo from './LogoJhonGrow.png'
import Cartwidget from '../Cartwidget.js/Cartwidget'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    
    return (
        <header className="header">
            <div className="header-container">
                <img className="Logo" src= {logo} alt= "Plantita con nombre Jhon Grow"></img>
                <h1 className="header-logo"> BIENVENIDOS A UNA VIDA VERDE</h1>

                <nav className="navbar">
                    <Link to='/' className="navbar-link"> Semillas</Link>
                    <Link to='/Nosotros' className="navbar-link"> Nosotros</Link>
                    <Link to='/Productos' className="navbar-link"> Productos</Link>
                </nav>

                <Cartwidget/>
            </div>
        </header>
    )
}