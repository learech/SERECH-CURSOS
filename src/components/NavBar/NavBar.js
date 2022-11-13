import "./styles.css";
import logo from '../../logo.png';
import { CartWdget } from "../CartWidget/CartWdget";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { useState } from "react";

const NavBar = () => {
    const [menu , setMenu] = useState(false);
    const toggleMenu = () =>{
        setMenu(!menu)
    }
    const {cart} = useContext(CartContext); 
    return (<div className="menu">
        
        <NavLink to={"/"}>
            <img src={logo} className="logo" alt="logo" />
        </NavLink>
        <button onClick={toggleMenu} className="cabeceraBoton">
            <svg className="cabeceraSvg" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
            </svg>
        </button>
        
        <nav className={`cabeceraNav ${menu ? "isActive" : ""}`}>
            <ul className="cabeceraLista">
                <li className="lista"><NavLink className={"lista"} to={"/"}>Inicio</NavLink></li>
                <li className="lista"><NavLink className={"lista"} to={"/productos"}>Cursos</NavLink></li>   
                <li className="lista"><NavLink className={"lista"} to={"/category/actuales"}>Actuales</NavLink></li> 
                <li className="lista"><NavLink className={"lista"} to={"/category/proximos"}>Próximos</NavLink></li> 
                {cart.length > 0 ? 
                    <NavLink to={"/cart"}>        
                        <CartWdget/>        
                    </NavLink> 
                : ""}       
            </ul>
        </nav>
    </div>)
}

export default NavBar;