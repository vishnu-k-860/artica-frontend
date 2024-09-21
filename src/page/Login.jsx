import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import React, { useState } from 'react'
import { Button, Form, Row } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { googleregisterApi, loginAPI } from '../services/appAPI';

function Login() {
  const navigate = useNavigate()

 const[details,setDetails] = useState({
  Email:'',
  password:''
 })
 console.log(details);
 

 

 const Submitlogin = async(e)=>{
  e.preventDefault()
  const {Email,password} = details
  if(!Email || !password){
    alert('please fill the details')
  }else{
    const result = await loginAPI(details)
    sessionStorage.setItem('user',JSON.stringify(result.data.existinguser))
    sessionStorage.setItem('token',result.data.token)
    console.log(result);
    
    if(result.status == 200 ){
      alert('login success')
      if(result.data.existinguser.role == 1){
        navigate('/Admindashboard')
      }else{
        navigate('/')
      }
    }else{
      if(result.status == 404){
        alert('incorrect input')
      }else{
        console.log(result);  
      }
    }
  }
 }

const googlelogin = async(output)=>{
const id=output.jti,
  firstname=output.given_name,
  lastname=output.family_name,
  Email=output.email,
  profilepic=output.picture 
  console.log(id,firstname,lastname,Email,profilepic);

if(!id || !firstname || !lastname || !Email || !profilepic){
  alert("no dataa")
}else{
  const result = await googleregisterApi(output)
  console.log(result);
  
  if(result.status == 200){
    sessionStorage.setItem('user',JSON.stringify(result.data.user))
    sessionStorage.setItem('token',result.data.token)
    navigate('/')
  }else{
    alert("error")
  }
}
}





  return (
    <div>
      <div id="loginform" style={{width:"100%",height:"100vh" ,display:"flex",alignItems:"center",justifyContent:"center"}}>
      
        <div id="logintable" style={{width:"50%",height:"60vh",flexDirection:"column",border:"1px solid",borderRadius:"15px",boxShadow:"1px 1px 1px 1px",display:"flex",alignItems:"center",justifyContent:"center"}}>
          <Form className='w-100' style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
            <h3>Login</h3>
          <Form.Label>E Mail</Form.Label>
              <Form.Control 
               className='w-75'
                required
                type="text"
                placeholder="Email"
                value={details.Email}
                onChange={(e)=>{setDetails({...details,Email:e.target.value})}}
              />
              <Form.Label>Password</Form.Label>
              <Form.Control
               className='w-75' 
                required
                type="password"
                placeholder="Password"
                value={details.password}
                onChange={(e)=>{setDetails({...details,password:e.target.value})}}

              /> <br />
             
              <Button  className='w-75' variant="success" onClick={(e)=>{Submitlogin(e)}}>Login</Button> <br />
              <a style={{textDecoration:"none"}} href="">Forgot password</a> 
              <h6>New User: <Link to={'/Register'}> <a style={{textDecoration:"none"}} href="">Register</a></Link> </h6>
              <Row style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
                
                  <GoogleLogin
                  onSuccess={credentialResponse => {
                    const output = jwtDecode(credentialResponse?.credential)
                  console.log('credentialresponse',credentialResponse);
                  console.log(output);
                  googlelogin(output);  
                  
                  }}
                  onError={() => {
                  console.log('Login Failed');
    
                  }}
                  useOneTap
                  />
                
              </Row>
             </Form>
        </div>
        
      </div>
    </div>
  )
}

export default Login
