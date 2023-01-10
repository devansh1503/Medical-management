import React, { useRef, useState } from 'react'
import axios from 'axios'
function DailyCalorie() {
    const [dailCalorie, setCal] = useState({})
    const[maintain, setMaintain] = useState("")
    const[eweight, setEw] = useState("")
    const[mweight, setMw] = useState("")
    const[wht, setW] = useState("")
    const[gweight,setGw] = useState("")
    const [bool, setBool] = useState(false)
    const age = useRef()
    const gender = useRef()
    const height = useRef()
    const weight = useRef()

    async function dailyCal(event) {
        event.preventDefault()
        const options = {
            method: 'GET',
            url: 'https://fitness-calculator.p.rapidapi.com/dailycalorie',
            params: {
                age: +age.current.value,
                gender: gender.current.value.toLowerCase(),
                height: +height.current.value,
                weight: +weight.current.value,
                activitylevel: 'level_1'
            },
            headers: {
                'X-RapidAPI-Key': '3358782eb2msh7041b21910dbcaap19bdc2jsnc27bbe08d367',
                'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
            }
        };

        await axios.request(options).then(function (response) {
            setCal(response.data.data)
            setMaintain(dailCalorie["goals"]["maintain weight"])
            setGw(dailCalorie["goals"]["Mild weight gain"]["calory"])
            setEw(dailCalorie["goals"]["Extreme weight loss"]["calory"])
            setW(dailCalorie["goals"]["Weight loss"]["calory"])
            setMw(dailCalorie["goals"]["Mild weight loss"]["calory"])
            
        }).catch(function (error) {
            console.error(error);
        });
        setBool(true)
    }
    return (
        <div className='start' style={{padding:"2%", backgroundColor:'rgba(0, 204, 255, 0.400)'}}>
            <h2>Daily Calories Required</h2>
            <form style={{display:'flex',flexDirection:'column'}}>
                <input ref={age} placeholder='Enter Age'></input>
                <input ref={gender} placeholder='Enter Gender'></input>
                <input ref={height} placeholder='Enter Height'></input>
                <input ref={weight} placeholder='Enter Weight'></input>
                <button onClick={dailyCal}>Submit</button>
            </form>
            {bool && <div style={{color:"black"}}>
                <h2>BMR: {dailCalorie.BMR}</h2>
                <h2>Goals-
                    <li>To Maintain Weight: {maintain} Calories</li>
                    <li>Lose 0.25 Kg: {mweight} Calories</li>
                    <li>Lose 0.5 kg: {wht} Calories</li>
                    <li>Lose 1 Kg: {eweight} Calories</li>
                    <li>Gain 0.25 Kg: {gweight} Calories</li>
                    
                </h2>
            </div>}

        </div>
    )
}

export default DailyCalorie
