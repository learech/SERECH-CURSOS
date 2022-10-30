import React from 'react';
import { useCartContext } from '../../context/CartContext';
import './itemCart.css';

const ItemCart = ({ curso }) => {
    const { removeProduct } = useCartContext();
    return (
        <div className='itemCart'>
            <img src={curso.image} alt={curso.title} />
            <div>
                <p>Título: {curso.titulo}</p>
                <p>Cantidad: {curso.quantity}</p>
                <p>Precio u.: {curso.price}</p>
                <p>Subtotal: ${curso.quantity * curso.price}</p>
                <button onClick={() => removeProduct(curso.id)}>Eliminar</button>
            </div>
        </div>
    )
}

export default ItemCart