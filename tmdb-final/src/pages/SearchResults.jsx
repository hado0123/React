// 검색결과
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSearchResults } from '../features/moviesSlice'

import { Wrap, Main, Loading } from '../styles/StyledComponent'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import MovieCard from '../components/MovieCard'
import Button from '@mui/material/Button'

function SearchResults() {
   const [searchParams] = useSearchParams() //query 파라미터 값 가져오기
   const query = searchParams.get('query') // 검색어
   const [page, setPage] = useState(1) // 페이지 번호 state

   const dispath = useDispatch()
   const { searchResults, loading, error } = useSelector((state) => state.movies)

   useEffect(() => {
      dispath(fetchSearchResults({ query, page }))
   }, [dispath, query, page])

   // 더보기 누를때마다 page state 1씩 증가
   const loadMore = () => {
      setPage((prevState) => prevState + 1)
   }

   if (loading && page === 1) {
      return (
         <Wrap>
            <Menu />
            <Main $padding="30px 0">
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
            <Main $padding="30px 0">
               <h2>오류발생: {error}</h2>
            </Main>
            <Footer />
         </Wrap>
      )
   }

   return (
      <Wrap>
         <Menu />
         <Main $padding="30px 0">
            {/* 검색 결과에 따른 렌더링 처리 */}
            {searchResults.length > 0 ? (
               <>
                  <MovieCard movies={searchResults} />
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
               </>
            ) : (
               <h2>검색 결과가 없습니다.</h2>
            )}
         </Main>
         <Footer />
      </Wrap>
   )
}

export default SearchResults
