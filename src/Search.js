import React from 'react'
import { UseGlobalContext } from './context'

const Search = () => {
  const{query, setQuery, isError}=UseGlobalContext();
  return (
    
    <section className='search-section'>
      <h2>Search your favorite movies</h2>
      <form action="#" onSubmit={(e)=> e.preventDefault()}>
        <input type='text' placeholder='search here' value={query} onChange={(e)=> setQuery(e.target.value)}></input>
      </form>
      <div className='card-error'>
        <p>{isError.show && isError.msg}</p>

      </div>

    </section>
     
  )
  
}

export default Search