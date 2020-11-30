import React from 'react';
import { Route, Switch } from 'react-router-dom';

import MovieList from '../MovieList/MovieList';
import MovieDetails from '../MovieDetails/MovieDetails';
import LoadSpinner from '../LoadSpinner/LoadSpinner';


function Routes({ movies, loading }) {

  if (loading) {
    return <LoadSpinner />;
  }

  return (
    <Switch>
      <Route exact path="/">
        <MovieList movies={movies} />
      </Route>
      <Route path="/:id">
        <MovieDetails />
      </Route>
    </Switch>
  );
}

export default Routes;