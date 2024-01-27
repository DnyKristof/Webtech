import React from 'react';
import { createContext, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import SideBar from './components/SideBar/SideBar';
import Home from './components/Home/Home';
import Blog from './components/Blog/Blog';
import Dictionary from './components/Dictionary/Dictionary';
import Login from './components/Login/Login';
import Register from './components/Login/Register';
import AddPost from './components/Blog/AddPost';
import AddDictionary from './components/Dictionary/AddDictionary';
import { isLoggedIn } from './API/useAPI';
import Fyralath from './components/Fyralath/Fyralath';

function App() {
  const [count, setCount] = useState(0);
  const [test, setTest] = useState("test");

  return (
    <div className="container">
      <Router>

        <SideBar className="sidebar" />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={isLoggedIn() ?
              <p>You are already logged in.</p> :
              <Login />
            } />
            <Route path="/register" element={<Register />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/dictionary" element={<Dictionary />} />
            <Route path="/blog/addpost" element={<AddPost />} />
            <Route path="/dictionary/add" element={<AddDictionary />} />
            <Route path="/fyralath" element={<Fyralath/>}/>
          </Routes>
        </div>
      </Router>
    </div>

  );

}

export default App;
