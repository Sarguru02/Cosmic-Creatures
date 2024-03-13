import React, { useEffect, useState } from 'react'
import "./InputForm.css"
import { checkLogin } from '../../utils/login';
import { useNavigate } from 'react-router-dom';
import { putUserData } from '../../utils/db';
export default function Inputform(){
    const [vehicleType, setVehicleType] = useState('bike');
    const [distance, setDistance] = useState(0);
    const [engineSize, setEngineSize] = useState('small');
    const [actype, setActype] = useState('1*');
    const [actime, setActime] = useState(0);
    const [cityname,setCityname]=useState();
    const navigate = useNavigate()

    useEffect(()=>{
        if(!checkLogin()){
            return navigate("/")
        } 
    },[])

    const formhandlesubmit = (e) => {
        e.preventDefault();
        const data = {
            vehicleType,
            distance,
            engineSize,
            actype,
            actime,
            cityname
        }
        console.log(data)
        putUserData(data)
        navigate('/dashboard')
    }


    return (
        <div className='input-form-div'>
            <form className='inputform-form' onSubmit={formhandlesubmit}>
                <div className='form-div1'>
                    <div className='form-divlabel'>
                        <label className='form-cityname'>Enter City Name</label>
                        <label htmlFor="vehicle-type" className='form-vehicle-type'>Select Vehicle Type:</label>
                        <br />
                        <label htmlFor="distance" className='form-distance'>Enter Distance <br />Travelled per Day(in km):</label>
                        <br />
                        <label htmlFor="engine-size" className='form-enginesize'>Select Engine Size:</label>
                        <br />
                        <label className='form-ac'>AC type:</label>
                        <br />
                        <label className='form-actime'>Use time of AC per Day (in hr):</label>
                        <br />

                    </div>
                    <div className='form-divinput'>
                        <input className='form-cityinput' type='text' placeholder='Enter city Name' onChange={(e) => setCityname(() => e.target.value)}/>
                        <select id="vehicle-type" onChange={(e) => setVehicleType(() => e.target.value)} className='form-vehicle-select'>
                            <option value="bike">Bike</option>
                            <option value="petrol-car">Petrol Car</option>
                            <option value="diesel-car">Diesel Car</option>
                        </select>
                        <input type="number" id="distance" value={distance} onChange={e => setDistance(() => e.target.value)} placeholder="Enter distance..." className='form-distance-select' />
                        {<select id="engine-size" onChange={e => setEngineSize(() => e.target.value)} className='form-engine-select'>
                            <option value="small">Small{vehicleType === "bike" && " (<150cc)"}{vehicleType != "bike" && " (Mini)"}</option>
                            <option value="medium">Medium{vehicleType === "bike" && " (150-350cc)"}{vehicleType != "bike" && " (Sedan)"}</option>
                            <option value="large">Large{vehicleType === "bike" && " (>350cc)"}{vehicleType != "bike" && " (SUVs)"}</option>
                        </select>}
                        <select className='form-ACtype' onChange={e => setActype(() => e.target.value)} >
                            <option>1 ⭐</option>
                            <option>2 ⭐</option>
                            <option>3 ⭐</option>
                            <option>4 ⭐</option>
                            <option>5 ⭐</option>
                        </select>
                        <input type='number' className='form-ACuse' value={actime} onChange={e => setActime(() => e.target.value)} placeholder='Enter AC Time...' />
                    </div>
                </div>
                <button className='inputform-submit' >Submit</button>
            </form>
        </div>
    )
}

