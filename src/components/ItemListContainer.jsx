const Greeting = ( { saludo } ) => {
    return <h2 id="h2-saludo">{saludo}</h2>
}


const ItemListContainer = () => {
    const texto = "Bienvenido a mi tienda!"
    return(
        <>
            <Greeting saludo={texto} />
        </>
    )
}


export default ItemListContainer