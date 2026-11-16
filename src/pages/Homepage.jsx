import React from 'react'
import { Link } from 'react-router-dom'
import MovieCard from '../Components/ui/MovieCard'
import moviedetail from '../data/moviedetail'
function Homepage() {
  return (
    <div>
      {moviedetail.map((movie)=>(
        <MovieCard key={movie.id} movie={movie}/>
        
      ))}
    </div>
  )
}

export default Homepage