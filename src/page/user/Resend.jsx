import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { resendotpApi } from '../../services/appAPI'

function Resend() {

   const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



const [value,setValue] = useState({
    Email:''
})

const verify = async(e)=>{
    const {Email} = value
    if(!Email){
      alert('Please enter the email')
    }else{
        const output = await resendotpApi(value)
        console.log('out',output);
        if(output.status === 200){
            alert('OTP sent')
            setShow(false)
            
        }else{
            alert('Otp Not expired')
        }
    
}

}

  return (
    <div>
    <div>

    <Button variant="secondary" onClick={handleShow}>
            Resend
          </Button>
    <Modal show={show} onHide={handleClose}>
        
        <Modal.Header closeButton>
          <Modal.Title>Enter Email</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Control name="otp"  
                type="email"
                placeholder="enter email"
                value={value.Email}
                onChange={(e)=>{setValue({...value,Email:e.target.value})}}
          />
            </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={(e)=>verify(e)} >
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
     
          
    </div>
    </div>
  )
}

export default Resend
