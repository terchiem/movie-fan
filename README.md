# Movie Fan
This app allows a user to search for movies and see their details using [The Open Movie Database API](http://www.omdbapi.com/). A user can also add upvotes/downvotes to a movie, which persists on a database for every user.

The frontend is a single page React app where a user can search for a movie by title and then go to a movie's details page to see its release year, director, actors, description and poster.

This backend is a Node Express server which has endpoints that utilize the OMDb API to search for a movie or get a single movie. It also has endpoints to interact with the database to create or update a movie's upvotes and downvotes.

[Live Site](https://movie-fan.netlify.app/)

# Tech Stack

* Frontend
  * React & Hooks
  * Axios
  * Hosted on Netlify (free tier)
* Backend
  * Node.js
  * Express
  * Axios
  * MongoDB & Mongoose
  * Server hosted on Heroku (free tier)
  * DB hosted on MongoDB Atlas (free tier)

# Client Setup
- Install [Node.js and npm](https://www.npmjs.com/get-npm)
- Install project dependencies:
  1. Navigate to the `/client` directory
  2. Run command:
    ```bash
    npm install
    ```
- Run the development server:
  1. Navigate to the `/client` directory
  2. Run command:
    ```bash
    npm start
    ```
- Client should now be hosted on `localhost:3000`

# Preview
![Movie Fan preview](./movie.gif)

# Todos / Wishlist
### Add error handling to the client
- The app currently assumes that all API calls will be successful. I would like to add error handling for server errors and communicate that to the user.

### Create a responsive layout for mobile
- The app is currently only designed for desktop and the movie details page is not very mobile friendly.

### Pagination of search results
- Right now the app only returns the first 10 search results from the OMDB API. The API has support for pages, so I would like to utilize pagination and allow the user to browse more search results.

### Most upvoted/downvoted movies
- Since it's possible to query movies by vote count, I would like to implement a feature where you can see the top 10 upvoted or downvoted movies currently on the database.

### Client and Server tests
- Currently there are no written tests. At the very least, I would like to have render and snapshot tests for my frontend components and some route tests for my backend.