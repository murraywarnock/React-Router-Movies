import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Switch } from 'react-router-dom'

// Components used for the different routes
import Movie from './Movies/Movie'
import MovieList from '././Movies/MovieList'


import SavedList from './Movies/SavedList';

export default function App () {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies') // Study this endpoint with Postman
        .then(response => {
          // Study this response with a breakpoint or log statements
          // and set the response data as the 'movieList' slice of state

          // console.log("response: ",response);
          setMovieList(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
    // getMovies().then(res => setMovieList(res.data));

  }, []);
  console.log("movieList: ",movieList);

  const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once
  };

  return (
    <div>
      <SavedList list={[ /* This is stretch */]} />

      <div>  {/* //Replace this Div with your Routes */}
        <Switch>
          <Route path = "/">
            <MovieList movies ={movieList}/> 
          </Route>
          <Route path = "/movies/:movieID"> 
            {/* placeholder movie key until I figure it out */}
            <Movie key = "2"/> 
          </Route>
        </Switch>

      </div>
    </div>
  );
}
