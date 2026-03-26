import React from 'react'
import { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom'
const API_KEY = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;

const Singlemovie = () => {
  const {id} = useParams()
  const [isLoading, setIsLoading]= useState(true);
  const [movies, setMovies]= useState({});


  const getSingleMovie = async(url)=>{
    try{
      const res = await fetch(url);
      const data = await res.json();

      if (data.Response === "True"){
        setMovies(data);
        setIsLoading(false);
      }else{
        console.log(data.Error);
      }
    } catch (error) {
      console.log(error);
  }
}
  useEffect(() => {
    getSingleMovie(`${API_KEY}&i=${id}`);
  }, [id]);

  if (isLoading) {
    return <h2 className='loading'>Loading...</h2>;
  }
  return (
 <section className='movie-section'>
  <div className='movie-card'>
    <figure>
      <img src={movies?.Poster} alt={movies?.Title} />
      </figure>
      <div className='card-content'>
      <p className='card-text'>{movies.Title}</p>
      <p className='card-text'>{movies.Released}</p>
      <p className='card-text'>{movies.Genre}</p>
      <p className='card-text'>{movies.imdbRating}</p>
      <p className='card-text'>{movies.Country}</p>
      <NavLink to ="/" className="back-btn"> Go Back</NavLink>
      </div>
      </div>
    </section>
 
  )
}

export default Singlemovie
