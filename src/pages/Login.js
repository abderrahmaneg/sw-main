import React, { useState } from 'react';
//import axios from 'axios';
import { Link ,Redirect} from 'react-router-dom';
import {useNavigate } from 'react-router-dom';
import "./Login.css";
import login_img from '../images/login_img.svg';
import email_icon from '../images/e-mail.svg';
import password_icon from '../images/passeword.svg';


function Login() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
 // const navigate = useNavigate();
 // const [loggedIn, setLoggedIn] = useState(false);
 // const [role, setRole] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      username: username,
      password: password,
      rememberMe: rememberMe,
    };

   // try {
    //  const response = await axios.post('/api/login', formData);
    //  console.log(response.data);
    //  const role = response.data.role; 

    //  setLoggedIn(true);
    //  setRole(role);

     // if (role === 'employee') {
    //    navigate('/employee-dashboard', { replace: true });
    //  } else if (role === 'admin') {
    //    navigate('/admin-dashboard', { replace: true });
    //  }
  //  } catch (error) {
    //  console.error(error);
   // }
  };

  return (
    <div className="login-card">


      <div className="image-container">

          <img src={login_img} />
          
      </div>


      <div className="form-container">
        
        <h2>Log In to Your Account</h2>
       
        <form onSubmit={handleSubmit} >



          <div id="outl" className="form-group">
            <label htmlFor="username">Email or Username </label>
            <div className="input-container">
              <input 
              type="text" 
              id="username" 
              name="username" 
              placeholder="Enter your email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              />
              <img src={email_icon} />
             <i className="fas fa-user"></i>
            </div>
            
          </div>



          <div id="outl" className="form-group">
            <label htmlFor="password">Password</label>
            <div className="input-container">
              <input 
              type="password" 
              id="password" 
              name="password" 
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              />
              <img src={password_icon} />
              <i className="fas fa-lock"></i>
            </div>
          
          </div>




          <div className="form-group remember ">
            <div className="input-container remember-me-container">
              <input 
              type="checkbox" 
              id="remember-me"
               name="remember-me"
               checked={rememberMe}
               onChange={(e) => setRememberMe(e.target.checked)}
                />
              <label htmlFor="remember-me">Remember me</label>
            </div>
          
           <Link to={'/forgotpassword'}>Forgot password?</Link>
          
          </div>


          <div className="form-group">
            <button type="submit">Login</button>
          </div>

        </form>
      </div>
    </div>
  );
}

export default Login;