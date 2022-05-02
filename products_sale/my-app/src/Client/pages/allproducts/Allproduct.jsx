import React, { useEffect, useState } from 'react'
import { Footer } from '../../components/footer/Footer'
import { Navbar } from '../../components/navbar/Navbar'
import { Product } from '../../components/product/Product'
import { Productcardlist } from '../../components/productcardlist/Productcardlist'
import "./Allproduct.css"
import { popularProducts } from "../../../data"
import ClipLoader from "react-spinners/ClipLoader";
import axios from 'axios'

const Allproduct = () => {
    const [posts, Setposts] = useState([])
    const [catdata ,setcatdata] = useState([])

    useEffect(() => {
        const getposts = async (e) => {
          try {
            const res = await axios.get('http://localhost:4000/getPosts', {
              headers: {
                'Authorization': `token ${JSON.parse(localStorage.getItem("user")).accsesToken}`
              }
            })
    
             Setposts(res.data)      
    
            console.log(res.data)
    
          } catch (err) {
            console.log(err)
    
          }
    
        }
        getposts()
    
      }, [])

      const handleCategory = async (e) => {
       

        try {
            if(e == 'All'){
                window.location.reload("http://localhost:3000/allpost")
            }
          
            const res = await axios.get(`http://localhost:4000/getbyCategory/?cat=${e}`)
            Setposts(res.data)   


            console.log(res)

        } catch (err) {
            console.log(err)

        }



    }


    return (
        <>
            <Navbar />

            <div className='Allproduct'>
                <h1>
                    Dresses

                </h1>
                <div className='ProductFilter'>
                    <div className='ProductFilter1'>
                        <p>Filter Products:</p>
                        <select onChange={(e) => { handleCategory(e.target.value) }}>
                        <option  >
                              All
                            </option>
                            <option>
                            pant
                            </option>
                            <option>
                            hat
                            </option>

                        </select>


                    </div>
  


                </div>
                <div className='ProductMain'>
                 
                {posts.map((item) => (
                <Product item={item} key={item} />
            ))}

                        

                </div>

            </div>
            <Footer />
        </>
    )
}

export default Allproduct
