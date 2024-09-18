import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div id="footerpart" style={{width:"100%",border:"1px solid grey",backgroundColor:"#b7b6b8",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
        <Row  >
          <Row >
          <Col lg={4} md={4} sm={1} >
            
                 <h2 style={{color: "#690c21",fontFamily:"monospace",margin:"20px"}}><i class="fa-solid fa-palette" style={{color: "#691f0c"}}></i> artica</h2>
                 <h5 style={{color:"#1c004a",margin:"20px"}}>Designed and built with all the love in the world by the artica team with the help of our contributors.</h5>
                 <h5 style={{color:"#243980",margin:"20px"}}>Code licensed artica team, docs CC BY 3.0.</h5>
                 <h5 style={{color:"#328024",margin:"20px"}}>Currently v1.0.0.</h5>
              
          </Col>
          <Col lg={4} md={4} sm={1} style={{flexDirection:"column"}} >
        
             <h4 style={{color:"#a60342",fontFamily:"monospace",margin:"20px"}}>Links</h4>
               <Link style={{textDecoration:"none"}} to={'/'}> <a style={{color:"#5c02ab",margin:"20px"}} href="#headerpart">Home</a></Link>
               <Link to={'/Products'}> <a style={{color:"#ab0224",margin:"20px"}} href="#headerpart">Products</a></Link>
                <Link to={'/Cart'} > <a style={{color:"#0254ab",margin:"20px"}} href="#headerpart">Cart</a></Link>
           
             
          </Col>
          <Col lg={4} md={4} sm={1}>
        
               <h4 style={{color:"#02ab35",fontFamily:"monospace",margin:"20px"}}>Contact Us</h4>
                   <i style={{color:"#1b02ab",fontSize:"30px",margin:"20px"}} class="fa-brands fa-facebook"></i>
                   <i style={{color:"#ab027e",fontSize:"30px",margin:"20px"}} class="fa-brands fa-instagram"></i>
                   <i style={{color:"#0265ab",fontSize:"30px",margin:"20px"}} class="fa-brands fa-twitter"></i>
                   <i style={{color:"",fontSize:"30px",margin:"20px"}} class="fa-solid fa-envelope"></i>             
                
  
          </Col>
         </Row>
        </Row>
        <h5 style={{color:"#02ab84"}}>Copyright © 2024 artica. Built with React.</h5>
   </div>
  )
}

export default Footer



