import React from 'react'
import { useNavigate } from 'react-router-dom';

const Navigate = () => {
    const navigate = useNavigate();
  return (
    <div>
      <button onClick={()=>navigate(-1)}>Back</button>
      <button onClick={()=>navigate(1)}>Next</button>
    </div>
  )
}

export default Navigate
