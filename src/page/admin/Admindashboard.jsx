import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Admindashboard() {
  return (
    <div id="admindashboard">
        <h4>Welcome Admin</h4>
      <div id="userdetailsbox" style={{width:"300px",height:"200px",backgroundColor:"cyan",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:'column',border:"1px solid",borderRadius:"10px"}}> 
        <Button style={{width:"200px",height:"100px",}} variant="outline-success">User Details <i class="fa-solid fa-users"></i></Button>
      </div> <br />
      <div id="productdetailsbox" style={{width:"300px",height:"200px",backgroundColor:"cyan",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:'column',border:"1px solid",borderRadius:"10px"}}>
     <Link to={'/Adminform'}> <Button style={{width:"200px",height:"100px",color:"#125e01"}} variant="outline-success">Product Details <i class="fa-solid fa-cart-shopping"></i></Button></Link>
      </div> <br />
      <div id="orderdetailsbox" style={{width:"300px",height:"200px",backgroundColor:"cyan",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:'column',border:"1px solid",borderRadius:"10px"}}> 
        <Button style={{width:"200px",height:"100px",color:"#3b02ac"}} variant="outline-success">Order Details <i class="fa-solid fa-sack-dollar"></i></Button>
      </div> <br />
      <div id="orderdetailsbox" style={{width:"300px",height:"200px",backgroundColor:"cyan",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:'column',border:"1px solid",borderRadius:"10px"}}> 
        <Button style={{width:"200px",height:"100px",color:"#cd02ac"}} variant="outline-success">E Mails <i class="fa-solid fa-envelope"></i></Button>
      </div>
    

    </div>
  )
}

export default Admindashboard
