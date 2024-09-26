import React, { useEffect, useState } from 'react'
import { Button, Form, Image } from 'react-bootstrap'
import { editprofileApi } from '../../services/appAPI'
import { baseUrl } from '../../services/baseUrl'

function Profile({users}) {

const[editprofile,setEditprofile]= useState({
  firstname:users?.firstname,
  phonenumber:users?.phonenumber,
  address:users?.address,
  profilepic:""
})

const[tokens,setTokens] = useState()
 
const[preview,setPreview] = useState(null)

useEffect(()=>{
 if(editprofile.profilepic){
  setPreview(URL.createObjectURL(editprofile.profilepic))   
 }
},[editprofile?.profilepic])

useEffect(()=>{
  const usertokens = sessionStorage.getItem('token')
  setTokens(usertokens)
},[])
const user = JSON.parse(sessionStorage.getItem('user'))
 console.log('userhereeee',user);
 
const handleedit= async(e)=>{
  const{firstname,phonenumber,address,profilepic}= editprofile
  console.log(firstname,phonenumber,address,profilepic);
  
  if(!firstname || !phonenumber || !address){
    alert('please fill the details')
  }else{
    const reqBody = new FormData()
  
    reqBody.append("firstname",firstname)
    reqBody.append("phonenumber",phonenumber)
    reqBody.append("address",address)
    preview? reqBody.append("profilepic",profilepic): reqBody.append("profilepic",users?.profilepic)

    if(tokens){
      var reqHeader ={
        "Content-Type" : "multipart/form-data",
        "Authorization" : `Bearer ${tokens}`
      }
    }

const result = await editprofileApi(user?._id,reqBody,reqHeader)
    if(result.status == 200){
      alert('Update success')
    }
    console.log(result);
    
 }
 }






  return (
    <div >
        <div id='profile' style={{width:"100%",height:"70vh"}}>
        <Form style={{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>

        <input type="file" style={{display:"none"}} onChange={(e)=>{setEditprofile({...editprofile,profilepic:e.target.files[0]})}}/>
          <Image style={{width:"50px",height:"50px"}} src={preview?preview:`${baseUrl}/uploads/${users?.profilepic}`} alt="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=" roundedCircle />

          <Form.Label >E mail</Form.Label>
              <Form.Control className='w-25' name="product-id" 
                required 
                type="email"
                placeholder="email"
              /> 
              <Form.Label >Username</Form.Label>
              <Form.Control className='w-25' name="product-title" 
                required
                value={editprofile?.firstname} 
                type="text"
                placeholder="username"
                onChange={(e)=>{setEditprofile({...editprofile,firstname:e.target.value})}}

              />
              <Form.Label >Phone Number</Form.Label>
              <Form.Control className='w-25' name="product-title" 
                required
                value={editprofile?.phonenumber} 
                type="text"
                placeholder="Phone number"
                onChange={(e)=>{setEditprofile({...editprofile,phonenumber:e.target.value})}}
               />
               <Form.Label >Address</Form.Label>
              <Form.Control className='w-25' name="product-title" 
                required
                value={editprofile?.address} 
                onChange={(e)=>{setEditprofile({...editprofile,address:e.target.value})}}


                type="text"
                placeholder="Address"/> <br />

              <Button variant="primary" onClick={(e)=>{handleedit(e)}}>
            Save Changes
          </Button>
      
    </Form>
        </div>
      
    </div>
  )
}

export default Profile
