import React from 'react';
import { usePrediction } from './PredictContext'; // Import the usePrediction hook
import img from '../Images/asd1.jpg';

function ResultPage() {
  const { predictionResults } = usePrediction(); // Access prediction results from context

  return (
    <div className="bg-cover bg-center bg-no-repeat h-screen" style={{ backgroundImage: `url(${img})` }}>
      <div className="container max-w-lg mx-auto bg-blue-100 bg-opacity-70 p-10 rounded-lg shadow-lg text-center backdrop-filter backdrop-blur-md">
        <header>
          <h1 className="text-blue-500 mt-5 text-4xl font-bold mb-4">Your Prediction Results</h1>
          <p className="text-gray-600 italic text-xl mb-8">
            “Understanding leads to empowerment. No matter the outcome, you are on the right path.”
          </p>
        </header>
        {predictionResults.length > 0 ? (
          predictionResults.map((result, index) => {
            const { predicted_class, class_0_probability, class_1_probability } = result;
            const highestProbability = Math.max(class_0_probability, class_1_probability);
            const predictionLabel = predicted_class === 0 ? 'No Autism Detected' : 'Autism Detected';
            const highestProbabilityLabel = predicted_class === 0 ? 'No Autism' : 'Autism';

            return (
              <div key={index} className="result mb-8">
                <p className="text-2xl text-gray-800">
                  <strong>Prediction {index + 1}:</strong>
                </p>
                <p className="text-xl text-gray-800">
                  Diagnosis: <strong className="text-orange-500">{predictionLabel}</strong>
                </p>
                <p className="text-xl text-gray-800">
                  No Autism Probability: <strong className="text-blue-500">{class_0_probability}%</strong>
                </p>
                <p className="text-xl text-gray-800">
                  Autism Probability: <strong className="text-green-500">{class_1_probability}%</strong>
                </p>
                <div className="w-full bg-gray-200 rounded-full h-6 mt-4">
                  <div
                    className={`h-6 rounded-full ${predicted_class === 0 ? 'bg-blue-500' : 'bg-green-500'}`}
                    style={{ width: `${highestProbability*100}%` }}
                  ></div>
                </div>
                <p className="text-xl mt-2 text-gray-800">
                  Highest Probability: <strong className="text-orange-500">{highestProbabilityLabel} ({highestProbability}%)</strong>
                </p>
              </div>
            );
          })
        ) : (
          <p className="text-2xl text-gray-800">No prediction results available.</p>
        )}

      </div>
    </div>
  );
}

export default ResultPage;
