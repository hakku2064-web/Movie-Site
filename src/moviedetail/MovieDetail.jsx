import React from 'react'
import { useParams,Link } from 'react-router-dom'
import { useState } from 'react'
import moviedetail from '../data/moviedetail'
function MovieDetail() {
    const {id}=useParams();
    const movie=moviedetail.find((m)=>m.id===Number(id));
    if (!movie){
        return(
            <div className='not-found'>
                <h2>Movie Not Found</h2>
                <Link to='/'>Back To Home</Link>
            </div>
        );
    }
  return (
    <div className='container'>
        <div className='hero-banner' style={{backgroundImage:`url(${movie.backdrop})`}}>\
            <div className='hero-gradient-overplay'></div>
            <div className='hero-content'>
                <Link to="/" className='back-link'> Back to Home</Link>
                <h1 className='movie-title'>{movie.title}</h1>
                <div className='movie-metadata'>
                    <span className='year'>{movie.year}</span>
                    <span className='rating'>{movie.rating}</span>
                    <span>{movie.rating}</span>
                    <span className='hd-badge'>HD</span>
                </div>
                <div className='genres-list'>
                    {movie.genres.join(' . ')}
                </div>
                <div className='hero-buttons'>
                    <button className='movie-btn play-btn'>Play</button>\
                    <button className='movie-btn list-btn'>+ Add to My List</button>
                    <button className='movie-btn icon-btn'> </button>

                </div>
            </div>
           {movie.quote &&(
             <div className='hero-quote-box'>
                <p>{movie.quote}</p>
            </div>
           )}
        </div>
        <div className='nav-tab-bar'>
            <button className={ab==='overview'?'tab active':'tab'}
        </div>

    </div>
  )
}

export default MovieDetail