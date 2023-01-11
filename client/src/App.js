import React from 'react';
import Home from './pages/Home';
import './index.css';
import Nav from './components/Nav';
import { Routes, Route } from "react-router-dom";

const App = () => (
  <div className="isolate bg-white">
    <Nav />
    <Routes>
      <Route exact path="/" element={<Home />} />
    </Routes>
  </div>
)

export default App;