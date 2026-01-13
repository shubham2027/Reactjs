import React, { useCallback, useState } from 'react'

const Callback = () => {

    const [count, setCount] = useState(0);
    const increment = useCallback(()=>{
        setCount(count + 1);
    } , [count]);
  return (
    <div>
      <h2> Count: ${}</h2>
    </div>
  )
}

export default Callback
