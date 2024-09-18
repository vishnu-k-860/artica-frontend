import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {  getfromcartApi, removefromcartApi } from '../../services/appAPI'
import { baseUrl } from '../../services/baseUrl'

function Cart({item}) {
    // const renderTooltip = (props) => (
    //     <Tooltip id="button-tooltip" {...props}>
    //       remove from cart
    //     </Tooltip>
    //   );
  
      const[displayproduct,setDisplayproduct] = useState([]);

      useEffect(()=>{
        productDisplay()
       },[])
   const productDisplay = async()=>{
    
    const user = JSON.parse(sessionStorage.getItem('user'))
    const result = await getfromcartApi(user._id)
    setDisplayproduct(result.data.items)

   }
console.log(displayproduct);

const cartdelete = async(productid)=>{
  const token = sessionStorage.getItem('token')
  const users = JSON.parse(sessionStorage.getItem('user'))



  if(token){
    var reqHeader = {
        "Content-Type" : "application/json",
      "Authorization" : `Bearer ${token}`
    }
 const remove = await removefromcartApi(users._id,productid,reqHeader)

 if(remove.status == 200){
  alert("item deleted")
  productDisplay()

 }else{
  alert('error')
 }
 console.log(displayproduct);
 
 }else{
  alert('not logged in')
 }



  
}




  return (
    <div>
      <div id='cartpart'>
      <Row >
<Col lg={12} md={12} sm={12} style={{display:"flex",alignItems:"center",justifyContent:"center"}}>   
  <h3>Buy Now</h3>
</Col>
  {
  displayproduct.map((item,index)=>
   <Col lg={3} md={3} sm={12} >
                 <Card id='cardbackground' key={index} style={{width: "300px",height:"450px",margin:"5px",color:"black"}} >
                  <Card.Img style={{width:"100%",height:"250px"}}  src={item?`${baseUrl}/uploads/${item.productid.productimage}`:""} alt="image" /> 
                  <Card.Body>
                    <Card.Title>{item.productid.producttitle}</Card.Title>
                    <Card.Text>
                   {item.productid.productdescription}
                  </Card.Text>
                    <Card.Text>
                      {item.productid.productprice}
                    </Card.Text>
                      <Button  onClick={()=>cartdelete(item?.productid._id)}>
                      <i class="fa-solid fa-trash"></i>
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

export default Cart
