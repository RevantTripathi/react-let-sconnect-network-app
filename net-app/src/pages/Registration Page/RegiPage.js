import React, { Component } from 'react'

import  './RegiPage.css'


const Regi =()=>{


    return(
        <div>
            <div className="form-container2">
            <form className="form2" >
                <h1>Registartion</h1>
                <div className="form-seg2">
                    <label>Name : </label>
                    <input type='text' name="name" />
                </div>
                <div className="form-seg2">
                    <label>Contact : </label>
                    <input type='text' name="email" />
                </div>
                <div className="form-seg2">
                    <label>Email : </label>
                    <input type='text' name="email" />
                </div>
                <div className="form-seg2">
                    <label>Password : </label>
                    <input type='password' name="password" />
                </div>

                {/*<p>Don't Have an account? Go to the <em className="link" onClick={()=>{nav('/register')}}>Register</em> page.</p>*/}
                <button type='submit' className="submit-btn2">Login</button>
                <button className="login-bt">Already have account?Login</button>
                
            </form>
        </div>
        </div>
    )

}

export default Regi;