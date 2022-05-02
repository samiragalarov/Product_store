import './Categorycard.css'
import Aos from 'aos'
import "aos/dist/aos.css"
import { useEffect } from 'react'


export function Categorycard({ item }) {

    return (
        <div className="categorycard" data-aos="zoom-in" >
            <img id="CardImg" src={item.img} />
            <div className="CatWrapper">

                <h1 >
                    

                    {item.title}

                </h1>
                <a  href='/allpost'>
                    SHOW NOW

                </a>

            </div>

        </div>
    )
}