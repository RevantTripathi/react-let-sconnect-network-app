import React, { Component, useRef, useState } from 'react'

import './RegiPage.css'
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';



const Regi = () => {

    const name = useRef()
    const email = useRef()
    const contact = useRef()
    const password = useRef()
    const gender = useRef()

    const resetInput = () => {
        name.current.value = ''
        email.current.value = ''
        contact.current.value = ''
        password.current.value = ''
        gender.current.value = ''
    }
    const handleRegisteration = async (e) => {
        e.preventDefault()
        // const name = document.getElementById('name')
        // const email = document.getElementById('email').value
        // const contact = document.getElementById('contact').value
        // const password = document.getElementById('password').value
        // const gender = document.getElementById('gender').value


        try {
            axios.post('http://localhost:4000/users', { username: name.current.value, email: email.current.value, contact: contact.current.value, password: password.current.value, gender: gender.current.value }).then((res) => {
                console.log(res.data)
                resetInput()
            })
        } catch (err) {
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
                        <input id='name' type='text' name="name" required ref={name} />
                    </div>
                    <div className="form-seg2">
                        <label>Contact : </label>
                        <input id='contact' type='number' name="contact" required ref={contact} />
                    </div>
                    <div className="form-seg2">
                        <label>Gender : </label>
                        {/* <input type='text' name="email" /> */}
                        <select id='gender' ref={gender}>

                            <option value="male">Male</option>

                            <option value="female">Female</option>



                        </select>
                    </div>
                    <div className="form-seg2">
                        <label>Email : </label>
                        <input type='email' name="email" id='email' required ref={email} />
                    </div>
                    <div className="form-seg2">
                        <label>Password : </label>
                        <input type='password' name="password" id="password" required ref={password} />
                    </div>

                    {/*<p>Don't Have an account? Go to the <em className="link" onClick={()=>{nav('/register')}}>Register</em> page.</p>*/}
                    <button type='submit' className="submit-btn2">Submit</button>
                    <button className="login-bt" onClick={() => navigate("/")}>Already have account?Login</button>

                </form>
            </div>
        </div>
    )

}

export default Regi;