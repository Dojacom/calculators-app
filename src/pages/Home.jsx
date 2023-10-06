import React from 'react'
import './Home.css'


export default function Home() {
  return (
    <div className="main-container home">
    <div class="welcome">
    <h1>Welcome to the <span>Calculators App!</span></h1>

    <p>The Calculators App is a powerful and easy-to-use calculator app that can help you with all your mathematical needs. With the Calculators App, you can:</p>
    <ul className='list'>
      <li>Perform basic calculations, such as addition, subtraction, multiplication, and division.</li>
      <li>Do more calculations, such as age calculation, currency conversion, and body mass calculation.</li>
    </ul>
  
    <p class="try">Try the Calculators App today and see how it can help you!</p>
    </div>
    </div>
   
  )
}
