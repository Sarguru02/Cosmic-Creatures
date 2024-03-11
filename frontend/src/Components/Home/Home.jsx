import React, { useState } from 'react'
import './Home.css';
import Chatbot from '../Chatbot/Chatbot';
import { useNavigate } from 'react-router-dom';
import AqiComponent from '../AqiComponent/AqiComponent';
import '../../utils/calculate.js';
import { calculateBike, calculateDieselCar, calculatePetrolCar } from '../../utils/calculate.js';
const Home = () => {
    const navigate = useNavigate();
    const [vehicleType, setVehicleType] = useState('bike');
    const [distance, setDistance] = useState(0);
    const [engineSize, setEngineSize] = useState('small');
    const [footprint, setFootprint] = useState();

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
    const ecoFacts = [
        'Recycling one aluminum can saves enough energy to run a TV for three hours.',
        'Over 1 million seabirds and 100,000 marine animals die from plastic pollution annually.',
        'The Great Barrier Reef is the largest living structure on Earth but is under threat due to climate change.',
        'Planting trees is a simple way to combat climate change as they absorb CO2.',
        "The fashion industry is responsible for 10% of the world's carbon emissions.",
        'Bees are essential pollinators for many crops, but their populations are declining.',
        'A vegetarian diet has a smaller carbon footprint compared to a meat-based diet.',
        'The amount of electronic waste (e-waste) generated globally is increasing rapidly.',
        'Fast fashion contributes to water pollution and unethical labor practices.',
        "The Amazon rainforest produces 20% of the world's oxygen.",
        'Solar energy is a clean and renewable source of power.',
        'The ozone layer is gradually recovering due to international efforts to reduce ozone-depleting substances.',
        'Electric vehicles produce fewer emissions than traditional gasoline-powered cars.',
        'Overfishing is depleting global fish populations and harming marine ecosystems.',
        "The world's largest landfill is in the Pacific Ocean, known as the Great Pacific Garbage Patch.",
        'Composting kitchen waste reduces methane emissions from landfills.',
        'The production of one ton of paper contributes to 17 trees being cut down.',
        'The average shower uses 2.5 gallons of water per minute.',
        'Bamboo is a sustainable alternative to traditional wood due to its rapid growth.',
        'The Paris Agreement aims to limit global temperature increases to well below 2 degrees Celsius.',
        'Microplastics have been found in remote areas, including the Arctic and Antarctica.',
        'Food waste contributes to methane emissions in landfills.',
        'Wetlands play a crucial role in filtering water and providing habitat for diverse species.',
        'The concept of a circular economy promotes recycling and reusing materials to reduce waste.',
        'The production of a single hamburger requires a large amount of water and contributes to deforestation.'
      ];
      
      const randomIndex = Math.floor(Math.random() * ecoFacts.length);
      console.log(ecoFacts[randomIndex]);
    return (
        <>
            <div className='home'>
                <div className='header'>
                    <h1 className='PN'>EcoCalc</h1>
                    <div className='button-holder'>
                        <button onClick={login} className='login'>Login</button>
                        <button onClick={signup} className='signup'>Signup</button>
                    </div>
                </div>
                <hr /><hr />
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
                                    <option value="small">Small</option>
                                    <option value="medium">Medium</option>
                                    <option value="large">Large</option>
                                </select>}
                            </div>
                            <br/>
                            <button className='calc-submit'>Submit</button>
                        </form>
                        {footprint && <p className='calc-ans'>CO2 Emitted: {footprint} g CO2/km</p> }
                    </div>
                    <div className='facts'>
                        <div>
                            <AqiComponent />
                            <h1 className='factshead'>Fun Facts</h1>
                            <p className='factscontent'>
                                {ecoFacts[randomIndex]}

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
