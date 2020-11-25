import React, { useState } from 'react';
import './SearchBar.css';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submitted: ', searchTerm);
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
          />
        <button>Ok</button>
      </form>
    </div>
  )
}

export default SearchBar;