import { useState } from "react";

function Dark() {
  const [on, setOn] = useState(false);

  return (
    <button
      onClick={() => setOn(!on)}
      style={{ backgroundColor: on ? "green" : "red" }}
    >
      {on ? "ON" : "OFF"}
    </button>
  );
}

export default Dark;