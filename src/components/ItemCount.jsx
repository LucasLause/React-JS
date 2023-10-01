import { useState, useEffect } from "react"

const ItemCount = ({onAdd, stock, initial}) => {

    const [count, setCount] = useState(parseInt(initial))

    const restar = () => {
      setCount(count - 1)
    }
    const sumar = () => {
      setCount(count + 1)
    }
    useEffect(() => {
      setCount(parseInt(initial))
    }, [initial])
 
    return(
        <div className="count-container">

            <div className="count-container__contador">

                <button className="count-container__button" disabled={count <= 1} onClick={restar}>-</button>
                <span className="count-container__qty">{count}</span>
                <button className="count-container__button" disabled={count >= stock} onClick={sumar}>+</button>

            </div>
            <br />
            <button id="agregar-al-carrito" onClick={() => onAdd(count)}> Agregar al Carrito </button>

        </div>
    )

}


export default ItemCount