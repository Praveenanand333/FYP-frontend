import React from "react";
function Image(){
    return(
        <>
        <div>
        <h3>Image Data</h3>
        <input type="file" name="image" onChange={handleInputChange} />
      </div>
        </>
    )
}
export default Image;