import './Present.css'
import Aos from 'aos'
import "aos/dist/aos.css"
import { useContext, useEffect } from 'react'
import { Context } from '../../context/Context';

export function Present() {
    const { user } = useContext(Context);
    useEffect(() => {
        Aos.init({ duration: 1500 })

    }, [])
    return (
        <div className='Present'>
            <div className='PresentWrapper' >
                <h1 data-aos="fade-up">
                    LOUNGEWEAR LOVE

                </h1>
                <p data-aos="fade-up">
                    DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.

                </p>
                {
                    user ? (
                        <>
                            <a data-aos="fade-up" href='/allpost'>
                                SHOW NOW
                            </a>

                        </>
                    ):(
                        <>
                                                    <a data-aos="fade-up" href='/register'>
                                SIGN UP
                            </a>
                        </>
                    )
                }

            </div>

        </div>
    )
}