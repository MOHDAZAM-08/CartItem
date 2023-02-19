import React from 'react'
import Navbar from './Navbar';
import img1 from '../img/ph9.jpg'
import img2 from '../img/ph2.jpg'
import img3 from '../img/ph3.jpg'
import Footer from './Footer';
import ServicePageBox from './ServicePageBox';
// import img4 from '../img/ph4.jpg'
// import img5 from '../img/ph5.jpg'
// import img6 from '../img/.jpg'
// import img3 from '../img/notebg2.jpg'
import { Link } from "react-router-dom";
import Current from './Current';
import Homepage2 from './Homepage2';


export default function Carousel() {

  return (
    <>
      <Navbar/>

      <div id="carouselExampleSlidesOnly" className="carousel carousel-fade" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" style={{width:"100%", height:"615px",overflow:"hidden"}}>
    <img src={img1} className="d-block w-100" alt="..." />
    <div class="carousel-caption d-none d-md-block" style={{top: "160px"}}>
        <h5 style={{fontSize:"100px"}}>HODA</h5>
        <br/>
        <h3>Air Conditioning & Electricals Service</h3>
        <br/> <br/>
        <button  className='btn btn-primary'>
        <Link className="nav-link active" to="/Contact">CONTACT US</Link>
        </button>        
      </div>
    </div>
    <div className="carousel-item" style={{width:"100%", height:"615px",overflow:"hidden"}}>
    <img src={img2} className="d-block w-100" alt="..." />
    <div class="carousel-caption d-none d-md-block" style={{top: "160px"}}>
        <h5 style={{fontSize:"100px"}}>HODA</h5>
        <br/>
        <h3>Air Conditioning & Electricals Service</h3>
        <br/> <br/>
        <button  className='btn btn-primary'>
        <Link className="nav-link active" to="/Contact">CONTACT US</Link>
        </button>        
      </div>
    </div>
    <div className="carousel-item" style={{width:"100%", height:"615px",overflow:"hidden"}}>
    <img src={img3} className="d-block w-100" alt="..." />
    <div class="carousel-caption d-none d-md-block" style={{top: "160px"}}>
        <h5 style={{fontSize:"100px"}}>HODA</h5>
        <br/>
        <h3>Air Conditioning & Electricals Service</h3>
        <br/> <br/>
        <button  className='btn btn-primary'>
        <Link className="nav-link active" to="/Contact">CONTACT US</Link>
        </button>        
      </div>

    </div>
  </div>
</div>

<div><h4 style={{padding:"100px 150px 20px 150px",textAlign:"center"}}>We are into sales, Erection and Commissioning of Centralized Air-conditioning systems having clientage in NCR and all India.
Providing maintenance & services at various sites. Also undertaking direct jobs from clients related to erection, commissioning, maintenance and operation of AC equipments.</h4></div>
<ServicePageBox/>
<Current/>

<Homepage2/>

<br/>
<br/>
<Footer/>
    </>
  )
}
