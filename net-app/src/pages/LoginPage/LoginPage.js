import React from "react";
// import { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
import './LoginPage.css'





const Login=()=>{

    // const nav=useNavigate()
    // const [user,setUser]=useState({
    //     email:'',
    //     password:''
    // })

    // const handleChange=(e)=>{
    //     const { name,value}=e.target
    //     setUser(
    //         {
    //             ...user,
    //             [name]:value
    //         }
    //     )

    // }
    
    // const login=(e)=>{
    //     e.preventDefault()
    //     if(user.email===data.email&&user.password===data.password){
            
    //         setUser({})
    //         setLogin(true)
    //     }else{
    //         alert('wrong email or password')
    //     }
    // }

    return(
        <div className="background">
            <div className="form-container">
            <form className="form" >
                <h1>Login</h1>
                <div className="form-seg">
                    <label>Email : </label>
                    <input type='text' name="email" />
                </div>
                <div className="form-seg">
                    <label>Password : </label>
                    <input type='password' name="password" />
                </div>
                {/*<p>Don't Have an account? Go to the <em className="link" onClick={()=>{nav('/register')}}>Register</em> page.</p>*/}
                <button type='submit' className="submit-btn">Login</button>
                <button className="regi-btn">Don't have account ? Click to Register</button>
                
            </form>
        </div>
        </div>
    )
}
export default Login;