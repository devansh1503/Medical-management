import axios from 'axios'
import React, { useContext, useEffect } from 'react'
import GlobalObj from '../store/global-object'
import Dabbe from './Dabbe'

function Homepage(props) {
  const ctx = useContext(GlobalObj)
  useEffect(() => {
    const username = localStorage.getItem('userName')
    async function fetchData() {
      await axios.get(`https://medical-api.vercel.app/getUserData/${username}`)
        .then((response) => {
          console.log(response.data)
          ctx.changeUser(response.data)
        })
    }
    fetchData()
  }, [])
  useEffect(() => {
    props.setOpt(false)
  }, [])
  const header = {
    height: '60vh',
    width: '100vw',
    overflow: 'hidden',
  }
  const imgcss = {
    width: '100vw',
  }
  const txthead = {
    position: 'absolute',
    top: '20%',
    left: '10%',
    color: 'crimson',
    zIndex: '1'
  }
  return (
    <div>
      <div style={header}>
        <img className='imghead' style={imgcss} src='https://m.economictimes.com/thumb/msid-92599930,width-1200,height-900,resizemode-4,imgsize-31842/doctors.jpg'></img>
        <div className='heading' style={txthead}>
          <h1>HeartCare</h1>
          <h2 style={{ color: 'rgb(54,54,54)' }}>Your One Stop Destination</h2>
          <h2 style={{ color: 'rgb(54,54,54)' }}>For Health Care</h2>
        </div>
      </div>

      <div className='boxes' style={{ display: 'flex', justifyContent: 'center' }}>
        <Dabbe src={'https://cdn-icons-png.flaticon.com/512/3209/3209005.png'} title={'Ambulance 24/7'} des={'Our Ambulance Service is always ready 24/7, just call the emergency number which is - +91 8889998889'}></Dabbe>
        <Dabbe src={'https://cdn.pixabay.com/photo/2017/05/15/23/47/stethoscope-icon-2316460__480.png'} title={'Doctors'} des={'Our Ambulance Service is always ready 24/7, just call the emergency number which is - +91 8889998889'}></Dabbe>
        <Dabbe src={'https://cdn.pixabay.com/photo/2017/05/15/21/58/drug-icon-2316244_1280.png'} title={'Prescription'} des={'Our Ambulance Service is always ready 24/7, just call the emergency number which is - +91 8889998889'}></Dabbe>
      </div>

    </div>
  )
}

export default Homepage
