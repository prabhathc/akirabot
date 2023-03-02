import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Admin from './pages/Admin';
import Nav from './components/Nav';
import Footer from './components/Footer';
import './index.css';

export default function App() {
  return (
    <div className="isolate bg-pillred">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <Footer />
    </div>
  );
}