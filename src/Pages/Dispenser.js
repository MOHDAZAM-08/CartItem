import React from 'react'
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
import Navbar from '../Components/Navbar'

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

export default function Dispenser() {




  return (
    <>
    <Navbar/>
        <div className='headingPages'>Dispenser</div>
       <div className='proCard'>
        {products.map(product => (
          <div className="ProductImgCard" key={product.id}>
            <div className="productCard">
              <div className="ProImg">
                <img src={product.img} alt={product.name} />
              </div>
              <div className="proText">
                <h1>{product.name}</h1>
              </div>
              <div className="CartButton">
                <button>Contact</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
