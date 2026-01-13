// Dated 21-November-2025


import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const Effect = () => {

    const [count, setCount] = useState(0);
    
    // function setCounts(){
    //     setCount(count + 1);
    // }
    useEffect(() => {
        alert(`Count has been updated to: ${count}`);

    }, [count]);

  return (
    <div>
        <h2>Count: {count} </h2> <br/> <br/>
      <button onClick={()=>setCount(count+1)}>++</button>
    </div>
  )
}

export default Effect
