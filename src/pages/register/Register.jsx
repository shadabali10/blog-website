import React from 'react'
import './register.css'
import { Link } from 'react-router-dom'

function Register() {
  return (
    <div className="register">

        <span className="registerTitle">Register</span>
        <form className="registerForm">
            <label>Username</label>
            <input type="text" placeholder='Enter username...' />
            <label>Email</label>
            <input type="email" placeholder='Enter your email' />
            <label>Password</label>
            <input type="password" placeholder='Enter your password.... ' />
            <button className="registerButton">Register</button>
        
        </form>
           
    </div>
  )
}

export default Register