 import React, { Fragment } from "react";
import Profile from "./Profile";
import './App.css';
import ZuriButton from "./ZuriButton";
import Footer from "./Footer";
import Icons from "./Icons";
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
