import React from 'react';
import { Route, Switch } from 'react-router-dom';

import MovieList from '../MovieList/MovieList';
import MovieDetails from '../MovieDetails/MovieDetails';

function Routes({ movies, loading }) {
  return (
    <Switch>
      <Route exact path="/">
        <MovieList movies={movies} loading={loading} />
      </Route>
      <Route path="/:id">
        <MovieDetails />
      </Route>
    </Switch>
  );
}

export default Routes;