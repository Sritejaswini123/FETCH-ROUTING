import React from 'react';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import NotFound from './Components/NotFound';
import Header from './Components/Header';
import BlogItemDetails from './Components/BlogItemDetails';




import './App.css';
import { BrowserRouter  , Link, Routes, Route } from "react-router-dom";


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Header/>
     <Routes>
      <Route  path="/" element={<Home/>} />
      <Route  path="/about" element={<About/>} />
      <Route  path="/contact" element={<Contact/>} />
      <Route path = "/blogs/:id" element = {<BlogItemDetails/>} />
      <Route path = "*" element={<NotFound/>} />
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
