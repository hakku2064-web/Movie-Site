import React from 'react';
import { Link } from 'react-router-dom';
import "../ui/moviecard.css"
function MovieCard({ movie }) {
  return (
   
   <div className='container'>
     <Link to={`/movie/${movie.id}`} className='movie-card'>
      <div className='movie-image'>
        <img src={movie.poster} alt={movie.title} />
      </div>
      <div className='movie-info'>
        <h3>{movie.title}</h3>
      </div>
    </Link>
   </div>
  );
}

export default MovieCard;