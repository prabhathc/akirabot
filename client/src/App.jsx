import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import "./index.css";
import AuthProvider from "./components/AuthProvider";

export default function App() {
  return (
    <AuthProvider>
      <div className="isolate bg-pillred h-full">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        <Footer />
      </div>
    </AuthProvider>
  );
}