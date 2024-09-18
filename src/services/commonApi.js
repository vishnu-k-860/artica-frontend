 import axios from "axios";

 export const commonApi = async(httpMethod,url,reqBody,reqHeader) =>{
    const reqconfig ={
        method:httpMethod,
        url,
        data:reqBody,
        headers:reqHeader?reqHeader : {"Content-Type":"application/json"}
    }
    return await axios(reqconfig).then((Response)=>{
        return Response
    }).catch((err)=>{
        return err
    })
 }
 