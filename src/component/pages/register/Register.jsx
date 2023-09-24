import React from 'react'
import "./register.css"

const Register = () => {
  return (
    <div className='register-container'>
      <form>
        <h2>Register</h2>
        <input type="text" className="name" placeholder='Your Name'/>
        <input type="email" className="name" placeholder='Your Email'/>
        <input type="password" className="name" placeholder='Yore Password'/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Register