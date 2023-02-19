import './App.css';
import About from './Components/About';
import Carousel from './Components/Carousel';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Homepage from './Components/Homepage';
import Navbar from './Components/Navbar';
import Servises from './Components/Servises';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <>

      <Router>
        <Routes>
          <Route path="/" element={<Carousel />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/Servises" element={<Servises />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>

        </Routes>
      </Router>
      
      {/* <Route path="/Projects" element={<Projects />}></Route> */}
    </>

  );
}

export default App;
