import './Navbar.scss'
import logo from './LogoJhonGrow.png'
import Cartwidget from '../Cartwidget.js/Cartwidget'

export const Navbar = () => {
    
    return (
        <header className="header">
            <div className="header-container">
                <img className="Logo" src= {logo} alt= "Plantita con nombre Jhon Grow"></img>
                <h1 className="header-logo"> BIENVENIDOS A UNA VIDA VERDE</h1>

                <nav className="navbar">
                    <p className="navbar-link"> Semillas</p>
                    <p className="navbar-link"> Productos</p>
                    <p className="navbar-link"> Nosotros</p>
                </nav>

                <Cartwidget/>
            </div>
        </header>
    )
}