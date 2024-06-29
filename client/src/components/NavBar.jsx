import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './custom.css'
import { faCar } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';


const NavBar = () => {

  return (
    <nav className="bg-emerald-500 p-4 flex justify-between items-center">
  <div className="text-white">
  <h1 className="text-3xl font-bold font-archivo-black">
        (5)Campus Link{' '}
        <FontAwesomeIcon icon={faCar} className="text-white text-3xl ml-2" />
        <FontAwesomeIcon icon={faUser} className="text-white text-3xl ml-2" />
      </h1>
  </div>
  <div>
    <ul className="flex space-x-2">
      <li>
        <a href="/" className="btn navlink font-gaegu">Home</a>
      </li>
      <li>
        <a href="/ai-assistant" className="btn navlink font-gaegu">AMA</a>
      </li>
      <li>
        <a href="/login" className="btn navlink font-gaegu">Login</a>
      </li>
      <li>
        <a href="/register" className="btn navlink font-gaegu">Register</a>
      </li>
    </ul>
  </div>
</nav>




  );
};

export default NavBar;