import React, { useEffect, useState } from 'react'
import { Button,Form, Row } from 'react-bootstrap'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { addProduct } from '../../services/appAPI'
import Editproduct from '../../components/Editproduct'

function Adminform() {
  const navigate = useNavigate()

const[products,setProducts] = useState({
  productid:"",
  productcategory:"",
  productimage:"",
  producttitle:"",
  productdescription:"",
  productprice:""
})
const[tokens,setTokens] = useState()
console.log(products);

const[preview,setPreview] = useState(null)

useEffect(()=>{
  if(products.productimage){
    setPreview(URL.createObjectURL(products.productimage))
  }

},[products.productimage])

useEffect(()=>{
  const usertokens = sessionStorage.getItem('token')
  setTokens(usertokens)
},[])




const handleProduct = async(e)=>{
  e.preventDefault()
  const{productid,productcategory,productimage,producttitle,productdescription,productprice} = products
  if(!productid || !productcategory || !productimage || !producttitle || !productdescription || !productprice){
    alert('please fill the detials')
  }else{
    const reqBody = new FormData()

    reqBody.append("productid",productid)
    reqBody.append("productcategory",productcategory)
    reqBody.append("productimage",productimage)
    reqBody.append("producttitle",producttitle)
    reqBody.append("productdescription",productdescription)
    reqBody.append("productprice",productprice)


    console.log(Editproduct);
    

    if(tokens){
      var reqHeader ={
        "Content-Type" : "multipart/form-data",
        "Authorization" : `Bearer ${tokens}`
      }
    }
    const result = await addProduct(reqBody,reqHeader)
    if(result.status == 200){
      alert('insert success')
      navigate('/Productdetails')
    }
    console.log(result);
    
  }
}

  return (
    <div>
      <div id="adminproductform" style={{width:"100%" ,display:"flex",alignItems:"center",justifyContent:"center"}}>
        <div id="adminproductregistertable" className='mt-3 mb-3' style={{ width:"40%",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",border:"1px solid",boxShadow:"1px 1px 1px 1px"}}>
          <Form className='w-75'>
            <h3>Add product</h3>
              <Form.Select value={products.productcategory} onChange={(e)=>{setProducts({...products,productcategory:e.target.value})}} className='w-100' aria-label="Default select example">
              <option>Select Category</option>
              <option value="Home Decor">Home Decor</option>
              <option value="Gift Items">Gift Items</option>
              <option value="Craft Materials">Craft Materials</option>
              </Form.Select> <br />

              <Form.Label>Product Image</Form.Label> <br />
              <label >
                <input type="file" style={{display:"none"}} onChange={(e)=>{setProducts({...products,productimage:e.target.files[0]})}} />
                <img style={{width:"30%"}} src={preview?preview:'https://t4.ftcdn.net/jpg/05/17/53/57/360_F_517535712_q7f9QC9X6TQxWi6xYZZbMmw5cnLMr279.jpg'}alt="image" />
              </label><br />
              
              <Form.Label >Product Id</Form.Label>
              <Form.Control className='w-100' name="product-id" 
                required
                value={products.productid}
                onChange={(e)=>{setProducts({...products,productid:e.target.value})}}
                type="text"
                placeholder="Product Id"
              /> 

            
              <Form.Label >Product Title</Form.Label>
              <Form.Control className='w-100' name="product-title" 
                required
                value={products.producttitle}
                onChange={(e)=>{setProducts({...products,producttitle:e.target.value})}}
                type="text"
                placeholder="Product Title"
              /> 

              
              <Form.Label>Product Description</Form.Label>
              <Form.Control as="textarea" 
              value={products.productdescription}
              onChange={(e)=>{setProducts({...products,productdescription:e.target.value})}}
              aria-label="With textarea"   
              placeholder="enter product description" />
                    
              <Form.Label >Price</Form.Label>
              <Form.Control className='w-100' name="Price" 
                required
                value={products.productprice}
                onChange={(e)=>{setProducts({...products,productprice:e.target.value})}}
                type="Text"
                placeholder="Enter Price ₹"
              /> 
              
              <br />
              <Row >
                <Link to={'/'}>  <Button  onClick={(e)=>{handleProduct(e)}} className='w-100  ' variant="success" > <i class="fa-solid fa-plus"></i> Add Product</Button>  <br /></Link>
                <Link to={'/Productdetails'}>  <Button className='w-100 mt-1 mb-3' variant="success" > <i class="fa-solid fa-eye"></i> Show Products</Button></Link>
    
              </Row>
             
              
    
          </Form>
        </div>
        
      </div>
    </div>
  )
}

export default Adminform
