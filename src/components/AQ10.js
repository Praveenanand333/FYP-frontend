import React, { useState } from "react";
import axios from "axios";
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
    gender: "", // 0 for Male, 1 for Female
    jaundice: "", // 1 for Yes, 0 for No
    ethnicity: "",
    relation: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Check if all fields are filled
    const isFormComplete = Object.values(formData).every((value) => value !== "");
  
    if (!isFormComplete) {
      alert("Please fill in all the fields before submitting.");
      return;
    }
  
    try {
      // Make the API call only if all fields are filled
      const response = await axios.post('http://127.0.0.1:5000/predict/aq10', formData);
      console.log(formData)
      console.log("Prediction result:", response.data);
    } catch (error) {
      console.error("Error submitting form data:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Autism Spectrum Quotient (AQ-10) Questions</h3>

      {/* Question 1 */}
      <div>
        <p>1. He/She notices patterns in things all the time</p>
        <label>
          <input
            type="radio"
            name="A1_Score"
            value="1"
            onChange={handleInputChange}
          />
          Definitely Agree
        </label>
        <label>
          <input
            type="radio"
            name="A1_Score"
            value="1"
            onChange={handleInputChange}
          />
          Slightly Agree
        </label>
        <label>
          <input
            type="radio"
            name="A1_Score"
            value="0"
            onChange={handleInputChange}
          />
          Slightly Disagree
        </label>
        <label>
          <input
            type="radio"
            name="A1_Score"
            value="0"
            onChange={handleInputChange}
          />
          Definitely Disagree
        </label>
      </div>

      {/* Question 2 */}
      <div>
        <p>2. He/She usually concentrates more on the whole picture, rather than the small details</p>
        <label>
          <input
            type="radio"
            name="A2_Score"
            value="0"
            onChange={handleInputChange}
          />
          Definitely Agree
        </label>
        <label>
          <input
            type="radio"
            name="A2_Score"
            value="0"
            onChange={handleInputChange}
          />
          Slightly Agree
        </label>
        <label>
          <input
            type="radio"
            name="A2_Score"
            value="1"
            onChange={handleInputChange}
          />
          Slightly Disagree
        </label>
        <label>
          <input
            type="radio"
            name="A2_Score"
            value="1"
            onChange={handleInputChange}
          />
          Definitely Disagree
        </label>
      </div>

      {/* Question 3 */}
      <div>
        <p>3. In a social group, He/She can easily keep track of several different people’s conversations</p>
        <label>
          <input
            type="radio"
            name="A3_Score"
            value="0"
            onChange={handleInputChange}
          />
          Definitely Agree
        </label>
        <label>
          <input
            type="radio"
            name="A3_Score"
            value="0"
            onChange={handleInputChange}
          />
          Slightly Agree
        </label>
        <label>
          <input
            type="radio"
            name="A3_Score"
            value="1"
            onChange={handleInputChange}
          />
          Slightly Disagree
        </label>
        <label>
          <input
            type="radio"
            name="A3_Score"
            value="1"
            onChange={handleInputChange}
          />
          Definitely Disagree
        </label>
      </div>

      {/* Question 4 */}
      <div>
        <p>4. If there is an interruption, He/She can switch back to what He/She was doing very quickly</p>
        <label>
          <input
            type="radio"
            name="A4_Score"
            value="0"
            onChange={handleInputChange}
          />
          Definitely Agree
        </label>
        <label>
          <input
            type="radio"
            name="A4_Score"
            value="0"
            onChange={handleInputChange}
          />
          Slightly Agree
        </label>
        <label>
          <input
            type="radio"
            name="A4_Score"
            value="1"
            onChange={handleInputChange}
          />
          Slightly Disagree
        </label>
        <label>
          <input
            type="radio"
            name="A4_Score"
            value="1"
            onChange={handleInputChange}
          />
          Definitely Disagree
        </label>
      </div>

      {/* Question 5 */}
      <div>
        <p>5. He/She frequently finds that He/She doesn’t know how to keep a conversation going</p>
        <label>
          <input
            type="radio"
            name="A5_Score"
            value="0"
            onChange={handleInputChange}
          />
          Definitely Agree
        </label>
        <label>
          <input
            type="radio"
            name="A5_Score"
            value="0"
            onChange={handleInputChange}
          />
          Slightly Agree
        </label>
        <label>
          <input
            type="radio"
            name="A5_Score"
            value="1"
            onChange={handleInputChange}
          />
          Slightly Disagree
        </label>
        <label>
          <input
            type="radio"
            name="A5_Score"
            value="1"
            onChange={handleInputChange}
          />
          Definitely Disagree
        </label>
      </div>

      {/* Question 6 */}
      <div>
        <p>6. He/She is good at social chit-chat</p>
        <label>
          <input
            type="radio"
            name="A6_Score"
            value="0"
            onChange={handleInputChange}
          />
          Definitely Agree
        </label>
        <label>
          <input
            type="radio"
            name="A6_Score"
            value="0"
            onChange={handleInputChange}
          />
          Slightly Agree
        </label>
        <label>
          <input
            type="radio"
            name="A6_Score"
            value="1"
            onChange={handleInputChange}
          />
          Slightly Disagree
        </label>
        <label>
          <input
            type="radio"
            name="A6_Score"
            value="1"
            onChange={handleInputChange}
          />
          Definitely Disagree
        </label>
      </div>

      {/* Question 7 */}
      <div>
        <p>7. When He/She was younger, He/She used to enjoy playing games involving pretending with other children</p>
        <label>
          <input
            type="radio"
            name="A7_Score"
            value="1"
            onChange={handleInputChange}
          />
          Definitely Agree
        </label>
        <label>
          <input
            type="radio"
            name="A7_Score"
            value="1"
            onChange={handleInputChange}
          />
          Slightly Agree
        </label>
        <label>
          <input
            type="radio"
            name="A7_Score"
            value="0"
            onChange={handleInputChange}
          />
          Slightly Disagree
        </label>
        <label>
          <input
            type="radio"
            name="A7_Score"
            value="0"
            onChange={handleInputChange}
          />
          Definitely Disagree
        </label>
      </div>

      {/* Question 8 */}
      <div>
        <p>8. He/She finds it difficult to imagine what it would be like to be someone else</p>
        <label>
          <input
            type="radio"
            name="A8_Score"
            value="1"
            onChange={handleInputChange}
          />
          Definitely Agree
        </label>
        <label>
          <input
            type="radio"
            name="A8_Score"
            value="1"
            onChange={handleInputChange}
          />
          Slightly Agree
        </label>
        <label>
          <input
            type="radio"
            name="A8_Score"
            value="0"
            onChange={handleInputChange}
          />
          Slightly Disagree
        </label>
        <label>
          <input
            type="radio"
            name="A8_Score"
            value="0"
            onChange={handleInputChange}
          />
          Definitely Disagree
        </label>
      </div>

      {/* Question 9 */}
      <div>
        <p>9. He/She finds social situations easy</p>
        <label>
          <input
            type="radio"
            name="A9_Score"
            value="0"
            onChange={handleInputChange}
          />
          Definitely Agree
        </label>
        <label>
          <input
            type="radio"
            name="A9_Score"
            value="0"
            onChange={handleInputChange}
          />
          Slightly Agree
        </label>
        <label>
          <input
            type="radio"
            name="A9_Score"
            value="1"
            onChange={handleInputChange}
          />
          Slightly Disagree
        </label>
        <label>
          <input
            type="radio"
            name="A9_Score"
            value="1"
            onChange={handleInputChange}
          />
          Definitely Disagree
        </label>
      </div>

      {/* Question 10 */}
      <div>
        <p>10. He/She finds it hard to make new friends</p>
        <label>
          <input
            type="radio"
            name="A10_Score"
            value="1"
            onChange={handleInputChange}
          />
          Definitely Agree
        </label>
        <label>
          <input
            type="radio"
            name="A10_Score"
            value="1"
            onChange={handleInputChange}
          />
          Slightly Agree
        </label>
        <label>
          <input
            type="radio"
            name="A10_Score"
            value="0"
            onChange={handleInputChange}
          />
          Slightly Disagree
        </label>
        <label>
          <input
            type="radio"
            name="A10_Score"
            value="0"
            onChange={handleInputChange}
          />
          Definitely Disagree
        </label>
      </div>
      <div>
        <label>Age:</label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Gender:</label>
        <select name="gender" value={formData.gender} onChange={handleInputChange}>
          <option value="">Select Gender</option>
          <option value="0">Male</option>
          <option value="1">Female</option>
        </select>
      </div>

      <div>
        <label>Jaundice:</label>
        <select name="jaundice" value={formData.jaundice} onChange={handleInputChange}>
          <option value="">Select</option>
          <option value="1">Yes</option>
          <option value="0">No</option>
        </select>
      </div>
      <div>
        <label>Ethnicity:</label>
        <select name="ethnicity" value={formData.ethnicity} onChange={handleInputChange}>
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
      <div>
        <label>Relation:</label>
        <select name="relation" value={formData.relation} onChange={handleInputChange}>
          <option value="">Select Relation</option>
          <option value="Health care professional">Health care professional</option>
          <option value="Others">Others</option>
          <option value="Parent">Parent</option>
          <option value="Relative">Relative</option>
          <option value="Self">Self</option>
        </select>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default Aq10;
