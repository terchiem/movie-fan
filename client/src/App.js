import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Route exact path="/">
          <p>I'm the root page</p>
        </Route>
        <Route path="/:id">
          <p>I'm a movie details page</p>
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
