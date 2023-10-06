import React, { useState } from 'react';
import './Temp.css'


const TemperatureConverter = () => {
  const [celcius, setCelcius] = useState('');
  const [farenheit, setFarenheit] = useState('');
  const [kelvin, setKelvin] = useState('');

  const calculateTemp = (event) => {
    const currentValue = parseFloat(event.target.value) || 0;

    switch (event.target.name) {
      case 'celcius':
        setKelvin((currentValue + 273.15).toFixed(2));
        setFarenheit((currentValue * 1.8 + 32).toFixed(2));
        break;
      case 'farenheit':
        setCelcius(((currentValue - 32) / 1.8).toFixed(2));
        setKelvin(((currentValue - 32) / 1.8 + 273.15).toFixed(2));
        break;
      case 'kelvin':
        setCelcius((currentValue - 273.15).toFixed(2));
        setFarenheit(((currentValue - 273.15) * 1.8 + 32).toFixed(2));
        break;
      default:
        break;
    }
  };
  const clearAll = ()=>{
    setCelcius('');
    setFarenheit('');
    setKelvin('');
  }
  return (
    <div className="main-container" id="main-container">
      <div className="temperature-container">
        <h1 className="heading">Temperature Converter</h1>
        <div className="temp-container">
          <label htmlFor="celcius">Celcius:</label>
          <input
            type="number"
            name="celcius"
            value={celcius}
            placeholder="Enter Temperature"
            onChange={calculateTemp}
          />
        </div>
        <div className="temp-container">
          <label htmlFor="farenheit">Farenheit:</label>
          <input
            type="number"
            name="farenheit"
            value={farenheit}
            placeholder="Enter Temperature"
            onChange={calculateTemp}
          />
        </div>
        <div className="temp-container">
          <label htmlFor="kelvin">Kelvin:</label>
          <input
            type="number"
            name="kelvin"
            value={kelvin}
            placeholder="Enter Temperature"
            onChange={calculateTemp}
          />
        </div>
        <button className="clear-btn" onClick={clearAll}>Clear</button>
      </div>
     
    </div>
  );
};

export default TemperatureConverter;
