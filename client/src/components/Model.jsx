// Modal.jsx

import React, { useState } from 'react';
import axios from 'axios';

const Modal = ({ addRequest }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [transportation, setTransportation] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/saveRequest', {
        name,
        email,
        phone,
        departureDate,
        transportation,
      });
      console.log(response.data); // Optional: Handle response from backend
      // Optionally clear form fields or close modal
      setName('');
      setEmail('');
      setPhone('');
      setDepartureDate('');
      setTransportation('');
      addRequest(response.data)
    //   setShowModal(false); // Close modal after successful submission
    } catch (error) {
      console.error('Error submitting request:', error);
    }
  };

  return (
    <div className='pl-4 mt-4'>
      <div className="modal-content">
        <h2 className='text-2xl font-gaegu'>Rideshare Request Form</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <div className='mt-2'>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          </div>
          <div className='mt-2'>
          <input
            type="tel"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          </div>
          <div className='mt-2'>
          <input
            type="date"
            placeholder="Departure Date"
            value={departureDate}
            onChange={(e) => setDepartureDate(e.target.value)}
            required
          />
          </div>
          <div className='mt-2'>
          <input
            type="text"
            placeholder="Transportation"
            value={transportation}
            onChange={(e) => setTransportation(e.target.value)}
            required
          />
          </div>
          <div className='mt-2'>
          <button type="submit" className='btn font-gaegu text-xl'>Submit Request</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
