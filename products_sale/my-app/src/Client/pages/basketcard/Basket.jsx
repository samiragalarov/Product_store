import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Card from '../../components/card/Card'
import { Footer } from '../../components/footer/Footer'
import { Navbar } from '../../components/navbar/Navbar'
import "./Basket.css"

const Basket = () => {
    const [basket, setbasket] = useState([])
    const [total, settotal] = useState(0)
    const handleRemove = async (id) => {
       


        const headers = {
            'Authorization': `Basic ${JSON.parse(localStorage.getItem("user")).accsesToken}`
        }
        try {

            const res = await axios.delete(`http://localhost:4000/basketProductsdelete/${JSON.parse(localStorage.getItem("user")).id}`, { headers})


            window.location.replace("/")
            console.log(res)

        } catch (err) {
            console.log(err)

        }
    }

    useEffect(() => {
        const handleBasket = async () => {

            try {
                const res = await axios.get(`http://localhost:4000/basketProducts/${JSON.parse(localStorage.getItem("user")).id}`, {
                    headers: {
                        'Authorization': `token ${JSON.parse(localStorage.getItem("user")).accsesToken}`
                    }
                })
                console.log(res.data)

                setbasket(res.data)
                // for (let i = 0; i < res.data.length; i++) {
                //     settotal(total + res.data[i].price)

                // }
                // return


            } catch (err) {
                console.log(err)

            }
        }

        handleBasket()


    }, [])
    return (
        <>
            <Navbar />
            <section className='Basket'>
                <div className='BasketHead'>
                    <h1>
                        YOUR BAG
                    </h1>

                </div>
                <div className='BasketTop'>
                    <button className='Basketbut1'>
                        <Link to="/allpost" style={{"color":"black","textDecoration":"none"}}>    CONTINUE SHOPPING</Link>

                     
                    </button>
                    <button onClick={handleRemove} className='Basketbut2'>
                        Clear All
                    </button>

                </div>
                <div className='BasketMain'>
                    <div className='BasketCardBox'>
                        {basket.map((item) => (
                            <Card item={item} key={item.id} />
                        ))}
          


                    </div>
                    <div className='Summary'>
                        <div className='SummaryBox'>

                            <h1>ORDER SUMMARY</h1>
                            <div className='SummaryLine'><p>Subtotal</p> <p>$ 80</p></div>
                            <div className='SummaryLine'><p>Shipping</p> <p>$ 5,90</p></div>
                            <div className='SummaryLine'><p>Discount</p> <p>$ -5,60</p></div>
                            <div className='SummaryLine'><p>Tota</p> <p>$ 80</p></div>
                            <div className='Checkout'>
                                <button>CHECKOUT</button>
                            </div>

                        </div>


                    </div>



                </div>





            </section>
            <Footer />
        </>
    )
}

export default Basket
