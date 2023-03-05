import React from 'react'
import { useState } from 'react'
import { useSignUp } from '../../Hooks/useSignUp'
import './SignUp.css'
const SignUp = () => {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const {signup,error}=useSignUp();
  const handleSubmit = async(e) => {
    e.preventDefault();
    await signup(email,password)
    // console.log(email, password);
    setemail("");
    setpassword("");
  }
  return (
    <>
      <div className="registartion">
        <form onSubmit={handleSubmit}>
          <h1>SignUp</h1>
          <label htmlFor="">Email:</label><br />
          <input type="email" required onChange={(e) => {setemail(e.target.value)}} value={email}/><br />
          <label htmlFor="">Password</label><br />
          <input type="password" required onChange={(e) => {setpassword(e.target.value)}} value={password}/><br />
          <button>submit</button>
          {error && <p>{error}</p>}
        </form>
      </div>
    </>
  )
}

export default SignUp