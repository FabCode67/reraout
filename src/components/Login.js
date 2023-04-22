import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Nav from './Nav'

const Login = () => {
    const [pass, setPass] = useState('')
    const [email, setEmail] = useState('')
    const navigate = useNavigate()
    const handleBackToRegister = () => {
        navigate('/register')
    }
    const handleLogin = (e) =>{
        e.preventDefault();
        const logObj = {pass:pass, email:email}
        fetch('http://localhost:8001/user',{
            method: 'GET',
            headers :{
                'Content-type':'application/json'
            },
        }).then(res =>res.json())
          .then((data)=>{
          data.forEach(element => {
          if((logObj.email === element.email) && (logObj.pass === element.pass)){
             toast.success(`${element.name} Logged in successfully`)
             navigate('/')
          }
          else{
            toast.warning(`invald credentials`)
            navigate('/login')
          }
          });
        })
    }
   
  return (
        <div>
                <Nav />    

            <div className="offset-lg-3 col-lg-6">
                <form className="container" onSubmit={handleLogin}>
                    <div className="card">
                        <div className="card-header">
                            <h3>Register</h3>
                        </div>
                        <div className="card-body">
                            <div className="row">
    
                                <div className='col-lg-6'>
                                    <div className='form-group'>
                                        <label>Password <span className='errmsg'>*</span> </label>
                                        <input type='password' value={pass} onChange={(e)=>setPass(e.target.value)} className='form-control'></input>
                                    </div>
                                </div>
        
                                <div className='col-lg-6'>
                                    <div className='form-group'>
                                        <label>email <span className='errmsg'>*</span> </label>
                                        <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)} className='form-control'></input>
                                    </div>
                                </div>

                                </div>
                        </div>
                        <div className="card-footer">
                            <button className="btn btn-primary">Login</button>
                            <a className='btn btn-danger' onClick={handleBackToRegister}>Register</a>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    )
}
  

export default Login