import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './Page/Home/Homescreen';
import NavBar from './Page/Home/NavBar';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="*" element={<div>404 Not Found</div>}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
