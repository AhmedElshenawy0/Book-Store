import React from 'react'
import { Link } from 'react-router-dom'

const BottomHeader = ({toggle}) => {
  return (
    <div className='bottom-header' style={{transform: toggle && "translateX(0)"}}>
        <ul>
            <Link className='link' to="/">Home</Link>
            <Link className='link' to="/register">Register</Link>
        </ul>
    </div>
  )
}

export default BottomHeader