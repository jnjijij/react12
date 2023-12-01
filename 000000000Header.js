// Header.js
import React from 'react';

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="/">
            The Movies
          </a>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#genres">
                Genres
              </a>
            </li>
            {/* Add more navigation links as needed */}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
