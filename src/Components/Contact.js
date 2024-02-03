import React from 'react'
import { BsFacebook } from 'react-icons/bs';
import { TiSocialYoutubeCircular } from 'react-icons/ti';
import { AiFillTwitterCircle } from 'react-icons/ai';
import Navbar from './Navbar';
import Footer from './Footer';
import img7 from '../img/contact.jpg'



export default function Contact() {
    return (
        <>
            <Navbar />

            <div className="photoC"  >
                <img id='projectImage' src={img7} className="d-block w-100" alt="Photo" />
            </div>

            <h1 className='m-4' style={{ color: "#0196d2", fontWeight: "bold", textAlign: "center" }}>WE'RE READY, LET'S TALK</h1>
            
            <div className="contact" >
                <div className="FormCont">
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Your Name" />
        
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="E-mail address " />
                    

                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="4" placeholder="Message"></textarea>
                    
                    <button type="button" id='contact-button' className="btn btn-primary">Send message</button>

                </div>

                <div className="left"  >
                    <h1 className='mb-3' style={{ color: "#0196d2", fontWeight: "bold" }}>CONTACT US</h1>
                    <br />
                    <h4>Address</h4>
                    <span className='mb-3'>B-47 Cherki, Gaya, Bihar,INDIA</span>
                    <h4 >E-mail us</h4>
                    <span className='mb-3'>hodaelectricals2017@gmail.com</span>
                    <h4>Call Us</h4>
                    <span className='mb-3' >+91 9716-887-448</span>
                    <br /><br />
                    <h3>Follow Us</h3>
                    <div className="iconn" style={{ cursor: "pointer" }}>
                        <BsFacebook size="2rem" />
                        <TiSocialYoutubeCircular size="2.6rem" style={{ margin: "0 10px" }} />
                        <AiFillTwitterCircle size="2.4rem" />
                    </div>
                    <br />
                </div>

            </div>

            <Footer />
        </>
    )
}
