import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import { collection, getDocs, getFirestore, query, where} from "firebase/firestore"

const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const {categoryName} = useParams()

    useEffect(()=> {
        const db = getFirestore()

        let q

        if(categoryName != undefined){
            q = query(collection(db, "productos"), where("category", "==", `${categoryName}`))
        }else{
            q = collection(db, "productos")
        }

        getDocs(q).then((snapshot)=>{
            setProductos(
                snapshot.docs.map((doc)=> {
                    return { id: doc.id, ...doc.data() }
                })
            )
        }) 
    }, [categoryName])

    return (
        <div className="contenedorItemList">
            <ItemList productos={productos}/>
        </div>
    )
}

export default ItemListContainer