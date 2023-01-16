import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Nav from './components/Nav';
import './index.css';

function App() {
  return (
    <div className="isolate bg-gradient-to-b from-pillred/20 to-pillwhite">
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
