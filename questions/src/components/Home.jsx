import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1 className='m-2 p-2 '>Home Page</h1>
      <Link className='border-2 rounded-xl p-2 m-2' to="/list?id=101&name=Hecker"> Go to List Page</Link>
      <Link className='border-2 rounded-xl p-2 m-2' to="/users"> Go to List Page</Link>
    </div>
  )
}

export default Home
