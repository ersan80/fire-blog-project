import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from '../pages/About';
import Dashboard from '../pages/Dashboard';
import Details from '../pages/Details';
import Login from '../pages/Login';
import NewBlog from '../pages/NewBlog';
import Profile from '../pages/Profile';
import Register from '../pages/Register';
import UpdateBlog from '../pages/UpdateBlog';
import Nopage from '../pages/Nopage';
import Navbar from '../components/Navbar';
import Detailss from '../pages/Detailss';


const AppRouter = () => {
  return (
    <BrowserRouter>
     <Navbar></Navbar>
    <Routes>
        <Route path="/" element={<Dashboard />} />
       <Route path="/about" element={<About />}/>
       <Route path="/details/:id" element={<Details />} />
       <Route path="/detailss/:index" element={<Detailss />} />
        <Route path="/login" element={<Login />} />
        <Route path="/newBlog" element={<NewBlog />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/register" element={<Register />} />
        <Route path="updateblog/:id" element={<UpdateBlog />} />
        <Route path="*" element={<Nopage />} />
     
    </Routes>
  </BrowserRouter>
  )
}

export default AppRouter