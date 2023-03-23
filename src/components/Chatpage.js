import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import GlobalObj from '../store/global-object'
import Chatwindow from './Chatwindow';

function Chatpage() {
    const [userdata, setUserdata] = useState([])
    const [selectedChat, setChat] = useState({})
    const [reciever,setReciever] = useState("")
    const [talk, setTalk] = useState("Click a user to chat")
    const ctx = useContext(GlobalObj)
    // const {selectChat, setSelectedChat, chat, setChat} = ChatState()
    const userType = ctx.currUser.userRole.toLowerCase();
    const loggedInUser = ctx.currUser._id;
    async function fetchData() {
        const url = (userType === "doctor") ? "https://medical-api.vercel.app/patients" : "https://medical-api.vercel.app/doctors"
        await axios.get(url).then((res) => {
            setUserdata(res.data)
            console.log(res.data)
        })
    }
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <div className='chatmain'>
            <div className='userslist'>
                <p><b>You can talk to-</b></p>
                <ul>
                    {
                        userdata.map((item, index) => {
                            return <li onClick={async()=>{
                                setTalk(item.fullName)
                                setReciever(item._id)
                                const data = {
                                    id1: item._id,
                                    id2: loggedInUser
                                }
                                await axios.post('https://medical-api.vercel.app/chat',data).then((res)=>{
                                    setChat(res.data)
                                })
                            }} key={index}>{item.fullName}</li>
                        })
                    }
                </ul>
            </div>
            <Chatwindow talk={talk} selectedChat={selectedChat} reciever={reciever}></Chatwindow>
            
        </div>
    )
}

export default Chatpage
