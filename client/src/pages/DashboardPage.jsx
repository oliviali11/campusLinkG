import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios'
import Modal from '../components/Model';

const DashboardPage = () => {
//   const [showModal, setShowModal] = useState(false);
  const [requests, setRequests] = useState([]); // State to hold submitted requests

  const fetchRequests = async () => {
    try {
      const response = await axios.get('http://localhost:8000/getRequests');
      setRequests(response.data); // Assuming backend returns an array of requests
    } catch (error) {
      console.error('Error fetching requests:', error);
    }
  };

  // Fetch initial requests on component mount
  useEffect(() => {
    fetchRequests();
  }, []);

  // Function to add new request to the list
  const addRequest = (newRequest) => {
    setRequests([...requests, newRequest]);
  };

  return (
    // <div className='pl-4'>
    // <h1 className='text-2xl text-bold pt-6 font-gaegu'>Welcome to your dashboard!</h1>
    // </div>
    <div className='mt-4'>
    <div className="dashboard pl-6">
      <h1 className='mt-4 text-2xl font-gaegu'>Welcome to Your Dashboard!</h1>
      <Modal addRequest={addRequest} />
      
      {/* Display submitted requests as cards */}
      <div className="request-list">
        {requests.map((request, index) => (
          <div key={index} className="request-card mt-4">
            <h2 className='text-xl font-gaegu'>{request.name}</h2>
            <p className='text-xl font-gaegu'><strong>Email:</strong> {request.email}</p>
            <p className='text-xl font-gaegu'><strong>Phone:</strong> {request.phone}</p>
            <p className='text-xl font-gaegu'><strong>Departure Date:</strong> {request.departureDate}</p>
            <p className='text-xl font-gaegu'><strong>Transportation:</strong> {request.transportation}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default DashboardPage