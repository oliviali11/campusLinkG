import React from 'react'
import { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import '../components/custom.css';

const LoginPage = () => {
  const navigate = useNavigate(); 
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8000/login', {
        username,
        password,
      });
      console.log(response.data); // Optional: log response from backend
      setLoggedIn(true); // Set state to indicate user is logged in
      navigate('/dashboard');
      // Handle successful login (e.g., redirect to profile page)
    } catch (error) {
      console.error('Login error:', error);
      // Handle error (e.g., display error message)
    }
  };

  if (loggedIn) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div className='text-xl text-bold mt-6 pl-4'>
      <h2 className='text-2xl text-bold font-gaegu'>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <div className='mt-2'>
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      </div>
      <div className='mt-2'>
      <button onClick={handleLogin} className='btn font-gaegu'>Login</button>
      </div>
    </div>
  )
}

export default LoginPage