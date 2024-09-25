import React, { useEffect, useState } from 'react'
import { Button, Col, Row, Table } from 'react-bootstrap'
import { getorderApi } from '../../services/appAPI'
import { baseUrl } from '../../services/baseUrl';
import { Link } from 'react-router-dom';

function Userorderdetails() {

  const[displayproduct,setDisplayproduct] = useState([]);
  
    useEffect(()=>{
        productdisplay()
       },[])


    const productdisplay = async()=>{


    const token = sessionStorage.getItem('token')
    const user = JSON.parse(sessionStorage.getItem('user'))
         
        const result = await getorderApi(user._id)  
              
        if(result.status==200){
            console.log('log result',result?.data);
            
            setDisplayproduct(result?.data)
        }   
    }

  return (
    <div id='productdetailsoutputbox' style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
      <div id='productdetailstable' className='mt-3 mb-3 ' style={{width:"70%"}}>
    <Link to={'/Products'}>  <Button style={{margin:"5px"}} variant="primary">
        Back To Shop
      </Button></Link>
                <Table striped bordered hover responsive size="sm" className='w-100'>
              <thead>
                <tr>
                
                <th>Title</th>
                <th>Image</th>
                <th>Description</th>
                <th>Price</th>
                </tr>
              </thead>
             
              <tbody>
              {  displayproduct?.length>0?
                displayproduct?.map((itemss,index)=>(
                  itemss?.orders.map((item)=>(
                <tr key={index}>
                  <td>{item?.productid?.producttitle}</td>
                  <td><img style={{width:"50px",height:"50px"}} src={item?`${baseUrl}/uploads/${item?.productid?.productimage}`:""} alt="image" /></td>
                  <td>{item?.productid?.productdescription}</td>
                  <td>{item?.productid?.productprice}</td>
                  
                </tr>
               )) )):"nothing to display"}

              </tbody>
            </Table>   
      </div>
      </div>
  )
}
export default Userorderdetails
