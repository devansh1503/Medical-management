import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import GlobalObj from '../store/global-object'
import DoctorAppoint from './DoctorAppoint'
import PatientAppoint from './PatientAppoint'

function Appointment(props) {
  useEffect(() => {
    props.setOpt(false)
  }, [])
  const ctx = useContext(GlobalObj)
  const role = ctx.currUser.userRole.toLowerCase()
  //const url = "http://localhost:3333/appointment"

  return (
    <div>
      {
        {
          "patient": <PatientAppoint />,
          "doctor": <DoctorAppoint />,
          "admin": <div style={{ fontSize: "20px", color: "black", padding: "30px" }}>To be accessed by Patient and Doctor Only</div>
        }[role]
      }
    </div>
  )
}

export default Appointment
