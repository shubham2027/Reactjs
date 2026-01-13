import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

const Axios = () => {
    const [users, setUsers]=useState([])


    useEffect(()=>{
        // axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>setUsers(res.data));

        // axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>console.log(res.data));
        // axios.post("https://jsonplaceholder.typicode.com/users",{title:"post request title"}).then((res)=>console.log(res.data));
        axios.put("https://jsonplaceholder.typicode.com/posts/1",{title:"Axios Put Request"}).then((res)=>console.log(res.data));
        // axios.delete("https://jsonplaceholder.typicode.com/posts/1").then((res)=>console.log(res.data));

        // axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>setUsers(res.data));
    },[])
  return (
    <div>
        <ul>
            {users.map(user=>(
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
      
    </div>
  )
}

export default Axios
