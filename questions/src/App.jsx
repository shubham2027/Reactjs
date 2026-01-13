import { useState } from 'react'
import viteLogo from '/vite.svg'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import List from './components/List'
import Users from './components/Users'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/list" element={<List/>} />
      <Route path="*" element={<Users/>} />
    </Routes>

    </>
  )
}

export default App
