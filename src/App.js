import React from 'react';
import Home from './Pages/Home/index.js';
import Categoties from './Pages/Categories/index.js';
import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/categories' element={<Categoties />} />
      </Routes>
    </>
  );
}

export default App;
