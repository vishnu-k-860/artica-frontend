import React from 'react'
import { Col, Row } from 'react-bootstrap'

function About() {
  return (
    <div id="about">
     <Row>
           <Col lg={12} md={6} sm={1}>
                <h2 style={{marginTop:"10px"}}>About us</h2>
                 <Row>
                    <h3 style={{fontFamily:"fantasy",color:"#ad025d"}}>Welcome to artica</h3>
                    <hr style={{color:"#f4fc03",width:"250px"}} /> 
                    <p style={{color:"white"}}>we are passionate about bringing art to life and making it accessible to everyone. Our platform is a celebration of creativity, where customers can customize their products,they can purchase different craft materials with affordable rates and also they can show case their talents</p>
                 </Row>
              
        
             
              <Row>
                 <h3 style={{fontFamily:"fantasy",color:"#ad025d"}}>Our Mission</h3> 
                 <hr style={{color:"#f4fc03",width:"250px"}} /> 
                  <p style={{color:"white"}}>Our mission is to make a vibrant community of artists and art lovers, offering a space to showcase their creativity. We aim to provide artists with the craft materials with affordable rates that  they need to showcase their creativity and connect with a global audience, while also making it easy for art lovers to discover and purchase art products with customizing.</p>
              </Row>
              
        
             
                <Row>
                  <h3 style={{fontFamily:"fantasy",color:"#ad025d"}}>Our Vision</h3>
                  <hr style={{color:"#f4fc03",width:"250px"}} /> 
                  <p style={{color:"white"}}>We envision a world where art is celebrated and accessible to all. A world where artists have the freedom to create and share their work without boundaries, and where every individual has the opportunity to experience the transformative power of art.</p>
                </Row>
              
        
                <Row>
                  <h3 style={{fontFamily:"fantasy",color:"#ad025d"}}>What we offer</h3>
                  <hr style={{color:"#f4fc03",width:"250px"}} /> 
                  <h6 style={{color:"white"}}><i class="fa-solid fa-palette"></i> Customized art works</h6>
                  <h6 style={{color:"white"}}><i class="fa-solid fa-bag-shopping"></i> Quality craft materials</h6>
                  <h6 style={{color:"white"}}><i class="fa-solid fa-globe"></i> World wide delivery</h6>
                </Row>
             
        
             
               <Row>
                 <h3 style={{fontFamily:"fantasy",color:"#ad025d"}}>Join Us</h3>
                 <hr style={{color:"#f4fc03",width:"250px"}} /> 
                 <p style={{color:"white"}}>Whether you’re an art lover looking for different varieties of art works and to purchase them by customizing and also to showcase your work by using our craft materials,we invite you to explore, engage, and become a part of our vibrant community.</p>
               </Row>
        
                
        
           </Col>
     </Row>
    </div>
  )
}

export default About
