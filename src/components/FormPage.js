import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

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
      {selectedModals.includes('Image') && (
        <div>
          <h3>Image Data</h3>
          <input type="file" name="image" onChange={handleInputChange} />
        </div>
      )}
      {selectedModals.includes('EEG') && (
        <div>
          <h3>EEG Data</h3>
          <input type="text" name="eeg" placeholder="EEG data" onChange={handleInputChange} />
        </div>
      )}
      {selectedModals.includes('Behavioral') && (
        <div>
          <h3>Behavioral Data</h3>
          <input type="text" name="behavior" placeholder="Behavior data" onChange={handleInputChange} />
        </div>
      )}
      {selectedModals.includes('EyeTracking') && (
        <div>
          <h3>Eye Tracking Data</h3>
          <input type="text" name="eye_tracking" placeholder="Eye Tracking data" onChange={handleInputChange} />
        </div>
      )}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default FormPage;
