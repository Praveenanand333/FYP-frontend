import React, { useState } from "react";
import axios from "axios";
const EyeTracking = () => {
  const [trial, setTrial] = useState(1);
  const [stimulus, setStimulus] = useState(0);
  const [exportStartTime, setExportStartTime] = useState(0);
  const [exportEndTime, setExportEndTime] = useState(0);
  const [color, setColor] = useState("");
  const [categoryGroup, setCategoryGroup] = useState("");
  const [categoryRight, setCategoryRight] = useState("");
  const [categoryLeft, setCategoryLeft] = useState("");
  const [gender, setGender] = useState("");
  const [ageYears, setAgeYears] = useState(0);
  const [ageMonths, setAgeMonths] = useState(0);
  const [pupilDiameterRight, setPupilDiameterRight] = useState(0);
  const [pupilDiameterLeft, setPupilDiameterLeft] = useState(0);
  const [pointRightX, setPointRightX] = useState(0);
  const [pointLeftX, setPointLeftX] = useState(0);
  const [pointRightY, setPointRightY] = useState(0);
  const [pointLeftY, setPointLeftY] = useState(0);
  const [gazeRightX, setGazeRightX] = useState(0);
  const [gazeRightY, setGazeRightY] = useState(0);
  const [gazeRightZ, setGazeRightZ] = useState(0);
  const [gazeLeftX, setGazeLeftX] = useState(0);
  const [gazeLeftY, setGazeLeftY] = useState(0);
  const [gazeLeftZ, setGazeLeftZ] = useState(0);
  const [pupilSizeRightX, setPupilSizeRightX] = useState(0);
  const [pupilSizeRightY, setPupilSizeRightY] = useState(0);
  const [pupilSizeLeftX, setPupilSizeLeftX] = useState(0);
  const [pupilSizeLeftY, setPupilSizeLeftY] = useState(0);
  const [eyePositionRightX, setEyePositionRightX] = useState(0);
  const [eyePositionRightY, setEyePositionRightY] = useState(0);
  const [eyePositionRightZ, setEyePositionRightZ] = useState(0);
  const [eyePositionLeftX, setEyePositionLeftX] = useState(0);
  const [eyePositionLeftY, setEyePositionLeftY] = useState(0);
  const [eyePositionLeftZ, setEyePositionLeftZ] = useState(0);
  const [pupilPositionRightX, setPupilPositionRightX] = useState(0);
  const [pupilPositionRightY, setPupilPositionRightY] = useState(0);
  const [pupilPositionLeftX, setPupilPositionLeftX] = useState(0);
  const [pupilPositionLeftY, setPupilPositionLeftY] = useState(0);
  const [indexRight, setIndexRight] = useState(0);
  const [indexLeft, setIndexLeft] = useState(0);
  const [output, setOutput] = useState("");

  const handleSubmit = async () => {
    const age = ageYears + ageMonths/12;
    const diameter = pupilDiameterRight + pupilDiameterLeft;
    const pog = pointRightX + pointLeftX + pointRightY + pointLeftY;
    const gazeVector =
      gazeRightX + gazeRightY + gazeRightZ + gazeLeftX + gazeLeftY + gazeLeftZ;
    const pupilSize =
      pupilSizeRightX + pupilSizeRightY + pupilSizeLeftX + pupilSizeLeftY;
    const eyePosition =
      eyePositionRightX +
      eyePositionRightY +
      eyePositionRightZ +
      eyePositionLeftX +
      eyePositionLeftY +
      eyePositionLeftZ;
    const pupilPosition =
      pupilPositionRightX +
      pupilPositionRightY +
      pupilPositionLeftX +
      pupilPositionLeftY;
    const index = indexRight + indexLeft;
    const data = {
      trial,
      stimulus,
      exportStartTime,
      exportEndTime,
      color,
      categoryGroup,
      categoryRight,
      categoryLeft,
      gender,
      age,
      diameter,
      pog,
      gazeVector,
      pupilSize,
      eyePosition,
      pupilPosition,
      index,
    };
    console.log(data)
    try {
      const result = await axios.post("http://127.0.0.1:5000/predict/et", data);

      console.log("results",result)
      if (result.prediction === 1) {
        setOutput('Autism detected');
      } else {
        setOutput('No Autism detected');
      }
    } catch (error) {
      console.error('Error:', error);
      setOutput('An error occurred while predicting');
    }
    setOutput(`
      Trial: ${trial}
      Stimulus: ${stimulus}
      Start Time(ms):${exportStartTime}
      End Time(ms): ${exportEndTime}
      Color: ${color}
      Category Group: ${categoryGroup}
      Category Right: ${categoryRight}
      Category Left: ${categoryLeft}
      Gender: ${gender}
      Age: ${age.toFixed(2)} years
      Diameter: ${diameter.toFixed(2)} mm
      POG: ${pog.toFixed(2)} px
      Gaze Vector: ${gazeVector.toFixed(2)}
      Pupil Size: ${pupilSize.toFixed(2)} px
      Eye Position: ${eyePosition.toFixed(2)} mm
      Pupil Position: ${pupilPosition.toFixed(2)} px
      Index: ${index.toFixed(2)}
    `);

    
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-lg flex flex-wrap">
      <h1 className="text-xl font-bold mb-4 w-full">Enter the Eye Tracking data</h1>
      <form onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(); 
      }}></form>
     

      <label className="flex items-center mt-4 w-full md:w-1/2 p-4">
      <span className="font-semibold">Start Time [ms]:</span>
        <input className="ml-4 border border-gray-300 border-2 "
          type="number"
          value={exportStartTime}
          onChange={(e) => setExportStartTime(parseFloat(e.target.value))}
        />
      </label>

      <label className="flex items-center mt-4 w-full md:w-1/2 p-4">
      <span className="font-semibold"> End Time [ms]:</span>
        <input className="ml-4 border border-gray-300 border-2"
          type="number"
          value={exportEndTime}
          onChange={(e) => setExportEndTime(parseFloat(e.target.value))}
        />
      </label>

      <label className="flex items-center mt-4 w-full md:w-1/2 p-4">
      <span className="font-semibold">Select Color:</span>
        <select className="ml-4 border border-gray-300 border-2" value={color} onChange={(e) => setColor(e.target.value)}>
          <option value="">--Select Color--</option>
          <option value="1">Coral</option>
          <option value="2">CornflowerBlue</option>
          <option value="3">Crimson</option>
          <option value="4">Cyan</option>
          <option value="5">DarkBlue</option>
          <option value="6">DarkCyan</option>
          <option value="7">DarkGoldenrod</option>
          <option value="8">DarkGray</option>
          <option value="9">DarkGreen</option>
          <option value="10">DarkKhaki</option>
          <option value="11">DarkMagenta</option>
          <option value="12">DarkOliveGreen</option>
          <option value="13">DarkOrange</option>
          <option value="14">DarkOrchid</option>
          <option value="15">DarkRed</option>
          <option value="16">DarkSalmon</option>
          <option value="17">DarkSeaGreen</option>
          <option value="18">DarkSlateBlue</option>
          <option value="19">DarkSlateGray</option>
          <option value="20">DarkTurquoise</option>
          <option value="21">DarkViolet</option>
          <option value="22">DeepPink</option>
          <option value="23">DeepSkyBlue</option>
          <option value="24">DimGray</option>
          <option value="25">DodgerBlue</option>
          <option value="26">Firebrick</option>
          <option value="27">ForestGreen</option>
          <option value="28">Gainsboro</option>
          <option value="29">Gold</option>
          <option value="30">Goldenrod</option>
          <option value="31">Gray</option>
          <option value="32">Green</option>
          <option value="33">GreenYellow</option>
          <option value="34">HotPink</option>
          <option value="35">IndianRed</option>
          <option value="36">Indigo</option>
          <option value="37">Khaki</option>
          <option value="38">LawnGreen</option>
          <option value="39">LightBlue</option>
          <option value="40">LightCoral</option>
          <option value="41">LightPink</option>
          <option value="42">LightSalmon</option>
          <option value="43">LightSeaGreen</option>
          <option value="44">LightSkyBlue</option>
          <option value="45">LightSteelBlue</option>
          <option value="46">Lime</option>
          <option value="47">Maroon</option>
          <option value="48">MediumOrchid</option>
          <option value="49">MediumSeaGreen</option>
          <option value="50">MediumSlateBlue</option>
          <option value="51">MediumSpringGreen</option>
          <option value="52">MediumTurquoise</option>
          <option value="53">NavajoWhite</option>
          <option value="54">Navy</option>
          <option value="55">Olive</option>
          <option value="56">OliveDrab</option>
        </select>
      </label>

      <label className="flex items-center mt-4 mt-4 w-full md:w-1/2 p-4">
      <span className="font-semibold">Select Category Group:</span> 
        <select className="ml-4 border border-gray-300 border-2" value={categoryGroup} onChange={(e) => setCategoryGroup(e.target.value)}>
          <option value="">--Select Category Group--</option>
          <option value="0">Eye</option>
          <option value="1">Information</option>
        </select>
      </label>

      <label className="flex items-center mt-4 mt-4 w-full md:w-1/2 p-4">
      <span className="font-semibold">Select Category Left:</span>
        <select className="ml-4 border border-gray-300 border-2" value={categoryLeft} onChange={(e) => setCategoryLeft(e.target.value)}>
          <option value="">--Select Category Left--</option>
          <option value="0">Blink</option>
          <option value="1">Fixation</option>
          <option value="2">Left Click</option>
          <option value="3">Saccade</option>
          <option value="4">Separator</option>
          <option value="5">none</option>
        </select>
      </label>

      <label className="flex items-center mt-4 mt-4 w-full md:w-1/2 p-4">
      <span className="font-semibold">Select Category Right:</span> 
        <select className="ml-4 border border-gray-300 border-2" value={categoryRight} onChange={(e) => setCategoryRight(e.target.value)}>
          <option value="">--Select Category Right--</option>
          <option value="0">Blink</option>
          <option value="1">Fixation</option>
          <option value="2">Left Click</option>
          <option value="3">Saccade</option>
          <option value="4">Separator</option>
          <option value="5">none</option>
        </select>
      </label>

      <label className="flex items-center mt-4 mt-4 w-full md:w-1/2 p-4">
      <span className="font-semibold"> Select Gender:</span>
        <select className="ml-4 border border-gray-300 border-2" value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="">--Select Gender--</option>
          <option value="0">M</option>
          <option value="1">F</option>
        </select>
      </label>

      <label className="flex items-center mt-4 mt-4 w-full md:w-1/2 p-4">
      <span className="font-semibold">Age (Years):</span>
        <input className="ml-4 border border-gray-300 border-2"
          type="number"
          value={ageYears}
          onChange={(e) => setAgeYears(parseFloat(e.target.value))}
        />
      </label>

      <label className="flex items-center mt-4 mt-4 w-full md:w-1/2 p-4">
      <span className="font-semibold">Age (Months):</span> 
        <input className="ml-4 border border-gray-300 border-2"
          type="number"
          value={ageMonths}
          onChange={(e) => setAgeMonths(parseFloat(e.target.value))}
        />
      </label>

      <label className="flex items-center mt-4 mt-4 w-full md:w-1/2 p-4">
      <span className="font-semibold">Pupil Diameter Right [mm]:</span>
        <input className="ml-4 border border-gray-300 border-2"
          type="number"
          value={pupilDiameterRight}
          onChange={(e) => setPupilDiameterRight(parseFloat(e.target.value))}
        />
      </label>

      <label className="flex items-center mt-4 mt-4 w-full md:w-1/2 p-4">
      <span className="font-semibold">Pupil Diameter Left [mm]:</span>
        <input className="ml-4 border border-gray-300 border-2"
          type="number"
          value={pupilDiameterLeft}
          onChange={(e) => setPupilDiameterLeft(parseFloat(e.target.value))}
        />
      </label>

      <label className="flex items-center mt-4 mt-4 w-full md:w-1/2 p-4">
      <span className="font-semibold">Point of Regard Right X [px]:</span>
        <input className="ml-4 border border-gray-300 border-2"
          type="number"
          value={pointRightX}
          onChange={(e) => setPointRightX(parseFloat(e.target.value))}
        />
      </label>

      <label className="flex items-center mt-4 mt-4 w-full md:w-1/2 p-4">
      <span className="font-semibold">Point of Regard Left X [px]:</span>
        <input className="ml-4 border border-gray-300 border-2"
          type="number"
          value={pointLeftX}
          onChange={(e) => setPointLeftX(parseFloat(e.target.value))}
        />
      </label>
      
      <label className="flex items-center mt-4 mt-4 w-full md:w-1/2 p-4">
      <span className="font-semibold">Point of Regard Right Y [px]:</span>
        <input className="ml-4 border border-gray-300 border-2"
          type="number"
          value={pointRightY}
          onChange={(e) => setPointRightY(parseFloat(e.target.value))}
        />
      </label>

      <label className="flex items-center mt-4 mt-4 w-full md:w-1/2 p-4">
      <span className="font-semibold">Point of Regard Left Y [px]:</span>
        <input className="ml-4 border border-gray-300 border-2"
          type="number"
          value={pointLeftY}
          onChange={(e) => setPointLeftY(parseFloat(e.target.value))}
        />
      </label>

      <label className="flex items-center mt-4 mt-4 w-full md:w-1/2 p-4">
      <span className="font-semibold">Gaze Vector Right X:</span>
        <input className="ml-4 border border-gray-300 border-2"
          type="number"
          value={gazeRightX}
          onChange={(e) => setGazeRightX(parseFloat(e.target.value))}
        />
      </label>

      <label className="flex items-center mt-4 mt-4 w-full md:w-1/2 p-4">
      <span className="font-semibold">Gaze Vector Right Y:</span>
        <input className="ml-4 border border-gray-300 border-2"
          type="number"
          value={gazeRightY}
          onChange={(e) => setGazeRightY(parseFloat(e.target.value))}
        />
      </label>
      
      <label className="flex items-center mt-4 mt-4 w-full md:w-1/2 p-4">
      <span className="font-semibold"> Gaze Vector Right Z:</span>
        <input className="ml-4 border border-gray-300 border-2"
          type="number"
          value={gazeRightZ}
          onChange={(e) => setGazeRightZ(parseFloat(e.target.value))}
        />
      </label>

      <label className="flex items-center mt-4 mt-4 w-full md:w-1/2 p-4">
      <span className="font-semibold">Gaze Vector Left X:</span>
        <input className="ml-4 border border-gray-300 border-2"
          type="number"
          value={gazeLeftX}
          onChange={(e) => setGazeLeftX(parseFloat(e.target.value))}
        />
      </label>

      <label className="flex items-center mt-4 mt-4 w-full md:w-1/2 p-4">
      <span className="font-semibold">Gaze Vector Left Y:</span>
        <input className="ml-4 border border-gray-300 border-2"
          type="number"
          value={gazeLeftY}
          onChange={(e) => setGazeLeftY(parseFloat(e.target.value))}
        />
      </label>

      <label className="flex items-center mt-4 mt-4 w-full md:w-1/2 p-4">
      <span className="font-semibold">Gaze Vector Left Z:</span>
        <input className="ml-4 border border-gray-300 border-2"
          type="number"
          value={gazeLeftZ}
          onChange={(e) => setGazeLeftZ(parseFloat(e.target.value))}
        />
      </label>

      <label className="flex items-center mt-4 mt-4 w-full md:w-1/2 p-4">
      <span className="font-semibold">Pupil Size Right X [px]:</span>
        <input className="ml-4 border border-gray-300 border-2"
          type="number"
          value={pupilSizeRightX}
          onChange={(e) => setPupilSizeRightX(parseFloat(e.target.value))}
        />
      </label>

      <label className="flex items-center mt-4 mt-4 w-full md:w-1/2 p-4">
      <span className="font-semibold">Pupil Size Right Y [px]:</span>
        <input className="ml-4 border border-gray-300 border-2"
          type="number"
          value={pupilSizeRightY}
          onChange={(e) => setPupilSizeRightY(parseFloat(e.target.value))}
        />
      </label>
      
      <label className="flex items-center mt-4 mt-4 w-full md:w-1/2 p-4">
      <span className="font-semibold">Pupil Size Left X [px]:</span>
      <input className="ml-4 border border-gray-300 border-2"
          type="number"
          value={pupilSizeLeftX}
          onChange={(e) => setPupilSizeLeftX(parseFloat(e.target.value))}
        />
      </label>

      <label className="flex items-center mt-4 mt-4 w-full md:w-1/2 p-4">
      <span className="font-semibold">Pupil Size Left Y [px]:</span>
        <input className="ml-4 border border-gray-300 border-2"
          type="number"
          value={pupilSizeLeftY}
          onChange={(e) => setPupilSizeLeftY(parseFloat(e.target.value))}
        />
      </label>

      <label className="flex items-center mt-4 mt-4 w-full md:w-1/2 p-4">
      <span className="font-semibold">Eye Position Right X [mm]:</span>
      <input className="ml-4 border border-gray-300 border-2"
          type="number"
          value={eyePositionRightX}
          onChange={(e) => setEyePositionRightX(parseFloat(e.target.value))}
        />
      </label>

      <label className="flex items-center mt-4 mt-4 w-full md:w-1/2 p-4">
      <span className="font-semibold"> Eye Position Right Y [mm]:</span>
      <input className="ml-4 border border-gray-300 border-2"
          type="number"
          value={eyePositionRightY}
          onChange={(e) => setEyePositionRightY(parseFloat(e.target.value))}
        />
      </label>
      
      <label className="flex items-center mt-4 mt-4 w-full md:w-1/2 p-4">
      <span className="font-semibold">Eye Position Right Z [mm]:</span>
      <input className="ml-4 border border-gray-300 border-2"
          type="number"
          value={eyePositionRightZ}
          onChange={(e) => setEyePositionRightZ(parseFloat(e.target.value))}
        />
      </label>

      <label className="flex items-center mt-4 mt-4 w-full md:w-1/2 p-4">
      <span className="font-semibold">Eye Position Left X [mm]:</span>
      <input className="ml-4 border border-gray-300 border-2"
          type="number"
          value={eyePositionLeftX}
          onChange={(e) => setEyePositionLeftX(parseFloat(e.target.value))}
        />
      </label>

      <label className="flex items-center mt-4 mt-4 w-full md:w-1/2 p-4">
      <span className="font-semibold">Eye Position Left Y [mm]:</span>
      <input className="ml-4 border border-gray-300 border-2"
          type="number"
          value={eyePositionLeftY}
          onChange={(e) => setEyePositionLeftY(parseFloat(e.target.value))}
        />
      </label>

      <label className="flex items-center mt-4 mt-4 w-full md:w-1/2 p-4">
      <span className="font-semibold">Eye Position Left Z [mm]:</span>
      <input className="ml-4 border border-gray-300 border-2"
          type="number"
          value={eyePositionLeftZ}
          onChange={(e) => setEyePositionLeftZ(parseFloat(e.target.value))}
        />
      </label>

      <label className="flex items-center mt-4 mt-4 w-full md:w-1/2 p-4">
      <span className="font-semibold">Pupil Position Right X [px]:</span>
      <input className="ml-4 border border-gray-300 border-2"
          type="number"
          value={pupilPositionRightX}
          onChange={(e) => setPupilPositionRightX(parseFloat(e.target.value))}
        />
      </label>

      <label className="flex items-center mt-4 mt-4 w-full md:w-1/2 p-4">
      <span className="font-semibold">Pupil Position Right Y [px]:</span>
      <input className="ml-4 border border-gray-300 border-2"
          type="number"
          value={pupilPositionRightY}
          onChange={(e) => setPupilPositionRightY(parseFloat(e.target.value))}
        />
      </label>
      
      <label className="flex items-center mt-4 mt-4 w-full md:w-1/2 p-4">
      <span className="font-semibold">Pupil Position Left X [px]:</span>
      <input className="ml-4 border border-gray-300 border-2"
          type="number"
          value={pupilPositionLeftX}
          onChange={(e) => setPupilPositionLeftX(parseFloat(e.target.value))}
        />
      </label>

      <label className="flex items-center mt-4 mt-4 w-full md:w-1/2 p-4">
      <span className="font-semibold">Pupil Position Left Y [px]:</span>
      <input className="ml-4 border border-gray-300 border-2"
          type="number"
          value={pupilPositionLeftY}
          onChange={(e) => setPupilPositionLeftY(parseFloat(e.target.value))}
        />
      </label>

      <label className="flex items-center mt-4 mt-4 w-full md:w-1/2 p-4">
      <span className="font-semibold">Pupil Index Right:</span>
      <input className="ml-4 border border-gray-300 border-2"
          type="number"
          value={indexRight}
          onChange={(e) => setIndexRight(parseFloat(e.target.value))}
        />
      </label>

      <label className="flex items-center mt-4 mt-4 w-full md:w-1/2 p-4">
      <span className="font-semibold">Pupil Index Left:</span>
      <input className="ml-4 border border-gray-300 border-2"
          type="number"
          value={indexLeft}
          onChange={(e) => setIndexLeft(parseFloat(e.target.value))}
        />
      </label>

     


      <button className="mt-4  bg-blue-600 text-white p-2 rounded hover:bg-blue-700 w-1/4" onClick={handleSubmit}>Submit</button>

      {/* Display the output */}
      <div className="output">
        <pre>{output}</pre>
      </div>
    </div>
  );
};

export default EyeTracking;
