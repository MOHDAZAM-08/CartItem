import React from 'react'
import { AiFillInstagram } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';

export default function Footer() {
  return (
    <>
      <div className="footer">


        <div className='footerabout'>


          <p><span>  ADARSH REFRIGERATION AND AIR-CONDITIONER </span> <br/>
              PROVIDING SERVICES IN GURGAON </p>
              <div className="social">
                Follow Us:
                <AiFillInstagram size="3.5rem" style={{color:"",paddingLeft:"10px"}}/>
                <BsFacebook size="3rem" style={{color:"",paddingLeft:"10px"}}/>
                <AiFillTwitterCircle size="3.6rem" style={{color:"",paddingLeft:"10px"}}/>
              </div>
        </div>
          <div className="footertext">
            <p> Visit
              504/6
              JacobhPura
              Ch Manhor Singh Azad Marg
              Gurgaon, Haryana<br/>
              Phone: +91 0811391053 , 7982811091 <br/> Email: anilkadam9810@gmail.com</p>
          </div>
          <br/>
        
      </div>
          <div className="copy" style={{backgroundColor:"#2471FF",color:"white",textAlign:"center",margin:"0",padding:"0px 0 20px 0" ,fontWeight:""}}>
            <span>Copyright © 2023 ADARSH REFRIGERATION AND AIR-CONDITIONER</span>
          </div>
          <p><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.639371142565!2d77.0261668!3d28.4602856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d191a80ad64e3%3A0xab209e618f5124e4!2sAdarsh%20Refrigeration%20%26%20Air%20Conditioners!5e0!3m2!1sen!2sin!4v1681584210858!5m2!1sen!2sin" width="100%" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" style={{marginTop:"20px"}}></iframe></p>
    </>
  );
}