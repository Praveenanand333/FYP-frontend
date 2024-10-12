import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Aq10 from './AQ10';
import Image from './Image';
import EEG from './EEG';
import EyeTracking from './EyeTracking';

function FormPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { selectedModals } = location.state;

  const [formData, setFormData] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    try {
      
      navigate('/result');
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center mb-6">Enter Data for Prediction</h1>
      <p className="text-gray-700 mb-4">
        Please provide the necessary data for analysis. Select the relevant input methods below to upload your data.
      </p>
      <div className="space-y-4">
        {selectedModals.includes('Image') && <Image />}
        {selectedModals.includes('EEG') && <EEG />}
        {selectedModals.includes('Behavioral') && <Aq10 />}
        {selectedModals.includes('EyeTracking') && <EyeTracking />}
      </div>
      <div className="mt-6">
        <button
          onClick={handleSubmit}
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
        >
          Submit Data
        </button>
      </div>
    </div>
  );
}

export default FormPage;
