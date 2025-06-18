import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMovies } from '../../features/movieSlice'
import { Link } from 'react-router-dom'

function MovieList() {
   const dispatch = useDispatch()
   /*
     state.movies = {
        movies: [...], 
        loading: false, 
        error: null, 
     }
   
   */
   const { movies, loading, error } = useSelector((state) => state.movies)

   // 마운트 됐을때 1번 동작
   useEffect(() => {
      // fetchMovies() 액션 생성자 함수 실행
      dispatch(fetchMovies())
   }, [dispatch]) // useEffect안에서 dispatch 사용시 무조건 지정
   /*
      dispatch는 일반적으로 변하지 않지만, 
      React Hooks 규칙상 외부에서 쓰인 모든 변수는 의존성 배열에 명시하는 게 원칙 
      -> 명시하지 않으면 경고가 나타난다
   */

   if (loading) return <p>로딩중..</p>
   if (error) return <p>Error: {error}</p>

   return (
      <div style={{ padding: '20px' }}>
         <h1>인기영화 목록</h1>
         <ul>
            {movies.map((movie) => (
               <Link key={movie.id} to={`/detail/${movie.id}`}>
                  <li>{movie.title}</li>
               </Link>
            ))}
         </ul>
      </div>
   )
}

export default MovieList
