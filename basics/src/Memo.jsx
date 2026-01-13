import React, { useMemo, useState } from 'react'

const Memo = () => {
    const [number, setNumber] = useState(0);

    const double = useMemo(() => {
        return number * 2;
    }, [number]);

  return (
    <div>
      <h2>Memo Component</h2>
        <h3>Number: {number}</h3>
        <h3>Double: {double}</h3>
        <button onClick={()=>setNumber(number + 1)}> Increment Number </button>
    </div>
  )
}
    
export default Memo
