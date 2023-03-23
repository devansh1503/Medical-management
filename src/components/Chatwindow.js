import axios from 'axios'
import React, { useCallback, useContext, useEffect, useRef, useState } from 'react'
import GlobalObj from '../store/global-object'
import io from 'socket.io-client'

function Chatwindow(props) {
    var socket;
    var ENDPOINT = "https://medical-api.vercel.app/"
    useEffect(()=>{
        socket = io(ENDPOINT)
        socket.emit('setup',sender)
        socket.on("msgrecieved",(newMsg)=>{
            if(newMsg.chatId === props.selectedChat._id){
                console.log("message aa gya")
                setAllMsg([...allmsg,newMsg])
            }
        })
    })
    useEffect(()=>{
        if(props.selectedChat === {}) return;
        socket = io(ENDPOINT)
        socket.emit('joinchat',props.selectedChat)
    },[props.selectedChat])
    const ctx = useContext(GlobalObj)
    const sender = ctx.currUser._id
    const msg = useRef()
    const [allmsg, setAllMsg] = useState([])
    async function fetchdata() {
        await axios.post("https://medical-api.vercel.app/getmsg", { chatId: props.selectedChat._id })
            .then((res) => {
                setAllMsg(res.data)
            })
    }
    
    useEffect(() => {
        fetchdata()
    }, [props.selectedChat])
    const sendmsg = async (event) => {
        event.preventDefault()
        const newmsg = {
            sender: sender,
            reciever: props.reciever,
            chatId: props.selectedChat._id,
            content: msg.current.value
        }
        socket.emit("newmsg",newmsg)
        setAllMsg([...allmsg,newmsg])
        msg.current.value = ""
        await axios.post("https://medical-api.vercel.app/msg", newmsg)
    }
    const sendstl = {
        backgroundColor: "rgb(70, 70, 70)",
        color:'white',
        padding: '10px',
        borderRadius: '15px',
        width:'fit-content',
        margin:'15px',
        float:'right',
        clear:'both'
    }
    const recstl = {
        backgroundColor: "rgb(205, 1, 205)",
        padding: '10px',
        borderRadius: '15px',
        width:'fit-content',
        color:'white',
        margin:'15px',
        float:'left',
        clear:'both'
    }
    return (
        <div className='chatsection'>
            <div className='secchat'>
                <div style={{padding:'15px', backgroundImage:'linear-gradient(to right, rgb(34, 34, 34) 90%, rgb(175, 175, 175))', color:'white',position:'sticky',top:'0%'}}><h4>{props.talk}</h4></div>
                {
                    allmsg.map((item)=>{
                        return <div style={(item.sender===sender)?sendstl:recstl}>
                            {item.content}
                        </div>
                    })
                }
            </div>
            <form className='chatform'>
                <input placeholder='Enter your message' ref={msg}></input>
                <button onClick={sendmsg}>Send</button>
            </form>
        </div>
    )
}

export default Chatwindow
