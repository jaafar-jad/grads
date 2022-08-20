import React,{reactDOM} from 'react';
import './App.css';
import Cards from './cads/Cards'
import'../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./Home/Home";
import Blog from "./Blog/blog";
import Contact from "./Contact/Contact";
import About from "./About/About";
import Activities from "./Activities/Activities";
import 'react-slideshow-image/dist/styles.css';


function App() {
  return (
    <div className="App">
       
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
          <Route path="Activities" element={<Activities />} />
          <Route path="cards" element={<Cards />} />
        </Route>
      </Routes>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
