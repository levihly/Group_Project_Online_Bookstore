import React from 'react';

import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <div>
      <Link className="book-link" to={`/`}>
        <div className="logo-container">
          <img src="https://i.imgur.com/9f1FpeD.png" alt="Bookstore Logo" className="logo-image" />
          <h1><em>Book Store</em></h1>
        </div>
      </Link>
    </div>
  );
};

export default Header;
