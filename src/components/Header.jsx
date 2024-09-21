import React, { useEffect, useState } from 'react'
import { Button, Container, Form, Image, Modal, Nav, Navbar, Toast } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
 const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  const[token,setToken] = useState('')
  const[user,setUser] = useState('')
  const[profile,setProfile] = useState('')

  useEffect(()=>{
    const tokendata = sessionStorage.getItem('token')
    setToken(tokendata);
    const username = JSON.parse(sessionStorage.getItem('user'))
    setUser(username?.firstname)
    setProfile(username?.profilepic)  

  },[])


  return (
    <div id="headerpart">
   
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
      <Link style={{textDecoration:"none"}} to={'/'}>  <Navbar.Brand style={{color:"#5a2999"}} href=""><i class="fa-solid fa-palette"></i> ARTICA</Navbar.Brand> </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
        
          <Link style={{textDecoration:"none"}} to={'/Admindashboard'}>  <h6  style={{color:"red",margin:"10px"}}>Home</h6> </Link>
          <Link style={{textDecoration:"none"}} to={'/About'}>  <h6  style={{color:"green",margin:"10px"}} >About</h6></Link>
          <Link style={{textDecoration:"none"}} to={'/Products'}> <h6  style={{color:"cyan",margin:"10px"}} >Products</h6></Link>
          <Link style={{textDecoration:"none"}} to={'/Contact'}> <h6  style={{color:"blue",margin:"10px"}} >Contact</h6> </Link>
           
         </Nav>
         <Link  to={'/Login'}> 
         {token ?(
           <>
         <Button style={{width:"100px",color:"black"}} variant="outline-dark"  onClick={handleShow}>  {user} </Button>
        

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>My Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
        <Image style={{width:"50px",height:"50px"}} src={profile?profile:"https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="} roundedCircle /> <br />
        <Form.Control className='w-50' 
                type="text"
                placeholder={user}
              />

        </Modal.Body>
        <Modal.Footer>
           <Button variant="secondary" onClick={handleClose}>
          <i class="fa-solid fa-right-from-bracket"></i>
          </Button>
        <Link to={'/Profile'}> <Button variant="primary" onClick={handleClose}>
            Edit Profile
          </Button></Link>
        </Modal.Footer>
      </Modal>
    </>
       

         ):(
        <Button style={{width:"100px",color:"black"}} variant="outline-dark">Login <i class="fa-solid fa-right-to-bracket"></i></Button>

      )}
         </Link>
         
        </Navbar.Collapse>
      
      </Container>
    </Navbar>
   
    </div>
  )
}

export default Header



