import React, { useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import imgW from '../img/wash.png'
import imgF from '../img/fridge.jpg'
import imgR from '../img/ro.png'
import imgD from '../img/dips2.png'
import imgM from '../img/micro.jpg'
import imgW1 from '../img/wash pipe 1.jpg'
import imgW2 from '../img/pipe1.jpg'
import imgW3 from '../img/pipe 1 part 1.jpg'
import img2a from '../img/pipe2a.jpg'
import img2b from '../img/pipe2b.jpg'
import img2c from '../img/pipe2c.jpg'
import img2d from '../img/pipe2d.jpg'
import img2e from '../img/pipe2e.jpg'
import img3a from '../img/pipe3.jpg'
import img3b from '../img/pipe2e.jpg'
import img3c from '../img/pipe2a.jpg'
import imgCa from '../img/coverA (1).jpg'
import imgCb from '../img/coverA (2).jpg'
import imgCc from '../img/coverA (3).jpg'
import imgCd from '../img/coverA (4).jpg'
import imgSa from '../img/stand2 (1).jpg'
import imgSb from '../img/stand2 (2).jpg'
import imgSc from '../img/stand2 (3).jpg'
import imgSd from '../img/stand2 (4).jpg'
import imgSa1 from '../img/stand1 (1).jpg'
import imgSb2 from '../img/stand1 (2).jpg'
import imgSc3 from '../img/stand1 (3).jpg'
import imgp1 from '../img/inlet pipe (1).jpg'
import imgp2 from '../img/inlet pipe (2).jpg'
import imgp3 from '../img/inlet pipe (3).jpg'
import imgp4 from '../img/inlet pipe (4).jpg'
import imgSpin1 from '../img/spin1.jpg'
import imgSpin2 from '../img/spin2.jpg'
import imgSpin3 from '../img/spin3.jpg'
import imgSpin4 from '../img/spin4.jpg'
import imgC1 from '../img/coverS.jpg'
import imgC2 from '../img/coverS2.jpg'
import imgL1 from '../img/lid (1).jpg'
import imgL2 from '../img/lid (2).jpg'
import imgLF1 from '../img/lint filter (1).jpg'
import imgLF2 from '../img/lint filter (2).jpg'
import imgLF3 from '../img/lint filter (3).jpg'
import imgM1 from '../img/micro stand (1).jpg'
import imgM2 from '../img/micro stand (2).jpg'
import imgM3 from '../img/micro stand (3).jpg'
import imgMa from '../img/micro (1).jpg'
import imgMb from '../img/micro (2).jpg'
import imgMp from '../img/micro (3).jpg'
import imgMp1 from '../img/micro (2).jpg'
import imgmm1 from '../img/micro (4).jpg'
import imgmm2 from '../img/micro (5).jpg'


function WASHING() {
  return (

    <div className='carddBody'>
      <h1 style={{ textAlign: "center", padding: "70px 0", fontWeight: "bold" }}>AUTOMAITIC</h1>
      <div className="cardd" >

        <div id="carouselExampleInterval" className="carousel slide" >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="">
              <img src={imgW1} className="d-block" alt="..." style={{}} />
            </div>
            <div className="carousel-item" data-bs-interval="">
              <img src={imgW2} className="d-block" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={imgW3} className="d-block" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
            <span className="carousel-control-prev-icon visually-hidden" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next " type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
            <span className="carousel-control-next-icon visually-hidden" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
          <h2 style={{ textAlign: "center" }}>Water outlet pipe   </h2>
        </div>


        <div id="carouselExampleInterval2" className="carousel slide" >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="">
              <img src={img2a} className="d-block" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="">
              <img src={img2b} className="d-block" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={img2c} className="d-block" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={img2d} className="d-block" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={img2e} className="d-block" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleInterval2" data-bs-slide="prev">
            <span className="carousel-control-prev-icon visually-hidden" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next " type="button" data-bs-target="#carouselExampleInterval2" data-bs-slide="next">
            <span className="carousel-control-next-icon visually-hidden" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
          <h2 style={{ textAlign: "center" }}> Water Inlet Pipe </h2>
        </div>


        <div id="carouselExampleInterval3" className="carousel slide" >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="">
              <img src={img3a} className="d-block" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="">
              <img src={img3b} className="d-block" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={img3c} className="d-block" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleInterval3" data-bs-slide="prev">
            <span className="carousel-control-prev-icon visually-hidden" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next " type="button" data-bs-target="#carouselExampleInterval3" data-bs-slide="next">
            <span className="carousel-control-next-icon visually-hidden" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
          <h2 style={{ textAlign: "center" }}>Adapter/Water hose </h2>
        </div>

        <div id="carouselExampleInterval4" className="carousel slide" >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="">
              <img src={imgCa} className="d-block" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="">
              <img src={imgCb} className="d-block" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={imgCc} className="d-block" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={imgCd} className="d-block" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleInterval4" data-bs-slide="prev">
            <span className="carousel-control-prev-icon visually-hidden" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next " type="button" data-bs-target="#carouselExampleInterval4" data-bs-slide="next">
            <span className="carousel-control-next-icon visually-hidden" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
          <h2 style={{ textAlign: "center" }}>Washing Machine Cover</h2>
        </div>

        <div id="carouselExampleInterval5" className="carousel slide" >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="">
              <img src={imgSa} className="d-block" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="">
              <img src={imgSb} className="d-block" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={imgSc} className="d-block" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={imgSd} className="d-block" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleInterval5" data-bs-slide="prev">
            <span className="carousel-control-prev-icon visually-hidden" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next " type="button" data-bs-target="#carouselExampleInterval5" data-bs-slide="next">
            <span className="carousel-control-next-icon visually-hidden" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
          <h2 style={{ textAlign: "center" }}>Washing Machine Stand</h2>
        </div>


        <div id="carouselExampleInterval6" className="carousel slide" >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="">
              <img src={imgSa1} className="d-block" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="">
              <img src={imgSb2} className="d-block" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={imgSc3} className="d-block" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleInterval6" data-bs-slide="prev">
            <span className="carousel-control-prev-icon visually-hidden" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next " type="button" data-bs-target="#carouselExampleInterval6" data-bs-slide="next">
            <span className="carousel-control-next-icon visually-hidden" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
          <h2 style={{ textAlign: "center" }}>Washing Machine Stand 2</h2>
        </div>

      </div>


      <h1 style={{ textAlign: "center", padding: "70px 0", fontWeight: "bold" }}> SEMI AUTOMAITIC</h1>
      <div className="cardd " >

        <div id="carouselExampleInterva7" className="carousel slide" >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="">
              <img src={imgp1} className="d-block" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="">
              <img src={imgp2} className="d-block" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={imgp3} className="d-block" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={imgp4} className="d-block" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleInterva7" data-bs-slide="prev">
            <span className="carousel-control-prev-icon visually-hidden" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next " type="button" data-bs-target="#carouselExampleInterva7" data-bs-slide="next">
            <span className="carousel-control-next-icon visually-hidden" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
          <h2 style={{ textAlign: "center" }}>Inlet Pipe </h2>
        </div>


        <div id="carouselExampleInterval8" className="carousel slide" >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="">
              <img src={imgSpin1} className="d-block" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="">
              <img src={imgSpin2} className="d-block" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={imgSpin3} className="d-block" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={imgSpin4} className="d-block" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleInterval8" data-bs-slide="prev">
            <span className="carousel-control-prev-icon visually-hidden" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next " type="button" data-bs-target="#carouselExampleInterval8" data-bs-slide="next">
            <span className="carousel-control-next-icon visually-hidden" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
          <h2 style={{ textAlign: "center" }}>this is </h2>
        </div>


        <div id="carouselExampleInterval9" className="carousel slide" >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="">
              <img src={imgC1} className="d-block" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="">
              <img src={imgC2} className="d-block" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleInterval9" data-bs-slide="prev">
            <span className="carousel-control-prev-icon visually-hidden" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next " type="button" data-bs-target="#carouselExampleInterval9" data-bs-slide="next">
            <span className="carousel-control-next-icon visually-hidden" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
          <h2 style={{ textAlign: "center" }}> Washing machine Cover </h2>
        </div>

        <div id="carouselExampleInterval10" className="carousel slide" >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="">
              <img src={imgSa} className="d-block" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="">
              <img src={imgSb} className="d-block" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={imgSc} className="d-block" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={imgSd} className="d-block" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleInterval10" data-bs-slide="prev">
            <span className="carousel-control-prev-icon visually-hidden" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next " type="button" data-bs-target="#carouselExampleInterval10" data-bs-slide="next">
            <span className="carousel-control-next-icon visually-hidden" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
          <h2 style={{ textAlign: "center" }}>Washing Machine Stand</h2>
        </div>


        <div id="carouselExampleInterval11" className="carousel slide" >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="">
              <img src={imgSa1} className="d-block" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="">
              <img src={imgSb2} className="d-block" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={imgSc3} className="d-block" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleInterval11" data-bs-slide="prev">
            <span className="carousel-control-prev-icon visually-hidden" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next " type="button" data-bs-target="#carouselExampleInterval11" data-bs-slide="next">
            <span className="carousel-control-next-icon visually-hidden" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
          <h2 style={{ textAlign: "center" }}>Washing Machine Stand 2</h2>
        </div>

        <div id="carouselExampleInterval12" className="carousel slide" >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="">
              <img src={imgW1} className="d-block" alt="..." style={{}} />
            </div>
            <div className="carousel-item" data-bs-interval="">
              <img src={imgW2} className="d-block" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={imgW3} className="d-block" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleInterval12" data-bs-slide="prev">
            <span className="carousel-control-prev-icon visually-hidden" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next " type="button" data-bs-target="#carouselExampleInterval12" data-bs-slide="next">
            <span className="carousel-control-next-icon visually-hidden" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
          <h2 style={{ textAlign: "center" }}>Water outlet pipe   </h2>
        </div>


        <div id="carouselExampleInterval13" className="carousel slide" >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="">
              <img src={imgL2} className="d-block" alt="..." style={{}} />
            </div>
            <div className="carousel-item" data-bs-interval="">
              <img src={imgL1} className="d-block" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleInterval13" data-bs-slide="prev">
            <span className="carousel-control-prev-icon visually-hidden" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next " type="button" data-bs-target="#carouselExampleInterval13" data-bs-slide="next">
            <span className="carousel-control-next-icon visually-hidden" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
          <h2 style={{ textAlign: "center" }}>Spin Lid</h2>
        </div>

        <div id="carouselExampleInterval14" className="carousel slide" >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="">
              <img src={imgLF1} className="d-block" alt="..." style={{}} />
            </div>
            <div className="carousel-item" data-bs-interval="">
              <img src={imgLF2} className="d-block" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="">
              <img src={imgLF3} className="d-block" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleInterval14" data-bs-slide="prev">
            <span className="carousel-control-prev-icon visually-hidden" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next " type="button" data-bs-target="#carouselExampleInterval14" data-bs-slide="next">
            <span className="carousel-control-next-icon visually-hidden" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
          <h2 style={{ textAlign: "center" }}>Lint Filter</h2>
        </div>

      </div>
    </div>

  );
}


function FRIDGE() {
  return <>
    <div className='carddBody'>
      <h1 style={{ textAlign: "center", padding: "70px 0", fontWeight: "bold" }}>AUTOMAITIC</h1>
      <div className="cardd" >

        <div id="carouselExampleInterval" className="carousel slide" >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="">
              <img src={imgW1} className="d-block" alt="..." style={{}} />
            </div>
            <div className="carousel-item" data-bs-interval="">
              <img src={imgW2} className="d-block" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={imgW3} className="d-block" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
            <span className="carousel-control-prev-icon visually-hidden" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next " type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
            <span className="carousel-control-next-icon visually-hidden" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
          <h2 style={{ textAlign: "center" }}>Water outlet pipe   </h2>
        </div>


        <div id="carouselExampleInterval2" className="carousel slide" >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="">
              <img src={img2a} className="d-block" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="">
              <img src={img2b} className="d-block" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={img2c} className="d-block" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={img2d} className="d-block" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={img2e} className="d-block" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleInterval2" data-bs-slide="prev">
            <span className="carousel-control-prev-icon visually-hidden" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next " type="button" data-bs-target="#carouselExampleInterval2" data-bs-slide="next">
            <span className="carousel-control-next-icon visually-hidden" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
          <h2 style={{ textAlign: "center" }}> Water Inlet Pipe </h2>
        </div>


        <div id="carouselExampleInterval3" className="carousel slide" >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="">
              <img src={img3a} className="d-block" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="">
              <img src={img3b} className="d-block" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={img3c} className="d-block" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleInterval3" data-bs-slide="prev">
            <span className="carousel-control-prev-icon visually-hidden" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next " type="button" data-bs-target="#carouselExampleInterval3" data-bs-slide="next">
            <span className="carousel-control-next-icon visually-hidden" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
          <h2 style={{ textAlign: "center" }}>Adapter/Water hose </h2>
        </div>

        <div id="carouselExampleInterval4" className="carousel slide" >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="">
              <img src={imgCa} className="d-block" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="">
              <img src={imgCb} className="d-block" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={imgCc} className="d-block" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={imgCd} className="d-block" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleInterval4" data-bs-slide="prev">
            <span className="carousel-control-prev-icon visually-hidden" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next " type="button" data-bs-target="#carouselExampleInterval4" data-bs-slide="next">
            <span className="carousel-control-next-icon visually-hidden" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
          <h2 style={{ textAlign: "center" }}>Washing Machine Cover</h2>
        </div>

        <div id="carouselExampleInterval5" className="carousel slide" >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="">
              <img src={imgSa} className="d-block" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="">
              <img src={imgSb} className="d-block" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={imgSc} className="d-block" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={imgSd} className="d-block" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleInterval5" data-bs-slide="prev">
            <span className="carousel-control-prev-icon visually-hidden" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next " type="button" data-bs-target="#carouselExampleInterval5" data-bs-slide="next">
            <span className="carousel-control-next-icon visually-hidden" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
          <h2 style={{ textAlign: "center" }}>Washing Machine Stand</h2>
        </div>


        <div id="carouselExampleInterval6" className="carousel slide" >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="">
              <img src={imgSa1} className="d-block" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="">
              <img src={imgSb2} className="d-block" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={imgSc3} className="d-block" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleInterval6" data-bs-slide="prev">
            <span className="carousel-control-prev-icon visually-hidden" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next " type="button" data-bs-target="#carouselExampleInterval6" data-bs-slide="next">
            <span className="carousel-control-next-icon visually-hidden" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
          <h2 style={{ textAlign: "center" }}>Washing Machine Stand 2</h2>
        </div>

      </div>


      <h1 style={{ textAlign: "center", padding: "70px 0", fontWeight: "bold" }}> SEMI AUTOMAITIC</h1>
      <div className="cardd " >

        <div id="carouselExampleInterva7" className="carousel slide" >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="">
              <img src={imgp1} className="d-block" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="">
              <img src={imgp2} className="d-block" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={imgp3} className="d-block" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={imgp4} className="d-block" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleInterva7" data-bs-slide="prev">
            <span className="carousel-control-prev-icon visually-hidden" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next " type="button" data-bs-target="#carouselExampleInterva7" data-bs-slide="next">
            <span className="carousel-control-next-icon visually-hidden" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
          <h2 style={{ textAlign: "center" }}>Inlet Pipe </h2>
        </div>


        <div id="carouselExampleInterval8" className="carousel slide" >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="">
              <img src={imgSpin1} className="d-block" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="">
              <img src={imgSpin2} className="d-block" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={imgSpin3} className="d-block" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={imgSpin4} className="d-block" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleInterval8" data-bs-slide="prev">
            <span className="carousel-control-prev-icon visually-hidden" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next " type="button" data-bs-target="#carouselExampleInterval8" data-bs-slide="next">
            <span className="carousel-control-next-icon visually-hidden" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
          <h2 style={{ textAlign: "center" }}>this is </h2>
        </div>


        <div id="carouselExampleInterval9" className="carousel slide" >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="">
              <img src={imgC1} className="d-block" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="">
              <img src={imgC2} className="d-block" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleInterval9" data-bs-slide="prev">
            <span className="carousel-control-prev-icon visually-hidden" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next " type="button" data-bs-target="#carouselExampleInterval9" data-bs-slide="next">
            <span className="carousel-control-next-icon visually-hidden" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
          <h2 style={{ textAlign: "center" }}> Washing machine Cover </h2>
        </div>

        <div id="carouselExampleInterval10" className="carousel slide" >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="">
              <img src={imgSa} className="d-block" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="">
              <img src={imgSb} className="d-block" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={imgSc} className="d-block" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={imgSd} className="d-block" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleInterval10" data-bs-slide="prev">
            <span className="carousel-control-prev-icon visually-hidden" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next " type="button" data-bs-target="#carouselExampleInterval10" data-bs-slide="next">
            <span className="carousel-control-next-icon visually-hidden" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
          <h2 style={{ textAlign: "center" }}>Washing Machine Stand</h2>
        </div>


        <div id="carouselExampleInterval11" className="carousel slide" >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="">
              <img src={imgSa1} className="d-block" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="">
              <img src={imgSb2} className="d-block" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={imgSc3} className="d-block" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleInterval11" data-bs-slide="prev">
            <span className="carousel-control-prev-icon visually-hidden" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next " type="button" data-bs-target="#carouselExampleInterval11" data-bs-slide="next">
            <span className="carousel-control-next-icon visually-hidden" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
          <h2 style={{ textAlign: "center" }}>Washing Machine Stand 2</h2>
        </div>

        <div id="carouselExampleInterval12" className="carousel slide" >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="">
              <img src={imgW1} className="d-block" alt="..." style={{}} />
            </div>
            <div className="carousel-item" data-bs-interval="">
              <img src={imgW2} className="d-block" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={imgW3} className="d-block" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleInterval12" data-bs-slide="prev">
            <span className="carousel-control-prev-icon visually-hidden" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next " type="button" data-bs-target="#carouselExampleInterval12" data-bs-slide="next">
            <span className="carousel-control-next-icon visually-hidden" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
          <h2 style={{ textAlign: "center" }}>Water outlet pipe   </h2>
        </div>


        <div id="carouselExampleInterval13" className="carousel slide" >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="">
              <img src={imgL2} className="d-block" alt="..." style={{}} />
            </div>
            <div className="carousel-item" data-bs-interval="">
              <img src={imgL1} className="d-block" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleInterval13" data-bs-slide="prev">
            <span className="carousel-control-prev-icon visually-hidden" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next " type="button" data-bs-target="#carouselExampleInterval13" data-bs-slide="next">
            <span className="carousel-control-next-icon visually-hidden" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
          <h2 style={{ textAlign: "center" }}>Spin Lid</h2>
        </div>

        <div id="carouselExampleInterval14" className="carousel slide" >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="">
              <img src={imgLF1} className="d-block" alt="..." style={{}} />
            </div>
            <div className="carousel-item" data-bs-interval="">
              <img src={imgLF2} className="d-block" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="">
              <img src={imgLF3} className="d-block" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleInterval14" data-bs-slide="prev">
            <span className="carousel-control-prev-icon visually-hidden" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next " type="button" data-bs-target="#carouselExampleInterval14" data-bs-slide="next">
            <span className="carousel-control-next-icon visually-hidden" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
          <h2 style={{ textAlign: "center" }}>Lint Filter</h2>
        </div>

      </div>
    </div>
  </>
}

function R() {
  return <>
    <div className='carddBody'>
      <h1 style={{ textAlign: "center", padding: "70px 0", fontWeight: "bold" }}>AUTOMAITIC</h1>
      <div className="cardd" >

        <div id="carouselExampleInterval" className="carousel slide" >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="">
              <img src={imgW1} className="d-block" alt="..." style={{}} />
            </div>
            <div className="carousel-item" data-bs-interval="">
              <img src={imgW2} className="d-block" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={imgW3} className="d-block" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
            <span className="carousel-control-prev-icon visually-hidden" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next " type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
            <span className="carousel-control-next-icon visually-hidden" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
          <h2 style={{ textAlign: "center" }}>Water outlet pipe   </h2>
        </div>


        <div id="carouselExampleInterval2" className="carousel slide" >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="">
              <img src={img2a} className="d-block" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="">
              <img src={img2b} className="d-block" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={img2c} className="d-block" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={img2d} className="d-block" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={img2e} className="d-block" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleInterval2" data-bs-slide="prev">
            <span className="carousel-control-prev-icon visually-hidden" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next " type="button" data-bs-target="#carouselExampleInterval2" data-bs-slide="next">
            <span className="carousel-control-next-icon visually-hidden" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
          <h2 style={{ textAlign: "center" }}> Water Inlet Pipe </h2>
        </div>


        <div id="carouselExampleInterval3" className="carousel slide" >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="">
              <img src={img3a} className="d-block" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="">
              <img src={img3b} className="d-block" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={img3c} className="d-block" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleInterval3" data-bs-slide="prev">
            <span className="carousel-control-prev-icon visually-hidden" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next " type="button" data-bs-target="#carouselExampleInterval3" data-bs-slide="next">
            <span className="carousel-control-next-icon visually-hidden" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
          <h2 style={{ textAlign: "center" }}>Adapter/Water hose </h2>
        </div>

        <div id="carouselExampleInterval4" className="carousel slide" >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="">
              <img src={imgCa} className="d-block" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="">
              <img src={imgCb} className="d-block" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={imgCc} className="d-block" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={imgCd} className="d-block" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleInterval4" data-bs-slide="prev">
            <span className="carousel-control-prev-icon visually-hidden" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next " type="button" data-bs-target="#carouselExampleInterval4" data-bs-slide="next">
            <span className="carousel-control-next-icon visually-hidden" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
          <h2 style={{ textAlign: "center" }}>Washing Machine Cover</h2>
        </div>

        <div id="carouselExampleInterval5" className="carousel slide" >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="">
              <img src={imgSa} className="d-block" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="">
              <img src={imgSb} className="d-block" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={imgSc} className="d-block" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={imgSd} className="d-block" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleInterval5" data-bs-slide="prev">
            <span className="carousel-control-prev-icon visually-hidden" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next " type="button" data-bs-target="#carouselExampleInterval5" data-bs-slide="next">
            <span className="carousel-control-next-icon visually-hidden" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
          <h2 style={{ textAlign: "center" }}>Washing Machine Stand</h2>
        </div>


        <div id="carouselExampleInterval6" className="carousel slide" >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="">
              <img src={imgSa1} className="d-block" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="">
              <img src={imgSb2} className="d-block" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={imgSc3} className="d-block" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleInterval6" data-bs-slide="prev">
            <span className="carousel-control-prev-icon visually-hidden" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next " type="button" data-bs-target="#carouselExampleInterval6" data-bs-slide="next">
            <span className="carousel-control-next-icon visually-hidden" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
          <h2 style={{ textAlign: "center" }}>Washing Machine Stand 2</h2>
        </div>

      </div>


      <h1 style={{ textAlign: "center", padding: "70px 0", fontWeight: "bold" }}> SEMI AUTOMAITIC</h1>
      <div className="cardd " >

        <div id="carouselExampleInterva7" className="carousel slide" >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="">
              <img src={imgp1} className="d-block" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="">
              <img src={imgp2} className="d-block" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={imgp3} className="d-block" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={imgp4} className="d-block" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleInterva7" data-bs-slide="prev">
            <span className="carousel-control-prev-icon visually-hidden" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next " type="button" data-bs-target="#carouselExampleInterva7" data-bs-slide="next">
            <span className="carousel-control-next-icon visually-hidden" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
          <h2 style={{ textAlign: "center" }}>Inlet Pipe </h2>
        </div>


        <div id="carouselExampleInterval8" className="carousel slide" >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="">
              <img src={imgSpin1} className="d-block" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="">
              <img src={imgSpin2} className="d-block" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={imgSpin3} className="d-block" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={imgSpin4} className="d-block" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleInterval8" data-bs-slide="prev">
            <span className="carousel-control-prev-icon visually-hidden" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next " type="button" data-bs-target="#carouselExampleInterval8" data-bs-slide="next">
            <span className="carousel-control-next-icon visually-hidden" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
          <h2 style={{ textAlign: "center" }}>this is </h2>
        </div>


        <div id="carouselExampleInterval9" className="carousel slide" >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="">
              <img src={imgC1} className="d-block" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="">
              <img src={imgC2} className="d-block" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleInterval9" data-bs-slide="prev">
            <span className="carousel-control-prev-icon visually-hidden" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next " type="button" data-bs-target="#carouselExampleInterval9" data-bs-slide="next">
            <span className="carousel-control-next-icon visually-hidden" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
          <h2 style={{ textAlign: "center" }}> Washing machine Cover </h2>
        </div>

        <div id="carouselExampleInterval10" className="carousel slide" >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="">
              <img src={imgSa} className="d-block" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="">
              <img src={imgSb} className="d-block" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={imgSc} className="d-block" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={imgSd} className="d-block" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleInterval10" data-bs-slide="prev">
            <span className="carousel-control-prev-icon visually-hidden" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next " type="button" data-bs-target="#carouselExampleInterval10" data-bs-slide="next">
            <span className="carousel-control-next-icon visually-hidden" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
          <h2 style={{ textAlign: "center" }}>Washing Machine Stand</h2>
        </div>


        <div id="carouselExampleInterval11" className="carousel slide" >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="">
              <img src={imgSa1} className="d-block" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="">
              <img src={imgSb2} className="d-block" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={imgSc3} className="d-block" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleInterval11" data-bs-slide="prev">
            <span className="carousel-control-prev-icon visually-hidden" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next " type="button" data-bs-target="#carouselExampleInterval11" data-bs-slide="next">
            <span className="carousel-control-next-icon visually-hidden" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
          <h2 style={{ textAlign: "center" }}>Washing Machine Stand 2</h2>
        </div>

        <div id="carouselExampleInterval12" className="carousel slide" >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="">
              <img src={imgW1} className="d-block" alt="..." style={{}} />
            </div>
            <div className="carousel-item" data-bs-interval="">
              <img src={imgW2} className="d-block" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={imgW3} className="d-block" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleInterval12" data-bs-slide="prev">
            <span className="carousel-control-prev-icon visually-hidden" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next " type="button" data-bs-target="#carouselExampleInterval12" data-bs-slide="next">
            <span className="carousel-control-next-icon visually-hidden" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
          <h2 style={{ textAlign: "center" }}>Water outlet pipe   </h2>
        </div>


        <div id="carouselExampleInterval13" className="carousel slide" >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="">
              <img src={imgL2} className="d-block" alt="..." style={{}} />
            </div>
            <div className="carousel-item" data-bs-interval="">
              <img src={imgL1} className="d-block" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleInterval13" data-bs-slide="prev">
            <span className="carousel-control-prev-icon visually-hidden" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next " type="button" data-bs-target="#carouselExampleInterval13" data-bs-slide="next">
            <span className="carousel-control-next-icon visually-hidden" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
          <h2 style={{ textAlign: "center" }}>Spin Lid</h2>
        </div>

        <div id="carouselExampleInterval14" className="carousel slide" >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="">
              <img src={imgLF1} className="d-block" alt="..." style={{}} />
            </div>
            <div className="carousel-item" data-bs-interval="">
              <img src={imgLF2} className="d-block" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="">
              <img src={imgLF3} className="d-block" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleInterval14" data-bs-slide="prev">
            <span className="carousel-control-prev-icon visually-hidden" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next " type="button" data-bs-target="#carouselExampleInterval14" data-bs-slide="next">
            <span className="carousel-control-next-icon visually-hidden" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
          <h2 style={{ textAlign: "center" }}>Lint Filter</h2>
        </div>

      </div>
    </div>
  </>
}


function DISPENSER() {
  return <>
    <div className='carddBody'>
      <h1 style={{ textAlign: "center", padding: "70px 0", fontWeight: "bold" }}>AUTOMAITIC</h1>
      <div className="cardd" >

        <div id="carouselExampleInterval" className="carousel slide" >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="">
              <img src={imgW1} className="d-block" alt="..." style={{}} />
            </div>
            <div className="carousel-item" data-bs-interval="">
              <img src={imgW2} className="d-block" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={imgW3} className="d-block" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
            <span className="carousel-control-prev-icon visually-hidden" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next " type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
            <span className="carousel-control-next-icon visually-hidden" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
          <h2 style={{ textAlign: "center" }}>Water outlet pipe   </h2>
        </div>


        <div id="carouselExampleInterval2" className="carousel slide" >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="">
              <img src={img2a} className="d-block" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="">
              <img src={img2b} className="d-block" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={img2c} className="d-block" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={img2d} className="d-block" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={img2e} className="d-block" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleInterval2" data-bs-slide="prev">
            <span className="carousel-control-prev-icon visually-hidden" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next " type="button" data-bs-target="#carouselExampleInterval2" data-bs-slide="next">
            <span className="carousel-control-next-icon visually-hidden" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
          <h2 style={{ textAlign: "center" }}> Water Inlet Pipe </h2>
        </div>


        <div id="carouselExampleInterval3" className="carousel slide" >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="">
              <img src={img3a} className="d-block" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="">
              <img src={img3b} className="d-block" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={img3c} className="d-block" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleInterval3" data-bs-slide="prev">
            <span className="carousel-control-prev-icon visually-hidden" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next " type="button" data-bs-target="#carouselExampleInterval3" data-bs-slide="next">
            <span className="carousel-control-next-icon visually-hidden" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
          <h2 style={{ textAlign: "center" }}>Adapter/Water hose </h2>
        </div>

        <div id="carouselExampleInterval4" className="carousel slide" >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="">
              <img src={imgCa} className="d-block" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="">
              <img src={imgCb} className="d-block" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={imgCc} className="d-block" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={imgCd} className="d-block" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleInterval4" data-bs-slide="prev">
            <span className="carousel-control-prev-icon visually-hidden" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next " type="button" data-bs-target="#carouselExampleInterval4" data-bs-slide="next">
            <span className="carousel-control-next-icon visually-hidden" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
          <h2 style={{ textAlign: "center" }}>Washing Machine Cover</h2>
        </div>

        <div id="carouselExampleInterval5" className="carousel slide" >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="">
              <img src={imgSa} className="d-block" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="">
              <img src={imgSb} className="d-block" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={imgSc} className="d-block" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={imgSd} className="d-block" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleInterval5" data-bs-slide="prev">
            <span className="carousel-control-prev-icon visually-hidden" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next " type="button" data-bs-target="#carouselExampleInterval5" data-bs-slide="next">
            <span className="carousel-control-next-icon visually-hidden" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
          <h2 style={{ textAlign: "center" }}>Washing Machine Stand</h2>
        </div>


        <div id="carouselExampleInterval6" className="carousel slide" >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="">
              <img src={imgSa1} className="d-block" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="">
              <img src={imgSb2} className="d-block" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={imgSc3} className="d-block" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleInterval6" data-bs-slide="prev">
            <span className="carousel-control-prev-icon visually-hidden" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next " type="button" data-bs-target="#carouselExampleInterval6" data-bs-slide="next">
            <span className="carousel-control-next-icon visually-hidden" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
          <h2 style={{ textAlign: "center" }}>Washing Machine Stand 2</h2>
        </div>

      </div>


      <h1 style={{ textAlign: "center", padding: "70px 0", fontWeight: "bold" }}> SEMI AUTOMAITIC</h1>
      <div className="cardd " >

        <div id="carouselExampleInterva7" className="carousel slide" >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="">
              <img src={imgp1} className="d-block" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="">
              <img src={imgp2} className="d-block" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={imgp3} className="d-block" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={imgp4} className="d-block" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleInterva7" data-bs-slide="prev">
            <span className="carousel-control-prev-icon visually-hidden" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next " type="button" data-bs-target="#carouselExampleInterva7" data-bs-slide="next">
            <span className="carousel-control-next-icon visually-hidden" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
          <h2 style={{ textAlign: "center" }}>Inlet Pipe </h2>
        </div>


        <div id="carouselExampleInterval8" className="carousel slide" >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="">
              <img src={imgSpin1} className="d-block" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="">
              <img src={imgSpin2} className="d-block" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={imgSpin3} className="d-block" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={imgSpin4} className="d-block" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleInterval8" data-bs-slide="prev">
            <span className="carousel-control-prev-icon visually-hidden" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next " type="button" data-bs-target="#carouselExampleInterval8" data-bs-slide="next">
            <span className="carousel-control-next-icon visually-hidden" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
          <h2 style={{ textAlign: "center" }}>this is </h2>
        </div>


        <div id="carouselExampleInterval9" className="carousel slide" >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="">
              <img src={imgC1} className="d-block" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="">
              <img src={imgC2} className="d-block" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleInterval9" data-bs-slide="prev">
            <span className="carousel-control-prev-icon visually-hidden" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next " type="button" data-bs-target="#carouselExampleInterval9" data-bs-slide="next">
            <span className="carousel-control-next-icon visually-hidden" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
          <h2 style={{ textAlign: "center" }}> Washing machine Cover </h2>
        </div>

        <div id="carouselExampleInterval10" className="carousel slide" >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="">
              <img src={imgSa} className="d-block" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="">
              <img src={imgSb} className="d-block" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={imgSc} className="d-block" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={imgSd} className="d-block" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleInterval10" data-bs-slide="prev">
            <span className="carousel-control-prev-icon visually-hidden" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next " type="button" data-bs-target="#carouselExampleInterval10" data-bs-slide="next">
            <span className="carousel-control-next-icon visually-hidden" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
          <h2 style={{ textAlign: "center" }}>Washing Machine Stand</h2>
        </div>


        <div id="carouselExampleInterval11" className="carousel slide" >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="">
              <img src={imgSa1} className="d-block" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="">
              <img src={imgSb2} className="d-block" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={imgSc3} className="d-block" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleInterval11" data-bs-slide="prev">
            <span className="carousel-control-prev-icon visually-hidden" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next " type="button" data-bs-target="#carouselExampleInterval11" data-bs-slide="next">
            <span className="carousel-control-next-icon visually-hidden" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
          <h2 style={{ textAlign: "center" }}>Washing Machine Stand 2</h2>
        </div>

        <div id="carouselExampleInterval12" className="carousel slide" >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="">
              <img src={imgW1} className="d-block" alt="..." style={{}} />
            </div>
            <div className="carousel-item" data-bs-interval="">
              <img src={imgW2} className="d-block" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={imgW3} className="d-block" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleInterval12" data-bs-slide="prev">
            <span className="carousel-control-prev-icon visually-hidden" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next " type="button" data-bs-target="#carouselExampleInterval12" data-bs-slide="next">
            <span className="carousel-control-next-icon visually-hidden" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
          <h2 style={{ textAlign: "center" }}>Water outlet pipe   </h2>
        </div>


        <div id="carouselExampleInterval13" className="carousel slide" >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="">
              <img src={imgL2} className="d-block" alt="..." style={{}} />
            </div>
            <div className="carousel-item" data-bs-interval="">
              <img src={imgL1} className="d-block" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleInterval13" data-bs-slide="prev">
            <span className="carousel-control-prev-icon visually-hidden" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next " type="button" data-bs-target="#carouselExampleInterval13" data-bs-slide="next">
            <span className="carousel-control-next-icon visually-hidden" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
          <h2 style={{ textAlign: "center" }}>Spin Lid</h2>
        </div>

        <div id="carouselExampleInterval14" className="carousel slide" >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="">
              <img src={imgLF1} className="d-block" alt="..." style={{}} />
            </div>
            <div className="carousel-item" data-bs-interval="">
              <img src={imgLF2} className="d-block" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="">
              <img src={imgLF3} className="d-block" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleInterval14" data-bs-slide="prev">
            <span className="carousel-control-prev-icon visually-hidden" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next " type="button" data-bs-target="#carouselExampleInterval14" data-bs-slide="next">
            <span className="carousel-control-next-icon visually-hidden" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
          <h2 style={{ textAlign: "center" }}>Lint Filter</h2>
        </div>

      </div>
    </div>
  </>
}


function MICROWAVE() {
  return <>
    <div className='carddBody'>
      <h1 style={{ textAlign: "center", padding: "70px 0", fontWeight: "bold" }}>MICROWAVE</h1>
      <div className="cardd" >

        <div id="carouselExampleInterval" className="carousel slide" >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="">
              <img src={imgM1} className="d-block" alt="..." style={{}} />
            </div>
            <div className="carousel-item" data-bs-interval="">
              <img src={imgM2} className="d-block" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={imgM3} className="d-block" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
            <span className="carousel-control-prev-icon visually-hidden" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next " type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
            <span className="carousel-control-next-icon visually-hidden" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
          <h2 style={{ textAlign: "center" }}>Water outlet pipe   </h2>
        </div>


        <div id="carouselExampleInterval2" className="carousel slide" >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="">
              <img src={imgMa} className="d-block" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="">
              <img src={imgMb} className="d-block" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleInterval2" data-bs-slide="prev">
            <span className="carousel-control-prev-icon visually-hidden" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next " type="button" data-bs-target="#carouselExampleInterval2" data-bs-slide="next">
            <span className="carousel-control-next-icon visually-hidden" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
          <h2 style={{ textAlign: "center" }}> Water Inlet Pipe </h2>
        </div>


        <div id="carouselExampleInterval3" className="carousel slide" >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="">
              <img src={imgMp} className="d-block" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="">
              <img src={imgMp1} className="d-block" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleInterval3" data-bs-slide="prev">
            <span className="carousel-control-prev-icon visually-hidden" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next " type="button" data-bs-target="#carouselExampleInterval3" data-bs-slide="next">
            <span className="carousel-control-next-icon visually-hidden" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
          <h2 style={{ textAlign: "center" }}>Adapter/Water hose </h2>
        </div>

        <div id="carouselExampleInterval4" className="carousel slide" >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="">
              <img src={imgmm1} className="d-block" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="">
              <img src={imgmm2} className="d-block" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleInterval4" data-bs-slide="prev">
            <span className="carousel-control-prev-icon visually-hidden" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next " type="button" data-bs-target="#carouselExampleInterval4" data-bs-slide="next">
            <span className="carousel-control-next-icon visually-hidden" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
          <h2 style={{ textAlign: "center" }}>Washing Machine Cover</h2>
        </div>

        {/* <div id="carouselExampleInterval5" className="carousel slide" >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="">
              <img src={imgSa} className="d-block" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="">
              <img src={imgSb} className="d-block" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={imgSc} className="d-block" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={imgSd} className="d-block" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleInterval5" data-bs-slide="prev">
            <span className="carousel-control-prev-icon visually-hidden" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next " type="button" data-bs-target="#carouselExampleInterval5" data-bs-slide="next">
            <span className="carousel-control-next-icon visually-hidden" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
          <h2 style={{ textAlign: "center" }}>Washing Machine Stand</h2>
        </div>


        <div id="carouselExampleInterval6" className="carousel slide" >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="">
              <img src={imgSa1} className="d-block" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="">
              <img src={imgSb2} className="d-block" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={imgSc3} className="d-block" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleInterval6" data-bs-slide="prev">
            <span className="carousel-control-prev-icon visually-hidden" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next " type="button" data-bs-target="#carouselExampleInterval6" data-bs-slide="next">
            <span className="carousel-control-next-icon visually-hidden" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
          <h2 style={{ textAlign: "center" }}>Washing Machine Stand 2</h2>
        </div> */}

      </div>


      {/* <h1 style={{ textAlign: "center", padding: "70px 0", fontWeight: "bold" }}> SEMI AUTOMAITIC</h1> */}
      <div className="cardd " >

        {/* <div id="carouselExampleInterva7" className="carousel slide" >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="">
              <img src={imgp1} className="d-block" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="">
              <img src={imgp2} className="d-block" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={imgp3} className="d-block" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={imgp4} className="d-block" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleInterva7" data-bs-slide="prev">
            <span className="carousel-control-prev-icon visually-hidden" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next " type="button" data-bs-target="#carouselExampleInterva7" data-bs-slide="next">
            <span className="carousel-control-next-icon visually-hidden" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
          <h2 style={{ textAlign: "center" }}>Inlet Pipe </h2>
        </div>


        <div id="carouselExampleInterval8" className="carousel slide" >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="">
              <img src={imgSpin1} className="d-block" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="">
              <img src={imgSpin2} className="d-block" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={imgSpin3} className="d-block" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={imgSpin4} className="d-block" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleInterval8" data-bs-slide="prev">
            <span className="carousel-control-prev-icon visually-hidden" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next " type="button" data-bs-target="#carouselExampleInterval8" data-bs-slide="next">
            <span className="carousel-control-next-icon visually-hidden" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
          <h2 style={{ textAlign: "center" }}>this is </h2>
        </div>


        <div id="carouselExampleInterval9" className="carousel slide" >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="">
              <img src={imgC1} className="d-block" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="">
              <img src={imgC2} className="d-block" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleInterval9" data-bs-slide="prev">
            <span className="carousel-control-prev-icon visually-hidden" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next " type="button" data-bs-target="#carouselExampleInterval9" data-bs-slide="next">
            <span className="carousel-control-next-icon visually-hidden" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
          <h2 style={{ textAlign: "center" }}> Washing machine Cover </h2>
        </div>

        <div id="carouselExampleInterval10" className="carousel slide" >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="">
              <img src={imgSa} className="d-block" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="">
              <img src={imgSb} className="d-block" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={imgSc} className="d-block" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={imgSd} className="d-block" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleInterval10" data-bs-slide="prev">
            <span className="carousel-control-prev-icon visually-hidden" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next " type="button" data-bs-target="#carouselExampleInterval10" data-bs-slide="next">
            <span className="carousel-control-next-icon visually-hidden" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
          <h2 style={{ textAlign: "center" }}>Washing Machine Stand</h2>
        </div>


        <div id="carouselExampleInterval11" className="carousel slide" >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="">
              <img src={imgSa1} className="d-block" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="">
              <img src={imgSb2} className="d-block" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={imgSc3} className="d-block" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleInterval11" data-bs-slide="prev">
            <span className="carousel-control-prev-icon visually-hidden" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next " type="button" data-bs-target="#carouselExampleInterval11" data-bs-slide="next">
            <span className="carousel-control-next-icon visually-hidden" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
          <h2 style={{ textAlign: "center" }}>Washing Machine Stand 2</h2>
        </div>

        <div id="carouselExampleInterval12" className="carousel slide" >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="">
              <img src={imgW1} className="d-block" alt="..." style={{}} />
            </div>
            <div className="carousel-item" data-bs-interval="">
              <img src={imgW2} className="d-block" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={imgW3} className="d-block" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleInterval12" data-bs-slide="prev">
            <span className="carousel-control-prev-icon visually-hidden" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next " type="button" data-bs-target="#carouselExampleInterval12" data-bs-slide="next">
            <span className="carousel-control-next-icon visually-hidden" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
          <h2 style={{ textAlign: "center" }}>Water outlet pipe   </h2>
        </div>


        <div id="carouselExampleInterval13" className="carousel slide" >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="">
              <img src={imgL2} className="d-block" alt="..." style={{}} />
            </div>
            <div className="carousel-item" data-bs-interval="">
              <img src={imgL1} className="d-block" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleInterval13" data-bs-slide="prev">
            <span className="carousel-control-prev-icon visually-hidden" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next " type="button" data-bs-target="#carouselExampleInterval13" data-bs-slide="next">
            <span className="carousel-control-next-icon visually-hidden" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
          <h2 style={{ textAlign: "center" }}>Spin Lid</h2>
        </div>

        <div id="carouselExampleInterval14" className="carousel slide" >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="">
              <img src={imgLF1} className="d-block" alt="..." style={{}} />
            </div>
            <div className="carousel-item" data-bs-interval="">
              <img src={imgLF2} className="d-block" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="">
              <img src={imgLF3} className="d-block" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleInterval14" data-bs-slide="prev">
            <span className="carousel-control-prev-icon visually-hidden" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next " type="button" data-bs-target="#carouselExampleInterval14" data-bs-slide="next">
            <span className="carousel-control-next-icon visually-hidden" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
          <h2 style={{ textAlign: "center" }}>Lint Filter</h2>
        </div> */}

      </div>
    </div>
  </>
}



export default function Parts() {

  const [activeField, setActiveField] = useState("Fields");

  const handleButtonClick = (field) => {
    setActiveField(field);
    const height = window.innerHeight;
    window.scrollTo({
      top: height,
      left: 0,
      behavior: 'smooth'
    });
  };


  return (
    <>
      <Navbar />
      <div className="part ">
        <h2 style={{ textAlign: "center", paddingBottom: "40px", color: "blueviolet" }}>PARTS AVAILABLE</h2>
        <div className="conta " >
          <div className="options" >
            <div className="wash">
              <button className='btn btn-primary' onClick={() => handleButtonClick("WASHING")}> <img src={imgW} className='washimg' alt="" />  <br /><h5> WASHING MACHINE</h5> </button>

            </div>

            <div className="fridge">

              <button className='btn btn-primary' onClick={() => handleButtonClick("FRIDGE")}><img src={imgF} alt="" className='fridgeIMg' /> <br /><h5> FRIDGE</h5></button>

            </div>

            <div className="ro">
              <button className='btn btn-primary' onClick={() => handleButtonClick("R O")}><img src={imgR} alt="" className='roimg' /> <br /><h5> R O</h5></button>

            </div>

            <div className="discooler">
              <button className='btn btn-primary' onClick={() => handleButtonClick("DISPENSER")}><img src={imgD} alt="" className='dispImg' style={{ width: "150%" }} />  <br /><h5> DISPENSER WATER COOLER</h5></button>

            </div>

            <div className="micro">
              <button className='btn btn-primary' onClick={() => handleButtonClick("MICROWAVE")} style={{ overflow: "hidden" }}><img src={imgM} alt="" className='microImg' /> <br /><h5> MICROWAVE</h5></button>


            </div>

          </div>

        </div>

      </div>
      <div className="activedis">

        {activeField === "WASHING" && <WASHING />}
        {activeField === "FRIDGE" && <FRIDGE />}
        {activeField === "R O" && <R />}
        {activeField === "DISPENSER" && <DISPENSER />}
        {activeField === "MICROWAVE" && <MICROWAVE />}
      </div>


      <Footer />
    </>
  )
}
