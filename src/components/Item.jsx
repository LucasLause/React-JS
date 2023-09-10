import { Link } from "react-router-dom"

const Item = ({ producto }) => {

    return (
        <div className="card">
            <img src={producto.image} className="card-img-top" alt={producto.title} />
            <div className="card-body">
                <h5 className="card-title">{producto.title}</h5>
                <p className="card-text">${producto.price}</p>
                <Link to={"/product/" + producto.id} className="btn btn-primary">Ver Detalles del Producto</Link>
            </div>
        </div>
    )
}

export default Item