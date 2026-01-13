
// dated  29,31 - October - 2025
// dated  3 - Novemmber - 2025

import './index.css'
import Footer from './Footer.jsx'
import Header from './Header.jsx'
import Greet from './Greet.jsx'
import Card from './Card.jsx'
import Welcome from './Welcome.jsx'
import './Header.jsx'
import './App.css'
import Foodrating from './Foodrating.jsx'
import BirtrhDayReminder from './BirthDayReminder.jsx'

import Button from './button.jsx'
import Button2 from './Button2.jsx'
import Counter from './Counter.jsx'
import Setcolor from './Setcolor.jsx'
import Event from './Event.jsx'
import Effect from './Effect.jsx'
import React, { createContext } from 'react';
import Child from './Child.jsx';
import Focusinput from './Focusinput.jsx'
import Counter2 from './Counter2.jsx'
import Memo from './Memo.jsx'
import Search from './Search.jsx'
// import Timer from './Timer.jsx'

// import TImer from './Timer.jsx'

const NameContext = createContext();

function App() {
  const name = "Spooderman";
  const marks = 75;
  

  
  return (
    <>

      {/* <Header/> */}
      {/* <p>Adding two numbers: 2 + 3 = {2 + 3}</p> */}


      {/* <Greet name='Spooderman'/> */}
      {/* <Welcome />      */}


      <h2>Hello, {name}</h2>
      
      {/* <Foodrating name='Veg Thali' rating='5'/> */}
      {/* <Foodrating name='Soba' rating='5'/> */}

      {/* <BirtrhDayReminder date='3' /> */}

      {/* <h2>{marks >= 50 ? "Pass" : "Fail"}</h2> */}

      {/* <Card name='Spooderman' age='20' /> */}

      {/* <Footer/> */}
      {/* <Button /> */}
      <div></div>
      {/* <Button2 /> */}
      {/* <Counter/> */}
      {/* <Setcolor/> */}
      
      {/* <Event/> */}
      {/* <TImer/> */}
      {/* <Effect/> */}
      
    {/* <NameContext.Provider value="Spiderman">
        {/* <Child/> 

    </NameContext.Provider> */}
    <Focusinput/>
     {/*
     <Counter2/>

     <Memo/> */}
     {/* <Search/> */}
    </>
  )
}

export default App;
