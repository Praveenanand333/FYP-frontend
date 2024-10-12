import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import img1 from '../Images/img2.jpg';
function HomePage() {
  const [selectedModals, setSelectedModals] = useState([]);
  const navigate = useNavigate();

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedModals((prev) => [...prev, value]);
    } else {
      setSelectedModals((prev) => prev.filter((modal) => modal !== value));
    }
  };

  const handleNext = () => {
    navigate('/form', { state: { selectedModals } });
  };

  return (
    <div
      className="flex flex-col justify-start items-center h-screen p-6  bg-cover bg-center"
      style={{ backgroundImage: `url(${img1})` }}
    >
      <div className="flex justify-start items-center w-full pl-12">
        <div className="bg-gray-100 p-10 rounded-lg shadow-md w-96 text-center">
          <h1 className="text-2xl font-bold text-green-600 mb-4">Autism Predictor</h1>
          <p className="text-lg text-gray-600 mb-6">Select Data Modalities</p>
          <div className="text-left mb-6">
            <div className="checkbox mb-2">
              <input
                type="checkbox"
                value="Image"
                onChange={handleCheckboxChange}
                className="mr-2"
              />
              Image
            </div>
            <div className="checkbox mb-2">
              <input
                type="checkbox"
                value="EEG"
                onChange={handleCheckboxChange}
                className="mr-2"
              />
              EEG
            </div>
            <div className="checkbox mb-2">
              <input
                type="checkbox"
                value="Behavioral"
                onChange={handleCheckboxChange}
                className="mr-2"
              />
              Behavioral Data
            </div>
            <div className="checkbox mb-2">
              <input
                type="checkbox"
                value="EyeTracking"
                onChange={handleCheckboxChange}
                className="mr-2"
              />
              Eye Tracking
            </div>
          </div>
          <button
            onClick={handleNext}
            className="bg-green-600 text-white py-2 px-6 rounded-md hover:bg-green-700 transition-all duration-300"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
