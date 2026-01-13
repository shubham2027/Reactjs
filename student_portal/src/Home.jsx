import React from 'react'
import { Link, Routes } from 'react-router-dom'
const Home = () => {
  return (
    <body className='justify-center '>
      
      <div className='bg-black flex flex-col border-2 p-4 rounded-xl gap-4 justify-center items-center'>
        <h1 className='p-4 border-2 rounded-xl text-black bg-blue-300'>Student Portal</h1> 
        <br />
        <Link className='p-4 border-2 rounded-xl  hover:bg-blue-200' to="/students">Go to Students Page</Link>
        <br />
        <Link className='p-4 border-2 rounded-xl hover:bg-blue-200' to="/details">Go to Student Details Page</Link>
      </div>
    </body>
  )
}

export default Home
