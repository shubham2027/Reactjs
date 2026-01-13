import { useState, useEffect } from "react";
import "./App.css";
import Home from './Home.jsx'
import About from './About.jsx'
import Form from './Form.jsx'
import Product from './Product.jsx'
import { Routes,Route, Link } from "react-router-dom";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => console.error(err));
  }, []); 

  return (
    <>
      {/* <h1 className="p-2 ">Users List</h1>

      <div className="p-2 flex flex-col ">

        {users.map(user => (
          <p key={user.id}>{user.name}</p>
        ))}
      </div> */}

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/product" element={<Product/>} />
      </Routes>


      {/* <button className="m-4 p-2 border-4 rounded-3xl bg-blue-500 text-white">
        <Link to="/form">Go to Form Page</Link>
      </button> */}


    </>
  );
}

export default App;
