import React from 'react'
import { Link } from 'react-router-dom'

function Useroptions() {
    const cssmain = {
        width: 'fit-content',
        backgroundColor:'white',
        position:'absolute',
        right:'0',
        marginRight:'30px',
        borderBottomLeftRadius:'25px',
        borderBottomRightRadius:'25px',
        boxShadow:'10px 10px 14px 5px black'
    }
    return (
        <div style={cssmain}>
            <ul className='userOptions' style={{listStyle:'none', color:'black'}}>
                <li><Link to='/userDashboard' className='linkText'>User Dashboard</Link></li><hr></hr>
                <li><Link to='/appointment' className='linkText'>Appointment</Link></li><hr></hr>
                <li><Link to='/prescription' className='linkText'>Prescription</Link></li><hr></hr>
                <li><Link to='/users' className='linkText'>Users</Link></li><hr></hr>
                <li><Link to='/' className='linkText'>Log Out</Link></li>
            </ul>
        </div>
    )
}

export default Useroptions
