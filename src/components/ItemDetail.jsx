import ItemCount from "./ItemCount"
import {CartContext} from "../context/CartContext"
import {useState , useContext} from "react"
import {Link} from "react-router-dom"

const Detail = ({ producto, onAdd, compra }) => {

    return (
        <div className="card" id="card-detail">
            <img src={producto.image} className="card-img-top" alt={producto.title} />
            <div className="card-body">
                <h5 className="card-title">{producto.title}</h5>
                <p className="card-text">{producto.description}</p>
                <p className="card-text">${producto.price}</p>
                <ItemCount initial={1} stock={20} onAdd={onAdd}/>
                {compra ? (
                        <Link id='terminar-compra' to="/cart">Terminar Compra</Link>
                    ):(
                        ''
                    )
                }
            </div>
        </div>
    )
}

const ItemDetail = ({producto}) => {

    const [compra, setCompra] = useState(false)
    const { addToCart } = useContext(CartContext)

    const onAdd = (cantidad) => {
        setCompra(true)
        addToCart(producto, cantidad)
    }



    return  (
        <div className="detailItem">
            <Detail key={producto.id} producto={producto} onAdd={onAdd} compra={compra}/>
        </div>
    )

}


export default ItemDetail