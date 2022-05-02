import { useContext, useState, useEffect } from "react";
import { axiosInstance } from "../../config";

const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();
       
      
        try {
          const res = await axiosInstance.post("/register", {
            username,
            password,
            isAdmin : true


          });
          console.log(res)
           res.data && window.location.replace("http://localhost:3000/login");
        } catch (err) {
            console.log(err)

          
        }
      };
  return (
    <div className='Register'>
        <input onChange={(e) => setUsername(e.target.value)}/>
        <input type="password" onChange={(e) => setPassword(e.target.value)}/>
        <button onClick={handleSubmit}>clcik</button>
      
    </div>
  )
}

export default Register
