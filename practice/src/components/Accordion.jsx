import React, { useState } from 'react'

const Accordion = () => {
    const [open, setOpen] = useState(false);
    const [dark, setDark] = useState(false);
  return (
    
    <div>
        <button onClick={()=>setOpen(!open)}>Click me</button>
        
        {open && <p>This is the accordion content true</p>}
        {!open && <p>This is the accordion content false</p>}

        <button onClick={()=>setDark(!dark)} style={{backgroundColor : dark ? "black":"green"}}>Toggle Theme</button>

        {dark ? <div><h1> dark theme </h1></div> : <div><h1>light theme</h1></div>}
    </div>

  )
}

export default Accordion
