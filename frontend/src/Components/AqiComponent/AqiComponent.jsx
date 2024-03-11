import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AqiComponent.css'
const AqiComponent = () => {
  const [stationId, setStationId] = useState('');
  const [aqiValue, setAqiValue] = useState(null);
  const apiKey = '99ac0ef7b3929e8f05b825d223bc004d93aa1ea7'; // Replace with your actual API key

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://api.waqi.info/feed/${stationId}/`, {
        params: {
          token: apiKey,
        },
      });
      const aqi = response.data.data.aqi;
      setAqiValue(aqi);
    } catch (error) {
      console.error('Error fetching AQI data:', error);
    }
  };

  // useEffect(() => {
  //   if (stationId.trim() !== '') {
  //     fetchData();
  //   }
  // }, [apiKey, stationId]);

  return (
    <div className='aqicomp'>
      <h2 style={{color:'#fff'}} className='aqihead'>Air Quality Index (AQI) Data</h2>
      <label style={{color:'#fff'}} htmlFor="stationIdInput">Enter City </label>
      <input className='aqi_input'
        type="text"
        id="stationIdInput"
        value={stationId}
        onChange={(e) => setStationId(e.target.value)}
        placeholder="Enter City Name"
      />
      <button type="button" onClick={fetchData} className='aqi-submit'>Get Data</button>
      {aqiValue !== null ? (
        <p style={{color:'#fff'}} className='aqi-value'>AQI: {aqiValue}</p>
      ) : (
        <p style={{color:'#fff'}}>AQI:</p>
      )}
      
    </div>
  );
};

export default AqiComponent;