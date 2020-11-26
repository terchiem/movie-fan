import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { searchMovies } from './utils/apiHelper';
import './App.css';

import Header from './components/Header/Header';
import Routes from './components/Routes/Routes';

const TEST_MOVIES = [
  { id: 1, title: 'movie 1', year: 2000 },
  { id: 2, title: 'movie 2', year: 2010 },
  { id: 3, title: 'movie 3', year: 'N/A' },
]

function App() {
  const [movies, setMovies] = useState(TEST_MOVIES);
  const [loading, setLoading] = useState(false);

  const search = async (searchTerm) => {
    setLoading(true);
    const movies = await searchMovies(searchTerm);
    setMovies(movies);
    setLoading(false);
    // redirect to list view
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Header search={search} />
        <Routes movies={movies} loading={loading} />
      </BrowserRouter>
    </div>
  );
}

export default App;
