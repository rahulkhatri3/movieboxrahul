import React from 'react'
import { UseGlobalContext } from './context'
import { NavLink } from 'react-router-dom';

const Movie = () => {

  const { movies, isLoading } = UseGlobalContext();

  if (isLoading){
    return(
      <div>
        <h2 className='loading'> Loading...</h2>
      </div>
    )
  }
  return (
   <section className='movie-page'>
    <div className='container grid grid-4-col'>
      {movies.map((curMovie)=>{
        const {imdbID, Title, Poster} = curMovie;
        const movieName = Title.substring(0,15);
        return (
          <NavLink to={`/movie/${imdbID}`} key={imdbID}>
            <div className='card'>
              <div className='card-info'>
                <h2>{movieName.length >= 15 ? `${movieName} ...` : movieName}</h2>
                <figure>
                  <img src={Poster} alt={imdbID}></img>
                </figure>
              </div>
            </div>

          </NavLink>
      )
    })}
    </div>
  </section>
  )
}


 
  
  



export default Movie
