import React, { useState } from 'react';
import './SearchBar.css';

function SearchBar({ search }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    search(searchTerm);
  }

  return (
    <div className="SearchBar">
      <form onSubmit={handleSubmit}>
        <label htmlFor="searchTerm">Search</label>
        <input
          type="text"
          id="searchTerm"
          name="searchTerm"
          value={searchTerm}
          placeholder="Enter movie title..."
          onChange={handleChange}
          required
          minLength="2"
        />
        <button aria-label="Search">
          <i className="fa fa-search" />
        </button>
      </form>
    </div>
  )
}

export default SearchBar;