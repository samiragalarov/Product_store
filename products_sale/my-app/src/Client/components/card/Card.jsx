import React from 'react'
import "./Card.css"

const Card = ({item}) => {
    const PF = "http://localhost:4000/images/";
  return (
    <div className='Card'>
        <div className='CardFirst'>
            <div className='CardImg'>
                <img src={PF + item.photo}/>

            </div>
            <div className='CardAbout'>
                <sapn className="CardFlex"><b>Product</b>:  <p>{item.title}</p></sapn> 
                <sapn className="CardFlex">Id : 435829882</sapn> 
                <sapn className="cardDot"  style={{ "backgroundColor": `${item.color}` }}> </sapn>
                <span className="CardFlex">Size : {item.size}</span>
               
         



            </div>

        </div>
        <div className='CardTwo'>
            <p>+ {item.Quantity} -</p>
            <p>$ {item.price}</p>
            
        </div>


      
    </div>
  )
}

export default Card
