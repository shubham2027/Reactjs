import React, { useRef } from 'react'

const Focusinput = () => {

    const inputRef = useRef();

    const handleClick = () =>{
        inputRef.current.focus(); // focuses the input field
    }

  return (
    <div>
        <h2>Focus Input Component</h2>
        <input ref={inputRef} type='text'/>
        <button onClick={handleClick}>Focus Input</button>
    </div>
  )
}

export default Focusinput
