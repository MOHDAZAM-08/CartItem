import React from 'react'

export default function Footer() {
  return (
    <>
      <div className="footer" style={{backgroundColor:"black",color:"white",fontSize:"20px",width:"100%" , padding:"3px 60px"}}>
        <div >
          <div className="d-flex justify-content-around" style={{paddingTop:"20px",marginTop:"20px"}}>
            <p>B-47 Cherki, Gaya, Bihar INDIA | Phone: +91 9716-887-448 | Email: hodaelectricals2017@gmail.com</p>
          </div>
          <div className="d-flex justify-content-around" style={{paddingBottom:"20px",marginTop:"20px"}}>
            <p>Copyright © 2023 Hoda Electricals</p>
            
          </div>
        </div>
      </div>
    </>
  );
}