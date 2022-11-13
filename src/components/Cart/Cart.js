import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import "./styles.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {collection, addDoc, getFirestore, updateDoc, doc} from "firebase/firestore"
import moment from "moment/moment";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'



const Cart = () => {
    const {cart, removeItem, clear, totalPrecioCart, setTotalItemsState} = useContext(CartContext);
    const navigate = useNavigate();
    const MySwal = withReactContent(Swal)
    const [order, setOrder] = useState({
        buyer: {
            name: "",
            phone: "",
            email: ""
        },
        items: cart,
        total: cart.reduce((acc, item) => acc + item.precio * item.cantidad, 0),
        date:moment().format("DD/MM/YYYY, h:mm:ss a")
    })
    const db = getFirestore();
    const createOrder = () =>{
        const query = collection(db, "orden");
        addDoc(query, order)
        .then(({id}) => {
            console.log(id);
            updateStockProducts(cart);
            MySwal.fire({
                title: `Felicidades ${nombreUsuario} por tu compra.
                Tu nro de orden es: ${id}. Nos pondremos en contacto contigo para brindarte toda la información sobre el curso.`,
                background: "#000000",
                color:"#FFFFFF",
                showClass: {
                popup: 'animate__animated animate__fadeInDown',
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                }
            })
        })
        .catch(() => MySwal.fire({
            title: "Tu compra no pudo ser realizada. Intentalo mas tarde",
            showClass: {
            popup: 'animate__animated animate__fadeInDown',
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }
        }))
        
    }
    const updateStockProducts = () =>{
        cart.forEach((product) => {
            const queryUpdate = doc(db, "Items", product.id)
            updateDoc(queryUpdate,{
                category: product.category,
                descripcion: product.descripcion,
                imagen: product.imagen,
                nombre: product.nombre,
                precio: product.precio,                
                stock: product.stock - product.cantidad,
            })
            .then(() => {
                if(cart[cart.length - 1].id ===product.id) {
                    clear();
                    setTotalItemsState(0);
                    navigate("/productos")
                }
            })
            .catch(() => {
                MySwal.fire({
                    title: "Error al actualizar el stock",
                    background: "#000000",
                    color:"#FFFFFF",
                    showClass: {
                    popup: 'animate__animated animate__fadeInDown',
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                })
            })
        });
    };
    const mensajeBorrado = () => {
        toast.error('Producto eliminado del carrito', {
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
    const mensajeVaciado = () => {
        toast.error('Carrito Vaciado', {
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
    const handleInputChange = (e) => {

        setOrder({
            ...order,
            buyer: {
                ...order.buyer,
                [e.target.name]: e.target.value,
            }
        });
    };

    let nombreUsuario = order.buyer.name;
    console.log(nombreUsuario);
    return (
        <>
            <div className="marco">
                <h1>Carrito</h1>
                {cart.length > 0 ? 
                
                    <div className="formFlex">
                        <div className="fleInputs">
                            <input className="input" name="name" type="text" placeholder="Nombre" value={order.buyer.name} onChange={handleInputChange} />
                        </div>
                        <div className="fleInputs">
                            <input className="input" name="phone" type="phone" placeholder="Phone" value={order.buyer.phone} onChange={handleInputChange} />
                        </div>
                        <div className="fleInputs">
                            <input className="input" name="email" type="email" placeholder="Email" value={order.buyer.email} onChange={handleInputChange} />
                    </div>
                    
                    </div> 
                : ""}
                {totalPrecioCart() > 0 ?
                <h3>Total: ${totalPrecioCart()}</h3>
                : ""}
                {cart.length > 0 ? 
                    <button className="botonVaciar" onClick={createOrder}>Crear orden</button>
                :"" }
                {cart.length > 0 ?
                    <button className="botonVaciar" onClick={() => {clear(); mensajeVaciado(); setTotalItemsState(0);}}>Vaciar carrito</button>
                : ""}
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
            </div>
            {cart.length ===0 ? (
                <>
                    <h3>No hay cursos en tu carrito</h3>
                    <Link className="linkVolver" to={"/productos"}>Volver a cursos</Link>
                </>
                ) : (
                <div className="ordenTienda">
                    {cart.map((item) => (
                            <div className="detatalleCarrito"key={item.id}>
                                <img className="imgCarrito" src={item.imagen} alt={item.nombre} />
                                <h3 className="nombre">{item.nombre}</h3>
                                <h4>Precio Unitario: ${item.precio}</h4>
                                <h4>Precio total: ${item.precio * item.cantidad}</h4>
                                <h4>Cantidad: {item.cantidad}</h4>
                                <button className="botonAgregar" onClick={() => {removeItem(item.id); mensajeBorrado();setTotalItemsState(0)}}>Eliminar producto</button>
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
                            </div>
                    ))}
                </div>
            )}
        </>
    )
}

export default Cart