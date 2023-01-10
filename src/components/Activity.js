import React, { useRef, useState } from 'react'
import axios from 'axios'

function Activity() {
    const [data, setData] = useState({})
    const [bool, setBool] = useState(false)
    const intensity = useRef()

    async function getData(event) {
        event.preventDefault()
        const options = {
            method: 'GET',
            url: 'https://fitness-calculator.p.rapidapi.com/activities',
            params: { intensitylevel: intensity.current.value },
            headers: {
                'X-RapidAPI-Key': '3358782eb2msh7041b21910dbcaap19bdc2jsnc27bbe08d367',
                'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
            }
        };

        await axios.request(options).then(function (response) {
            setData(response.data.data)
            console.log(response.data)
        }).catch(function (error) {
            console.error(error);
        });
        setBool(true)
    }
    return (
        <div className='start' style={{padding:"1%", backgroundColor:'rgba(255, 255, 0, 0.519)'}}>
            <h2>Get 5 Tasks, of particular intensity</h2>
            <form style={{display:'flex',flexDirection:'column'}}>
                <input ref={intensity} placeholder="Enter the level of Intensity"></input>
                <button onClick={getData}>Submit</button>
            </form>

            {bool && 
            <h2>
                <li>{data["0"]["description"]}</li>
                <li>{data["1"]["description"]}</li>
                <li>{data["2"]["description"]}</li>
                <li>{data["3"]["description"]}</li>
                <li>{data["4"]["description"]}</li>  
            </h2>}
        </div>
    )
}

export default Activity
