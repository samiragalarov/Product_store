import React from 'react'
import { useContext, useState, useEffect } from "react";
import { Context } from '../../context/Context';
import axios from "axios";
import { axiosInstance } from '../../config';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    

    const { user,dispatch, isFetching } = useContext(Context);
    // xs


    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({ type: "LOGIN_START" });

        try{
            const res = await axiosInstance.post("/login",{
                username,
                password
            });
          

            dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
            
      

        }catch(err){
            dispatch({ type: "LOGIN_FAILURE" });
             console.log(err)

        }
    }

  return (
    <div className='Login'>
        <div className='loginbox'>
            <input   onChange={(e)=>{setUsername(e.target.value)}}/>
            <input type="password"  onChange={(e)=>{setPassword(e.target.value)}} />
            <button onClick={handleSubmit}>click</button>

        </div>

      
    </div>
  )
}

export default Login
