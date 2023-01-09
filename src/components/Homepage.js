import React from 'react'
import Dabbe from './Dabbe'

function Homepage() {
    const header = {
        height:'60vh',
        width:'100vw',
        overflow:'hidden',
    }
    const imgcss = {
        width:'100vw',
        margin:'-350px 0px 0px 0px'
    }
    const txthead = {
        position:'absolute',
        top:'20%',
        left:'10%',
        color:'crimson'
    }
  return (
    <div>
      <div style={header}>
        <img style={imgcss} src='https://m.economictimes.com/thumb/msid-92599930,width-1200,height-900,resizemode-4,imgsize-31842/doctors.jpg'></img>
        <div style={txthead}>
            <h1 style={{fontSize:'100px'}}>HeartCare</h1>
            <h2 style={{color:'rgb(54,54,54)'}}>Your One Stop Destination</h2>
            <h2 style={{color:'rgb(54,54,54)'}}>For Health Care</h2>
        </div>
      </div>

      <div style={{display:'flex', justifyContent:'center'}}>
        <Dabbe src={'https://cdn-icons-png.flaticon.com/512/3209/3209005.png'} title={'Ambulance 24/7'} des={'Our Ambulance Service is always ready 24/7, just call the emergency number which is - +91 8889998889'}></Dabbe>
        <Dabbe src={'https://cdn.pixabay.com/photo/2017/05/15/23/47/stethoscope-icon-2316460__480.png'} title={'Doctors'} des={'Our Ambulance Service is always ready 24/7, just call the emergency number which is - +91 8889998889'}></Dabbe>
        <Dabbe src={'https://cdn.pixabay.com/photo/2017/05/15/21/58/drug-icon-2316244_1280.png'} title={'Prescription'} des={'Our Ambulance Service is always ready 24/7, just call the emergency number which is - +91 8889998889'}></Dabbe>
      </div>

    </div>
  )
}

export default Homepage
