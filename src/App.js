import React from 'react';
import './App.css';
import Header from './components/Header'
import Sidebar from './components/Sidebar'


function App() {
 return(
  <>
  <Header />
  <section className='main'>
  <Sidebar />
  </section>
 
  </>
 )
}

export default App;
