import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./components/cart/Cart";
import Login from "./components/login/Login";
import MyProfile from "./components/myprofile/MyProfile";
import Navbar from "./components/navbar/Navbar";
import Signup from "./components/singup/Signup";
import Home from "./components/home/Home";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Navbar />
      {/* {location === '/myprofile' ? <MyProfileNav/> : '' } */}
      <Routes>
        <Route index element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/myprofile" element={<MyProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
