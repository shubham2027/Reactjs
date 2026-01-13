import React from 'react'
import { useState } from 'react'

const Form = () => {
const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [destination, setDestination] = useState('')
  const [trips, setTrips] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    
    if (trips.length > 3) {
      alert('Trips must be less than 3 ')
    } else {
      alert(`Ticket Booked for Name: ${name} , Destination: ${destination}`)
    }
  }

  return (
    <div>
        <hr className='m-4 border-3 rounded'/>
      <form>
        <div className=' p-3 border-4 rounded-3xl' >

          <p className='font-bold'>Name</p> 
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
          <br/>

          <p className='font-bold'>Destination</p> 
          <input 
            type='text' 
            placeholder='Destination' 
            value={destination} 
            onChange={(e) => setDestination(e.target.value)} 
          /> 

          <p className='font-bold'>Trips</p> 
          <input 
            type='number' 
            placeholder='Trips' 
            value={trips} 
            onChange={(e) => setTrips(e.target.value)} 
          /> 
          
          <p className='font-bold'>Email</p> 
          <input 
            type='text' 
            placeholder='Email' 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          /> 

          <br/> <br/>
        <button type='submit' onClick={handleSubmit}>Book Your Trip</button>
        </div>
      </form>
      
    </div>
  )
}

export default Form
