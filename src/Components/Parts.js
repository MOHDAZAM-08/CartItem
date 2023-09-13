import React, { useState } from 'react'
import {useContext } from 'react';
import Navbar from './Navbar'
import Footer from './Footer'


import wash from '../img/wash.png'
import fridge from '../img/fridge.jpg'
import disp from '../img/disp.png'
import micro from '../img/micro.jpg'
import ro from '../img/ro.png'

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
import imgSa from '../img/stand2 (3).jpg'
import imgSb from '../img/stand2 (2).jpg'
import imgSc from '../img/stand2 (1).jpg'
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

import imgSN1 from '../img/spin inner (1).jpg'
import imgSN2 from '../img/spin inner (2).jpg'
import imgSN3 from '../img/spin inner (3).jpg'
import imgSN4 from '../img/spin inner (4).jpg'
import imgpu1 from '../img/pulsator2 (2).jpg'
import imgpu2 from '../img/pulsator2 (1).jpg'
import imgpu3 from '../img/pulsator1.jpg'
import imgga1 from '../img/gerabox1.jpg'
import imgga2 from '../img/gerabox1 (2).jpg'
import imgga3 from '../img/gerabox1 (3).jpg'
import imgBe1 from '../img/balt (2).jpg'
import imgBe2 from '../img/balt (1).jpg'
import imgT1 from '../img/tap (1).jpg'
import imgT2 from '../img/tap (2).jpg'

import imgCap1 from '../img/cap.jpg'
import imgCap2 from '../img/cap (2).jpg'
import imgCap3 from '../img/cap (2).jpg'
import imgCap4 from '../img/cap (3).jpg'
import imgCap5 from '../img/cap (4).jpg'
import imgDs from '../img/dis stand.jpg'
import imgFa from '../img/tray (2).jpg'
import imgFb from '../img/tray (1).jpg'
import imgFc from '../img/tray (3).jpg'
import imgFd from '../img/tray.jpg'
import imgFe from '../img/uv (3).jpg'

import imgBr1 from '../img/bottol rack (1).jpg'
import imgBr2 from '../img/bottol rack (2).jpg'
import imgBr3 from '../img/bottol rack (3).jpg'
import imgBr4 from '../img/tray (3).jpg'
import imgch1 from '../img/chiller (1).jpg'
import imgch2 from '../img/chiller (2).jpg'
import imgch3 from '../img/chiller (3).jpg'
import imgch4 from '../img/tray (3).jpg'
import imgch5 from '../img/uv (1).jpg'
import imgi1 from '../img/ice cude (1).jpg'
import imgi3 from '../img/ice cude (3).jpg'
import product from '../img/ice cude (2).jpg'

import imgFb2 from '../img/uv (1).jpg'
import imgFc3 from '../img/uv (4).jpg'
import imgbr1 from '../img/br (1).jpg'
import imgbr2 from '../img/br (2).jpg'
import imgbr3 from '../img/br (3).jpg'
import imgbr4 from '../img/br (4).jpg'
import imgbr5 from '../img/br (3).jpg'
import imgv1 from '../img/veg.jpg'
import imgv2 from '../img/veg (1).jpg'
import imgv3 from '../img/veg (2).jpg'
import Sidebar from './Sidebar'
import { useNavigate } from 'react-router-dom';
import { AppContext, useAppContext } from '../context';
import { useEffect } from 'react';
import WashingSemi from '../Pages/WashingSemi';
import { Link } from 'react-router-dom/dist';



const WASHING = () => {
  return (
    <Link to="/WashingSemi" className='WASHING'>
      <h1>Select any one:</h1>
      <div className="ButtonWASHING">
        <button>Automatic Washing machine</button>
        <button>Semi-Automatic Washing machine</button>
      </div>
    </Link>  
  );
};

const FRIDGE = () => {
  return (
    <div className='WASHING'>
      <h1>Select any one:</h1>
      <div className="ButtonWASHING">
        <button>Automatic Washing machine</button>
        <button>Semi-Automatic Washing machine</button>
      </div>
    </div>
  );
};

const RO = () => {
  return (
    <div className='WASHING'>
     <h1>Select any one:</h1>
      <div className="ButtonWASHING">
        <button>Automatic Washing machine</button>
        <button>Semi-Automatic Washing machine</button>
      </div>
    </div>
  );
};

const DISPENSER = () => {
  return (
    <div className='WASHING'>
     <h1>Select any one:</h1>
      <div className="ButtonWASHING">
        <button>Automatic Washing machine</button>
        <button>Semi-Automatic Washing machine</button>
      </div>
    </div>
  );
};

