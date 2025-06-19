// 인기영화, 현재 상영중 영화, 개봉예정 영화
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMovies } from '../features/movies/moviesSlice'

import { Wrap, Main, Loading } from '../styles/StyledComponent'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import MovieCard from '../components/MovieCard'
import Button from '@mui/material/Button'

function MovieCategory({ category }) {
   const dispath = useDispatch()
   const { movies, loading, error } = useSelector((state) => state.movies)

   // 카테고리 별 페이지번호
   const [page, setPage] = useState({
      popular: 1,
      now_playing: 1,
      upcoming: 1,
   })

   // category가 바뀔때(메뉴 누를때) 또는 page가 바뀔때(더 보기 버튼 누를때) 동작
   useEffect(() => {
      dispath(fetchMovies({ category, page: page[category] }))
   }, [dispath, page, category])

   // 더보기 버튼 클릭시 페이지 번호 1씩 증가
   const loadMore = () => {
      setPage((prevPage) => ({
         ...prevPage,
         [category]: prevPage[category] + 1, // prevPage.category + 1
      }))
   }

   // 페이지 번호가 1번일때만 loading 실행함 -> 더보기 클릭시 로딩 컴포넌트가 렌더링되면서 위로 올라오는 현상 위로 올라오는 현상 방지
   if (loading && page[category] === 1) {
      return (
         <Wrap>
            <Menu />
            <Main>
               <Loading />
            </Main>
            <Footer />
         </Wrap>
      )
   }

   if (error) {
      return (
         <Wrap>
            <Menu />
            <Main>
               <h2>Error: {error}</h2>
            </Main>
            <Footer />
         </Wrap>
      )
   }

   return (
      <Wrap>
         <Menu />
         <Main $padding="30px 0">
            <MovieCard movies={movies} />
            <Button
               variant="outlined"
               sx={{
                  margin: '20px auto',
                  display: 'block',
                  width: '500px',
               }}
               onClick={loadMore}
            >
               더보기
            </Button>
         </Main>
         <Footer />
      </Wrap>
   )
}

export default MovieCategory
