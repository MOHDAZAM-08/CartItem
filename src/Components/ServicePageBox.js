import React from 'react'
import { FaTools } from 'react-icons/fa';
import { BsFillLightbulbFill } from 'react-icons/bs';
import { GiAutoRepair } from 'react-icons/gi';
import { GrUserWorker } from 'react-icons/gr';
import { GiRempart } from 'react-icons/gi';
import { Link } from "react-router-dom";
import imgSP from '../img/sp.png'


export default function ServicePageBox() {
  return (
    <>
            <h3 style={{textAlign:"center",marginTop: "50px"}}>OUR SERVICES</h3>
        <div className="row servise" >
                <Link className="card" id='card' style={{textDecoration:"none",color:"black"}} to="/Servises">
                    <div className="ico" style={{ display: "flex", justifyContent: "center", margin: "20px 5px" }}>
                        <FaTools size="5rem" style={{color:"red"}}/>
                    </div>
                        <h2 style={{textAlign:"center"}}>PRODUCTS</h2>
                </Link>

                {/* <Link className="card" id='card'  style={{textDecoration:"none",color:"black"}}  to="/Servises">
                    <div className="ico" style={{ display: "flex", justifyContent: "center", margin: "20px 5px" }}>
                        <BsFillLightbulbFill size="5rem" />
                    </div>
                </Link> */}

                <Link className="card" id='card'  style={{textDecoration:"none",color:"black"}} to="/Servises">
                    <div className="ico" style={{ display: "flex", justifyContent: "center", margin: "20px 5px" }}>
                        <GiAutoRepair size="5rem" style={{color:"blue"}} />
                    </div>
                    <h2 style={{textAlign:"center"}}>SERVICES</h2>
                </Link>

                <Link className="card" id='card'  style={{textDecoration:"none",color:"black"}} to="/parts">
                    <div className="ico" style={{ display: "flex", justifyContent: "center", margin: "20px 5px" }}>
                        {/* <GiRempart size="5rem" style={{color:"green"}} /> */}
                        <img src={imgSP} alt="" style={{width:"5rem"}}/>
                    </div>
                    <h2 style={{textAlign:"center"}}>PARTS</h2>
                </Link>
            </div>
    </>
  )
}
