import React, { useEffect, useState } from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {

  const[token,setToken] = useState('')
  const[user,setUser] = useState('')

  useEffect(()=>{
    const tokendata = sessionStorage.getItem('token')
    setToken(tokendata);
    const username = JSON.parse(sessionStorage.getItem('user'))
    setUser(username?.firstname)   
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
         <Button style={{width:"100px",color:"black"}} variant="outline-dark"><i class="fa-regular fa-user"></i> {user}</Button>
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
