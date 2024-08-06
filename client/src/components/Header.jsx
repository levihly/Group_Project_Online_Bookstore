import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Navigation from './Navigation';

import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header>
      <div className="logo-container">
        <img src="/logo.png" alt="Bookstore Logo" className="logo-image" />
        <h1>Book Store</h1>
      </div>
      <Navigation />
    </header>
  );
};

export default Header;
