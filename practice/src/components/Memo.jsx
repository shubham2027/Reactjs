import { useState, useMemo } from "react";

function Memo() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [prevName, setPrevName] = useState("");

  
  const sum = useMemo(() => {
     return   count * count;
  }, [count]);

  
  return (
    <div>
      <h1>Count: {count}</h1>
      <h2>Square: {sum}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <br />


    </div>
  );
}

export default Memo;
