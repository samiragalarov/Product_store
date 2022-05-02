import "./Revune.css"
import Aos from 'aos'
import "aos/dist/aos.css"
import { useEffect } from 'react'

export function UserFeedback() {
    return (
        <div className="UserFeedback">
            <div className="UserFeedbackHead">
                <h1>User Feedback</h1>
            </div>
            <div className="mainuser">
                <div className="UserFeedbackBox" data-aos="zoom-in" >
                    <div className="UserFeedbackBox1">
                        <img src="https://images.pexels.com/photos/1408221/pexels-photo-1408221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                        <div className="circle">
                            <img src="https://images.pexels.com/photos/943084/pexels-photo-943084.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" />

                        </div>

                    </div>
                    <div className="UserFeedbackBox2">
                        <h3>
                            samir newuser
                        </h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus autem nobis minima quasi qui, pariatur unde fuga eligendi dolorem sed.
                        </p>


                    </div>

                </div>
                <div className="UserFeedbackBox" data-aos="zoom-in" >
                    <div className="UserFeedbackBox1">
                        <img src="https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?cs=srgb&dl=pexels-errin-casano-2356045.jpg&fm=jpg" />
                        <div className="circle">
                            <img src="https://images.pexels.com/photos/2406949/pexels-photo-2406949.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />

                        </div>

                    </div>
                    <div className="UserFeedbackBox2">
                        <h3>
                            samir newuser
                        </h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus autem nobis minima quasi qui, pariatur unde fuga eligendi dolorem sed.
                        </p>


                    </div>

                </div>
                <div className="UserFeedbackBox" data-aos="zoom-in" >
                    <div className="UserFeedbackBox1">
                        <img src="https://images.pexels.com/photos/3293148/pexels-photo-3293148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                        <div className="circle">
                            <img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />

                        </div>

                    </div>
                    <div className="UserFeedbackBox2">
                        <h3>
                            samir newuser
                        </h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus autem nobis minima quasi qui, pariatur unde fuga eligendi dolorem sed.
                        </p>


                    </div>

                </div>

            </div>


        </div>
    )
}