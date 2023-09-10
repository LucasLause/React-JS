import { useEffect, useState } from "react"
import productosJSON from "./productos.json"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"

const mockAPI = (categoryName) => {
    return new Promise((resolve)=> {
        setTimeout(()=> {

            if(categoryName != undefined){
                const filtrado = productosJSON.filter((p) => p.category === categoryName)
                resolve(filtrado)
            }else{
                resolve(productosJSON)
            }

        }, 1000)
    })
}

const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const {categoryName} = useParams()

    useEffect(()=>{
        mockAPI(categoryName).then((data) => setProductos(data))
    }, [categoryName])

    return (
        <div className="contenedorItemList">
            <ItemList productos={productos}/>
        </div>
    )
}

export default ItemListContainer