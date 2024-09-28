import React, { useState } from 'react'
import { Button, Form, InputGroup, Modal } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { registerAPI, verifyotpApi } from '../services/appAPI'
import Resend from './user/Resend'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Register() {
  const navigate = useNavigate()

 

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [editbutton,seteditButton] = useState(false)

  const[value,setvalue] = useState({
    Email:'',
    otp:''
  })

 console.log(value);
 
const [data,setData] = useState('')

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
     toast.warning("please fill the form")
    }else{

      const result = await registerAPI(values)
      console.log(result);
      if(result.status == 200){
        setShow(true)
      }else{
         if(result.status == 406){
          toast.warning("Already exist")
         }else{
          console.log(result);
          
         }
      }

    }
  }


const verify = async(e)=>{
  const{Email,otp} = value
 
  if(!Email || !otp){
    alert('please fill the details')
  }else{
    const output = await verifyotpApi(value)
    console.log('out',output);
    
    if(output.status === 200){
      alert('verification success')
      
      navigate('/Login')

    }else{       
        alert('Otp expired')
        seteditButton(true)
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

          
          <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Enter OTP</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Control name="otp"  
                type="email"
                placeholder="enter email"
                value={value.Email}
                onChange={(e)=>{setvalue({...value,Email:e.target.value})}}
          /> 
        <Form.Control name="otp"  
                type="text"
                placeholder="enter otp"
                value={value.otp}
                onChange={(e)=>{setvalue({...value,otp:e.target.value})}}
          />
          
          </Modal.Body>
        <Modal.Footer>
       
          <Button variant="primary" onClick={(e)=>verify(e)}>
            Submit
          </Button>

          <Resend/>
      
           
        
        </Modal.Footer>
      </Modal>

        </div>
        
      </div>
      <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
    </div>
   
  )
}

export default Register
