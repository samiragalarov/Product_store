import './Navbar.css'
import { BsFillBasket2Fill } from 'react-icons/bs'
import { GiHamburgerMenu } from 'react-icons/gi'
import { Link } from 'react-router-dom';
import { useContext, useState, useEffect, useRef } from "react";
import { BiLogOut } from 'react-icons/bi'
import { SiShopify } from 'react-icons/si'
// import UserImage from '../../images/unsplash_jmURdhtm7Ng.jpg'
import { BrowserRouter, Navigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { Context } from '../../context/Context';
// import userimage from '../../images/149071.png'



export function Navbar() {
    const [navbar, setNavbar] = useState(true)
    const { user } = useContext(Context);
    const PF = "http://localhost:4000/images/";


    const navSide = useRef(null);









    function handlelogout() {

        localStorage.removeItem("user")
        window.location.replace("/login")
    }

    function openNav() {
        navSide.current.style.width = "100%";
    }
    function closeNav() {
        navSide.current.style.width = "0";

    }
    return (

        <>
            <nav id="navbar" className='navbar'>
                <div className="logo">
                    Samir

                </div>
                <ul >
                    {user ? (
                        <>
                            <li className="links" >
                                <Link className='navlink' to="/">Home</Link>

                            </li>
                            <li className="links">
                                <Link className='navlink' to="/allpost">Products</Link>



                            </li>
                            <li className="links">
                                <Link className='navlink' to="/basket">Basket</Link>



                            </li>
                            <li className="links">
                                <Link className='navlink' to="/setting">Setting</Link>



                            </li>
                            <li className="links">

                                <Link to='/setting'>
                                    <div className='ProfileCircle'>
                                        {JSON.parse(localStorage.getItem("user")).photo ? (
                                            <img src={PF + JSON.parse(localStorage.getItem("user")).photo} />

                                        ) : (
                                            <>
                                                <img className='secondimage' src=""/>
                                            </>
                                        )

                                        }


                                    </div>
                                </Link>

                            </li>

                            <li className="links" >
                                <BiLogOut style={{ "cursor": "pointer" }} size={30} onClick={handlelogout} />



                            </li>
                        </>

                    ) : (
                        <>
                            <li className='links'>
                                <Link className='navlink' to="/">Home</Link>

                            </li>

                            <li className="links">
                                <Link className='navlink' to="/login">Login</Link>






                            </li>
                            <li className="links">
                                <Link className='navlink' to="/register">SignUp</Link>

                            </li>




                        </>

                    )}


                    <div className="hamurgertag" id="hamurgertag" onClick={openNav}><GiHamburgerMenu color='white' size={30} /></div>


                </ul>



                <div id="mySidenav" ref={navSide} className="sidenav">
                    {
                        user ? (
                            <>

                                <Link to="/">Home</Link>
                                <Link to="/allpost">Products</Link>
                                <Link to="/basket">basket</Link>
                                <Link to="/setting">Setting</Link>







                                <a href="#" onClick={handlelogout}>Logout</a>
                            </>

                        ) : (
                            <>
                                <Link to="/">Home</Link>
                                <Link to="/login">Login</Link>
                                <Link to="/register">Register</Link>



                            </>

                        )
                    }
                    <a href="#" className="closebtn" onClick={closeNav}>&times;</a>



                </div>


            </nav>

        </>
    )
}