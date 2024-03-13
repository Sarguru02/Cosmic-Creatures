import React, { useEffect, useState } from 'react'
import './Home.css';
import Chatbot from '../Chatbot/Chatbot';
import { useNavigate } from 'react-router-dom';
import AqiComponent from '../AqiComponent/AqiComponent';
import '../../utils/calculate.js';
import { calculateBike, calculateDieselCar, calculatePetrolCar } from '../../utils/calculate.js';
import { getEcoFact } from '../../utils/facts.js';
const Home = () => {
    const navigate = useNavigate();
    const [vehicleType, setVehicleType] = useState('bike');
    const [distance, setDistance] = useState(0);
    const [engineSize, setEngineSize] = useState('small');
    const [footprint, setFootprint] = useState();
    const [fact, setFact] = useState();

    useEffect(() => {
        setFact(()=>getEcoFact());
    }, [])
    
    const calculate = (e) => {
        e.preventDefault();
        if (vehicleType === "bike")
            var ans = calculateBike(distance, engineSize)
        if (vehicleType === "petrol-car")
            var ans = calculatePetrolCar(distance, engineSize)
        if (vehicleType === "diesel-car")
            var ans = calculateDieselCar(distance, engineSize)
        setFootprint(()=> ans);
    }

    const login = () => navigate('/login');
    const signup = () => navigate('/signup');
    
    return (
        <>
            <div className='home'>
                <div className='body'>
                    <div className='calc'>
                        <form onSubmit={calculate} className='calcform'>
                            <div>
                                <label htmlFor="vehicle-type" className='vehicle-type'>Select Vehicle Type:</label>
                                <select id="vehicle-type" onChange={(e) => setVehicleType(() => e.target.value)} className='vehicle-select'>
                                    <option value="bike">Bike</option>
                                    <option value="petrol-car">Petrol Car</option>
                                    <option value="diesel-car">Diesel Car</option>
                                </select>
                            </div>
                            <br /><div>
                                <label htmlFor="distance" className='distance'>Enter Distance (in km):</label>
                                <input type="number" id="distance" value={distance} onChange={e => setDistance(() => e.target.value)} placeholder="Enter distance..." className='distance-select' />
                            </div> <br />
                            <div>
                                <label htmlFor="engine-size" className='enginesize'>Select Engine Size:</label>
                                { <select id="engine-size" onChange={e => setEngineSize(() => e.target.value)} className='engine-select'>
                                    <option value="small">Small{vehicleType==="bike" && " (<150cc)"}{vehicleType!="bike" && " (Mini)"}</option>
                                    <option value="medium">Medium{vehicleType==="bike" && " (150-350cc)"}{vehicleType!="bike" && " (Sedan)"}</option>
                                    <option value="large">Large{vehicleType==="bike" && " (>350cc)"}{vehicleType!="bike" && " (SUVs)"}</option>
                                </select>}
                            </div>
                            <br/>
                            <button className='calc-submit'>Submit</button>
                        </form>
                        {footprint && <div align='center'><p className='calc-ans'>CO2 Emitted: {footprint} g CO2</p>
                        <p>Check out our chatbot to reduce Carbon emission</p>
                        </div> }
                    </div>
                    <div className='facts'>
                        <div>
                            <AqiComponent />
                            <h1 className='factshead'>Fun Facts</h1>
                            <p className='factscontent'>
                                {fact}
                            </p>
                        </div>

                    </div>
                </div>
            </div>
            <Chatbot />
        </>
    )
}

export default Home
