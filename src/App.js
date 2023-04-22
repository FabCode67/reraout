import logo from './logo.svg';
import './App.css';
import React from 'react';
import Home from './components/Home';
import Login  from './components/Login';
import Register from './components/Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
      <ToastContainer></ToastContainer>
      <BrowserRouter>
      <Routes>
        <Route path='/' element= {<Home />}></Route>
        <Route path='/login' element= {<Login />}></Route>
        <Route path='/register/' element= {<Register />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
