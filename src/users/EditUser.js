import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
export default function EditUser() {

    let navigate=useNavigate();
    const {id}= useParams()

    const [user,setUser]=useState({
        name:"",
        username:"",
        email:""
    })

 const{name,username,email}=user

 const onInputChange=(e)=>{
    setUser({...user,[e.target.name]:e.target.value});

 };

  useEffect(()=>{
   loaduser();
  },[]);

const onSubmit= async(e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/user/${id}`,user)
     navigate("/");
};
const loaduser = async ()=>{
    const reesult = await axios.get(`http://localhost:8080/user/${id}`)
    setUser(reesult.data)
}

    
  return (
    <div className="container">
        <div className="row">
            <div className="col-md-6 offser-md-3 border rounded p-4 mt-2 shadow">
    <h2 className="text-center m-4">Edit User</h2>

    <form onSubmit={(e)=> onSubmit(e)}>
    <div className="mb-3">
        <lable htmlFor="Name" className="form-lable">
            Name
        </lable>
    <input
    type={"text"}
    className="form-control"
    placeholder="Enter your name"
    name="name"
    value={name}
    onChange={(e)=>onInputChange(e)}/>
   

    </div>
   
    <div className="mb-3">
        <lable htmlFor="Username" className="form-lable">
            Username
        </lable>
    <input
    type={"text"}
    className="form-control"
    placeholder="Enter your username"
    name="username"
    value={username}
    onChange={(e)=>onInputChange(e)} />
    

    </div>
    <div className="mb-3">
        <lable htmlFor="Email" className="form-lable">
            Username
        </lable>
    <input
    type={"text"}
    className="form-control"
    placeholder="Enter your e-mail adderss"
    name="email"
    value={email}
    onChange={(e)=>onInputChange(e)}/>
    

    </div>
    <button type="submit" className="btn btn-outline-primary">submit</button>
    <Link  className="btn btn-outline-danger mx-2" to="/">Cancle</Link>
    </form>
            </div>

        </div>
      
    </div>
  )
}
