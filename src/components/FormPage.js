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
      const response = await axios.post('/api/predict', formData);
      navigate('/result', { state: { result: response.data } });
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div>
      <h1>Enter Data</h1>
      {selectedModals.includes('Image') && <Image/>}
      {selectedModals.includes('EEG') && <EEG/>}
      {selectedModals.includes('Behavioral') && <Aq10/>}
      {selectedModals.includes('EyeTracking') && <EyeTracking/>}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default FormPage;
