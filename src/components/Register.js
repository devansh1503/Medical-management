import axios from 'axios';
import React, { useContext, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import GlobalObj from '../store/global-object';
function Register(props) {
  const ctx = useContext(GlobalObj)
  const [passame, setPassame] = useState(true)
  const name = useRef();
  const pass = useRef();
  const conpass = useRef();
  const id = useRef();
  const fullname = useRef();
  const contact = useRef();
  const address = useRef();
  const gender = useRef();
  const age = useRef();
  const url = `${ctx.apiUrl}/users`
  const [len, setLen] = useState(0)
  const passwords = []
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(url)
      const l = response.data.length + 1
      response.data.map((item) => {
        passwords.push(item.password)
      })
      setLen(l)
    }
    fetchData()
  }, [])

  const onclickhandle = async () => {
    console.log(props.role)
    const user = {
      "email": id.current.value,
      "password": pass.current.value,
      "userName": name.current.value,
      "fullName": fullname.current.value,
      "userRole": props.role,
      "userAddress": address.current.value,
      "userContact": contact.current.value,
      "userGender": gender.current.value,
      "userAge": age.current.value,
      "approvalStatus": (props.role.toLowerCase() === "admin" ? true : false)
    }
    await axios.post(`https://medical-api.vercel.app/userspost`, user).then((res) => {
      console.log(res.data)
    });
  }

  const checkpassword = (event) => {
    if (conpass.current.value === pass.current.value) {
      setPassame(true)
    }
    else setPassame(false)
  }
  return (
    <div className='startpage'>
      <form className='main-box' style={{ display: 'flex', flexDirection: 'column', justifyContent: "center", alignItems: 'center'}}>
        <h1 style={{ padding: '20px', color: 'rgb(0, 195, 255' }}>Register As {props.role}</h1>
        <div>
          <h2 style={{ paddingLeft: '20px', color: 'tomato' }}>About Yourself-</h2>
          <div className='namedet'>
            <input ref={name} placeholder='Enter Your username' />
            <input ref={fullname} placeholder='Enter Your Full Name' />
            <input ref={id} placeholder='Enter email' />
          </div>
          <h2 style={{ paddingLeft: '20px', color: 'tomato' }}>Password-</h2>
          <div className='namedet' style={{display:'flex'}}>
            <input ref={pass} type="password" placeholder='Enter a New Password' />
            <div>
              <input ref={conpass} onChange={checkpassword} type="password" placeholder='Confirm Password'></input>
              {passame?<div></div> : <div style={{color:'tomato'}}>Password doesn't match</div>}
            </div>
          </div>
          <h2 style={{ paddingLeft: '20px', color: 'tomato' }}>Other Details-</h2>
          <div className='namedet'>
            <input ref={contact} placeholder='Enter Your Contact' />
            <input ref={address} placeholder='Enter Your Address' />
            <input ref={gender} placeholder='Enter Your Gender' />
            <input ref={age} placeholder='Enter Your Age' />
          </div>
        </div>
        <button style={{ margin: '20px', backgroundColor: 'rgb(0, 195, 255' }} onClick={onclickhandle}><Link to='/login' className='linkText'>Register</Link></button>
      </form>
    </div>
  )
}

export default Register
