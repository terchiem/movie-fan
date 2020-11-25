import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import Header from './components/Header/Header';
import MovieDetails from './components/MovieDetails/MovieDetails';
import MovieSearch from './components/MovieSearch/MovieSearch';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Switch>
          <Route exact path="/">
            <MovieSearch />
          </Route>
          <Route path="/:id">
            <MovieDetails />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