const MICROWAVE = () => {
  return (
    <div className='WASHING'>
       <h1>Select any one:</h1>
      <div className="ButtonWASHING">
        <button>Automatic Washing machine</button>
        <button>Semi-Automatic Washing machine</button>
      </div>
    </div>
  );
};






const products = [
  { "id": 1, "img": wash, "name": "Product 1", "category": "Category A" },
  { "id": 2, "img": fridge, "name": "Product 2", "category": "Category B" },
  { "id": 3, "img": disp, "name": "Product 3", "category": "Category A" },
  { "id": 4, "img": micro, "name": "Product 4", "category": "Category A" },
  { "id": 5, "img": ro, "name": "Product 5", "category": "Category A" },
  { "id": 6, "img": imgW, "name": "Product 6", "category": "Category D" },
  { "id": 7, "img": imgF, "name": "Product 7", "category": "Category A" },
  { "id": 8, "img": imgR, "name": "Product 8", "category": "Category C" },
  { "id": 9, "img": imgD, "name": "Product 9", "category": "Category A" },
  { "id": 10, "img": imgM, "name": "Product 10", "category": "Category A" },
//   { "id": 11, "img": imgW1, "name": "Product 1", "category": "Category A" },
//   { "id": 12, "img": imgW2, "name": "Product 1", "category": "Category A" },
//   { "id": 13, "img": imgW3, "name": "Product 1", "category": "Category A" },
//   { "id": 14, "img": img2a, "name": "Product 1", "category": "Category A" },
//   { "id": 15, "img": img2b, "name": "Product 1", "category": "Category A" },
//   { "id": 16, "img": img2c, "name": "Product 1", "category": "Category A" },
//   { "id": 17, "img": img2d, "name": "Product 1", "category": "Category A" },
//   { "id": 18, "img": img2e, "name": "Product 1", "category": "Category A" },
//   { "id": 19, "img": img3a, "name": "Product 1", "category": "Category A" },
//   { "id": 20, "img": img3b, "name": "Product 1", "category": "Category A" },
//   { "id": 21, "img": img3c, "name": "Product 1", "category": "Category A" },
//   { "id": 22, "img": imgCa, "name": "Product 1", "category": "Category A" },
//   { "id": 23, "img": imgCb, "name": "Product 1", "category": "Category A" },
//   { "id": 24, "img": imgCc, "name": "Product 1", "category": "Category A" },
//   { "id": 25, "img": imgCd, "name": "Product 1", "category": "Category A" },
//   { "id": 26, "img": imgSa, "name": "Product 1", "category": "Category A" },
//   { "id": 27, "img": imgSb, "name": "Product 1", "category": "Category A" },
//   { "id": 28, "img": imgSc, "name": "Product 1", "category": "Category A" },
//   { "id": 29, "img": imgSd, "name": "Product 1", "category": "Category A" },
//   { "id": 30, "img": imgSa1, "name": "Product 1", "category": "Category A" },
//   { "id": 31, "img": imgSb2, "name": "Product 1", "category": "Category A" },
//   { "id": 32, "img": imgSc3, "name": "Product 1", "category": "Category A" },
//   { "id": 33, "img": imgp1, "name": "Product 1", "category": "Category A" },
//   { "id": 34, "img": imgp2, "name": "Product 1", "category": "Category A" },
//   { "id": 35, "img": imgp3, "name": "Product 1", "category": "Category A" },
//   { "id": 36, "img": imgp4, "name": "Product 1", "category": "Category A" },
//   { "id": 37, "img": imgSpin1, "name": "Product 1", "category": "Category A" },
//   { "id": 38, "img": imgSpin2, "name": "Product 1", "category": "Category A" },
//   { "id": 39, "img": imgSpin3, "name": "Product 1", "category": "Category A" },
//   { "id": 40, "img": imgSpin4, "name": "Product 1", "category": "Category A" },
//   { "id": 41, "img": imgC1, "name": "Product 1", "category": "Category A" },
//   { "id": 42, "img": imgC2, "name": "Product 1", "category": "Category A" },
//   { "id": 43, "img": imgL1, "name": "Product 1", "category": "Category A" },
//   { "id": 44, "img": imgL2, "name": "Product 1", "category": "Category A" },
//   { "id": 45, "img": imgLF1, "name": "Product 1", "category": "Category A" },
// { "id": 46, "img": imgLF2, "name": "Product 1", "category": "Category A" },
// { "id": 47, "img": imgLF3, "name": "Product 1", "category": "Category A" },
// { "id": 48, "img": imgM1, "name": "Product 1", "category": "Category A" },
// { "id": 49, "img": imgM2, "name": "Product 1", "category": "Category A" },
// { "id": 50, "img": imgM3, "name": "Product 1", "category": "Category A" },
// { "id": 51, "img": imgMa, "name": "Product 1", "category": "Category A" },
// { "id": 52, "img": imgMb, "name": "Product 1", "category": "Category A" },
// { "id": 53, "img": imgMp, "name": "Product 1", "category": "Category A" },
// { "id": 54, "img": imgMp1, "name": "Product 1", "category": "Category A" },
// { "id": 55, "img": imgmm1, "name": "Product 1", "category": "Category A" },
// { "id": 56, "img": imgmm2, "name": "Product 1", "category": "Category A" },
// { "id": 57, "img": imgSN1, "name": "Product 1", "category": "Category A" },
// { "id": 58, "img": imgSN2, "name": "Product 1", "category": "Category A" },
// { "id": 59, "img": imgSN3, "name": "Product 1", "category": "Category A" },
// { "id": 60, "img": imgSN4, "name": "Product 1", "category": "Category A" },
// { "id": 61, "img": imgpu1, "name": "Product 1", "category": "Category A" },
// { "id": 62, "img": imgpu2, "name": "Product 1", "category": "Category A" },
// { "id": 63, "img": imgpu3, "name": "Product 1", "category": "Category A" },
// { "id": 64, "img": imgga1, "name": "Product 1", "category": "Category A" },
// { "id": 65, "img": imgga2, "name": "Product 1", "category": "Category A" },
// { "id": 66, "img": imgga3, "name": "Product 1", "category": "Category A" },
// { "id": 67, "img": imgBe1, "name": "Product 1", "category": "Category A" },
// { "id": 68, "img": imgBe2, "name": "Product 1", "category": "Category A" },
// { "id": 69, "img": imgT1, "name": "Product 1", "category": "Category A" },
// { "id": 70, "img": imgT2, "name": "Product 1", "category": "Category A" },
// { "id":71, "img": imgCap1, "name": "Product 1", "category": "Category A" },
// { "id": 72, "img": imgCap2, "name": "Product 1", "category": "Category A" },
// { "id": 73, "img": imgCap3, "name": "Product 1", "category": "Category A" },
// { "id": 74, "img": imgCap4, "name": "Product 1", "category": "Category A" },
// { "id": 75, "img": imgCap5, "name": "Product 1", "category": "Category A" },
// { "id": 76, "img": imgDs, "name": "Product 1", "category": "Category A" },
// { "id": 77, "img": imgFa, "name": "Product 1", "category": "Category A" },
// { "id": 78, "img": imgFb, "name": "Product 1", "category": "Category A" },
// { "id": 79, "img": imgFc, "name": "Product 1", "category": "Category A" },
// { "id": 80, "img": imgFd, "name": "Product 1", "category": "Category A" },
// { "id": 81, "img": imgFe, "name": "Product 1", "category": "Category A" },
// { "id": 82, "img": imgBr1, "name": "Product 1", "category": "Category A" },
// { "id": 83, "img": imgBr2, "name": "Product 1", "category": "Category A" },
// { "id": 84, "img": imgBr3, "name": "Product 1", "category": "Category A" },
// { "id": 85, "img": imgBr4, "name": "Product 1", "category": "Category A" },
// { "id": 86, "img": imgch1, "name": "Product 1", "category": "Category A" },
// { "id": 87, "img": imgch2, "name": "Product 1", "category": "Category A" },
// { "id": 88, "img": imgch3, "name": "Product 1", "category": "Category A" },
// { "id": 89, "img": imgch4, "name": "Product 1", "category": "Category A" },
// { "id": 90, "img": imgch5, "name": "Product 1", "category": "Category A" },
// { "id": 91, "img": imgi1, "name": "Product 1", "category": "Category A" },
// { "id": 92, "img": imgi3, "name": "Product 1", "category": "Category A" },
// { "id": 93, "img": imgFb2, "name": "Product 1", "category": "Category A" },
// { "id": 94, "img": imgFc3, "name": "Product 1", "category": "Category A" },
// { "id": 95, "img": imgbr1, "name": "Product 1", "category": "Category A" },
// { "id": 96, "img": imgbr2, "name": "Product 1", "category": "Category A" },
// { "id": 97, "img": imgbr3, "name": "Product 1", "category": "Category A" },
// { "id": 98, "img": imgbr4, "name": "Product 1", "category": "Category A" },
// { "id": 99, "img": imgbr5, "name": "Product 1", "category": "Category A" },
// { "id": 100, "img": imgv1, "name": "Product 1", "category": "Category A" },
// { "id": 101, "img": imgv2, "name": "Product 1", "category": "Category A" },
// { "id": 102, "img": imgv3, "name": "Product 1", "category": "Category A" },
  // ...more products
];




