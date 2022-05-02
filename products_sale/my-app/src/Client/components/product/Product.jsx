import './Product.css'
import {BsBasket2Fill} from "react-icons/bs"
import {AiOutlineSearch} from "react-icons/ai"
import { Link } from 'react-router-dom';

export function Product( {item} ){
    const PF = "http://localhost:4000/images/";
    function hey(){
        console.log(item)
    }
 

    return(
        <div className='Product'>
           
 
            <div className='ProductCircle'>
                <img  src={PF + item.photo}/>
               

            </div>
            <div className='ProductHover'>

            </div>
            <div className='ProductIcons'>

                <a href={`/singlePage/${item._id}`}  className='ProductIcons2'>
               
               
   
          
                    <BsBasket2Fill   color='black'  size={26}/>
                       
        
                    
                </a>

            </div>

        </div>
    )
}