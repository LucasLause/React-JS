import productosJSON from './productos.json';
import {useEffect, useState} from 'react';
import ItemDetail from './ItemDetail';
import {useParams} from 'react-router-dom';


const mockAPI = (id) => {
    return new Promise((resolve)=> {
        setTimeout(()=> {

            if(id != undefined){
                const filtrado = productosJSON.filter((p) => p.id === id)
                resolve(filtrado)
            }else{
                resolve('Error')
            }

        }, 1000)
    })
}

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState([])
    const {productId} = useParams()
    const id = parseInt(productId)

    useEffect(()=>{
        mockAPI(id)
        .then((data) => setProducto(data))
    }, [id])

    return (
        <div className="contenedorItemDetail">
            <ItemDetail producto={producto}/>
        </div>
    )
}



export default ItemDetailContainer