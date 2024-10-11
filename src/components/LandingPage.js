import React from 'react';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigate = useNavigate();

  const goToPredictor = () => {
    navigate('/home');
  };

  return (
    <div className="home-page h-screen bg-cover bg-top bg-no-repeat p-8 font-serif text-left text-6xl text-shadow-lg">
      <h1 className="text-white shadow-lg shadow-black mb-4">
        AUTISM <br /> SPECTRUM DISORDER
      </h1>
      <div>
        <button
          className="inline-block px-5 py-2 bg-green-600 text-white text-lg rounded-md hover:bg-green-700 transition-colors duration-300"
          onClick={goToPredictor}
        >
          Autism Predictor
        </button>
      </div>
    </div>
  );
}

export default LandingPage;
