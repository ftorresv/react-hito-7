import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home.jsx";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import Register from "./components/Pages/Register.jsx";
import Login from "./components/Pages/Login.jsx";
import Cart from "./components/Pages/Cart.jsx";
import Pizza from "./components/Pages/Pizza.jsx";
import Profile from "./components/Pages/Profile.jsx";
import NotFound from "./components/Pages/NotFound.jsx";
import { CartProvider } from "./store/CartContext.jsx";
function App() {
  return (
    <div>
      <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/pizza/p001" element={<Pizza />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      </CartProvider>
    </div>
  );
}
export default App;
