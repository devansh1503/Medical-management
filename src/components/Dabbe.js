import React from 'react'

function Dabbe(props) {
    const stylecss = {
        maxWidth:'25vw',
        backgroundColor:'rgb(66,180,236)',
        padding:'50px',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        margin:'20px',
        borderRadius:'25px'
    }
  return (
    <div style={stylecss}>
      <img style={{width:'50px'}} src={props.src}></img>
      <h2>{props.title}</h2>
      <p style={{color:'white', fontSize:'23px'}}>{props.des}</p>
    </div>
  )
}

export default Dabbe
