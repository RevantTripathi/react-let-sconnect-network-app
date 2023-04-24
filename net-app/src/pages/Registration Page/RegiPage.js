import React, { Component } from 'react'

import './RegiPage.css'
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';



const Regi = () => {

    const handleRegisteration = async(e) => {
        e.preventDefault()
        const name = document.getElementById('name').value
        const email = document.getElementById('email').value
        const contact = document.getElementById('contact').value
        const password = document.getElementById('password').value
        const gender = document.getElementById('gender').value
        try{
            axios.post('http://localhost:4000/users',{username:name,email:email,contact:contact,password:password,gender:gender}).then((res)=>{
                console.log(res.data)
            })
        }catch(err){
            console.log(err.data)
        }
        // try{
        //     let result= await axios.get('http://localhost:4000/')
        //     console.log(result.data)
        // }catch(err){
        //     console.log(err.data)
        // }
    }
    const navigate = useNavigate();

    return (
        <div>
            <div className="form-container2">
                <form className="form2" onSubmit={(e) => handleRegisteration(e)} >
                    <h1>Registartion</h1>
                    <div className="form-seg2">
                        <label>Name : </label>
                        <input id='name' type='text' name="name" required />
                    </div>
                    <div className="form-seg2">
                        <label>Contact : </label>
                        <input id='contact' type='number' name="contact" required />
                    </div>
                    <div className="form-seg2">
                        <label>Gender : </label>
                        {/* <input type='text' name="email" /> */}
                        <select id='gender'>

                            <option value="male">Male</option>

                            <option value="female">Female</option>



                        </select>
                    </div>
                    <div className="form-seg2">
                        <label>Email : </label>
                        <input type='email' name="email" id='email' required />
                    </div>
                    <div className="form-seg2">
                        <label>Password : </label>
                        <input type='password' name="password" id="password" required />
                    </div>

                    {/*<p>Don't Have an account? Go to the <em className="link" onClick={()=>{nav('/register')}}>Register</em> page.</p>*/}
                    <button type='submit' className="submit-btn2">Login</button>
                    <button className="login-bt" onClick={() => navigate("/")}>Already have account?Login</button>

                </form>
            </div>
        </div>
    )

}

export default Regi;