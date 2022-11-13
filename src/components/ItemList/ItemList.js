import Item from "../Item/Item";
import "./styles.css"
import { Link } from "react-router-dom";

const ItemList = ({lista}) => {
    
    return (
        (<div className="cursosFlex">
            {
                lista.map((producto) =>(
                    <Link 
                    key={producto.id}
                    to={"/detalles/"+ producto.id}
                    >                    
                        <Item 
                            nombre = {producto.nombre} 
                            precio ={producto.precio} 
                            imagen = {producto.imagen} 
                            categoria = {producto.categoria}
                            stock = {producto.stock}
                        />                    
                    </Link>
                ))
            }
        </div>)
    )
}

export default ItemList