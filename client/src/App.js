import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header/Header';
import MovieDetails from './components/MovieDetails/MovieDetails';
import MovieSearch from './components/MovieSearch/MovieSearch';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Route exact path="/">
          <MovieSearch />
        </Route>
        <Route path="/:id">
          <MovieDetails />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
