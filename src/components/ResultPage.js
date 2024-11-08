import React from 'react';
import { usePrediction } from './PredictContext'; 
import img from '../Images/asd1.jpg';

function ResultPage() {
  const { predictionResults } = usePrediction();

  // Calculate average probabilities if more than one prediction result exists
  let avgNoAutismProbability = 0;
  let avgAutismProbability = 0;

  if (predictionResults.length > 1) {
    avgNoAutismProbability = predictionResults.reduce((acc, result) => acc + result.class_0_probability, 0) / predictionResults.length;
    avgAutismProbability = predictionResults.reduce((acc, result) => acc + result.class_1_probability, 0) / predictionResults.length;
  }

  return (
    <div className="min-h-screen bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url(${img})` }}>
      <div className="container max-w-lg p-10 mx-auto text-center bg-blue-100 rounded-lg shadow-lg bg-opacity-70 backdrop-filter backdrop-blur-md">
        <header>
          <h1 className="mt-5 mb-4 text-4xl font-bold text-blue-500">Your Prediction Results</h1>
          <p className="mb-8 text-xl italic text-gray-600">
            “Understanding leads to empowerment. No matter the outcome, you are on the right path.”
          </p>
        </header>
        {predictionResults.length > 0 ? (
          <>
            {predictionResults.map((result, index) => {
              const { predicted_class, class_0_probability, class_1_probability } = result;
              const highestProbability = Math.max(class_0_probability, class_1_probability);
              const predictionLabel = predicted_class === 0 ? 'No Autism Detected' : 'Autism Detected';
              const highestProbabilityLabel = predicted_class === 0 ? 'No Autism' : 'Autism';

              return (
                <div key={index} className="mb-8 result">
                  <p className="text-2xl text-gray-800">
                    <strong>Prediction {index + 1}:</strong>
                  </p>
                  <p className="text-xl text-gray-800">
                    Diagnosis: <strong className="text-orange-500">{predictionLabel}</strong>
                  </p>
                  <p className="text-xl text-gray-800">
                    No Autism Probability: <strong className="text-blue-500">{(class_0_probability * 100).toFixed(2)}%</strong>
                  </p>
                  <p className="text-xl text-gray-800">
                    Autism Probability: <strong className="text-green-500">{(class_1_probability * 100).toFixed(2)}%</strong>
                  </p>
                  <div className="w-full h-6 mt-4 bg-gray-200 rounded-full">
                    <div
                      className={`h-6 rounded-full ${predicted_class === 0 ? 'bg-blue-500' : 'bg-green-500'}`}
                      style={{ width: `${(highestProbability * 100).toFixed(2)}%` }}
                    ></div>
                  </div>
                  <p className="mt-2 text-xl text-gray-800">
                    Highest Probability: <strong className="text-orange-500">{highestProbabilityLabel} ({(highestProbability * 100).toFixed(2)}%)</strong>
                  </p>
                </div>
              );
            })}
            {predictionResults.length > 1 && (
              <div className="mt-8 text-xl text-gray-800">
                <p><strong>Final Non Autism Probability:</strong> <span className="text-blue-500">{(avgNoAutismProbability * 100).toFixed(2)}%</span></p>
                <p><strong>Final Autism Probability:</strong> <span className="text-green-500">{(avgAutismProbability * 100).toFixed(2)}%</span></p>
              </div>
            )}
          </>
        ) : (
          <p className="text-2xl text-gray-800">No prediction results available.</p>
        )}
      </div>
    </div>
  );
}

export default ResultPage;
