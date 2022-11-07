import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import ItemCart from '../ItemCart';

const Cart = () => {
    const {cart, totalPrice } = useCartContext();

    if (cart.length === 0) {
        return (
        <>
            <p> No hay elementos en el carrito </p>
            <Link to= '/'><button>Hacer compras</button></Link>
        </>
        )
    }
    return (
        <>
            {
                cart.map(curso => <ItemCart key={curso.id} curso={curso} />)
            }
            <p>
                total: {totalPrice()}
            </p>
            <button> <Link to='/checkout'>Realizar compra</Link></button>
        </>
    )
}

export default Cart;