import React, { useEffect, useState } from 'react'

const Timer = () => {
    const [count, setCount] = useState(0);
    const [running, setRunning] = useState(true);

    useEffect(()=>{
        if(!running) return;

        const timer = setInterval(()=>{
            setCount((prev)=> prev + 1);
        }, 1000)

        return () =>clearInterval(timer);
    },[running])
  return (
    <div>
        <h1>Timer: {count} sec</h1>
        <button onClick={()=> setRunning(true)}>Start</button>
        <button onClick={()=> setRunning(false)}>Stop</button>
        <button onClick={()=> setCount(10)}>Reset</button>
    </div>
  )
}

export default Timer
