import ItemCount from "./ItemCount"

const Detail = ({ producto }) => {

    return (
        <div className="card" id="card-detail">
            <img src={producto.image} className="card-img-top" alt={producto.title} />
            <div className="card-body">
                <h5 className="card-title">{producto.title}</h5>
                <p className="card-text">{producto.description}</p>
                <p className="card-text">${producto.price}</p>
                <ItemCount initial={1} stock={20} />
            </div>
        </div>
    )
}

const ItemDetail = ({producto}) => {

    return  (
        <div className="detailItem">
            {producto.map((prod)=> (
                <Detail key={prod.id} producto={prod} />
            ))}
        </div>
    )

}


export default ItemDetail