import React, {useState, useEffect} from 'react'
import Profile from '../assets/profile.jpg'



function Header() {
    const [currentDateTime, setCurrentDateTime] = useState('');

  useEffect(() => {
    // Update the current date and time every second
    const intervalId = setInterval(() => {
      const now = new Date();
      const formattedDateTime = `${now.toLocaleDateString()} ${now.toLocaleTimeString()}`;
      setCurrentDateTime(formattedDateTime);
    }, 1000);

    // Clear the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className='header'>
        <div className="logo">
            <i class="ri-menu-line menu"></i>
            <h2>CALCULATOR<span> APP.</span></h2>
        </div>
        <div className="header-items">
           <div className='currentDate'>{currentDateTime}</div>
            <div className="profile">
                <img src={Profile} alt='Ismail'/>
            </div>
        </div>
    </section>
  )
}

export default Header