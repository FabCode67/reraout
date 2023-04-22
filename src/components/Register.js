import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Nav from './Nav'


const Register = () => {
    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [pass, setPass] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [country, setCountry] = useState('Rwanda')
    const [address, setAddress] = useState('')
    const [gender, setGender] = useState('male')

    const navigate = useNavigate()

    const handleBack = () => {
        navigate('/')
    }

    const IsValidate =() =>{
        let isProcced = true
        let errorMessage = "Please Enter value in "
        if(id === null || id ===''){
            isProcced = false
            errorMessage += "username"
        }
      
       else if(name === null || name ===''){
            isProcced = false
            errorMessage += "full name"
        }
       
      else  if(pass === null || pass ===''){
            isProcced = false
            errorMessage += "password"
        }
       
       else if(country === null || country ===''){
            isProcced = false
            errorMessage += "country"
        }
       
      else  if(gender === null || gender ===''){
            isProcced = false
            errorMessage += "gender"
        }
       
      else  if(address === null || address ===''){
            isProcced = false
            errorMessage += "adderess"
        }
        else  if(phone === null || phone ===''){
            isProcced = false
            errorMessage += "adderess"
        }
        if(!isProcced){
            toast.warning(errorMessage)
        }
        return isProcced

    }

    const handleSubmit = (e) => {
       
        e.preventDefault();
        let regObj = {id, name, pass, email, phone, country, address, gender}
        console.log(regObj);
        if(IsValidate()){
        fetch("http://localhost:8001/user", {
            method: 'POST',
            headers :{
                'Content-type':'application/json'
            },
            body : JSON.stringify(regObj)
        }).then((res)=>{
            toast.success(`${name} Registerd successfully`)
            navigate('/login')
        }).catch((err)=>{
            toast.error('failed')
        })

    }
    }
    return (
        <div>
            <Nav />
            <div className="offset-lg-3 col-lg-6">
                <form className="container" onSubmit={handleSubmit}>
                    <div className="card">
                        <div className="card-header">
                            <h3>Register</h3>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className='col-lg-6'>
                                    <div className='form-group'>
                                        <label>User Name <span className='errmsg'>*</span> </label>
                                        <input type='text' value={id} onChange={(e)=>setId(e.target.value)} className='form-control'></input>
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='form-group'>
                                        <label>Password <span className='errmsg'>*</span> </label>
                                        <input type='password' value={pass} onChange={(e)=>setPass(e.target.value)} className='form-control'></input>
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='form-group'>
                                        <label>Full Name <span className='errmsg'>*</span> </label>
                                        <input type='text' value={name} onChange={(e)=>setName(e.target.value)} className='form-control'></input>
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='form-group'>
                                        <label>email <span className='errmsg'>*</span> </label>
                                        <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)} className='form-control'></input>
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='form-group'>
                                        <label>Phone Number <span className='errmsg'>*</span> </label>
                                        <input type='text' value={phone} onChange={(e)=>setPhone(e.target.value)} className='form-control'></input>
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='form-group'>
                                        <label>country <span className='errmsg'>*</span> </label>
                                        <select value={country} onChange={(e)=>setCountry(e.target.value)} className='form-control'>
                                            <option value='Rwanda'>Rwanda</option>
                                            <option value='Uganda'>Uganda</option>
                                            <option value='Burundi'>Burundi</option>
                                        </select>
                                    </div>

                                    <div className='col-lg-6'>
                                        <div className='form-group'>
                                            <label>Adress<span className='errmsg'>*</span> </label>
                                            <input type='textarea' value={address} onChange={(e)=>setAddress(e.target.value)} className='form-control'></input>
                                        </div>
                                    </div>

                                    <div className='col-lg-6'>
                                        <div className='form-group'>
                                            <label>Gender</label> <br />
                                            <input type='radio' checked={gender === 'male'} onChange={(e)=>setGender(e.target.value)} name='gender' value='male' className='app-check'></input>
                                            <label>Male</label>
                                            <input type='radio' checked={gender === 'female'} onChange={(e)=>setGender(e.target.value)} name='gender' value='female' className='app-check'></input>
                                            <label>Female</label>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="card-footer">
                            <button className="btn btn-primary">Register</button>
                            <a className='btn btn-danger' onClick={handleBack}>Back</a>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Register