export default function Parts() {




  function scrollToProductDiv() {
    const productDiv = document.getElementById('productDiv');
    if (productDiv) {
        productDiv.scrollIntoView({ behavior: 'smooth' });
    }
}

  const { setSharedState,setcartdata } = useAppContext();


  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(products => products.category === selectedCategory);



    const [selectedItems, setSelectedItems] = useState([]);

    console.log(selectedItems,"this parts")

    const [cartItems, setCartItems] = useState([]);
    console.log(cartItems,"this is cartitem")

// context api call
    const addDataToStateA = () => {
      console.log("add data buttonn Clicked");
      setSharedState([selectedItems]);  
      setcartdata([cartItems]);  
    };
   
// to send data
    useEffect(() => {
      addDataToStateA();
    }, [selectedItems],[cartItems]); 

    const toggleItem = (item) => {

      console.log("this is toggele")
      if (selectedItems.includes(item)) {
        setSelectedItems(selectedItems.filter(selectedItem => selectedItem !== item));
      } else {
         setSelectedItems([...selectedItems, item]);
      }
      addDataToStateA();
    };

  function handleSelectChange(e) {
    setSelectedCategory(e.target.value);
    const height = window.innerHeight;
    window.scrollTo({
      top: height,
      left: 0,
      behavior: 'smooth'
    });
  }


  const [activeField, setActiveField] = useState(null);

  const handleFieldClick = (field) => {
    scrollToProductDiv();
    setActiveField(field);
  };


  return (
    <>
      <Navbar />
    <>
  
      <div className="Secpart ">



        <div className="selectedCategory">
          <div className="textSelect">
          <h2>Appliances</h2>
          <p>Servicing, Repair, Installation &amp; Uninstallation</p>
          </div>
        </div>


        <div className="boxAPartsP">

          <div className="boxp"  onClick={() => handleFieldClick("WASHING")}>
            <div className="boxpImg">
              <img src={wash} alt="" />
            </div>
            <div className="textP">
              <h3>WASHING MACHINE</h3>
            </div>
          </div>

          <div className="boxp" onClick={() => handleFieldClick("FRIDGE")}>
            <div className="boxpImg">
              <img src={fridge} alt="" />
            </div>
            <div className="textP">
              <h3>FRIDGE</h3>
            </div>
          </div>

          <div className="boxp" onClick={() => handleFieldClick("MICROWAVE")}>
            <div className="boxpImg">
              <img src={micro} alt="" />
            </div>
            <div className="textP">
             
              <h3>MICROWAVE</h3>
            </div>
          </div>

          <div className="boxp" onClick={() => handleFieldClick("R O")}>
            <div className="boxpImg">
              <img src={ro} alt="" />
            </div>
            <div className="textP">
              <h3>R O</h3>              
            </div>
          </div>

          <div className="boxp" onClick={() => handleFieldClick("DISPENSER")} >
            <div className="boxpImg">
              <img src={disp} alt="" />
            </div>
            <div className="textP">
            <h3>DISPENSER</h3>
            </div>
          </div>



        </div>





      </div>


      <div className="activedis" id='productDiv'>
        {activeField === "WASHING" && <WASHING />}
        {activeField === "FRIDGE" && <FRIDGE />}
        {activeField === "R O" && <RO />}
        {activeField === "DISPENSER" && <DISPENSER />}
        {activeField === "MICROWAVE" && <MICROWAVE />}
      </div>

{/* 
      <div className='proCard'>
        {filteredProducts.map(product => (
          <div className="ProductImgCard" key={product.id}>
            <div className="productCard">
              <div className="ProImg">
                <img src={product.img} alt={product.name} />
              </div>
              <div className="proText">
                <h1>{product.name}</h1>
                <p>{product.category}</p>
              </div>
              <div className="CartButton" onClick={()=>toggleItem(product.name)}>
                <button>Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div> */}



  

      <Footer />
    </>
    </>
  )
}



