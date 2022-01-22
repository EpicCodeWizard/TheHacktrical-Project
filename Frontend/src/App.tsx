import React from 'react';
import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
// import Jobs from './Pages/Jobs';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/jobs" element={<Jobs />} /> */}
      </Routes>
    </div>
  );
}

export default App;
