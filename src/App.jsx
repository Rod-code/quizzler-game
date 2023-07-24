import Login from './components/Login'
import Signup from './components/Signup'
import Home from './components/Home'
import Quiz from './components/Quiz';
import Leaderboard from './components/LeaderBoard';
// import ProtectedRoute from './components/ProtectedRoute';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
// import { useEffect, useState } from 'react';

function App() {

  return (
    <>
    <BrowserRouter>
          <Routes>
          <Route path="/login" element={<Login/>} />
                <Route path="/" element={<Home />} />
               <Route path="/signup" element={<Signup/>} />
               <Route path="/quiz" element={<Quiz/>} />
               <Route path="/leaderboard" element={<Leaderboard/>} />
               {/* <Route path="/quiz" element={<ProtectedRoute element={<Quiz />} />} />
        <Route path="/leaderboard" element={<ProtectedRoute element={<Leaderboard />} />} />
                */}
          </Routes>
        </BrowserRouter>

   
    </>
  )
}

export default App
