import React, {useState, useEffect} from 'react'
import './Age.css';




export default function Agecalc() {
  const [birthdate, setBirthdate] = useState('');
  const [age, setAge] = useState({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const calculate = () => {
    const birthdateDate = new Date(birthdate);
    const now = new Date();
    const ageInMs = now - birthdateDate;
    const ageInS = ageInMs / 1000;
    const ageInMins = ageInS / 60;
    const ageInHrs = ageInMins / 60;
    const ageInDays = ageInHrs / 24;
    const ageInMonths = ageInDays / 30.4375;
    const ageInYears = ageInMonths / 12;

    setAge({
      years: Math.floor(ageInYears),
      months: Math.floor(ageInMonths % 12),
      days: Math.floor(ageInDays % 30.4375),
      hours: Math.floor(ageInHrs % 24),
      minutes: Math.floor(ageInMins % 60),
      seconds: Math.floor(ageInS % 60),
    });
  };

  const reset = () => {
    window.location.reload();
  };

useEffect(()=>{
setTimeout(setAge.seconds)
},[])

  return (
    <div className="main-container main-cont" id="main-container">
      
      <main className="age-container cont">
      
        <div className="input">
          <label htmlFor="birthdate">Enter Your Birthdate:</label>
          <input
            type="date"
            id="birthdate"
            value={birthdate}
            onChange={(e) => setBirthdate(e.target.value)}
          />
        </div>
        <ul>
          <li>
            <span id="years">{age.years}</span>Years
          </li>
          <li>
            <span id="months">{age.months}</span>Months
          </li>
          <li>
            <span id="days">{age.days}</span>Days
          </li>
          <li>
            <span id="hours">{age.hours}</span>Hours
          </li>
          <li>
            <span id="minutes">{age.minutes}</span>Minutes
          </li>
          <li>
            <span id="seconds">{age.seconds}</span>Seconds
          </li>
        </ul>
        <div className="btns">
          <button onClick={calculate}>Calculate</button>
          <button onClick={reset}>Reset</button>
        </div>
      </main>
    </div>
  );
};
