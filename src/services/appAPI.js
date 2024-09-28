import { baseUrl } from "./baseUrl"
import { commonApi } from "./commonApi"


export const registerAPI = async(user)=>{ 
    return await commonApi("POST",`${baseUrl}/user/register`,user,"")

}

export const loginAPI = async(user)=>{
    return await commonApi("POST",`${baseUrl}/user/login`,user,"")
}

export const addProduct = async(product,reqHeader)=>{
    return await commonApi("POST",`${baseUrl}/admin/addproduct`,product,reqHeader)
}

export const productDisplay = async()=>{
    return await commonApi("GET",`${baseUrl}/admin/productdetails`,"","")
}

export const updateproduct = async(id,product,reqHeader)=>{
    return await commonApi("PUT",`${baseUrl}/admin/productupdate/${id}`,product,reqHeader)
}

export const deleteproduct = async(id,reqHeader)=>{
    return await commonApi("DELETE",`${baseUrl}/admin/deleteproduct/${id}`,{},reqHeader)
}

export const addtocartApi = async(id,product,reqHeader)=>{
    return await commonApi("POST",`${baseUrl}/user/addtocart/${id}`,product,reqHeader)
}

export const getfromcartApi = async(id,product,reqHeader)=>{
    return await commonApi("GET",`${baseUrl}/user/displayfromcart/${id}`,product,reqHeader)
}

export const removefromcartApi = async(user,productid,reqHeader)=>{
    return await commonApi("POST",`${baseUrl}/user/deletefromcart/${user}`,{productid},reqHeader)
}

export const googleregisterApi = async(user)=>{
    return await commonApi("POST",`${baseUrl}/user/googlelogin/`,user,"")
}

export const orderitemApi = async(id,user,reqHeader)=>{
    return await commonApi("POST",`${baseUrl}/user/orderproduct/${id}`,user,reqHeader)
}

export const getorderApi = async(id,user,reqHeader)=>{
    return await commonApi("GET",`${baseUrl}/user/getorder/${id}`,user,reqHeader)
}

export const emptycartApi = async(id,reqHeader)=>{
    return await commonApi("DELETE",`${baseUrl}/user/emptycart/${id}`,{},reqHeader)
}

export const adminordersApi = async()=>{
    return await commonApi("GET",`${baseUrl}/admin/orderdisplay`,"","")
}

export const forgetpasswordApi = async(user)=>{
    return await commonApi("POST",`${baseUrl}/user/forgetpassword`,user,"")
}

export const updatepasswordApi = async(token,password)=>{
    return await commonApi("POST",`${baseUrl}/user/updatepassword`,{token,password},"")
}

export const showuserApi = async()=>{
    return await commonApi("GET",`${baseUrl}/admin/displayusers`,"","")
}


export const editprofileApi = async(id,user,reqHeader)=>{
    return await commonApi("PUT",`${baseUrl}/user/editprofile/${id}`,user,reqHeader)
}

export const verifyotpApi = async(user)=>{
    return await commonApi("POST",`${baseUrl}/user/verifyotp`,user,"")
}

export const resendotpApi = async(user)=>{
    return await commonApi("POST",`${baseUrl}/user/resendotp`,user,"")
}