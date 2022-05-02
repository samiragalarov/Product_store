import { Navbar } from './Client/components/navbar/Navbar.jsx'
import Allproduct from './Client/pages/allproducts/Allproduct.jsx';
import Basket from './Client/pages/basketcard/Basket.jsx';
import { Home } from './Client/pages/home/Home.jsx';
import { Login } from './Client/pages/login/Login.jsx';
import { Register } from './Client/pages/register/Register.jsx';
import SİnglePage from './Client/pages/singlepage/SİnglePage.jsx';
import { BrowserRouter, Navigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { useState } from 'react';
import { Context } from './Client/context/Context';
import { useContext } from "react";
import { Setting } from './Client/pages/setting/Setting.jsx';

function App() {
  const { user } = useContext(Context);
  return (
    <>

    <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />


          {
            !user && (
              <>
       
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
              </>


            )
          }
          {
            user && (
              <>
                
                <Route path="/singlePage/:id" element={<SİnglePage />} />
                <Route path="/allpost" element={<Allproduct />} />
                <Route path="/basket" element={<Basket />} />
                <Route path="/setting" element={<Setting />} />
              </>


            )


          }




          <Route path="*" element={<Navigate to={user ? "/" : "/login"} />} />




        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
