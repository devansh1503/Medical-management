import axios from 'axios'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

function StartingPage(props) {
  useEffect(() => {
    async function logOut(){
      await axios.get('https://medical-api.vercel.app/logout',{
        withCredentials:true,
      })
    }
    logOut()
    props.setOpt(false)
    props.setLoggedIn(false)
  }, [])
  return (
    <div className='startpage'>
      <div className='start'>
        <button><Link to='/login' className='linkText'>Login</Link></button>
        <button><Link to='/register' className='linkText'>New User/Register</Link></button>
      </div>
    </div>
  )
}

export default StartingPage
