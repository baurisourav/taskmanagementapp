import React from 'react'
import { useState } from 'react'

export default function Register() {
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [phoneno,setPhone]=useState("")
  const [password,setPassword]=useState("")
  async function apiCall(e){
          e.preventDefault()

          const data=await fetch(`http://localhost:4000/register`,
          {headers:{'Content-Type':'application/json'},
          method:'POST',body:JSON.stringify({
            name,email,phoneno,password

          })})
          // const val=await data.json()
         
  }

  return (<>
         
    <div className='register'>
    < h1>Register</h1>
        
        <form onSubmit={apiCall}>
<div>
<label>
    <h2>Name</h2>
    <input type="text" name="name" value={name} className='input' onChange={(e)=>setName(e.target.value)} />
  </label>
  
</div>
<div>
<label>
   <h2>Email</h2>
    <input type="text" name="email" value={email} className='input' onChange={(e)=>setEmail(e.target.value)} />
  </label>
  
</div>
<div>
<label>
    <h2>Phon no</h2>
    <input type="text" name="phoneno" value={phoneno} className='input' onChange={(e)=>setPhone(e.target.value)} />
  </label>
  
</div>
<div>
<label>
    <h2>Password</h2>
    <input type="text" name="password" value={password} className='input' onChange={(e)=>setPassword(e.target.value)}/>
  </label>
  <div>
  <button type="submit" className='btn'>register</button>
  </div>
 
</div>
 
</form>
    </div>
  </>
  )
}
