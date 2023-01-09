import React from 'react'

function About() {
    const aboutcss = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '2%',
        padding: '40px',
        backgroundColor: 'white',
        borderRadius: '25px',
        boxShadow: '10px 10px 17px 5px black'
    }
    return (
        <div style={aboutcss}>
            
                <h1>
                    About Us!
                </h1>
                <div className='abouttxt'>
                    <p style={{fontSize:'25px'}}>
                        This is a medical management Full Stack Web project built by Devansh Abrol. The application is built using MERN stack,
                        A user can perform CRUD operations on the data, there are three types of users- Patients, Doctors, Admins, and the three
                        have a different scope of the application, the Doctor can see their specific appointments, prescribe medicene to their customers,
                        while Patients can see their prescriptions, and make an appointment with doctors of their choice. While, Admins can approve and delete
                        users.<br></br>
                        Many more features are coming up! - Machine Learning models will be implemented soon
                    </p>
                </div>
        </div>
    )
}

export default About
