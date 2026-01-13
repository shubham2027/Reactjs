import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Students = () => {
    const [students] = useState([
        {id: 1, name: "Alice"},
        {id: 2, name: "Bob"},
        {id: 3, name: "Charlie"},
    ]);
  return (
    <body className='justify-center '>
            
        <div className='p-4 items-center border-2 rounded-xl flex flex-col '>
            <h1 className='p-4 border-2 rounded-xl'>Student List</h1> <br />
            <ul className='flex flex-col '>
                {students.map(student => (
                    <li key={student.id}>{student.name}</li>
                ))}
            </ul>
            <br />
            <Link className='p-4 border-2 rounded-xl hover:bg-blue-200' to="/">Go to Home</Link>
        </div>
    </body>
  )
}

export default Students
