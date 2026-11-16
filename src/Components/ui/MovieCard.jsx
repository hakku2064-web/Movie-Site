import React from 'react'
import { Link } from 'react-router-dom'

function MovieCard({movie}) {
  return (
    
       <Link to={`/movie/${movie.id}`} className='movie-card'>
        <div className='movie-card'>
            <img src={movie.poster} alt={movie.title}/>
            <h3>{movie.title}</h3>
        </div></Link>
       
    

  )
}

export default MovieCard