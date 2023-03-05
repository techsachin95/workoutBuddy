import React, { useState } from 'react'
import { useSignIn } from '../../Hooks/useSignIn';
import './SignIn.css'
const SignIn = () => {
  const [email,setemail]=useState('');
  const[password,setpassword]=useState('');

  const {signin,error}=useSignIn();

  const handleSubmit=async(e)=>{
    e.preventDefault();
    // console.log(email,password);
    await signin(email,password);
    setemail("");
    setpassword("");
  }
  return (
    <>
    <div className="login">
      <form onSubmit={handleSubmit}>
      <h1>SignIn</h1>
      <label htmlFor="">Email:</label><br />
      <input type="email" required onChange={(e)=>setemail(e.target.value)} value={email}/><br />
      <label htmlFor="">Password</label><br />
      <input type="password" required onChange={(e)=>setpassword(e.target.value)} value={password}/><br />
      <button>submit</button>
      {error && <p>{error}</p>} 
      </form>
    </div>
    </>
    )
}

export default SignIn