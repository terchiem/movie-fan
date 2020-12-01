import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

import SearchBar from '../SearchBar/SearchBar';

/**
 * Header component that is displayed on each page
 *
 * Props:
 *  search - search function for the SearchBar component
 */

function Header({ search }) {
  return (
    <header className="Header">
      <h1><Link to="/">Movie Fan</Link></h1>
      <SearchBar search={search} />
    </header>
  );
}

export default Header;