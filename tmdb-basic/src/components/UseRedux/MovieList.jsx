import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMovies } from '../../features/moviesSlice'

const MoviesList = () => {
   const dispatch = useDispatch()
   const { movies, loading, error } = useSelector((state) => state.movies)

   useEffect(() => {
      dispatch(fetchMovies())
   }, [dispatch])

   if (loading) return <p>Loading...</p>
   if (error) return <p>Error: {error}</p>

   return (
      <div style={{ padding: '20px' }}>
         <h1>Popular Movies</h1>
         <ul>
            {movies.map((movie) => (
               <Link to={`/detail/${movie.id}`}>
                  <li key={movie.id}>{movie.title}</li>
               </Link>
            ))}
         </ul>
      </div>
   )
}

export default MoviesList
