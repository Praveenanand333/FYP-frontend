
import React, { createContext, useContext, useState } from "react";

const PredictionContext = createContext();

export const PredictionProvider = ({ children }) => {
  const [predictionResults, setPredictionResults] = useState([]); 

  const addPredictionResult = (result) => {
    setPredictionResults((prevResults) => [...prevResults, result]);
  };

  return (
    <PredictionContext.Provider value={{ predictionResults, addPredictionResult }}>
      {children}
    </PredictionContext.Provider>
  );
};

export const usePrediction = () => useContext(PredictionContext);
