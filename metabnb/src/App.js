import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";
import './App.css';
import LandingPage from './pages/LandingPage';
import PlaceToStay from './pages/PlaceToStay/PlaceToStay';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/placetostay" element={<PlaceToStay />} />
      </Routes>
    </Router>
  );
}

export default App;
// router testing
