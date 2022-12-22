import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./components/cart/Cart";
import Login from "./components/login/Login";
import MyProfile from "./components/myprofile/MyProfile";
import Navbar from "./components/navbar/Navbar";
import Signup from "./components/singup/Signup";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route index element={<Login/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/myprofile" element={<MyProfile/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
