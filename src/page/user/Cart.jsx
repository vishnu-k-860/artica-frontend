import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Modal, Row, Toast } from 'react-bootstrap'
import {  emptycartApi, getfromcartApi, orderitemApi, removefromcartApi } from '../../services/appAPI'
import { baseUrl } from '../../services/baseUrl'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Marquee from 'react-fast-marquee'

function Cart({item}) {
  const navigate = useNavigate()

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const[displayproduct,setDisplayproduct] = useState([]);
  const[sum,setSum] = useState(0)

  useEffect(() => {
    productDisplay()
  }, [displayproduct])

    const productDisplay = async () => {
      const token = sessionStorage.getItem('token')
      const user = JSON.parse(sessionStorage.getItem('user'))

      if (!token || !user) {
        alert('Please login')
        return navigate('/Login')
      }else{
        const result = await getfromcartApi(user?._id)
        if (result?.status === 200) {
          setDisplayproduct(result?.data?.items)
        }        
      }

      
    }

 
  
  
const totalsum=()=>{ 
  if(displayproduct?.length>0){
    var total = displayproduct?.map(n=> Number(n?.productid?.productprice))
   
    setSum(total.reduce((n1,n2)=>(n1+n2)))

  }}
  
   
  useEffect(()=>{
    totalsum()
 },[displayproduct])


const cartdelete = async(productid)=>{
  const token = sessionStorage.getItem('token')
  const users = JSON.parse(sessionStorage.getItem('user'))



  if(token){
    var reqHeader = {
        "Content-Type" : "application/json",
      "Authorization" : `Bearer ${token}`
    }
 const remove = await removefromcartApi(users?._id,productid,reqHeader)

 if(remove.status == 200){
  alert("item deleted")
  productDisplay()

 }else{
  alert('error')
 }
 
 }else{
  alert('not logged in')
 }  
}


const loadScript = (src)=>{
  return new Promise((resolve)=>{
    const script = document.createElement("script");

    script.src = src;

    script.onload = () =>{
      resolve(true)
    }
    script.onerror = ()=>{
      resolve(false)
    }

    document.body.appendChild(script)
  })
}



const Razorpayorder = async (amount)=>{
  let data = JSON.stringify({
   amount:amount*100,
   currency:"INR" 
  })
  const token = sessionStorage.getItem('token')
  const user = JSON.parse(sessionStorage.getItem('user'))

  let config = {
  method:"post",
  maxBodyLength:Infinity,
  url:`${baseUrl}/user/payment`,

  
  headers:{
    'Content-Type':'application/json',
    "Authorization" : `Bearer ${token}`
  },
  data:data
}

axios.request(config).then((response)=>{
  console.log(JSON.stringify(response?.data));
  handlerazorpayscreen(response?.data?.amount)  
})
.catch((error)=>{
  console.log("error ",error);
})

const handlerazorpayscreen = async(amount)=>{
  const res = await loadScript("https:/checkout.razorpay.com/v1/checkout.js")
if(!res){
  alert("some error at razorpay screen loading....")
  return;
}

const options ={
  key:'rzp_test_YWob3NoKy2p5h6',
  amount:amount,
  currency:'INR',

  handler:function(response){
    placeOrder(response.razorpay_payment_id)
    // placeOrder()
  },
  theme:{
    color:"#ABCABC"
  }
}

const paymentobject = new window.Razorpay(options)
paymentobject.open()

}
}



const placeOrder = async(id)=>{
  console.log(id);
  if(id){
    const token = sessionStorage.getItem('token')
    if(token){
      var reqHeader ={
        "Content-Type" : "application/json",
        "Authorization" : `Bearer ${token}`
      }
    

    const reqBody = {
      paymentid: id,
      cart: displayproduct,
      amount:sum
    }
    const user =JSON.parse(sessionStorage.getItem('user')) 

    const result = await orderitemApi(user._id,reqBody,reqHeader)
    
    if(result.status == 200){
      alert('order succeess')
      
      await emptycartApi(user._id,reqHeader)
      
      navigate('/userorderdetails')
    
    }else{
     console.log(Error); 
    }
    console.log(result);
    }
    }
}

return (
    <div>
      <div id='cartpart'>
      <Row >
<Col lg={12} md={12} sm={12} style={{display:"flex",alignItems:"center",justifyContent:"center"}}>   
<Button style={{margin:"5px"}} variant="primary" onClick={handleShow}>
        Place Order
      </Button>
 <Link to={'/userorderdetails'}> <Button>Order Details</Button></Link>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Your Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{color:"green",fontSize:"50px"}}>Total:{sum}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>Razorpayorder(sum)}>
            Place Order
          </Button>
        </Modal.Footer>
      </Modal>
</Col>
  {
  displayproduct?.length>0?
  displayproduct?.map((item,index)=>(
   <Col lg={3} md={3} sm={12} >
                 <Card id='cardbackground' key={index} style={{width: "300px",height:"450px",margin:"5px",color:"black"}} >
                  <Card.Img style={{width:"100%",height:"250px"}}  src={item?`${baseUrl}/uploads/${item.productid?.productimage}`:""} alt="image" /> 
                  <Card.Body>
                    <Card.Title>{item?.productid?.producttitle}</Card.Title>
                    <Card.Text>
                   {item?.productid?.productdescription}
                  </Card.Text>
                    <Card.Text>
                      {item?.productid?.productprice}
                    </Card.Text>
                      <Button  onClick={()=>cartdelete(item?.productid._id)}>
                      <i class="fa-solid fa-trash"></i>
                      </Button>
                  </Card.Body>
                </Card>
              </Col>
            )):<Marquee>
            Cart Is Empty
          </Marquee>         
} 
   
   </Row>
      </div>
    </div>

  )
}

export default Cart
