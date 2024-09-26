import React, { useState } from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { registerAPI } from '../services/appAPI'

function Register() {
  const navigate = useNavigate()

  const[values,setValues] = useState({
    firstname:'',
    lastname:'',
    Email:'',
    phonenumber:'',
    address:'',
    password:''
  })
   console.log(values);
  

  const display =async(e)=>{
    e.preventDefault()
    const {firstname,lastname,Email,phonenumber,address,password} = values
    if(!firstname || !lastname || !Email || !phonenumber || !address || !password  ){
      alert("please fill the form")
    }else{
      const result = await registerAPI(values)
      if(result.status == 200){
        alert("Registration Success")
        navigate('/login')
      }else{
         if(result.status == 406){
          alert('already exist')
         }else{
          console.log(result);
          
         }
      }

    }
  }

  return (
    <div>
      <div id="registerform" style={{width:"100%",height:"100vh" ,display:"flex",alignItems:"center",justifyContent:"center"}}>
        <div id="registertable" style={{width:"50%",height:"90vh",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",border:"1px solid",borderRadius:"20px",boxShadow:"1px 1px 1px 1px"}}>
          <Form className='w-75'>
            <h3 style={{color:"#021670",fontFamily:"revert",fontWeight:"30px"}}  >REGISTER</h3>
          <Form.Label style={{color:"#021670"}}  name="firstname">First name</Form.Label>
              <Form.Control name="firstname" 
                required
                type="text"
                placeholder="User name"
                value={values.firstname}
                onChange={(e)=>{setValues({...values,firstname:e.target.value})}}
                
              /> 
              
              <Form.Label style={{color:"#021670"}} >Last name</Form.Label>
              <Form.Control name="lastname" 
                required
                type="text"
                placeholder="lastname"
                value={values.lastname}
                onChange={(e)=>{setValues({...values,lastname:e.target.value})}}
            
              /> 
              
              <Form.Label style={{color:"#021670"}} >E mail</Form.Label>
              <Form.Control name="email" 
                required
                type="email"
                placeholder="email"
                value={values.Email}
                onChange={(e)=>{setValues({...values,Email:e.target.value})}}
              /> 
              
              <Form.Label style={{color:"#021670"}} >phone number</Form.Label>
              <Form.Control name="phonenumber" 
                required
                type="text"
                placeholder="phone number"
                value={values.phonenumber}
                onChange={(e)=>{setValues({...values,phonenumber:e.target.value})}}
              /> 
              
              <Form.Label style={{color:"#021670"}}>address</Form.Label>
              <Form.Control name='address'
              type="textarea" 
              placeholder="enter address"
              value={values.address}
              onChange={(e)=>{setValues({...values,address:e.target.value})}}
              />
        
              <Form.Label style={{color:"#021670"}} >Password</Form.Label>
              <Form.Control name="password" 
                required
                type="password"
                placeholder="enter password"
                value={values.password}
                onChange={(e)=>{setValues({...values,password:e.target.value})}}
              /> 
             
              <br />
              <Button className='w-100' variant="success" onClick={(e)=>display(e)} >Register</Button> <br />
              <h6 style={{color:"#560359"}}>Already have an account: <Link to={'/Login'}> <a style={{textDecoration:"none"}} href="">Login</a></Link> </h6>
              
    
          </Form>
        </div>
        
      </div>
    </div>
   
  )
}

export default Register
