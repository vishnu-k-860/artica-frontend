import React, { useEffect, useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';
import { baseUrl } from '../services/baseUrl';
import { updateproduct } from '../services/appAPI';

function Editproduct({products}) {
 
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  
  const[editproduct,setEditproduct] = useState({
  id:products._id,
  productid:products.productid,
  productcategory:products.productcategory,
  productimage:"",
  producttitle:products.producttitle,
  productdescription:products.productdescription,
  productprice:products.productprice
  })

  const[tokens,setTokens] = useState()
  //  console.log(editproduct);
   
  const[preview,setPreview] = useState(null)

  useEffect(()=>{
   if(editproduct.productimage){
    setPreview(URL.createObjectURL(editproduct.productimage))   
   }
  },[editproduct.productimage])

  useEffect(()=>{
    const usertokens = sessionStorage.getItem('token')
    setTokens(usertokens)
  },[])

 const handleedit= async(e)=>{
 e.preventDefault()
 const{id,productid,productcategory,productimage,producttitle,productdescription,productprice}= editproduct
 if(!id || !productid || !productcategory || !producttitle || !productdescription || !productprice){
   alert('please fill the details')
 }else{
  const reqBody = new FormData()

  reqBody.append("productid",productid)
  reqBody.append("productcategory",productcategory)
  preview? reqBody.append("productimage",productimage): reqBody.append("productimage",products.productimage)
  reqBody.append("producttitle",producttitle)
  reqBody.append("productdescription",productdescription)
  reqBody.append("productprice",productprice)

  if(tokens){
    var reqHeader ={
      "Content-Type" : "multipart/form-data",
      "Authorization" : `Bearer ${tokens}`
    }
  }
  const result = await updateproduct(id,reqBody,reqHeader)
    if(result.status == 200){
      alert('insert success')
      handleClose()
    }
    console.log(result);
    
 }
 }




  return (
    <div id='modal' style={{width:"100%",height:"100%"}}>
     <Button onClick={handleShow}> <i class="fa-regular fa-pen-to-square"></i></Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Products</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form className='w-75'>
            <h3>Add product</h3>
              <Form.Select value={editproduct.productcategory} onChange={(e)=>{setEditproduct({...editproduct,productcategory:e.target.value})}} className='w-100' aria-label="Default select example">
              <option>Select Category</option>
              <option value="Home Decor">Home Decor</option>
              <option value="Gift Items">Gift Items</option>
              <option value="Craft Materials">Craft Materials</option>
              </Form.Select> <br />

              <Form.Label>Product Image</Form.Label> <br />
              <label >
                <input type="file" style={{display:"none"}} onChange={(e)=>{setEditproduct({...editproduct,productimage:e.target.files[0]})}}/>
                <img style={{width:"50px",height:"50px"}} src={preview?preview:`${baseUrl}/uploads/${products.productimage}`} alt="image" />
              </label><br />
              
              <Form.Label >Product Id</Form.Label>
              <Form.Control className='w-100' name="product-id" 
                required
                value={editproduct.productid}
                type="text"
                placeholder="Product Id"
                onChange={(e)=>{setEditproduct({...editproduct,productid:e.target.value})}}
              /> 

            
              <Form.Label >Product Title</Form.Label>
              <Form.Control className='w-100' name="product-title" 
                required
                value={editproduct.producttitle} 
                type="text"
                placeholder="Product Title"
                onChange={(e)=>{setEditproduct({...editproduct,producttitle:e.target.value})}}
              /> 

              
              <Form.Label>Product Description</Form.Label>
              <Form.Control as="textarea" 
              value={editproduct.productdescription}
              aria-label="With textarea"   
              placeholder="enter product description" 
              onChange={(e)=>{setEditproduct({...editproduct,productdescription:e.target.value})}}
              />
                    
              <Form.Label >Price</Form.Label>
              <Form.Control className='w-100' name="Price" 
                required
                value={editproduct.productprice}
                type="Text"
                placeholder="Enter Price ₹"
                onChange={(e)=>{setEditproduct({...editproduct,productprice:e.target.value})}}
              /> 
              
              <br />
          </Form>
          </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={(e)=>{handleedit(e)}}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Editproduct
