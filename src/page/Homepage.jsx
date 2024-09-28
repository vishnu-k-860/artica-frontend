import React from 'react'
import { Carousel } from 'react-bootstrap'

function Homepage() {
  return (
    <div id="homepage">
      <div>
        <Carousel>
        <Carousel.Item >
          <img style={{width:"100%",height:"80vh",imageResolution:"from-image"}}  src="https://img.freepik.com/premium-photo/colorful-abstract-painting-colorful-abstract-background_866548-3720.jpg" alt="" />
          <Carousel.Caption>
  
            <h3 style={{color:"#cde31e",fontFamily:"monospace",fontWeight:"bold",fontSize:"50px"}}>Art and Craft products</h3>
            <p style={{color:"black",fontFamily:"monospace",fontWeight:"bold",fontSize:"30px"}}>Catch your dream products at affordable rate.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img style={{width:"100%",height:"80vh"}}  src="https://img.freepik.com/free-photo/vibrant-colors-flow-abstract-wave-pattern-generated-by-ai_188544-9781.jpg" alt="" />
          <Carousel.Caption>
            <h3 style={{color:"#00927e",fontFamily:"monospace",fontWeight:"bold",fontSize:"50px"}}>Creative Materials</h3>
            <p style={{color:"black",fontFamily:"monospace",fontWeight:"bold",fontSize:"30px"}}>Try your own products.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img style={{width:"100%",height:"80vh"}} src="https://img.freepik.com/premium-photo/contemporary-abstract-motion-background-banner_410516-36594.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1723766400&semt=ais_hybrid" alt="" />
          <Carousel.Caption>
            <h3 style={{color:"#ab027e",fontFamily:"monospace",fontWeight:"bold",fontSize:"50px"}}>Customize your products</h3>
            <p style={{color:"black",fontFamily:"monospace",fontWeight:"bold",fontSize:"30px"}}>
              Surprise  your dear ones with Customized gifts
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      
      </div>
      <div>
        
      </div>
    </div>
  )
}

export default Homepage
