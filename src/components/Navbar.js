import React, { useState } from 'react'
import { Link } from 'react-router-dom'
function Navbar(props) {
  const [stl, setStl] = useState({})
  const [listl, setlistl] = useState({})
  const [bool, setBool] = useState(false)
  const onBurger = () => {
    if (!bool) {
      setStl({
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center',
        position: 'absolute',
        top: document.getElementsByClassName('navbar')[0].offsetHeight,
        left: '0',
        backgroundColor: 'white',
        padding: '10px',
        width: '100%',
        zIndex: '3'
      })
      setlistl({
        margin:'15px',
        borderBottom:'3px solid tomato'
      })
    }
    else {
      setStl({})
      setlistl({})
    }
    setBool(!bool)
  }
  return (
    <div className='navbar'>
      <div onClick={onBurger}><img className='burger' style={{ width: '30px' }} src='https://cdn-icons-png.flaticon.com/512/6499/6499731.png'></img></div>
      <h1>HeartCare</h1>
      <ul style={stl}>
        <li style={listl}><Link to='/' className='linkText'>Home</Link></li>
        <li style={listl}><Link to='/fitness' className='linkText'>Fitness Tools</Link></li>
        <li style={listl}><Link to='/chatpage' className='linkText'>Chat With Doc</Link></li>
        <li style={listl}><Link to='/about' className='linkText'>About Us</Link></li>
      </ul>
      {props.loggedIn && <div>
        <img onClick={() => {
          props.setOpt(!props.opt)
        }} src='https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png' style={{ width: '50px', cursor: 'pointer' }}></img>
      </div>}
      {!props.loggedIn && <div>
        <button style={{backgroundColor:'tomato'}}><Link to='/home' className='linkText'>Login/Register</Link></button>
      </div>}
    </div>
  )
}

export default Navbar
