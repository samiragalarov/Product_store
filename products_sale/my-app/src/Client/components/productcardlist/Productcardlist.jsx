import { Product } from '../product/Product'
import './Productcardlist.css'
import { popularProducts } from "../../../data"
import { useEffect, useState } from 'react'
import axios from 'axios'

export function Productcardlist() {
    const [latsposts, setlastposts] = useState([])
    useEffect(() => {
        const getposts = async (e) => {
          try {
            const res = await axios.get('http://localhost:4000/getlastest', {
              headers: {
                'Authorization': `token ${JSON.parse(localStorage.getItem("user")).accsesToken}`
              }
            })
    
            setlastposts(res.data)  
            console.log(latsposts )      
            console.log('efw')  
    
            console.log(res.data)
    
          } catch (err) {
            console.log(err)
    
          }
    
        }
        getposts()
    
      }, [])

    return (
        <div className='productcardlist'>
     
            {latsposts.map((item) => (
                <Product item={item} key={item.id} />
            ))}

        </div>
    )

}