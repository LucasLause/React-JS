import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './style.css'

function App() {
  return (

  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route exact path="/" element={<ItemListContainer />} />
      <Route exact path="/category/:categoryName" element={<ItemListContainer />} />
      <Route exact path="/product/:productId" element={<ItemDetailContainer />} />
    </Routes>
  </BrowserRouter>

  )
}

export default App