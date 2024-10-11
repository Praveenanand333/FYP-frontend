import React, { useState } from "react";
import axios from "axios";

function EEGUpload() {
  const [eegFile, setEegFile] = useState(null);

  const handleFileChange = (e) => {
    setEegFile(e.target.files[0]); 
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    if (!eegFile) {
      alert("Please select a CSV file.");
      return;
    }

    const formData = new FormData();
    formData.append("file", eegFile);

    try {
      const response = await axios.post("http://127.0.0.1:5000/predict/eeg", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Prediction Result:", response.data);
    } catch (error) {
      console.error("Error uploading EEG data:", error);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h3 className="text-xl font-bold mb-4">EEG Data Upload</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          name="eeg"
          accept=".csv" 
          onChange={handleFileChange}
          className="mb-4 border border-gray-300 rounded-md p-2 w-full"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default EEGUpload;
