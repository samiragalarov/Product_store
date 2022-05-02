import { CatCardList } from '../../components/catcardlist/CatCardList'
import { Footer } from '../../components/footer/Footer'
import { Navbar } from '../../components/navbar/Navbar'
import { Productcardlist } from '../../components/productcardlist/Productcardlist'
import { UserFeedback } from '../../components/revenue/Revune'
import { Present } from '../../components/slider/Present'
import './Home.css'

export function Home(){
    return(
        <div className='home'>
            <Navbar/>
            <Present/>
            <CatCardList/>
            <Productcardlist/>
            <UserFeedback/>
            <Footer/>
      
        </div>

    )
}