import React from 'react'
import { Link } from 'react-router-dom'
import moviedetail from '../../data/moviedetail'
function MovieCard() {
  return (
    <div>
        {moviedetail.map((movies)=>(
        <div key={movies.id} className='movie-card'>
            <div className='movie-image'>
                <img src={movies.poster} alt={movies.title}/>

            </div>
            <div className='movie-info'>
                <div>{movies.title}</div>
            </div>

        </div>)
    )}
    </div>
  )
}

export default MovieCard