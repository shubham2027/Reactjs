import React, { useState, useEffect } from 'react';

function Timer() {
const [count, setCount] = useState(0);
  const timerRef = useRef(null);   // stores interval ID

  const startTimer = () => {
    if (timerRef.current !== null) return; // prevent multiple intervals

    timerRef.current = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  // cleanup (optional but good practice)
  useEffect(() => {
    return () => clearInterval(timerRef.current);
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Timer: {count}</h1>

      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer} style={{ marginLeft: "10px" }}>
        Stop
      </button>
    </div>
  );
}

export default Timer;
