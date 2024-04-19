// Login.js

import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from './LoginForm';

const Login = () => {
  return (
    <div>
      <LoginForm />
      <div style={{ marginTop: '10px' }}>
        <Link to="/register">Register</Link>
      </div>
    </div>
  );
};

export default Login;
