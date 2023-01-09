import React, { useState } from 'react'
import { Link } from 'react-router-dom'
function Navbar(props) {
  const [stl, setStl] = useState({})
  const [bool, setBool] = useState(false)
  const onBurger = () => {
    if (!bool) {
      setStl({
        display: 'flex',
        justifyContent: 'center',
        position: 'absolute',
        top: '62px',
        left: '0',
        backgroundColor: 'white',
        padding: '10px',
        width: '100%',
        zIndex: '3'
      })
    }
    else {
      setStl({})
    }
    setBool(!bool)
  }
  return (
    <div className='navbar'>
      <div onClick={onBurger}><img className='burger' style={{ width: '30px' }} src='https://cdn-icons-png.flaticon.com/512/6499/6499731.png'></img></div>
      <h1>🩺 HeartCare</h1>
      <ul style={stl}>
        <li><Link to='/home' className='linkText'>Home</Link></li><hr></hr>
        <li><Link to='/articles' className='linkText'>Articles</Link></li><hr></hr>
        <li><Link to='/aiproducts' className='linkText'>Artificial Intelligence Products</Link></li><hr></hr>
        <li><Link to='/about' className='linkText'>About Us</Link></li>
      </ul>
      <div>
        <img onClick={() => {
          props.setOpt(!props.opt)
        }} src='https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png' style={{ width: '50px', cursor: 'pointer' }}></img>
      </div>
    </div>
  )
}

export default Navbar
