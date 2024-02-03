import './App.css';
import About from './Components/About';
import Carousel from './Components/Carousel';
import Contact from './Components/Contact';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from './Components/ScrollToTop';
import Parts from './Components/Parts';
import Cart from './Components/Cart';
import { AppProvider } from './context';
import React from 'react';
import WashingSemi from './Pages/WashingSemi';
import WashingAuto from './Pages/WashingAuto';
import SingleDoor from './Pages/SingleDoor';
import DoubleDoor from './Pages/DoubleDoor';
import Ro from './Pages/Ro';
import Microwave from './Pages/Microwave';
import Dispenser from './Pages/Dispenser';


function App() {

  return (
    <Router>
      <ScrollToTop />
      <AppProvider>
        <Routes>
          <Route path="/" element={<Carousel />} />
          <Route path="/about" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Parts" element={<Parts />} />
          <Route path="/Carts" element={<Cart />} />

        {/* pages */}
          <Route path="/WashingSemi" element={<WashingSemi />} />
          <Route path="/WashingAuto" element={<WashingAuto />} />
          <Route path="/SingleDoor" element={<SingleDoor />} />
          <Route path="/DoubleDoor" element={<DoubleDoor />} />
          <Route path="/Ro" element={<Ro />} />
          <Route path="/Microwave" element={<Microwave/>} />
          <Route path="/Dispenser" element={<Dispenser/>} />

        </Routes>
        </AppProvider>

    </Router>
  );
}

export default App;
