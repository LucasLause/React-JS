import {useEffect, useState} from 'react';
import ItemDetail from './ItemDetail';
import {useParams} from 'react-router-dom';
import {doc, getDoc, getFirestore, query, where} from 'firebase/firestore';

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState([])
    const {productId} = useParams()
    const id = parseInt(productId)

    useEffect(()=> {
        const db = getFirestore()

        const prodRef = doc(db, "productos", `${id}`)
    
        getDoc(prodRef).then((snapshot)=>{
            if(snapshot.exists()) {
                setProducto({ id: snapshot.id, ...snapshot.data() })
            }
        }) 
    }, [id])

    return (
        <div className="contenedorItemDetail">
            <ItemDetail producto={producto}/>
        </div>
    )
}



export default ItemDetailContainer