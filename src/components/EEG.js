import React from "react";
function EEG(){
    return(
        <><div>
        <h3>EEG Data</h3>
        <input type="text" name="eeg" placeholder="EEG data" onChange={handleInputChange} />
      </div></>
    )
}
export default EEG;