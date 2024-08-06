import React from 'react';
import Home from "./Home";
import ShowBookDetails from "./ShowBookDetails";
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
      <Routes>
        <Route path='/' element={<Home/ >} />
        <Route path='/details/:id' element={<ShowBookDetails />} />
      </Routes>
  );
}

export default App;
