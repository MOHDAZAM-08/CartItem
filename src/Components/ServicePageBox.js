import React from 'react'

import { Link } from "react-router-dom";
import imgSP from '../img/parts.png'
import imgTool from '../img/tool (2).png'
import imgSErvi from '../img/service.png'


export default function ServicePageBox() {
    return (
        <>
            <h3 style={{ textAlign: "center", marginTop: "50px",color:"blue" }}>OUR SERVICES</h3>
            <div className="servivePageBox" >
                <Link className="card" id='card' style={{ textDecoration: "none", color: "black" }} to="/Servises">

                    <div className="ico">
                        <img src={imgTool} alt="" />
                    <h2 style={{ textAlign: "center" }}>PRODUCTS</h2>
                    </div>

                </Link>



                <Link className="card" id='card' style={{ textDecoration: "none", color: "black" }} to="/Servises">
                    <div className="ico">
                        <img src={imgSErvi} alt="" />
                    <h2 style={{ textAlign: "center" }}>SERVICES</h2>
                    </div>
                </Link>


                <Link className="card" id='card' style={{ textDecoration: "none", color: "black" }} to="/parts">
                    <div className="ico" >
                        <img src={imgSP} alt="" />
                    <h2 style={{ textAlign: "center" }}>PARTS</h2>
                    </div>
                </Link>

            </div>
        </>
    )
}
