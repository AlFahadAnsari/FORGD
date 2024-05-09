import React from 'react'
import Home from './Home/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import { Toaster } from 'react-hot-toast';
import Contact from './components/Contact';
import About from './components/About';

const App = () => {
  return (
    <div>
         <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/feedback' element={<Contact/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
      </Router>
      <Toaster />
    </div>
  )
}

export default App