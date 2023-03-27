import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import GlobalObj from '../store/global-object'

function StartingPage(props) {
  const ctx = useContext(GlobalObj)
  useEffect(() => {
    async function logOut() {
      await axios.get(`https://medical-api.vercel.app/logout`, {
        withCredentials: true,
      })
    }
    logOut()
    props.setOpt(false)
    props.setLoggedIn(false)
  }, [])
  const [doctor, setDoctor] = useState(false);
  const [patient, setPatient] = useState(true);
  const [admin, setAdmin] = useState(false);
  return (
    <div className='startpage'>
      <div className='main-box'>
        <div className='start-nav'>
          <div className='signnav' onClick={()=>{
            setPatient(true)
            setDoctor(false)
            setAdmin(false)
            props.setRole("Patient")
          }}>Patient</div>
          <div className='signnav' onClick={()=>{
            setPatient(false)
            setDoctor(true)
            setAdmin(false)
            props.setRole("Doctor")
          }}>Doctor</div>
          <div className='signnav' onClick={()=>{
            setPatient(false)
            setDoctor(false)
            setAdmin(true)
            props.setRole("Admin")
          }}>Admin</div>
        </div>
        <div className='box-data'>
          {patient && <img src='https://cdn-icons-png.flaticon.com/512/1430/1430453.png'></img>}
          {doctor && <img src='https://cdn-icons-png.flaticon.com/512/3774/3774299.png'></img>}
          {admin && <img src='https://cdn-icons-png.flaticon.com/512/1794/1794749.png'></img>}
          <div>
            {patient && <div className='signupbtn'><Link to='/register' className='linkText' style={{ color: 'white', fontSize: '27px' }}>Sign-Up As A Patient</Link></div>}
            {doctor && <div className='signupbtn'><Link to='/register' className='linkText' style={{ color: 'white', fontSize: '27px' }}>Sign-Up As A Doctor</Link></div>}
            {admin && <div className='signupbtn'><Link to='/register' className='linkText' style={{ color: 'white', fontSize: '27px' }}>Sign-Up As An Admin</Link></div>}
            <div><Link to='/login' className='linkText' style={{ color: 'orange', fontSize: '27px' }}>Already Have an account? Login instead</Link></div>
          </div>

        </div>
      </div>
      {/* <div className='start'>
        <button><Link to='/login' className='linkText'>Login</Link></button>
        <button><Link to='/register' className='linkText'>New User/Register</Link></button>
      </div> */}
    </div>
  )
}

export default StartingPage
