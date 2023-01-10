import React from 'react';
import Home from './Pages/Home/index.js';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Categories from './Pages/Categories/index.js';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/categories' element={<Categories />} />
      </Routes>
    </>
  );
}

export default App;
