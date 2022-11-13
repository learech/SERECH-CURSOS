import { useState } from "react"
import { CartContext } from "./CartContext";

// En esta funcion uso el isInCart para validar el producto a añadir al Cart
export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    // Con este state calculo la cantidad de productos que se muestran en el span del CartWidget
    const [totalItemsState, setTotalItemsState] = useState(0);
    const addToCart = (item , cantidad) => {
        const itemInCart = isInCart(item.id)
        setTotalItemsState(totalItemsState + cantidad);
        if (itemInCart) {
            itemInCart.cantidad = itemInCart.cantidad += cantidad;            
        }else {
            setCart([...cart, {...item, cantidad}]);
        }
    };

    const isInCart = (id) => {
        return cart.find((cartItem) =>cartItem.id === id);
        
    };

    const clear = () => {
        setCart([]);
    };

    const removeItem = (productId) => {
        setCart(cart.filter((product) => product.id !== productId));
    };

    const totalPrecioCart = () => {
        return cart.reduce((acc, cartItem) => acc + cartItem.precio * cartItem.cantidad, 0);
    };

    return (
        <CartContext.Provider value={{cart , addToCart , removeItem, clear, totalPrecioCart, totalItemsState, setTotalItemsState}}>
            {children}
        </CartContext.Provider>
    ); 
};
