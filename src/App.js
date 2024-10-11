import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PredictionProvider } from './components/PredictContext';
import HomePage from './components/HomePage';
import FormPage from './components/FormPage';
import ResultPage from './components/ResultPage';
import Aq10 from './components/AQ10';
import Image from './components/Image';
import EEG from './components/EEG';
import LandingPage from './components/LandingPage';

function App() {
  return (
    <PredictionProvider> 
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/form" element={<FormPage />} />
          <Route path="/result" element={<ResultPage />} />
        </Routes>
      </Router>
    </PredictionProvider>
  );
}

export default App;
