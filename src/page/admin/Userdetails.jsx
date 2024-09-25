import React, { useEffect, useState } from 'react'
import { showuserApi } from '../../services/appAPI';
import { Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { baseUrl } from '../../services/baseUrl';

function Userdetails() {
  const[displayproduct,setDisplayproduct] = useState([]);
  
  useEffect(()=>{
      productdisplay()
     },[])


  const productdisplay = async()=>{


  const token = sessionStorage.getItem('token')
  const user = JSON.parse(sessionStorage.getItem('user'))
       
      const result = await showuserApi()  
            
      if(result.status==200){
          console.log('log resultsssss',result.data);
          
          setDisplayproduct(result.data)
      }   
  }

  return (
    <div>
       <div id='productdetailsoutputbox' style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
      <div id='productdetailstable' className='mt-3 mb-3 ' style={{width:"70%"}}>
        <h3 style={{color:"ButtonHighlight"}}>User Details</h3>
      <Table striped bordered hover responsive="sm">
      <thead>
        <tr>
          <th>Id</th>
          <th>Username</th>
          <th>Email</th>
          <th>Phone number</th>
          <th>Address</th>
          <th>Profile pic</th>
        </tr>
      </thead>
      <tbody>
      {  displayproduct?.length>0?
        displayproduct.map((item)=>(
          <tr >
          <td>{item._id}</td>
          <td>{item.firstname}</td>
          <td>{item.Email}</td>
          <td>{item.phonenumber}</td>
          <td>{item.address}</td>
          <td><img style={{width:"50px",height:"50px"}} src={item?`${baseUrl}/uploads/${item.profilepic
}`:""} alt="image" /></td>
         </tr>
          )):"nothing to display"}
       
      </tbody>
    </Table>

      </div>
      <Link to={'/Admindashboard'}><Button className='w-100 mb-2  ' variant="success"  style={{color:"black"}}>Back to Dashboard</Button>  <br /> </Link> 

      
    </div>
    </div>
  )
}

export default Userdetails
