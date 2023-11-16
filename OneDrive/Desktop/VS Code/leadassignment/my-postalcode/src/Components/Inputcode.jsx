import React, { useState } from 'react';

const Inputcode = ({codeFunc}) => {

    const [val, setVal] = useState("");

    const handleClick = (e)=>{
      e.preventDefault();
      codeFunc(val);
    }

  return (
    <div>
        <form>
           <input type="number" placeholder='Enter Postal Code' value={val} onChange={(e)=>setVal(e.target.value)} /> 
           <input type="submit" value="Submit" onClick={handleClick} />
        </form>
    </div>
  )
}

export default Inputcode