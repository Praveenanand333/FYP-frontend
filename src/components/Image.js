import React, { useState } from "react";
import axios from "axios";
import { usePrediction } from "./PredictContext"; 

function Image() {
  const [imageFile, setImageFile] = useState(null);
  const { addPredictionResult } = usePrediction(); 

  const handleFileChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!imageFile) {
      alert("Please select an image file.");
      return;
    }

    const formData = new FormData();
    formData.append("file", imageFile);

    try {
      const response = await axios.post("http://127.0.0.1:5000/predict/image", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      addPredictionResult(response.data);
      console.log("Prediction Result:", response.data);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h3 className="text-xl font-bold mb-4">Image Data</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          name="image"
          accept="image/*"
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

export default Image;
