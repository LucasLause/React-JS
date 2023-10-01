import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer"
import Checkout from "./components/Checkout"
import CartContext from "./context/CartContext"
import Cart from "./components/Cart"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './style.css'

function App() {
  return (
    
    <CartContext>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<ItemListContainer />} />
          <Route exact path="/category/:categoryName" element={<ItemListContainer />} />
          <Route exact path="/product/:productId" element={<ItemDetailContainer />} />
          <Route exact path="/checkout" element={<Checkout />}/>
          <Route exact path="/cart" element={<Cart />}/>
        </Routes>
      </BrowserRouter>
    </CartContext>
  )
}

export default App