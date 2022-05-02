import { Categorycard } from '../categorycard/Categorycard'
import './CatCardList.css'
import {categories} from "../../../data"


export function CatCardList() {
    return (
        <div className='CatCardList'>
            {categories.map((item) => (
                <Categorycard item={item} key={item.id} />
            ))}




        </div>
    )
}