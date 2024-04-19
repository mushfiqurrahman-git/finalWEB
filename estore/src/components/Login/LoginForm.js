import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
 // Importing Login.css
import '../../Login.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is already logged in using session storage
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');
    if (isLoggedIn) {
      // If user is already logged in, redirect to dashboard
      navigate('/');
    }
  }, [navigate]); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      console.log(response);
      console.log(response.data);
      if (!response.ok) {
        throw new Error('Login failed');
      }
      const data = await response.json();
      console.log(response);
      console.log(response.data);
      console.log('Login successful');
  
      // Set isLoggedIn  in session storage
      sessionStorage.setItem('isLoggedIn', true);
      //  JWT token in session storage
      sessionStorage.setItem('token', data.token);
  
      if (data.user) {
        sessionStorage.setItem('userId', data.user._id);
        sessionStorage.setItem('username', data.user.username);
      }
  
      // Redirect user to dashboard or another page upon successful login
      navigate('/');
    } catch (error) {
      console.error('Login failed:', error);
      setError('Invalid email or password'); 
    }
  };
  
  

  return (
    <div className="floral-background login-form">
      <form onSubmit={handleSubmit} className="border rounded shadow p-4">
        <h2 className="mb-4">Login</h2>
        {error && <div className="alert alert-danger">{error}</div>}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email:</label>
          <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password:</label>
          <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
