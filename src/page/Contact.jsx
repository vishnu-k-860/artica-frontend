import React from 'react'
import { Col, Row } from 'react-bootstrap'

function Contact() {
  return (
    <div id='contact'>
     <Row>
        <Col lg={4} md={3} sm={1}>
          <h3>Contact Us</h3>
          <h6>We’d love to hear from you! Whether you have a question, need assistance, or just want to share your thoughts, our team is here to help.</h6>
        </Col>
        <Col lg={4} md={3} sm={1}>
          <h3>General Inquiries</h3>
          <h6>For general questions about [Your Art Website's Name], our artists, or our collections, please reach out to us at:</h6>
          <h6 style={{fontSize:"30px"}}><i class="fa-solid fa-phone"></i></h6>
          <h6 style={{fontSize:"30px"}}> <i class="fa-regular fa-envelope"></i></h6>
        </Col>
        <Col lg={4} md={3} sm={1} >
          <h3>Follow us</h3>
          <h6>Stay connected and follow us on social media for the latest updates, featured artists, and new collections:</h6>
          <Col lg={3} md={3} sm={1} >
            <h6 style={{fontSize:"30px"}}><i class="fa-brands fa-whatsapp"></i></h6>
            <h6 style={{fontSize:"30px"}}><i class="fa-brands fa-instagram"></i></h6>
            <h6 style={{fontSize:"30px"}}><i class="fa-brands fa-facebook-f"></i></h6>
            <h6 style={{fontSize:"30px"}}><i class="fa-brands fa-x-twitter"></i></h6>
            
          </Col>
        </Col>
     </Row>
    </div>
  )
}

export default Contact
