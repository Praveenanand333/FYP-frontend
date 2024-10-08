import React from "react";
function EyeTracking(){
    return (
        <>
        <div>
          <h3>Eye Tracking Data</h3>
          <input type="text" name="eye_tracking" placeholder="Eye Tracking data" onChange={handleInputChange} />
        </div>
        </>
    )
}
export default EyeTracking;