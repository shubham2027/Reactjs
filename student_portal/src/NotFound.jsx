import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <body className='justify-center items-center'>
      
      <div className='flex flex-col border-2 rounded-xl gap-4 p-4 gap-4'>
          <h1 className='p-4 border-2 rounded-xl '>404 - Page Not Found</h1>
          <p className='text-xl'>The page you are looking for does not exist.</p>
        <Link className='p-4 border-2 rounded-xl hover:bg-blue-200' to="/">Home</Link>
      </div>
    </body>
  )
}

export default NotFound
