import React from 'react';
import './Header.css';

import SearchBar from '../SearchBar/SearchBar';

function Header({ search }) {
  return (
    <header className="Header">
      <h1>Movie Fan</h1>
      <SearchBar search={search} />
    </header>
  );
}

export default Header;