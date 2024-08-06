import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import SignUp from './pages/Signup';
import Login from './pages/Login';


const App = () => {
  return (

    <BrowserRouter>
    <NavBar />
    <Routes>
    <Route path="/" element={<div>Home</div>} />
    <Route path="/SignUp" element={<SignUp />} />
    <Route path="/Login" element={<Login />} />
    </Routes>
    </BrowserRouter>
    
  );
};

export default App;