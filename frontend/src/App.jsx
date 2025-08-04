import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Internships from './pages/Internships'
import Navbar from './components/Navbar.jsx'
import './index.css';
import NavbarAdmin from './components/NavbarAdmin.jsx'
import Admin from './pages/Admin.jsx'


function App() {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/internships' element={<Internships/>}/>
      <Route path='/internships/:internshipsId' element={<Internships/>}/>
      <Route path='/admin' element={<Admin/>}/>





      
    </Routes>  
    </div>
  )
}

export default App