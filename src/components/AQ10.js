import React, { useState } from "react";
import axios from "axios";
import '../index.css'
function Aq10() {
  const [formData, setFormData] = useState({
    A1_Score: "",
    A2_Score: "",
    A3_Score: "",
    A4_Score: "",
    A5_Score: "",
    A6_Score: "",
    A7_Score: "",
    A8_Score: "",
    A9_Score: "",
    A10_Score: "",
    age: "",
    gender: "",
    jaundice: "",
    ethnicity: "",
    relation: "",
  });
  const { addPredictionResult } = useContext(PredictionContext);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const isFormComplete = Object.values(formData).every((value) => value !== "");
  
    if (!isFormComplete) {
      alert("Please fill in all the fields before submitting.");
      return;
    }
  
    try {
      const response = await axios.post('http://127.0.0.1:5000/predict/aq10', formData);
      console.log(formData);
      console.log("Prediction result:", response.data);
      addPredictionResult(response.data)
    } catch (error) {
      console.error("Error submitting form data:", error);
    }
  };

  return (
    <form className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-lg" onSubmit={handleSubmit}>
      <h3 className="text-xl font-bold mb-4">Autism Spectrum Quotient (AQ-10) Questions</h3>

      {/* Question 1 */}
      <div className="mb-4">
        <p className="font-semibold">1. He/She notices patterns in things all the time</p>
        <div className="flex flex-col">
          <label className="flex items-center">
            <input type="radio" name="A1_Score" value="1" onChange={handleInputChange} className="mr-2" />
            Definitely Agree
          </label>
          <label className="flex items-center">
            <input type="radio" name="A1_Score" value="0" onChange={handleInputChange} className="mr-2" />
            Slightly Agree
          </label>
          <label className="flex items-center">
            <input type="radio" name="A1_Score" value="0" onChange={handleInputChange} className="mr-2" />
            Slightly Disagree
          </label>
          <label className="flex items-center">
            <input type="radio" name="A1_Score" value="0" onChange={handleInputChange} className="mr-2" />
            Definitely Disagree
          </label>
        </div>
      </div>

      {/* Question 2 */}
      <div className="mb-4">
        <p className="font-semibold">2. He/She usually concentrates more on the whole picture, rather than the small details</p>
        <div className="flex flex-col">
          <label className="flex items-center">
            <input type="radio" name="A2_Score" value="1" onChange={handleInputChange} className="mr-2" />
            Definitely Agree
          </label>
          <label className="flex items-center">
            <input type="radio" name="A2_Score" value="1" onChange={handleInputChange} className="mr-2" />
            Slightly Agree
          </label>
          <label className="flex items-center">
            <input type="radio" name="A2_Score" value="0" onChange={handleInputChange} className="mr-2" />
            Slightly Disagree
          </label>
          <label className="flex items-center">
            <input type="radio" name="A2_Score" value="0" onChange={handleInputChange} className="mr-2" />
            Definitely Disagree
          </label>
        </div>
      </div>

      {/* Question 3 */}
      <div className="mb-4">
        <p className="font-semibold">3. In a social group, He/She can easily keep track of several different people’s conversations</p>
        <div className="flex flex-col">
          <label className="flex items-center">
            <input type="radio" name="A3_Score" value="1" onChange={handleInputChange} className="mr-2" />
            Definitely Agree
          </label>
          <label className="flex items-center">
            <input type="radio" name="A3_Score" value="1" onChange={handleInputChange} className="mr-2" />
            Slightly Agree
          </label>
          <label className="flex items-center">
            <input type="radio" name="A3_Score" value="0" onChange={handleInputChange} className="mr-2" />
            Slightly Disagree
          </label>
          <label className="flex items-center">
            <input type="radio" name="A3_Score" value="0" onChange={handleInputChange} className="mr-2" />
            Definitely Disagree
          </label>
        </div>
      </div>

      {/* Question 4 */}
      <div className="mb-4">
        <p className="font-semibold">4. If there is an interruption, He/She can switch back to what He/She was doing very quickly</p>
        <div className="flex flex-col">
          <label className="flex items-center">
            <input type="radio" name="A4_Score" value="1" onChange={handleInputChange} className="mr-2" />
            Definitely Agree
          </label>
          <label className="flex items-center">
            <input type="radio" name="A4_Score" value="1" onChange={handleInputChange} className="mr-2" />
            Slightly Agree
          </label>
          <label className="flex items-center">
            <input type="radio" name="A4_Score" value="0" onChange={handleInputChange} className="mr-2" />
            Slightly Disagree
          </label>
          <label className="flex items-center">
            <input type="radio" name="A4_Score" value="0" onChange={handleInputChange} className="mr-2" />
            Definitely Disagree
          </label>
        </div>
      </div>

      {/* Question 5 */}
      <div className="mb-4">
        <p className="font-semibold">5. He/She frequently finds that He/She doesn’t know how to keep a conversation going</p>
        <div className="flex flex-col">
          <label className="flex items-center">
            <input type="radio" name="A5_Score" value="1" onChange={handleInputChange} className="mr-2" />
            Definitely Agree
          </label>
          <label className="flex items-center">
            <input type="radio" name="A5_Score" value="1" onChange={handleInputChange} className="mr-2" />
            Slightly Agree
          </label>
          <label className="flex items-center">
            <input type="radio" name="A5_Score" value="0" onChange={handleInputChange} className="mr-2" />
            Slightly Disagree
          </label>
          <label className="flex items-center">
            <input type="radio" name="A5_Score" value="0" onChange={handleInputChange} className="mr-2" />
            Definitely Disagree
          </label>
        </div>
      </div>

      {/* Question 6 */}
      <div className="mb-4">
        <p className="font-semibold">6. He/She is good at social chit-chat</p>
        <div className="flex flex-col">
          <label className="flex items-center">
            <input type="radio" name="A6_Score" value="1" onChange={handleInputChange} className="mr-2" />
            Definitely Agree
          </label>
          <label className="flex items-center">
            <input type="radio" name="A6_Score" value="1" onChange={handleInputChange} className="mr-2" />
            Slightly Agree
          </label>
          <label className="flex items-center">
            <input type="radio" name="A6_Score" value="0" onChange={handleInputChange} className="mr-2" />
            Slightly Disagree
          </label>
          <label className="flex items-center">
            <input type="radio" name="A6_Score" value="0" onChange={handleInputChange} className="mr-2" />
            Definitely Disagree
          </label>
        </div>
      </div>

      {/* Question 7 */}
      <div className="mb-4">
        <p className="font-semibold">7. He/She finds it very easy to read between the lines when someone is saying something</p>
        <div className="flex flex-col">
          <label className="flex items-center">
            <input type="radio" name="A7_Score" value="1" onChange={handleInputChange} className="mr-2" />
            Definitely Agree
          </label>
          <label className="flex items-center">
            <input type="radio" name="A7_Score" value="1" onChange={handleInputChange} className="mr-2" />
            Slightly Agree
          </label>
          <label className="flex items-center">
            <input type="radio" name="A7_Score" value="0" onChange={handleInputChange} className="mr-2" />
            Slightly Disagree
          </label>
          <label className="flex items-center">
            <input type="radio" name="A7_Score" value="0" onChange={handleInputChange} className="mr-2" />
            Definitely Disagree
          </label>
        </div>
      </div>

      {/* Question 8 */}
      <div className="mb-4">
        <p className="font-semibold">8. He/She is often the last to understand the point of a joke</p>
        <div className="flex flex-col">
          <label className="flex items-center">
            <input type="radio" name="A8_Score" value="1" onChange={handleInputChange} className="mr-2" />
            Definitely Agree
          </label>
          <label className="flex items-center">
            <input type="radio" name="A8_Score" value="1" onChange={handleInputChange} className="mr-2" />
            Slightly Agree
          </label>
          <label className="flex items-center">
            <input type="radio" name="A8_Score" value="0" onChange={handleInputChange} className="mr-2" />
            Slightly Disagree
          </label>
          <label className="flex items-center">
            <input type="radio" name="A8_Score" value="0" onChange={handleInputChange} className="mr-2" />
            Definitely Disagree
          </label>
        </div>
      </div>

      {/* Question 9 */}
      <div className="mb-4">
        <p className="font-semibold">9. He/She finds it hard to make new friends</p>
        <div className="flex flex-col">
          <label className="flex items-center">
            <input type="radio" name="A9_Score" value="1" onChange={handleInputChange} className="mr-2" />
            Definitely Agree
          </label>
          <label className="flex items-center">
            <input type="radio" name="A9_Score" value="1" onChange={handleInputChange} className="mr-2" />
            Slightly Agree
          </label>
          <label className="flex items-center">
            <input type="radio" name="A9_Score" value="0" onChange={handleInputChange} className="mr-2" />
            Slightly Disagree
          </label>
          <label className="flex items-center">
            <input type="radio" name="A9_Score" value="0" onChange={handleInputChange} className="mr-2" />
            Definitely Disagree
          </label>
        </div>
      </div>

      {/* Question 10 */}
      <div className="mb-4">
        <p className="font-semibold">10. He/She is a good diplomat</p>
        <div className="flex flex-col">
          <label className="flex items-center">
            <input type="radio" name="A10_Score" value="1" onChange={handleInputChange} className="mr-2" />
            Definitely Agree
          </label>
          <label className="flex items-center">
            <input type="radio" name="A10_Score" value="1" onChange={handleInputChange} className="mr-2" />
            Slightly Agree
          </label>
          <label className="flex items-center">
            <input type="radio" name="A10_Score" value="0" onChange={handleInputChange} className="mr-2" />
            Slightly Disagree
          </label>
          <label className="flex items-center">
            <input type="radio" name="A10_Score" value="0" onChange={handleInputChange} className="mr-2" />
            Definitely Disagree
          </label>
        </div>
      </div>

      {/* Additional Fields */}
      <div className="mb-4">
        <label className="block font-semibold">Age:</label>
        <input type="number" name="age" onChange={handleInputChange} className="mt-1 p-2 border border-gray-300 rounded w-full" />
      </div>

      <div className="mb-4">
        <label className="block font-semibold">Gender:</label>
        <select name="gender" onChange={handleInputChange} className="mt-1 p-2 border border-gray-300 rounded w-full">
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block font-semibold">Did you have jaundice at birth?</label>
        <select name="jaundice" onChange={handleInputChange} className="mt-1 p-2 border border-gray-300 rounded w-full">
          <option value="">Select</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block font-semibold">Ethnicity:</label>
        <select name="ethnicity" onChange={handleInputChange} className="mt-1 p-2 border border-gray-300 rounded w-full">
          <option value="">Select Ethnicity</option>
          <option value="Asian">Asian</option>
          <option value="Black">Black</option>
          <option value="Hispanic">Hispanic</option>
          <option value="Latino">Latino</option>
          <option value="Middle Eastern">Middle Eastern</option>
          <option value="Others">Others</option>
          <option value="Pasifika">Pasifika</option>
          <option value="South Asian">South Asian</option>
          <option value="Turkish">Turkish</option>
          <option value="White-European">White-European</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block font-semibold">Relation to the child:</label>
        <select name="relation" onChange={handleInputChange} className="mt-1 p-2 border border-gray-300 rounded w-full">
          <option value="">Select Relation</option>
          <option value="Health care professional">Health care professional</option>
          <option value="Parent">Parent</option>
          <option value="Relative">Relative</option>
          <option value="Others">Others</option>
        </select>
      </div>

      <button type="submit" className="mt-4 bg-blue-600 text-white p-2 rounded hover:bg-blue-700">Submit</button>
    </form>
  );
}

export default Aq10;
