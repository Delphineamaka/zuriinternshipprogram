 import React, { Fragment } from "react";
import './App.css';
import Footer from "./Footer";
import Contact from "./Contact";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
 
 

function App() {
  return (
    <>
    
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route  path="/Contact" element={<Contact />}/>
      </Routes>
           <Footer /> 
        </>
    
  );
}

export default App;
