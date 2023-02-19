import React from 'react'
import { BsFacebook } from 'react-icons/bs';
import { TiSocialYoutubeCircular } from 'react-icons/ti';
import { AiFillTwitterCircle } from 'react-icons/ai';
import Navbar from './Navbar';
import Footer from './Footer';
import img7 from '../img/co.jpg'



export default function Contact() {
    return (
        <>
        <Navbar/>

        <div className="photo" style={{ width: "100%", height: "615px", overflow: "hidden", position: "relative", color: "white" }}>
                <img src={img7} className="d-block w-100" alt="Photo" />
                <div className="centeredc">CONTACT US</div>
            </div>

            <div className="row" style={{margin:"0", marginTop:"70px"}}>
                <div className="con"  style={{ width: "50%", padding: "10px 100px 10px 70px" }}>
                    <h1 className='mb-4' style={{color:"#0196d2", fontWeight:"bold"}}>WE'RE READY, LET'S TALK</h1>
                    <br/>
                    <div className="mb-3 ">
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Your Name" />
                    </div>
                    <div className="mb-3">
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="E-mail address " />
                    </div>
                    <div className="mb-3">

                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="4" placeholder="Message"></textarea>
                    </div>
                    <button type="button" className="btn btn-primary">Send message</button>

                </div>
                <div className=""  style={{ width: "40%", padding: "30px 100px 10px 70px" }}>
                    <h1 className='mb-3' style={{color:"#0196d2", fontWeight:"bold"}}>CONTACT US</h1>
                    <br/>
                    <h4>Address</h4>
                    <span className='mb-3'>B-47 Cherki, Gaya, Bihar,INDIA</span>
                    <h4 >E-mail us</h4>
                    <span className='mb-3'>hodaelectricals2017@gmail.com</span>
                    <h4>Call Us</h4>
                    <span className='mb-3' >+91 9716-887-448</span>
                    <br/><br/>
                    <h3>Follow Us</h3>
                    <div className="iconn" style={{cursor:"pointer"}}>
                    <BsFacebook  size="2rem"  />
                    <TiSocialYoutubeCircular size="2.6rem" style={{margin:"0 10px"}}/>
                    <AiFillTwitterCircle size="2.4rem" />
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}
