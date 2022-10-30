import { addDoc, collection, getFirestore } from 'firebase/firestore';
import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import ItemCart from '../ItemCart';

const Cart = () => {
    const {cart, totalPrice } = useCartContext();

    const order = {
        buyer: {
            name: 'Leandro',
            email: 'learech@hotmail.com',
            phone: '3415898358',
            adress: 'San Nicolas 264'
        },
        items: cart.map(curso => ({ id: curso.id, title: curso.title, price: curso.price, quantity: curso.quantity})) ,
        total: totalPrice() ,
    }

    const handleClick = () => {
        const db = getFirestore();
        const ordersCollection = collection(db, 'orders');
        addDoc(ordersCollection, order)
        .then(({ id }) => console.log(id))
    }

    if (cart.length === 0) {
        return (
        <>
            <p> No hay elementos en el carrito </p>
            <Link to= '/'>Hacer compras</Link>
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
            <button onClick={handleClick}> Realizar compra </button>
        </>
    )
}

export default Cart;