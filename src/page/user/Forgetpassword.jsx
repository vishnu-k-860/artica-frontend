import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { forgetpasswordApi } from '../../services/appAPI';

function Forgetpassword() {

    const[emails,setEmails] = useState({
        email:''
    })

    const resetpassword = async()=>{
        const {email} = emails
      if(!email){
        alert('please enter the email')
      }else{
        const result = await forgetpasswordApi(emails)
        console.log(result);
        
        if(result.status == 200){
            alert('Email sent')
        }else{
            alert('User Not Found')
        }
      }

    }

console.log(emails);


  return (
    <div  style={{width:"100%",height:"100vh" ,display:"flex",alignItems:"center",justifyContent:"center"}}>
      <div style={{width:"50%",height:"30vh",flexDirection:"column",border:"1px solid",borderRadius:"15px",display:"flex",alignItems:"center",justifyContent:"center"}}>
            <h2 style={{color:"whitesmoke"}}>Please enter your Registered Email</h2>
            <h6 style={{color:"grey"}}>The reset link will be sent to your registered Email</h6>
              <Form.Control
               className='w-75' 
                type="email"
                value={emails.email}
                onChange={(e)=>setEmails({...emails,email:e.target.value})}
                placeholder="Enter your email"
              /> <br />
        <Button variant="success" onClick={(e)=>resetpassword()} >Send Reset Link</Button>
      </div>
    </div>
  )
}

export default Forgetpassword
