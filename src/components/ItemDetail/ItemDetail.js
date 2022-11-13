import "./styles.css"
import Contador from "../Contador/Contador";
import { useState , useContext,useEffect } from 'react';
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ItemDetail = ({lista}) => {    
    const [items , setItem] = useState(1);
    const [stock , setStock] = useState();
    const toastify = () => {
        toast.success("Producto agregado al carrito", {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });

    };
    
    useEffect (() => {
        agregandoStock();
    })
    
    const clickeado = () => {
        console.log(items);
    }
    const {addToCart} = useContext(CartContext);
    const {cart} = useContext(CartContext);

    function agregandoStock (){
        setStock(lista.stock)
    }
    
    function onAdd (lista) {        
        addToCart(lista, items)
    }
    return (
        <div className="descripcion">
            <div className="imagenContenedor">
                <img className="imagen" src={lista.imagen} alt= {lista.nombre} />
            </div>
            <div className="ordenDetalle">
                <h1 className="nombre">{lista.nombre}</h1>
                <h3 className="detalle">Categoria: {lista.category}</h3>
                <p>{lista.descripcion}</p>
                <p>Precio: ${lista.precio}</p>
                <p>Stock: {stock}</p>
                <Contador stock = {stock} setItem = {setItem} items = {items} precio = {lista.precio} />
                <div className="acomodadoBotones">
                    {cart.length > 0 ? 
                        <Link to={"/cart"}>
                            <button className="boton" onClick={clickeado}>Ir al carrito</button>
                        </Link>
                        : "" }             
                    <button className="boton" onClick={() => {onAdd(lista); toastify()}}>Agregar</button>
                    <ToastContainer
                    position="top-right"
                    autoClose={4000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover />
                    <Link className="volver" to={"/productos"}>Volver</Link>
                </div>
                
            </div>
        </div>
    )
}

export default ItemDetail