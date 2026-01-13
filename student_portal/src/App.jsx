import { useState } from 'react'

import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Home.jsx'
import Students from './Students.jsx'
import Details from './Details.jsx'
import NotFound from './NotFound.jsx'

function App() {
  const [count, setCount] = useState(0)

// Build a mini student portal using react router
    // You must use Routes, Dynamic Params, Navigation, State, Links, and 404 route.
    
 return(
  <>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/students" element={<Students/>} />
      <Route path='/details' element={<Details/>}/>
      <Route path='/*' element={<NotFound/>}/>
    </Routes>
    
  </>
 )
}

export default App
