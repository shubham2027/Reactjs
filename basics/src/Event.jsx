import React from 'react'

const Event = () => {
    function hello() {
        alert('Hello, World!');
    }
    function bye() {
        alert('Bye!');
    }
  return (
    
    <div>
        
        <button onClick={hello}>Hello</button>
        
        <button onClick={bye}>Bye</button>
    </div>
  )
}

export default Event
