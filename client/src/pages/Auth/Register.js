import React,{useState} from 'react'
import Layout from '../../components/Layout/Layout'
import { useNavigate } from "react-router-dom"
import toast from 'react-hot-toast';
import axios from 'axios';
import "../../styles/AuthStyles.css"
export const Register = () => {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [phone,setPhone] = useState("")
    const [address,setAddress] = useState("")
    const [answer,setAnswer] = useState("")
    const navigate = useNavigate()
// form fuctiion 
const handleSubmit = async (e) => {
    e.preventDefault();
   try {
       const res = await axios.post("/api/v1/auth/register", { name, email, password, phone, address, answer });
    if(res && res.data.success){
      toast.success(res.data && res.data.message);
      navigate("/login");
    }else{
      toast.error(res.data.message);
    }
   } catch (error) {
    console.log(error)
    toast.error('Something went wrong')
   }
};
  return (
    <Layout title="Register - Vendor Vision">
        <div className="form-container">
         <h1>REGISTER FORM</h1>
         <form onSubmit={handleSubmit}>
  <div className="mb-3">
    
    <input type="text" value={name} 
    onChange={(e) => setName(e.target.value)} className="form-control" id="exampleInputName"  placeholder="Enter Your Name" required/>
    
  </div>
  <div className="mb-3">
    
    <input type="email" value={email} 
    onChange={(e) => setEmail(e.target.value)} className="form-control" id="exampleInputEmail"  placeholder="Enter Your Email" required/>
    
  </div>
  
  <div className="mb-3">
    
    <input type="password" value={password} 
    onChange={(e) => setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" placeholder="Enter Your Password" required/>
  </div>
  <div className="mb-3">
    
    <input type="text" value={phone} 
    onChange={(e) => setPhone(e.target.value)} className="form-control" id="exampleInputPhone"  placeholder="Enter Your Phone" required/>
    
  </div>
  <div className="mb-3">
    
    <input type="text" value={address} 
    onChange={(e) => setAddress(e.target.value)} className="form-control" id="exampleInputAddress "  placeholder="Enter Your Address" required/>
    
  </div>
  <div className="mb-3">
    
    <input type="text" value={answer} 
    onChange={(e) => setAnswer(e.target.value)} className="form-control" id="exampleInputAnswer "  placeholder="Enter Your First school name" required/>
    
  </div>
  
  <button type="submit" className="btn btn-primary">REGISTER</button>
</form>

        </div>
    </Layout>
  )
}
