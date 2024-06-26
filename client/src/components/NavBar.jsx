import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './custom.css'
import { faCar } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';


const NavBar = () => {

  return (
    <nav className="bg-emerald-500 p-4 flex justify-between items-center font-">
  <div className="text-white">
  <h1 className="text-3xl font-bold text-archivo-black">
        Ride Claremont{' '}
        <FontAwesomeIcon icon={faCar} className="text-white text-3xl ml-2" />
        <FontAwesomeIcon icon={faUser} className="text-white text-3xl ml-2" />
      </h1>
  </div>
  <div>
    <ul className="flex space-x-2">
      <li>
        <a href="/" className="btn navlink">Home</a>
      </li>
      <li>
        <a href="/ai-assistant" className="btn navlink">AMA</a>
      </li>
      <li>
        <a href="/login" className="btn navlink">Login</a>
      </li>
    </ul>
  </div>
</nav>




  );
};

export default NavBar;