import React from 'react'
import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Age from '../pages/AgeCalculator/Agecalc'
import BMI from '../pages/BMI-Calculator/BMI'
import Calculator from '../pages/Calculator/ArithmeticCalc'
import Currency from '../pages/CurrencyConverter/Currency'
import Temp from '../pages/TemperatureCalc/Temp'


function Sidebar() {
  return (
    <Router>
        <nav className='sidebar'>
            <ul className='sidebar-items'>
                <li>
                    <Link to="/">
                    <span className="icon"><i class="ri-bar-chart-line"></i></span>
                        Home</Link>
                </li>
                <li>
                    <Link to="/Arithmethic-Calculator">
                    <span className="icon"><i class="ri-calculator-line"></i></span>
                        Arithmetic Calculator
                        </Link>
                </li>
                <li>
                    <Link to="/BMI-Calculator">
                    <span className="icon"><i class="ri-body-scan-line"></i></span>
                        BMI Calculator</Link>
                </li>
                <li>
                    <Link to="/Age-Calculator">
                    <span className="icon"><i class="ri-calendar-event-fill"></i></span>
                        Age Calculator</Link>
                </li>
                <li>
                    <Link to="/Currency-Converter">
                    <span className="icon"><i class="ri-currency-fill"></i></span>
                        Currency Converter</Link>
                </li>
                <li>
                    <Link to="/Temperature-Converter">
                    <span className="icon"><i class="ri-temp-hot-line"></i></span>
                        Temperature Converter</Link>
                </li>
                </ul>
                <ul className='sidebar-botom-item'>
                
                <li>
                    <Link to="/">
                    <span className="icon"><i class="ri-settings-3-line"></i></span>
                        Settings</Link>
                </li>
                <li>
                    <Link to="/">
                    <span className="icon"><i class="ri-question-line"></i></span>
                        Help</Link>
                </li>
                <li>
                    <Link to="/">
                    <span className="icon"><i class="ri-logout-box-r-line"></i></span>
                        Log Out</Link>
                </li>
                </ul>
            
        </nav>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Arithmethic-Calculator' element={<Calculator />} />
            <Route path='/BMI-Calculator' element={<BMI />} />
            <Route path='/Age-Calculator' element={<Age />} />
            <Route path='/Temperature-Converter' element={<Temp />} />
            <Route path='/Currency-Converter' element={<Currency />} />
        </Routes>
    </Router>
    )
}

export default Sidebar