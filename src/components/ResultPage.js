import React from 'react';
import { useLocation } from 'react-router-dom';

function ResultPage() {
  const location = useLocation();
  const { result } = location.state;

  return (
    <div>
      <h1>Prediction Result</h1>
      <p>{result}</p>
    </div>
  );
}

export default ResultPage;
