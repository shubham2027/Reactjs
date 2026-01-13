import { useState } from 'react'
import './App.css'
import Accordion from './components/Accordion'
import FilterList from './components/FilterList'
import Api from './components/Api'
import Axios from './components/Axios'
import PostData from './components/PostData'
import Form from './components/Form'
import {Routes, Route, Link} from 'react-router-dom'
import Dark from './components/Dark'
import Timer from './components/Timer'
import Memo from './components/Memo'
import Navigate from './components/Navigate'
import Image from './components/Image'
import Query from './components/Query'
import Profile from './components/Profile'
import Task from './components/Task'
import Counter from './components/Counter'



function App() {
  

  return(
    <>
    {/* <h1>App jsx</h1> */}
        <Link to="/">Accordion</Link> |{" "}
        <Link to="/filter">FilterList</Link> |{" "}
        <Link to="/api">Api</Link> |{" "}
        <Link to="/axios">Axios</Link> |{" "}
        <Link to="/postdata">PostData</Link> |{" "}
        <Link to="/form">Form</Link> | {" "}
        <Link to="/dark">Dark</Link> | {" "}
        <Link to="/timer">Timer</Link> | {" "}
        <Link to="/memo">Memo</Link> | {" "}
        <Link to="/navigate">Navigate</Link> | {" "}
        <Link to="/image">Image</Link> | {" "}
        <Link to="/query">Query</Link> | {" "}
        <Link to="/profile">Profile</Link> | {" "}
        <Link to="/task">Task</Link> | {" "}
        <Link to="/counter">Counter</Link>
        
        <br />
        <Routes>
          <Route path="/" element={<Accordion/>}/>
          <Route path="/filter" element={<FilterList/>}/>
          <Route path="/api" element={<Api/>}/>
          <Route path="/axios" element={<Axios/>}/>
          <Route path="/postdata" element={<PostData/>}/>
          <Route path="/form" element={<Form/>}/>
          <Route path="/dark" element={<Dark/>}/>
          <Route path="/timer" element={<Timer/>}/>
          <Route path="/memo" element={<Memo/>}/>
          <Route path="/navigate" element={<Navigate/>}/>
          <Route path="/image" element={<Image/>}/>
          <Route path="/query" element={<Query/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/task" element={<Task/>}/>
          <Route path="/counter" element={<Counter/>}/>




          



        </Routes>

        {/* <Accordion/> */}
        {/* <FilterList/> */}
        {/* <Api/> */}
        {/* <Axios/> */}
        {/* <PostData/> */}
        {/* <Form/> */}
    </>
  )
}

export default App
