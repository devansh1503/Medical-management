import React from 'react'
import {Link} from 'react-router-dom'
function Navbar(props) {
  return (
    <div className='navbar'>
      <h1>🩺 HeartCare</h1>
      <ul>
        <li><Link to='/home' className='linkText'>Home</Link></li><hr></hr>
        <li><Link to='/articles' className='linkText'>Articles</Link></li><hr></hr>
        <li><Link to='/aiproducts' className='linkText'>Artificial Intelligence Products</Link></li><hr></hr>
        <li><Link to='/about' className='linkText'>About Us</Link></li>
      </ul>
      <div>
        <img onClick={()=>{
          props.setOpt(!props.opt)
        }} src='https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png' style={{width:'50px', cursor:'pointer'}}></img>
      </div>
    </div>
  )
}

export default Navbar
