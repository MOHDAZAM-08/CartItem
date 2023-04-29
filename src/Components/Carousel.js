import React from 'react'
import Navbar from './Navbar';
import img1 from '../img/ac.png'
import img2 from '../img/hm4.png'
import img3 from '../img/ph3.jpg'
import Footer from './Footer';
import ServicePageBox from './ServicePageBox';

import { Link } from "react-router-dom";
import Current from './Current';
import Homepage2 from './Homepage2';


export default function Carousel() {

  return (
    <>
      <Navbar />

      <div className="homecon">
        <img src={img2} className=" img d-block " id='img' alt="..." style={{ width: "60%"}} />
        
        <div className="carddd">
        <div className="centeredHome" sty>
          <h1>Adarsh 
         <span> Refrigeration</span>
          <br/>
           And <span> Air-Conditioning</span> </h1>
          <br />
          <h3 style={{padding:"2px"}}>A Theme for AC , Repair & Plumbing etc.</h3>
          <button className='btn btn-primary centerbut'> <Link className="nav-link active " to="/Contact">CONTACT US</Link></button>
        </div>
        </div>

      </div>

      <div className='aboutContant' id='aboutContant'><h4>Welcome to our shop, the one-stop destination for all your air cooling and water filtration needs! We offer a wide range of air coolers and water filter systems, along with spare parts for these machines. Additionally, our team provides efficient and reliable repair services for all your cooling and filtration devices. Trust us for quality products and excellent customer service.</h4></div>
      <ServicePageBox />
     

      

      <br />
      <br />
      <Footer />
    </>
  )
}
