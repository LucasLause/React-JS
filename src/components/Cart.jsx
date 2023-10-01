import { CartContext } from '../context/CartContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

export default function Cart (){

    const { cart, clear } = useContext(CartContext)

    const { removeItem, totalPrice } = useContext(CartContext)

    return (
        <div>
          <h3 id="welcome">Carrito</h3>
          
    
          {cart.length <= 0 ? <div className='div-seguir'>
            <h4>El carrito esta vacio.</h4> 
            <Link id='ver-prod' to={'/'}>Seguir comprando</Link>
          </div> :
    
            <div className='div-cart-col'>
    
              {cart.map((product) => <div className='div-cart' key={product.id}> 
              <h2 className='nombre-cart'>{product.title}</h2> 
              <img src={product.image} className='imagen-cart' alt=""  />
              <p className='precio-cart'>${product.price * product.quantity}</p>  
              <p className='cantidad-cart'> Cantidad: {product.quantity}</p>
              
              <button id="button" className='eliminar-item' onClick={() => removeItem(product.id)}>X</button>
              </div>)}
    
    
              <br/>
              <br/>
    
              <div className='div-precio-total'>
              <h2 className='precioTotal'>Precio total ${totalPrice()}</h2>
              <button className='button-vaciar' onClick={clear}>Vaciar Carrito</button>
              <br />
              <Link to='/checkout'><button className='button-terminar'>Continuar</button></Link>
              </div>
    
            </div>
            }
    
          </div>
      )
    

}