import React from 'react';
// added necessary imports
import { useHistory, useRouteMatch} from 'react-router-dom'
// import { Route, useParams, NavLink, useRouteMatch, useHistory, Link } from 'react-router-dom'

// import Movie component
// import Movie from "./Movie";
// const {url} = useRouteMatch()


export default function MovieList(props) {
  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

function MovieDetails(props) {
  // added id to pass through as movieID param
  const { id, title, director, metascore } = props.movie;
  // employed useHistory and id from props to change URL
  const history = useHistory();
  const showMovie = () => {
    history.push(`/movies/${id}`)

  };

  return (
    // <div className="movie-card">
    <div className="movie-card" onClick={showMovie} >
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
    </div>


  // <Link to={`${url}/movies/${id'}>
  //  <div className="movie-card" onClick={showMovie} >

  //   <h2>{title}</h2>
  //   <div className="movie-director">
  //     Director: <em>{director}</em>
  //   </div>
  //   <div className="movie-metascore">
  //     Metascore: <strong>{metascore}</strong>
  //   </div>
  // </div> 
  //       </Link>


  );
}
