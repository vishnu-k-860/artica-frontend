import React, { useContext, useEffect, useState } from 'react'
import { Button, Card, Col, Form, Row } from 'react-bootstrap'
import {  useNavigate } from 'react-router-dom'
import {  addtocartApi, productDisplay } from '../services/appAPI'
import { baseUrl } from '../services/baseUrl'



function Products() {


  const navigate = useNavigate()

  const[displayproduct,setDisplayproduct] = useState([]);
  const[sortproduct,setSortproduct] = useState([]);

  const[productcount,setProductcount] = useState(1)
   


  useEffect(()=>{
   productdisplay();
  },[])

  const productdisplay = async()=>{
    const result = await productDisplay()
    setDisplayproduct(result.data)
    setSortproduct(result.data)
  }
  
  
  const searchoutput = (name)=>{
    setDisplayproduct(sortproduct.filter(item=>item.productcategory.includes(name)))
  }



  const addcart = async(productid)=>{
  
    const token = sessionStorage.getItem('token')
    if(token){
    var reqHeader ={
      "Content-Type" : "application/json",
      "Authorization" : `Bearer ${token}`
    }
    const user = JSON.parse(sessionStorage.getItem('user'))
      const reqBody = new FormData()
      reqBody.append("productid",productid)
      reqBody.append("productcount",productcount)


     
      const result = await addtocartApi(user._id,reqBody,reqHeader)
      if(result.status == 200){
        alert('added successfully')
        navigate('/Cart')
      }else{
       console.log(Error); 
      }
     console.log(result);
     
   }
   else{
    alert('please login..')
    navigate('/Login')
   }


  }


  return (
    <div>
       <div id='productpart' >
<Row >
<Col lg={12} md={12} sm={12} style={{display:"flex",alignItems:"center",justifyContent:"center"}}>   
  <Form.Select className='w-25 mt-5' aria-label="Default select example" onChange={(e)=>searchoutput(e.target.value)} >
              <option selected>Select Category</option>
              <option value="Home Decor">Home Decor</option>
              <option value="Gift Items">Gift Items</option>
              <option value="Craft Materials">Craft Materials</option>
              </Form.Select> <br /> 
</Col>
  {
  displayproduct.map((item,index)=>
   <Col lg={3} md={3} sm={12} >
                 <Card id='cardbackground' key={index} style={{width: "300px",height:"450px",margin:"5px",color:"black"}} >
                  <Card.Img style={{width:"100%",height:"250px"}}  src={item?`${baseUrl}/uploads/${item.productimage}`:""} alt="image" /> 
                  <Card.Body>
                    <Card.Title>{item.producttitle}</Card.Title>
                    <Card.Text>
                   {item.productdescription}
                  </Card.Text>
                    <Card.Text>
                      {item.productprice}
                    </Card.Text>
                     <Button onClick={()=>{addcart(item._id)}}>
                        Add to Cart
                      </Button>
                  </Card.Body>
  
                </Card>
              </Col>
            )             
}       
   </Row> 
       </div>
    </div>
  )
}

export default Products



