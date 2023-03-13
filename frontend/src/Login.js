import React, { useState } from 'react'

export default function Login() {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  async function apiCall(e){
          e.preventDefault()

          const data=await fetch(`http://localhost:4000/login`,
          {headers:{'Content-Type':'application/json'},
          method:'POST',body:JSON.stringify({
            email,password

          })})
          .then(res=>{
            const token=res.token
            localStorage.setItem('token',token)
           
          })
          // const val=await data.json()
         
  }
  return (
    <>
     <div className='register'>
    < h1>Login</h1>
        
        <form onSubmit={apiCall}>
        <div>
<label>
   <h2>Email</h2>
    <input type="text" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} className='input' />
  </label>
 
  
</div>
<div>
<label>
    <h2>Password</h2>
    <input type="text" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} className='input' />
  </label>
  
  </div>

<div>
  <button type="submit" className='btn'>login</button>
  </div>
</form>
</div>
    </>
   
  )
}
