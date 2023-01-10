import React, { useState } from 'react'
import axios from 'axios'
import DailyCalorie from './DailyCalorie'
import Idealweight from './Idealweight'
import Activity from './Activity'
function Fitness() {
    return (
        <div style={{ display: "flex",flexDirection:'column', justifyContent: "space-around", alignItems: "center", flexWrap: 'wrap' }}>
            <div style={{display:"flex", justifyContent:"space-around", alignItems:"center", width:"100vw", marginBottom:"50px"}}>
                <DailyCalorie></DailyCalorie>
                <img src='https://cdn-icons-png.flaticon.com/512/2964/2964514.png' style={{ width: "30vw" }}></img>
            </div>
            <div style={{display:"flex", justifyContent:"space-around", alignItems:"center", width:"100vw", marginBottom:"50px"}}>
                <img src='https://cdn-icons-png.flaticon.com/512/2964/2964522.png' style={{ width: "30vw" }}></img>
                <Idealweight></Idealweight>
            </div>
            <div style={{display:"flex", justifyContent:"space-around", alignItems:"center", width:"100vw", marginBottom:"50px"}}>
                <Activity></Activity>
                <img src='https://cdn-icons-png.flaticon.com/512/2749/2749777.png' style={{ width: "30vw" }}></img>
            </div>
            
        </div>
    )
}

export default Fitness
