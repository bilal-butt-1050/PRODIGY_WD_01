import './App.css';
import React from 'react';
import Navbar from './Components/Navbar';
import TopStories from './Components/TopStories';
import About from './Components/About';
import Experiences from './Components/Experiences';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {

  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<TopStories/>}/>
          <Route path="/experiences" element={<Experiences/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
