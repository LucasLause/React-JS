import { collection, getFirestore, addDoc } from "firebase/firestore"
import { useState, useContext } from "react"
import { CartContext } from '../context/CartContext';

export default function Checkout() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")

    const [orderId, setOrderId] = useState()

    const { cart, clear, totalPrice } = useContext(CartContext)

    function crearOrden() {
        const db = getFirestore()
        const order = {
            buyer: {
                name,
                email,
                phone
            },
            items: cart,
            total: '$' + totalPrice()
        }

        const ordenesRef = collection(db, "ordenes")
        addDoc(ordenesRef, order).then(result => setOrderId(result.id))

        console.log('order', order)
    }

    function crearAndClear(){
        crearOrden()
        clear()
    }

    if(orderId){
        return <h1 className="h1-gracias">{`Gracias por tu compra! Tu id de pedido es: ${orderId}`}</h1>
    }

    return(
        <form onSubmit={(e)=>e.preventDefault()} id="form">
           <label>Name</label>
           <br />
           <input type="text" value={name} onChange={(event) => setName(event.target.value)}/>
           <br />
           <label>Email</label>
           <br />
           <input type="email" value={email} onChange={(event) => setEmail(event.target.value)}/>
           <br />
           <label>Phone</label>
           <br />
           <input type="number" value={phone} onChange={(event) => setPhone(event.target.value)}/>
           <br />
           <br />
           <button onClick={crearAndClear}>Finalizar Compra</button>
        </form>
    )



}