import Login from "./components/Login"
import Restaurant from "./components/Restaurant"
import Signup from "./components/Signup"
import Navbar from "./components/Navbar"
import Order from "./components/Order"
import Home from "./components/Home"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Cart from "./components/Cart"
import Post from "./components/Post"
function App() {
 

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/restaurant" element={<Restaurant />} />
        <Route path="/restaurant/:id" element={<Order />} />
        <Route path="/Cart" element={<Cart/>} />
        <Route path="/Post" element={<Post/>} />
      
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
