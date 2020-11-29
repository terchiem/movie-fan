import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { searchMovies } from './utils/apiHelper';
import './App.css';

import Header from './components/Header/Header';
import Routes from './components/Routes/Routes';

function App() {
  const history = useHistory();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const search = async (searchTerm) => {
    history.push('/');
    setLoading(true);
    const movies = await searchMovies(searchTerm);
    setMovies(movies);
    setLoading(false);
  }

  return (
    <div className="App">
      <Header search={search} />
      <Routes movies={movies} loading={loading} />
    </div>
  );
}

export default App;
