import React from 'react'
import "./styles.css"
import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react"
import { CartContext } from '../../context/CartContext';


export const CartWdget = () => {
    const {totalItemsState} = useContext(CartContext);
    

    return (
    <div className='centrado'>
        <FaShoppingCart className='carrito' />
        <span className='spanCarrito'>
            {totalItemsState}
        </span>
    </div>
    )
}
