import axios, { Axios } from 'axios';
import React, {useState} from 'react';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import {useNavigate} from 'react-router-dom'

const Register = () => {
 
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [address,setAddress] = useState("");
    const [phone,setphone] = useState("");
    const navigate = useNavigate();
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
          const res = await axios.post( `${process.env.REACT_APP_API}/api/v1/auth/register`,{name,email,address,phone,password});
          if(res.data.success){
            toast.success(res.data.message)
            navigate('/login');
          }else{
            toast.error(res.data.message)
          }
        } catch (error) {
          toast.success('something went wrong')
        }

    }


  return (
   <div class="body">
     <div className="container" id="register" onSubmit={handleSubmit}>
         
         <div className="row">
           <div className="col-12">
             <div className="login-box">
               <h2>Login</h2>
               <form >
                 <div className="user-box">
                   <input type="text" value={name} onChange={(e)=> setName(e.target.value) } required />
                   <label>Full Name</label>
                   
                 </div>
                 
                 <div className="user-box">
                   <input type="email" value={email} onChange={(e)=> setEmail(e.target.value) } required />
                   <label>Email</label>
                  
                 </div>
                 <div className="user-box">
                   <input type="text" value={address} onChange={(e)=> setAddress(e.target.value) } required />
                   <label>Your Address</label>\
                   </div>
                 <div className="user-box">
                   <input type="number" value={phone} onChange={(e)=> setphone(e.target.value) } required />
                   <label>Your Mobile phone</label>\
                   </div>
                 
                 <div className="user-box">
                   <input
                     type='password'
                     className="input1"
                     maxLength="8"
                     required
                     autoComplete="off"
                     value={password}
                     onChange={(e)=> setPassword(e.target.value) }
                   />
                  
                
                   <label>password</label>
                  
                 </div>
                 <div className="user-box mt-5">
                   <small className="text-white">
                     If you are already registered? go to <a href='/login'>Login</a>
                   </small>
                 </div>
                 <button type="submit" className="btn1">
                 <ToastContainer />
                  
                   Submit
                 </button>
               </form>
               <small className="text-white" style={{ marginLeft: '65%' }}>
                 <a href='/home'>Go to home</a> <i className="fa-solid fa-arrow-left-long"></i>
               </small>
             </div>
           </div>
         </div>
       </div>
   </div>
  )
}

export default Register
