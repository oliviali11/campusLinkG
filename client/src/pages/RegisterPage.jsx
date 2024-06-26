import React from 'react'
import { useState } from 'react';
import axios from 'axios'

const RegisterPage = () => {

    const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      const response = await axios.post('http://localhost:8000/register', {
        username,
        password,
      });
      console.log(response.data); // Optional: log response from backend
      // Handle successful registration (e.g., redirect to login page)
    } catch (error) {
      console.error('Registration error:', error);
      // Handle error (e.g., display error message)
    }
  };
  return (
    <div className='mt-6 pl-4'>
      <h1 className='text-2xl text-bold mt-6 font-gaegu'>Register</h1>
      <div>
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
      </div>
      <div className='mt-2'>
      <button onClick={handleRegister} className='btn font-gaegu'>Register</button>
      </div>
    </div>
  )
}

export default RegisterPage