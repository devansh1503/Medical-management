import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Newsarticles() {
    const[data,setData] = useState([]);
    const url = "https://newsapi.org/v2/top-headlines?category=health&apiKey=db15169e76bd44a987826d1afa70712f"
    async function fetchData(){
        await axios.get(url).then((res)=>{
            setData(res.data.articles)
        })
    }
    useEffect(()=>{
        fetchData()
    },[])
  return (
    <div>
      {
        data.map((item)=>{
            return <div style={{display:'flex'}}>
                <div>
                    <img src={item.urlToImage} style={{width:'200px'}}></img>
                </div>
                <div>
                    <a href={item.url}> <h4>{item.title}</h4></a>
                    <p>{item.description}</p>
                </div>
            </div>
        })
      }
    </div>
  )
}

export default Newsarticles
