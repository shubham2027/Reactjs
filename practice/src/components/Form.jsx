import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Form = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const reference = useRef();
    const navigate = useNavigate();
    
    function find(){
      reference.current.focus();
    }

    function handleSubmit(e){
        e.preventDefault();
        if(!email || !password){
            alert("All fields are required");
            return;
        }
        if(password.length < 6){
            alert("Password must be at least 6 characters long");
            return;
        }
        // alert(`Email: ${email}, Logged in successfully!`);
        navigate('/profile?name=' + email);

    }
  return (
    <div>
      <h1>Form</h1>
      <form action="">
        <input type="email" name="email" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)} ref={reference}/> <br/>
        <input type="password" name="password" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/> <br />
        <button type="button" onClick={find}>Find</button>
        <button type="submit" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  )
}

export default Form
