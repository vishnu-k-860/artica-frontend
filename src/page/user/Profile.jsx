import React from 'react'
import { Button, Form, Image } from 'react-bootstrap'

function Profile() {






  
  return (
    <div >
        <div id='profile' style={{width:"100%",height:"70vh"}}>
        <Form style={{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
          <Image style={{width:"50px",height:"50px"}} src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=" roundedCircle />
          <Form.Label >E mail</Form.Label>
              <Form.Control className='w-25' name="product-id" 
                required 
                type="email"
                placeholder="email"
              /> 
              <Form.Label >Username</Form.Label>
              <Form.Control className='w-25' name="product-title" 
                required
                type="text"
                placeholder="username"
              />
              <Form.Label >Phone Number</Form.Label>
              <Form.Control className='w-25' name="product-title" 
                required
                type="text"
                placeholder="Phone number"
               />
               <Form.Label >Address</Form.Label>
              <Form.Control className='w-25' name="product-title" 
                required
                type="text"
                placeholder="Address"/> <br />

              <Button variant="primary">
            Save Changes
          </Button>
      
    </Form>
        </div>
      
    </div>
  )
}

export default Profile
