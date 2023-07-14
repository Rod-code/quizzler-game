import Login from './components/Login'
import Signup from './components/Signup'
import Home from './components/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
// import { useEffect, useState } from 'react';

function App() {



  
  

  return (
    <>
    <BrowserRouter>
          <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login/>} />
              
               <Route path="/signup" element={<Signup/>} />
               
          </Routes>
        </BrowserRouter>

   
    </>
  )
}

export default App