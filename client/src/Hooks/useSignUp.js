import { useState } from 'react';
import {useAuthContext} from '../Hooks/useAuthContext';
export const useSignUp=()=>{
    const[error,setError]=useState();
    const{dispatch}=useAuthContext();
    const signup=async(email,password)=>{
        setError(null);
        const response=await fetch("http://localhost:4000/api/user/signup",{
          method:"POST",
          headers:{"Content-type":"application/json"},
          body:JSON.stringify({email,password})
        });
        const data=await response.json();
        if(!response.ok){
            setError(data.error)
        }
        if(response.ok){
            //save user data in local storage
             localStorage.setItem("user",JSON.stringify(data));

            //update user context
            dispatch({type:"LOGIN",payload:data});
        }
    }
    return{signup,error}
}