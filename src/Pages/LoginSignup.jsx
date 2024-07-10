import React, { useState } from 'react';
import './Css/LoginSignup.css';

const LoginSignup = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your authentication logic here (e.g., calling SignUp function from context)
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser(prevUser => ({
      ...prevUser,
      [name]: value
    }));
  };

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign up</h1>
        <form onSubmit={handleSubmit} className="loginsignup-form">
          <div className="loginsignup-fields">
            <input type="text" name="name" value={user.name} onChange={handleChange} placeholder='Your Name' />
            <input type="email" name="email" value={user.email} onChange={handleChange} placeholder='Email Address' />
            <input type="password" name="password" value={user.password} onChange={handleChange} placeholder='Password' />
          </div>
          <button type="submit">Continue</button>
        </form>
        <p className='loginsignup-login'>Already have an account? <span>Login here</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' />
          <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;



