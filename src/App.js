import React from 'react';
import Home from './Pages/Home/index.js';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Categories from './Pages/Categories/index.js';
import Category from './Pages/Category/index.js';
import FilteredRecipe from './Pages/FilteredRecipe/index.js';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/categories/:category' element={<Category />} />
        <Route path='/:category/:recipe' element={<FilteredRecipe />} />
      </Routes>
    </>
  );
}

export default App;
