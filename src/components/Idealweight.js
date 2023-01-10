import React, { useRef, useState } from 'react'
import axios from 'axios'

function Idealweight() {
    const [data, setData] = useState({})
    const [bool,setBool] = useState(false)
    const gender = useRef()
    const height = useRef()
    async function getData(event) {
        event.preventDefault()
        const options = {
            method: 'GET',
            url: 'https://fitness-calculator.p.rapidapi.com/idealweight',
            params: { gender: gender.current.value.toLowerCase(), height: height.current.value },
            headers: {
                'X-RapidAPI-Key': '3358782eb2msh7041b21910dbcaap19bdc2jsnc27bbe08d367',
                'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
            }
        };

        await axios.request(options).then(function (response) {
            console.log(response.data);
            setData(response.data.data)
        }).catch(function (error) {
            console.error(error);
        });
        setBool(true)
    }
    return (
        <div className='start' style={{ padding: '2%', backgroundColor: 'rgba(255, 0, 76, 0.400)' }}>
            <h2>Ideal Body Weight</h2>
            <form style={{ display: 'flex', flexDirection: 'column' }}>
                <input ref={gender} placeholder='Enter your gender'></input>
                <input ref={height} placeholder='Enter your height'></input>
                <button onClick={getData}>Submit</button>
            </form>
            {
                bool &&
                <h2>
                    Hamwi: {data["Hamwi"]}kg<br></br>
                    Devine: {data["Devine"]}kg<br></br>
                    Miller: {data["Miller"]}kg<br></br>
                    Robinson: {data["Robinson"]}kg<br></br>
                </h2>
            }
        </div>
    )
}

export default Idealweight
