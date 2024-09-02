import React from 'react';
import './App.css';
import Navbar from './component/Navbar';
import MainLayout from './component/Mainlayout';
import Home from './component/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    // <div className="App">
    //   <Navbar />
    //   <MainLayout />
    // </div>
    <Router>
      
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<MainLayout />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>

    </Router>
  );
}

export default App;
