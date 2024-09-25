import { createContext, useState } from "react";


const Headercontext = createContext();

function Headerprovider(props){
    const[header,setHeader] = useState("")
  
return(
    <div>
        <Headercontext.Provider value={{header,setHeader}}>
            {props.children}
        </Headercontext.Provider>
    </div>
)    
};
export {Headercontext,Headerprovider};