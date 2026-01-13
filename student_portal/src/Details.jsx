import { useParams, Link } from 'react-router-dom'

function Details() {
    

  return (
    <body className='justify-center items-center'>
      
      <div className='p-4 gap-4 flex flex-col border-2 rounded-xl'>
        <h2 className='p-4 border-2 rounded-xl '>Student Details</h2>
        
          <p>This is the student details page.</p>
      <Link className='p-4 border-2 rounded-xl hover:bg-blue-200' to="/">Go to Home</Link>
          
      </div>
    </body>
  )
}

export default Details
