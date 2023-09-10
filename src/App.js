import './App.css';
import About from './Components/About';
import Carousel from './Components/Carousel';
import Contact from './Components/Contact';
import Servises from './Components/Servises';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from './Components/ScrollToTop';
import Parts from './Components/Parts';
import Cart from './Components/Cart';
import { AppProvider } from './context';
import React from 'react';


function App() {

  return (
    <Router>
      <ScrollToTop />
      <AppProvider>
        <Routes>
          <Route path="/" element={<Carousel />} />
          <Route path="/about" element={<About />} />
          <Route path="/Servises" element={<Servises />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Parts" element={<Parts />} />
          <Route path="/Carts" element={<Cart />} />
        </Routes>
        </AppProvider>

    </Router>
  );
}

export default App;
