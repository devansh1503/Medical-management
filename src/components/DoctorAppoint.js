import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import GlobalObj from '../store/global-object'

function DoctorAppoint() {
    const ctx = useContext(GlobalObj)
    const id = ctx.currUser.userName
    const [data, setData] = useState([])
    const url = `https://medical-api.vercel.app/appoint/${id}`
    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(url)
            setData(response.data)
        }
        fetchData()
    },[])
    return (
        <div className='users'>
            <table>
                <tr>
                    <th>Patient Name</th>
                    <th>Appointment Date</th>
                    <th>Health Problem</th>
                    <th>Appointment Status</th>
                    <th>Doctor Name</th>
                </tr>
                {
                    data.map((item) => {
                        return (
                            <tr>
                                <td>{item.patientId}</td>
                                <td>{item.appointmentData}</td>
                                <td>{item.healthProblem}</td>
                                <td>{item.appointmentStatus ? "Done" : "Pending"}</td>
                                <td>{item.doctorId}</td>
                            </tr>)

                    })
                }
            </table>

        </div>
    )
}

export default DoctorAppoint
