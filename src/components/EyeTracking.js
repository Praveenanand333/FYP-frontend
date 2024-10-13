import React, { useState } from "react";
import axios from "axios";
const EyeTracking = () => {
  const [trial, setTrial] = useState("");
  const [stimulus, setStimulus] = useState("");
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
    <div>
      <h1>ML Model Input Interface</h1>
      <form onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(); // Trigger handleSubmit on form submit
      }}></form>
      <label>
        Select Trial:
        <select value={trial} onChange={(e) => setTrial(e.target.value)}>
          <option value="">--Select Trial--</option>
          <option value="1">Trial001</option>
          <option value="2">Trial002</option>
          <option value="3">Trial003</option>
          <option value="4">Trial004</option>
          <option value="5">Trial005</option>
          <option value="6">Trial006</option>
          <option value="7">Trial007</option>
          <option value="8">Trial008</option>
          <option value="9">Trial009</option>
          <option value="10">Trial010</option>
          <option value="11">Trial011</option>
          <option value="12">Trial012</option>
          <option value="13">Trial013</option>
          <option value="14">Trial014</option>
          <option value="15">Trial015</option>
          <option value="16">Trial016</option>
          <option value="17">Trial017</option>
          <option value="18">Trial018</option>
          <option value="19">Trial019</option>
          <option value="20">Trial020</option>
          <option value="21">Trial021</option>
          <option value="22">Trial022</option>
          <option value="23">Trial023</option>
          <option value="24">Trial024</option>
          <option value="25">Trial025</option>
          <option value="26">Trial026</option>
          <option value="27">Trial027</option>
          <option value="28">Trial028</option>
          <option value="29">Trial029</option>
          <option value="30">Trial030</option>
          <option value="31">Trial031</option>
          <option value="32">Trial032</option>
          <option value="33">Trial033</option>
          <option value="34">Trial034</option>
        </select>
      </label>

      <label>
        Select Stimulus
        <select value={stimulus} onChange={(e) => setStimulus(e.target.value)}>
          <option value="">--Select Stimulus--</option>
          <option value="0">01 coucou g.jpg</option>
          <option value="1">01 neutre2.avi</option>
          <option value="2">01 neutre22.avi</option>
          <option value="3">01 neutre3.avi</option>
          <option value="4">01vnvg151201b1.avi</option>
          <option value="5">02 coucou d.jpg</option>
          <option value="6">02 devant.jpg</option>
          <option value="7">02 neutre visage gris.jpg</option>
          <option value="8">03 bonbons triste vs joie.avi</option>
          <option value="9">03 devant.jpg</option>
          <option value="10">03 regard chien g.jpg</option>
          <option value="11">03 vole triste vs joie1.avi</option>
          <option value="12">04 a triste joie.jpg</option>
          <option value="13">04 b joie triste - copie.jpg</option>
          <option value="14">04 regard chien d.jpg</option>
          <option value="15">04 tete chien g.jpg</option>
          <option value="16">05 punition orale triste vs joie.avi</option>
          <option value="17">05 sophie sous l'eau joie vs triste1.avi</option>
          <option value="18">05 tete chien d.jpg</option>
          <option value="19">05 tete point chien g.jpg</option>
          <option value="20">06 a triste joie.jpg</option>
          <option value="21">06 b joie triste.jpg</option>
          <option value="22">06 devant point chien g.jpg</option>
          <option value="23">06 tete point chien d.jpg</option>
          <option value="24">07 cadeau dernier.avi</option>
          <option value="25">07 devant point chien d.jpg</option>
          <option value="26">07 devant.jpg</option>
          <option value="27">07 tombe joie vs triste2.avi</option>
          <option value="28">08 b triste joie.jpg</option>
          <option value="29">08 devant.jpg</option>
          <option value="30">08 voc chien g.jpg</option>
          <option value="31">09 cadeau dernier1.avi</option>
          <option value="32">09 tombe joie vs triste1.avi</option>
          <option value="33">09 voc chien d.jpg</option>
          <option value="34">09 voc devant g.jpg</option>
          <option value="35">1 coucou D.jpg</option>
          <option value="36">1 coucou D.png</option>
          <option value="37">10 a joie triste.jpg</option>
          <option value="38">10 voc devant.jpg</option>
          <option value="39">11 devant.jpg</option>
          <option value="40">11 punition orale triste vs joie1.avi</option>
          <option value="41">11 sophie sous l'eau joie vs triste.avi</option>
          <option value="42">11 yeux chat D.jpg</option>
          <option value="43">11 yeux chat G.png</option>
          <option value="44">11 yeux chat d.jpg</option>
          <option value="45">11 yeux chat gauche.jpg</option>
          <option value="46">12 a triste joie - copie.jpg</option>
          <option value="47">12 b joie triste - copie.jpg</option>
          <option value="48">12 tete chat G.png</option>
          <option value="49">12 tete chat droite.jpg</option>
          <option value="50">12 tete chat gauche.jpg</option>
          <option value="51">12 yeux chat gauche.jpg</option>
          <option value="52">13 bonbons triste vs joie1.avi</option>
          <option value="53">13 tete chat gauche.jpg</option>
          <option value="54">13 tete pointage chat G.png</option>
          <option value="55">13 tete pointage chat droite.jpg</option>
          <option value="56">13 tete pointage chat gauche.jpg</option>
          <option value="57">13 vole triste vs joie.avi</option>
          <option value="58">14 a triste joie - copie.jpg</option>
          <option value="59">14 b joie triste.jpg</option>
          <option value="60">14 devant point chat G.png</option>
          <option value="61">14 devant point chat droite.jpg</option>
          <option value="62">14 devant point chat gauche.jpg</option>
          <option value="63">14 tete pointage chat gauche.jpg</option>
          <option value="64">15 devant - Copie.jpg</option>
          <option value="65">15 devant point chat gauche.jpg</option>
          <option value="66">15 devant.jpg</option>
          <option value="67">15 devant.png</option>
          <option value="68">16 devant.jpg</option>
          <option value="69">16 voc chat G.png</option>
          <option value="70">16 voc chat gauche.jpg</option>
          <option value="71">16 voc droite chat.jpg</option>
          <option value="72">17 voc chat gauche.jpg</option>
          <option value="73">17 voc devant D.jpg</option>
          <option value="74">17 voc devant G.png</option>
          <option value="75">17 voc devant d.jpg</option>
          <option value="76">17 voc devant.jpg</option>
          <option value="77">18 au revoir.jpg</option>
          <option value="78">18 au revoir.png</option>
          <option value="79">18 aurevoir.jpg</option>
          <option value="80">18 voc devant.jpg</option>
          <option value="81">19 aurevoir.jpg</option>
          <option value="82">1coucou G.jpg</option>
          <option value="83">2 devant.jpg</option>
          <option value="84">2 devant.png</option>
          <option value="85">20 eye tracking (ballon droite).avi</option>
          <option value="86">20 eye tracking (ballon gauche).avi</option>
          <option value="87">21 neutre4.avi</option>
          <option value="88">21 neutre5.avi</option>
          <option value="89">22 neutre visage gris.jpg</option>
          <option value="90">23 bonbons triste vs joie2.avi</option>
          <option value="91">23 vole triste vs joie4.avi</option>
          <option value="92">24 a triste joie.jpg</option>
          <option value="93">24 b joie triste.jpg</option>
          <option value="94">25 punition orale triste vs joie2.avi</option>
          <option value="95">25 sophie sous l'eau joie vs triste4.avi</option>
          <option value="96">26 a triste joie.jpg</option>
          <option value="97">26 b joie triste.jpg</option>
          <option value="98">27 cadeau dernier2.avi</option>
          <option value="99">27 tombe joie vs triste5.avi</option>
          <option value="100">28 b triste joie.jpg</option>
          <option value="101">29 tombe joie vs triste3.avi</option>
          <option value="102">3 regard chien D.jpg</option>
          <option value="103">3 regard chien D.png</option>
          <option value="104">3 regard chien G.jpg</option>
          <option value="105">30 a joie triste.jpg</option>
          <option value="106">31 punition orale triste vs joie4.avi</option>
          <option value="107">31 sophie sous l'eau joie vs triste2.avi</option>
          <option value="108">32 b joie triste - copie.jpg</option>
          <option value="109">33 vole triste vs joie2.avi</option>
          <option value="110">34 a triste joie - copie.jpg</option>
          <option value="111">4 tete chien D.jpg</option>
          <option value="112">4 tete chien D.png</option>
          <option value="113">4 tete chien G.jpg</option>
          <option value="114">5 tete point chien D.jpg</option>
          <option value="115">5 tete point chien D.png</option>
          <option value="116">5 tete point chien G.jpg</option>
          <option value="117">6 devant point chien D.jpg</option>
          <option value="118">6 devant point chien D.png</option>
          <option value="119">6 devant point chien G.jpg</option>
          <option value="120">7 devant - Copie.jpg</option>
          <option value="121">7 devant.jpg</option>
          <option value="122">7 devant.png</option>
          <option value="123">8 voc chien D.jpg</option>
          <option value="124">8 voc chien D.png</option>
          <option value="125">8 voc chien G.jpg</option>
          <option value="126">9 voc devant D.png</option>
          <option value="127">9 voc devant G.jpg</option>
          <option value="128">9 voc devant.jpg</option>
          <option value="129">A Triste joie.jpg</option>
          <option value="130">A joie Triste.jpg</option>
          <option value="131">B Triste Joie.jpg</option>
          <option value="132">B joie Triste.jpg</option>
          <option value="133">Eye Tracking (ballon droite).avi</option>
          <option value="134">Eye Tracking (ballon gauche).avi</option>
          <option value="135">FEDE Drte.avi</option>
          <option value="136">Federica Final_WMV_3000Kbps_720p.avi</option>
          <option value="137">NoImage</option>
          <option value="138">VNVD151207.avi</option>
          <option value="139">VNVG151201b.avi</option>
          <option value="140">bonbons triste vs joie1.avi</option>
          <option value="141">cadeau dernier1.avi</option>
          <option value="142">fede invisible d avi mpeg4-pcm.avi</option>
          <option value="143">neutre visage gris.jpg</option>
          <option value="144">punition orale triste vs joie1.avi</option>
          <option value="145">sophie sous l'eau joie vs triste1.avi</option>
          <option value="146">tombe joie vs triste2.avi</option>
          <option value="147">vole triste vs joie1.avi</option>
        </select>
      </label>

      <label>
        Start Time [ms]:
        <input
          type="number"
          value={exportStartTime}
          onChange={(e) => setExportStartTime(parseFloat(e.target.value))}
        />
      </label>

      <label>
        End Time [ms]:
        <input
          type="number"
          value={exportEndTime}
          onChange={(e) => setExportEndTime(parseFloat(e.target.value))}
        />
      </label>

      <label>
        Select Color
        <select value={color} onChange={(e) => setColor(e.target.value)}>
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

      <label>
        Select Category Group
        <select value={categoryGroup} onChange={(e) => setCategoryGroup(e.target.value)}>
          <option value="">--Select Category Group--</option>
          <option value="0">Eye</option>
          <option value="1">Information</option>
        </select>
      </label>

      <label>
        Select Category Left
        <select value={categoryLeft} onChange={(e) => setCategoryLeft(e.target.value)}>
          <option value="">--Select Category Left--</option>
          <option value="0">Blink</option>
          <option value="1">Fixation</option>
          <option value="2">Left Click</option>
          <option value="3">Saccade</option>
          <option value="4">Separator</option>
          <option value="5">none</option>
        </select>
      </label>

      <label>
        Select Category Right
        <select value={categoryRight} onChange={(e) => setCategoryRight(e.target.value)}>
          <option value="">--Select Category Right--</option>
          <option value="0">Blink</option>
          <option value="1">Fixation</option>
          <option value="2">Left Click</option>
          <option value="3">Saccade</option>
          <option value="4">Separator</option>
          <option value="5">none</option>
        </select>
      </label>

      <label>
        Select Gender
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="">--Select Gender--</option>
          <option value="0">M</option>
          <option value="1">F</option>
        </select>
      </label>

      <label>
        Age (Years):
        <input
          type="number"
          value={ageYears}
          onChange={(e) => setAgeYears(parseFloat(e.target.value))}
        />
      </label>

      <label>
        Age (Months):
        <input
          type="number"
          value={ageMonths}
          onChange={(e) => setAgeMonths(parseFloat(e.target.value))}
        />
      </label>

      <label>
        Pupil Diameter Right [mm]:
        <input
          type="number"
          value={pupilDiameterRight}
          onChange={(e) => setPupilDiameterRight(parseFloat(e.target.value))}
        />
      </label>

      <label>
        Pupil Diameter Left [mm]:
        <input
          type="number"
          value={pupilDiameterLeft}
          onChange={(e) => setPupilDiameterLeft(parseFloat(e.target.value))}
        />
      </label>

      <label>
      Point of Regard Right X [px]:
        <input
          type="number"
          value={pointRightX}
          onChange={(e) => setPointRightX(parseFloat(e.target.value))}
        />
      </label>

      <label>
      Point of Regard Left X [px]:
        <input
          type="number"
          value={pointLeftX}
          onChange={(e) => setPointLeftX(parseFloat(e.target.value))}
        />
      </label>
      
      <label>
      Point of Regard Right Y [px]:
        <input
          type="number"
          value={pointRightY}
          onChange={(e) => setPointRightY(parseFloat(e.target.value))}
        />
      </label>

      <label>
      Point of Regard Left Y [px]:
        <input
          type="number"
          value={pointLeftY}
          onChange={(e) => setPointLeftY(parseFloat(e.target.value))}
        />
      </label>

      <label>
      Gaze Vector Right X:
        <input
          type="number"
          value={gazeRightX}
          onChange={(e) => setGazeRightX(parseFloat(e.target.value))}
        />
      </label>

      <label>
      Gaze Vector Right Y:
        <input
          type="number"
          value={gazeRightY}
          onChange={(e) => setGazeRightY(parseFloat(e.target.value))}
        />
      </label>
      
      <label>
      Gaze Vector Right Z:
        <input
          type="number"
          value={gazeRightZ}
          onChange={(e) => setGazeRightZ(parseFloat(e.target.value))}
        />
      </label>

      <label>
      Gaze Vector Left X:
        <input
          type="number"
          value={gazeLeftX}
          onChange={(e) => setGazeLeftX(parseFloat(e.target.value))}
        />
      </label>

      <label>
      Gaze Vector Left Y:
        <input
          type="number"
          value={gazeLeftY}
          onChange={(e) => setGazeLeftY(parseFloat(e.target.value))}
        />
      </label>

      <label>
      Gaze Vector Left Z:
        <input
          type="number"
          value={gazeLeftZ}
          onChange={(e) => setGazeLeftZ(parseFloat(e.target.value))}
        />
      </label>





      <label>
      Pupil Size Right X [px]:
        <input
          type="number"
          value={pupilSizeRightX}
          onChange={(e) => setPupilSizeRightX(parseFloat(e.target.value))}
        />
      </label>

      <label>
      Pupil Size Right Y [px]:
        <input
          type="number"
          value={pupilSizeRightY}
          onChange={(e) => setPupilSizeRightY(parseFloat(e.target.value))}
        />
      </label>
      
      <label>
      Pupil Size Left X [px]:
      <input
          type="number"
          value={pupilSizeLeftX}
          onChange={(e) => setPupilSizeLeftX(parseFloat(e.target.value))}
        />
      </label>

      <label>
      Pupil Size Left Y [px]:
        <input
          type="number"
          value={pupilSizeLeftY}
          onChange={(e) => setPupilSizeLeftY(parseFloat(e.target.value))}
        />
      </label>

      <label>
      Eye Position Right X [mm]:
      <input
          type="number"
          value={eyePositionRightX}
          onChange={(e) => setEyePositionRightX(parseFloat(e.target.value))}
        />
      </label>

      <label>
      Eye Position Right Y [mm]:
      <input
          type="number"
          value={eyePositionRightY}
          onChange={(e) => setEyePositionRightY(parseFloat(e.target.value))}
        />
      </label>
      
      <label>
      Eye Position Right Z [mm]:
      <input
          type="number"
          value={eyePositionRightZ}
          onChange={(e) => setEyePositionRightZ(parseFloat(e.target.value))}
        />
      </label>

      <label>
      Eye Position Left X [mm]:
      <input
          type="number"
          value={eyePositionLeftX}
          onChange={(e) => setEyePositionLeftX(parseFloat(e.target.value))}
        />
      </label>

      <label>
      Eye Position Left Y [mm]:
      <input
          type="number"
          value={eyePositionLeftY}
          onChange={(e) => setEyePositionLeftY(parseFloat(e.target.value))}
        />
      </label>

      <label>
      Eye Position Left Z [mm]:
      <input
          type="number"
          value={eyePositionLeftZ}
          onChange={(e) => setEyePositionLeftZ(parseFloat(e.target.value))}
        />
      </label>

      <label>
      Pupil Position Right X [px]:
      <input
          type="number"
          value={pupilPositionRightX}
          onChange={(e) => setPupilPositionRightX(parseFloat(e.target.value))}
        />
      </label>

      <label>
      Pupil Position Right Y [px]:
      <input
          type="number"
          value={pupilPositionRightY}
          onChange={(e) => setPupilPositionRightY(parseFloat(e.target.value))}
        />
      </label>
      
      <label>
      Pupil Position Left X [px]:
      <input
          type="number"
          value={pupilPositionLeftX}
          onChange={(e) => setPupilPositionLeftX(parseFloat(e.target.value))}
        />
      </label>

      <label>
      Pupil Position Left Y [px]:
      <input
          type="number"
          value={pupilPositionLeftY}
          onChange={(e) => setPupilPositionLeftY(parseFloat(e.target.value))}
        />
      </label>

      <label>
      Pupil Index Right:
      <input
          type="number"
          value={indexRight}
          onChange={(e) => setIndexRight(parseFloat(e.target.value))}
        />
      </label>

      <label>
      Pupil Index Left:
      <input
          type="number"
          value={indexLeft}
          onChange={(e) => setIndexLeft(parseFloat(e.target.value))}
        />
      </label>

     


      <button onClick={handleSubmit}>Submit</button>

      {/* Display the output */}
      <div className="output">
        <pre>{output}</pre>
      </div>
    </div>
  );
};

export default EyeTracking;
