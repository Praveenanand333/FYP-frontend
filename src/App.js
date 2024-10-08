import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import FormPage from './components/FormPage';
import ResultPage from './components/ResultPage';
import Aq10 from './components/AQ10';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Aq10 />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </Router>
  );
}

export default App;
