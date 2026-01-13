import { useState , useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')

  

  function handleSubmit(e){
    e.preventDefault()
    if(password.length < 6){
      alert('password must be of 6 digits')     
      
    } else {
      alert(`Email: ${email} , Password: ${password}`)
      
    }
  }
  return(
    <>
    <div>
      <h1>Login Form</h1>
    </div>
    <form onSubmit={handleSubmit}>
      <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail (e.target.value)} /> <br/>
      <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword (e.target.value)} /> <br/> <br/>
      {/* <p className={' hidden'}>password must be of 6 digits </p> */}
      {/* <ul></ul> */}
      <button type='submit'>Submit</button>
    </form>
  </>
  )
}

export default App
