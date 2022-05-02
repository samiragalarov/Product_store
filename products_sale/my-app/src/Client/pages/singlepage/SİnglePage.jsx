import React, { useEffect, useRef, useState } from 'react'
import { Footer } from '../../components/footer/Footer'
import { Navbar } from '../../components/navbar/Navbar'
import './SIngle.css'
import axios from 'axios';

const SİnglePage = () => {
    const [curtpost, setcurPost] = useState({})
    const [count, setCount] = useState(1)
    const [productsize, setproductsize] = useState('36')
    const [color ,Setcolor] = useState('red')

    
    const PF = "http://localhost:4000/images/";
    useEffect(() => {
        const handelegetSingale = async () => {
            try {
                const res = await axios.get(`http://localhost:4000/getPost/${window.location.pathname.split("/")[2]}`, {
                    headers: {
                        'Authorization': `Basic ${JSON.parse(localStorage.getItem("user")).accsesToken}`
                    }
                })
                console.log(res.data)
                setcurPost(res.data)

            } catch (err) {
                console.log(err)

            }
        }

        handelegetSingale()

    }, [])

    const handeleBasket = async () => {
       
        const newBasket = {
            userId:JSON.parse(localStorage.getItem("user")).id,
            products: window.location.pathname.split("/")[2],
            size: productsize,
            Quantity: count,
            title: curtpost.title,
            photo: curtpost.photo,
            price: curtpost.price,
            color: color,


        }
        try {


            const res = await axios.post(`http://localhost:4000/addBasket/${JSON.parse(localStorage.getItem("user")).id}`, newBasket, {
                headers: {
                    'Authorization': `token ${JSON.parse(localStorage.getItem("user")).accsesToken}`
                }
            })
            console.log(res)

             window.location.replace("/basket")


        } catch (err) {
            console.log(err)

        }
    }
    function ChangeColor(value){
        Setcolor(value)

    }
    return (
        <>
            <Navbar />
            <div className='SİnglePage'>
                <div className='SİnglePageImg'>
                    <img src={PF + curtpost.photo} />

                </div>
                <div className='SİnglePageAbout'>

                    <h1>
                        {curtpost.title}
                    </h1>
                    <p>
                        {curtpost.text}
                    </p>
                    <p className='money'>
                        {curtpost.price}
                    </p>
                    <div className='extraitems'>
                        <div className='extraitems1'>
                            <div className='color'>
                                <p>
                                    Color

                                </p>
                                <button   style={{ "backgroundColor": "red" }} onClick={(e)=>{ChangeColor("red")}}>


                                </button>
                                <button style={{ "backgroundColor": "blue" }} onClick={(e)=>{ChangeColor("blue")}}>

                                </button>
                                <button style={{ "backgroundColor": "black" }} onClick={(e)=>{ChangeColor("black")}}>

                                </button>

                            </div>
                            <div className='size'>
                                <p>
                                    Size
                                </p>
                                <select  onChange={(e) => { setproductsize(e.target.value) }} >
                                    <option>36</option>
                                    <option>40</option>
                                    <option>42</option>
                                </select>
                            </div>


                        </div>
                        <div className='extraitems2'>
                            <div className='count'>
                                <div className='minus' style={{ "cursor": "pointer" }} onClick={() => {
                                    if (count == 0) {
                                        return

                                    }
                                    setCount(count - 1)

                                }
                                }>
                                    -

                                </div>
                                <div className='maincount'>
                                    {count}

                                </div>
                                <div className='plus' style={{ "cursor": "pointer" }} onClick={() => { setCount(count + 1) }}>
                                    +

                                </div>

                            </div>
                            <div className='addBasketButton'>
                                <button onClick={handeleBasket}>
                                    ADD TO CARD
                                </button>

                            </div>


                        </div>

                    </div>



                </div>

            </div>
            <Footer />
        </>
    )
}

export default SİnglePage
