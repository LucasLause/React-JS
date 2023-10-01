import { Link } from "react-router-dom"
import { CartContext } from "../context/CartContext"
import { useContext } from "react"

const CartWidget = () => {

    const { cart } = useContext(CartContext)
    
    return(
        <>
            <div id="div-carrito">
                <Link to="/cart" id="a-carrito">
                    <img src="../../img/logos/carrito.png" alt="logo carrito" id="logo-carrito"/>
                    <p className='cart-number'>{cart.reduce((accum, item) => accum + item.quantity, 0)}</p>
                </Link>
            </div>   
        </>
    )
}

export default CartWidget