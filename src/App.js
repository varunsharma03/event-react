import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Dashboard from "./pages/Dashboard"
import { useEffect, useState } from 'react'
import Admin from "./pages/Admin"
import User from "./pages/User"
import Vendor from "./pages/Vendor"
import MainVendor from "./components/Vendors/MainVendor"
import VendorContent from "./components/VendorContent";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false); 

  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>

      <Routes>

        <Route path="/" element= {<Home/>} />
        <Route path="/Admin" element={<Admin setIsLoggedIn={setIsLoggedIn} ></Admin>}/>
        <Route path="/User" element={<User setIsLoggedIn={setIsLoggedIn} ></User>}/>
        <Route path="/Vendor" element={<Vendor setIsLoggedIn={setIsLoggedIn}></Vendor>}/>
        <Route path="/login" element = {<Login  setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/signup" element={<Signup  setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/dashboard" element = {<Dashboard/>} />
        <Route path="/VendorMainPage" element={<MainVendor/>}/>
        <Route path="/VendorContent" element={<VendorContent/>}/>
      </Routes>

    </div>
    )
}

export default App;
