import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import MovieList from '../MovieList/MovieList';
import MovieDetails from '../MovieDetails/MovieDetails';
import NotFound from '../NotFound/NotFound';

function Routes({ movies, loading }) {
  return (
    <Switch>
      <Route exact path="/">
        <MovieList movies={movies} loading={loading} />
      </Route>
      <Route path="/movie/:id">
        <MovieDetails />
      </Route>
      <Route exact path="/not-found">
        <NotFound />
      </Route>
      <Route>
        <Redirect exact path="/" />
      </Route>
    </Switch>
  );
}

export default Routes;