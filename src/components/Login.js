import axios from 'axios';
import React, { useContext, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getallUsers } from '../service/api';
import GlobalObj from '../store/global-object';
function Login(props) {
    const [bool, setBool] = useState(false)
    const [id, setId] = useState(1);
    const ctx = useContext(GlobalObj)
    const [notfound, setFound] = useState(false);
    const name = useRef()
    const pass = useRef()
    const history = useNavigate()
    localStorage.removeItem('image')
    const getUser = async (event) => {
        event.preventDefault()
        setBool(true)
        const url = `https://medical-api.vercel.app/users/${pass.current.value}/${name.current.value}`
        await axios.get(url, {
            withCredentials: true,
            headers: { 'Content-Type': 'multipart/form-data' },
        })
            .then((response) => {
                console.log(response)
                if (name.current.value !== response.data.userName) {
                    console.log('wrong name' + name.current.value + " " + response.data[0].userName)
                    setFound(true)
                    return;
                }
                localStorage.setItem("userName", response.data.userName)
                ctx.changeUser(response.data)
                setBool(false)
                props.setLoggedIn(true)
                history('/')
            })
            .catch((error) => {
                if (error.request) {
                    setFound(true)
                }
                else {
                    setFound(true)
                }
                setBool(false)
            })
    }
    const onchangehandle = async (event) => {
        setId(event.target.value)
        console.log(id)
    }
    return (
        <div className='startpage'>
            <form className='start'>
                <input placeholder='Enter Your Name' ref={name} />
                <input type='password' ref={pass} onChange={onchangehandle} placeholder='Enter Your password' />
                <button onClick={getUser} style={{ color: "white", fontSize: "20px" }}>Login</button>
                {bool && <div className='pac-man'></div>}
            </form>
            <div>
                {notfound && <div className='nouser' >Wrong Name or Password</div>}
            </div>
        </div>
    )
}

export default Login
