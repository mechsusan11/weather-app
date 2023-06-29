import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const key='d83c9dc220dd753ec192e7dcbce8c552';

const App=()=>{

const [city,setCity]=useState("");
const [data,setData]=useState();

    const fetchData = async()=>{
        try{
            const response= await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`);
            setData(response.data);
            console.log(response.data);
        }catch(err){
            alert('please enter the city name correctly');
        }
    }
    return(
        <div className='mainbox'>
            
    <div className='Appbox'>
        <h1 className='title'>WEATHER APP</h1>
        <div className='inputContainer'>
            <input 
            type='text' 
            className='input' 
            value={city} 
            onChange={e=>setCity(e.target.value)}
            placeholder='Enter the city name here'>   
            </input>
           <button className='btn' onClick={fetchData}>click</button>
        </div>

        <div>
            {data && (
                <div className='container'>
                    <h1 className='cityCountry'>{data.name} , {data.sys.country}.</h1>
                    <div className='dirTemp'>
                        <h3 className='temp'>{data.main.temp}</h3>
                        <div className='dir'>
                            Lat-{data.coord.lat} <br/> Long-{data.coord.lon}
                        </div>
                    </div>
                </div>
            )}
        </div>
    </div>
    </div>
    )
}

export default App;