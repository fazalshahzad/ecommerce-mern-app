import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from '../../context/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/login`, { email, password });
      if (res.data.success) {
        toast.success(res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem('auth', JSON.stringify(res.data));
        navigate('/');
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.success('Something went wrong');
    }
  };

  return (
    <div className="container" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-12">
          <div className="login-box">
            <h2>Login</h2>
            <form>
              <div className="user-box">
                <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <label>Email</label>
              </div>
              <div className="user-box">
                <input
                  type="password"
                  className="input1"
                  maxLength="8"
                  required
                  autoComplete="off"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label>Password</label>
              </div>
              <div className="user-box mt-5">
                <small className="text-white">
                  Not registered? Go to <Link to="/register">Register</Link>
                </small>
              </div>
              <button type="submit" className="btn1">
                <ToastContainer />
                Submit
              </button>
            </form>
            <small className="text-white" style={{ marginLeft: '65%' }}>
              <Link to="/home">Go to home</Link> <i className="fa-solid fa-arrow-left-long"></i>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
