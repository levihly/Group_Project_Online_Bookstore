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
      <Link to="/all-books">All Books</Link> 
      <div className="search-bar">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <input type="text" placeholder="Search by title, author, keywords" />
      </div>
    </header>
  );
};

export default Header;
