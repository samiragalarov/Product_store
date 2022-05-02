import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
// import Home from "./pages/home/Home";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
// import User from "./pages/user/User";
// import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter, Navigate } from "react-router-dom";
import { useState } from "react";
import Login from "./pages/login/Login";
import { Context } from './context/Context';
import { useContext } from "react";

function App() {
  
  const { user } = useContext(Context);
  return (


    <BrowserRouter>
      {
        !user && (
          <>
            <Routes>

              <Route path="/login" element={<Login />} />
              {/* <Route path="/register" element={<Register />} /> */}
              <Route path="*" element={<Navigate to={user ? "/" : "/login"} />} />

            </Routes>
          </>
        )
      }


      {

        user && (
          <>
            <Topbar />
            <div className="container">

              <Sidebar />
              <Routes>
                {/* <Route path="/" element={<Home />} /> */}
                <Route path="/" element={<UserList />} />
                {/* <Route path="/user/:userId" element={<User />} /> */}
                <Route path="/products" element={<ProductList />} />
                <Route path="/product/:productId" element={<Product />} />
                <Route path="/newproduct" element={<NewProduct />} />
                <Route path="*" element={<Navigate to={user ? "/" : "/login"} />} />
              </Routes>
            </div>
          </>
        )

      }

      








    </BrowserRouter>


    // <Router>
    //   <Topbar />
    //   <div className="container">
    //     <Sidebar />
    //     <Switch>
    //       <Route exact path="/">
    //         <Home />
    //       </Route>
    //       <Route path="/users">
    //         <UserList />
    //       </Route>
    //       <Route path="/user/:userId">
    //         <User />
    //       </Route>
    //       <Route path="/newUser">
    //         <NewUser />
    //       </Route>
    //       <Route path="/products">
    //         <ProductList />
    //       </Route>
    //       <Route path="/product/:productId">
    //         <Product />
    //       </Route>
    //       <Route path="/newproduct">
    //         <NewProduct />
    //       </Route>
    //     </Switch>
    //   </div>
    // </Router>
  );
}

export default App;
