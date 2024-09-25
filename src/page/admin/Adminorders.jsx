import React, { useEffect, useState } from 'react'
import { adminordersApi } from '../../services/appAPI';
import { Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { baseUrl } from '../../services/baseUrl';

function Adminorders() {
    const[displayproduct,setDisplayproduct] = useState([]);
  
    useEffect(()=>{
        productdisplay()
       },[])
  
  
    const productdisplay = async()=>{
  
  
    const token = sessionStorage.getItem('token')
    const user = JSON.parse(sessionStorage.getItem('user'))
         
        const result = await adminordersApi()  
              
        if(result.status==200){
            console.log('log result in adminorderpage',result?.data);
            
            setDisplayproduct(result?.data)
        }   


    }


  return (
    
    <div id='productdetailsoutputbox' style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
    <div id='productdetailstable' className='mt-3 mb-3 ' style={{width:"70%"}}>
    <h3 style={{color:"ButtonHighlight"}}>Order Details</h3>

              <Table striped bordered hover responsive size="sm" className='w-100'>
            <thead>
              <tr>
              <th>User id</th>
              <th>Payment Id</th>
              <th>Title</th>
              <th>Image</th>
              <th>Description</th>
              <th>Price</th>
              </tr>
            </thead>
           
            <tbody>
            {  displayproduct?.length>0?
              displayproduct?.map((item,index)=>(
                item.orders.map((items)=>(
                
              <tr key={index}>
                <td>{item?.userid}</td>
                <td>{item?.paymentid}</td>
                <td>{items?.productid?.producttitle}</td>
                <td><img style={{width:"50px",height:"50px"}} src={items?`${baseUrl}/uploads/${items?.productid?.productimage}`:""} alt="image" /></td>
                <td>{items?.productid?.productdescription}</td>
                <td>{items?.productid?.productprice}</td>
                
              </tr>
             )) )):"nothing to display"}

            </tbody>
          </Table>   
    </div>
    <Link to={'/Admindashboard'}><Button className='w-100 mb-2  ' variant="success"  style={{color:"black"}}>Back to Dashboard</Button>  <br /> </Link> 

    </div>
  )
}

export default Adminorders
