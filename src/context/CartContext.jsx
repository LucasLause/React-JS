import { createContext, useState } from "react";
import Checkout from "../components/Checkout";

export const CartContext = createContext()


export default function CartProvider({children}){

    const [cart, setCart] = useState([]);
    console.log(cart)

    const addToCart = (producto, cantidad) => {
        if (isInCart(producto.id)) {
            const carritoActualizado = cart.map((prod) => {
                if (prod.id === producto.id) {
                    return { ...prod, quantity: prod.quantity + cantidad }
                } else {
                    return prod
                }
            })
            setCart(carritoActualizado)
        } else {
            const purchase = { ...producto, quantity: cantidad }
            setCart([...cart, purchase]);
        }
    }

    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id)
    }

    const clear = () => {
        cart.map(product => <Checkout key={product.id} product={product} />)
        setCart([])
    }

    const removeItem = (id) => {
        const deleteItem = cart.filter(prod => prod.id !== id)
        setCart([...deleteItem]);
    }

    const totalPrice = () => {
        let initialValue = 0
        return cart.reduce((prev, act) => prev + act.quantity * act.price, initialValue);
    };

    return (
        <CartContext.Provider value={{cart, addToCart, isInCart, clear, removeItem, totalPrice}}>
            {children}
        </CartContext.Provider>
    )
}