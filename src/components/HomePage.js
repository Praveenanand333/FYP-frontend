import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
    <div>
      <h1>Select Data Modalities</h1>
      <label>
        <input
          type="checkbox"
          value="Image"
          onChange={handleCheckboxChange}
        /> Image
      </label>
      <label>
        <input
          type="checkbox"
          value="EEG"
          onChange={handleCheckboxChange}
        /> EEG
      </label>
      <label>
        <input
          type="checkbox"
          value="Behavioral"
          onChange={handleCheckboxChange}
        /> Behavioral Data
      </label>
      <label>
        <input
          type="checkbox"
          value="EyeTracking"
          onChange={handleCheckboxChange}
        /> Eye Tracking
      </label>
      <button onClick={handleNext}>Next</button>
    </div>
  );
}

export default HomePage;
