import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { jwtDecode } from 'jwt-decode'
import { useNavigate, useParams } from 'react-router-dom'
import { updatepasswordApi } from '../../services/appAPI'

function Resetpassword() {
    const navigate = useNavigate()
  const {token} = useParams()
  const [message,setMessage] = useState()

  const[values,setValues] = useState({
    password:'',
    confirmpassword:''
  })
  console.log(values);
  
  useEffect(()=>{
    const decoded = jwtDecode(token)
    const currentTime = Date.now()/1000 
    console.log('decoded',decoded);
    console.log('current',currentTime);
    
    if(decoded.exp<currentTime){
        setMessage("Link Expired.")
        
        setTimeout(()=>{
            navigate('/forgetpassword')
        },4000)
    }
  },[token])

 const changepassword = async(e)=>{

    const{password,confirmpassword} = values
    if(!password || !confirmpassword){
        alert('please fill the form')      
    }else{
        if(password != confirmpassword){
            alert('Password Mismatch')
        }else{
           const result = await updatepasswordApi(token,password)
            if(result.status == 200){
                alert('Password Updated')
                navigate('/Login')
            }else{
                alert("error")
            }
        }
    }
 }






  return (
    <div style={{width:"100%",height:"100vh" ,display:"flex",alignItems:"center",justifyContent:"center"}}>
     { message?
     <p>{message}</p>:
      <div style={{width:"50%",height:"60vh",flexDirection:"column",border:"1px solid",borderRadius:"15px",boxShadow:"1px 1px 1px 1px",display:"flex",alignItems:"center",justifyContent:"center"}}>
      <h3>Reset Password</h3>
      <Form.Label > New Password</Form.Label>
              <Form.Control
               className='w-75' 
                type="password"
                placeholder="New Password"
                value={values.password}
                onChange={(e)=>{setValues({...values,password:e.target.value})}}
              /> <br />
        <Form.Label> Confirm Password</Form.Label>
              <Form.Control
               className='w-75' 
                type="password"
                placeholder="Confim Password"
                value={values.confirmpassword}
                onChange={(e)=>{setValues({...values,confirmpassword:e.target.value})}}
              /> <br />
        <Button  className='w-75' variant="success" onClick={(e)=>changepassword(e)}>Submit</Button>
  
      </div>}
    </div>
  )
}

export default Resetpassword
