import React from 'react'
import Navbar from './Navbar';
import img1 from '../img/ac.png'
import img2 from '../img/shop3.jpg'

import wash from '../img/wash.png'
import fridge from '../img/fridge.jpg'
import disp from '../img/disp.png'
import micro from '../img/micro.jpg'
import ro from '../img/ro.png'


import whyimg from '../img/whyImg.jpg'


import ship from '../img/shipping.png'
import quli from '../img/qulity.png'
import ser from '../img/service.png'


import img3 from '../img/ph3.jpg'
import Footer from './Footer';
import ServicePageBox from './ServicePageBox';

import { Link } from "react-router-dom";
import CarouselWithTwoItems from './CarouselWithTwoItems';
import lg from '../img/lg.png'
import godrej from '../img/godrej.png'
import Whirlpoo from '../img/WhirlpoolBRAN.png'
import SAMSUNG from '../img/samsung.png'
import IFB from '../img/ifb.jpg'
import VOLTAS from '../img/Voltas.png'
import KENT from '../img/kent.png'



export default function Carousel() {

  return (
    <>
      <Navbar />
    

      <div className="homecon">
        <div className="carddd">
          <h1>ADARSH</h1>
          <p>Refrigeration And Air-Conditioning</p>
          <h4>Sadar bazar, Gurgoan</h4>
          <h5>(Serving you from 1990)</h5>
        </div>
      </div>
      <div className="backGorundColor"></div>

      <div className="HomePartsSec">
        <div className="cardParts">
          <div className="CardPartsText">
          <div className="textSelect">
          <h2>Appliances</h2>
          <p>Servicing, Repair, Installation &amp; Uninstallation</p>
          </div>
          </div>


          <div className="boxAParts">

            <div className="boxp">
              <div className="boxpImg">
                <img src={wash} alt="" />
              </div>
              <div className="textP">
                <h3>WASHING MACHINE</h3>
              </div>
            </div>

            <div className="boxp">
              <div className="boxpImg">
                <img src={fridge} alt="" />
              </div>
              <div className="textP">
                <h3>FRIDGE</h3>
              </div>
            </div>

            <div className="boxp">
              <div className="boxpImg">
                <img src={micro} alt="" />
              </div>
              <div className="textP">
              <h3>MICROWAVE</h3>
              </div>
            </div>

            <div className="boxp">
              <div className="boxpImg">
                <img src={ro} alt="" />
              </div>
              <div className="textP">
              
                <h3>R O</h3>
              </div>
            </div>

          

          </div>

        

        </div>

      </div>

<div className="CarouselWithTwoItems">

      <CarouselWithTwoItems/>
</div>


      <div className="HomeWhySec">
            <div className="whyImg">  
              <img src={whyimg} alt="" />
            </div>
            <div className="textWhy">
              <h1>Whay Choose Us</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
              <div className="iconsWhy">

                <div className="icon">
                  <div className="ship">
                    <img src={ship} alt="" />
                    <p>Wide Verity</p>
                  </div>
                  <div className="qual">
                    <img src={quli} alt="" />
                    <p>Affordable Rates</p>
                  </div>
                  <div className="ser">
                    <img src={ser} alt="" />
                    <p>Best Service</p>
                  </div>
                </div>

              </div>
            </div>

          </div>


        <div className='Popular'>Popular Company :</div>
       <div className="PopulerCompany">

        <div className="company">
          <div className='ImageSECCompany'>
            <img src={godrej} alt="" />
            </div>
            <div className='ImageSECCompany'>
            <img src={lg} alt="" />
            </div>
            <div className='ImageSECCompany'>
            <img src={Whirlpoo} alt="" />
            </div>
            <div className='ImageSECCompany'>
            <img src={SAMSUNG} alt="" />
            </div>
            <div className='ImageSECCompany'>
            <img src={IFB} alt="" />
            </div>
            <div className='ImageSECCompany'>
            <img src={VOLTAS} alt="" />
            </div>
             <div className='ImageSECCompany'>
            <img src={KENT} alt="" />
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
