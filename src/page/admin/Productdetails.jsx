import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { deleteproduct, productDisplay } from '../../services/appAPI'
import { baseUrl } from '../../services/baseUrl'
import Editproduct from '../../components/Editproduct'


function Productdetails() {




 const[displayproduct,setDisplayproduct] = useState([])

 useEffect(()=>{
  productdisplay();
 },[])



 const productdisplay = async()=>{
  const result = await productDisplay()
  setDisplayproduct(result.data)

 }


 
 const handledelete = async(id)=>{
  console.log("inside delete function");
  
  const token = sessionStorage.getItem('token')
  
  if(token){
    var reqHeader ={
      "Content-Type" : "application/json",
      "Authorization" : `Bearer ${token}`
    }
 
  const result = await deleteproduct(id,reqHeader)
  
  if(result.status == 200){
    alert('deleted successfully')
    productdisplay();

  }else{
    console.log(result);
  }
 }
 }



  return (
    <div id='productdetailsoutputbox' style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
      <div id='productdetailstable' className='mt-3 mb-3 ' style={{width:"70%"}}>
      <Table striped bordered hover responsive="sm">
      <thead>
        <tr>
          <th>Id</th>
          <th>Category</th>
          <th>Title</th>
          <th>Image</th>
          <th>Description</th>
          <th>Price</th>
          <th colSpan={2}></th>
        </tr>
      </thead>
      <tbody>
        {  displayproduct?.length>0?
        displayproduct.map((item)=>(
          <tr key={displayproduct._id}>
          <td>{item?.productid}</td>
          <td>{item?.productcategory}</td>
          <td>{item?.producttitle}</td>
          <td><img style={{width:"50px",height:"50px"}} src={item?`${baseUrl}/uploads/${item.productimage}`:""} alt="image" /></td>
          <td>{item?.productdescription}</td>
          <td>{item?.productprice}</td>

          <td> <Editproduct products = {item} /> </td> 
          <td> <Button onClick={()=>handledelete(item._id)}> <i style={{color:"red"}} class="fa-solid fa-trash"></i></Button></td>
        </tr>
        
        )):"nothing to display"}
        
      </tbody>
    </Table>

      </div>
      <Link to={'/Adminform'}><Button className='w-100 mb-2  ' variant="success"  style={{color:"black"}}> <i class="fa-solid fa-plus"></i> Add Product</Button>  <br /> </Link> 

      
    </div>
  )
}

export default Productdetails
