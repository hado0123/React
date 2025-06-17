import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getMovies, getMovieDetails } from '../api/tmdbApi'

// createAsyncThunk: 비동기 thunk 액션 -> 영화 목록을 API로 부터 가져옴
// createAsyncThunk(type명, 비동기 함수)
// 비동기 함수에서 API를 call하는 함수 실행
// type명은 'slice의 이름/변수명'으로 짓는다

// 인기 영화 목록 가져오기
export const fetchMovies = createAsyncThunk('movies/fetchMovies', async () => {
   const response = await getMovies()
   return response.data.results
})

// 영화 상세 정보 가져오기
export const fetchMovieDetails = createAsyncThunk('movies/fetchMovieDetails', async (movieId) => {
   const response = await getMovieDetails(movieId)
   return response.data
})

// Slice 생성
const moviesSlice = createSlice({
   name: 'movies',
   initialState: {
      loading: false, // api 호출 중 로딩상태
      movies: [], // 영화목록 데이터가 저장될 배열
      error: null, // 에러 발생시 에러메시지 저장
      movieDetails: null, // 영화 상세 정보(tmdb서버에서 받아오는 값이 json객체일때 초기 state를 null로 준다)
   },
   reducers: {},
   // extraReducers: 비동기 액션의 각 상태(state)를 업데이트
   extraReducers: (builder) => {
      builder
         //데이터를 가져오는 동안
         .addCase(fetchMovies.pending, (state) => {
            state.loading = true
            state.error = null
         })
         // 데이터를 성공적으로 가져오는 경우
         .addCase(fetchMovies.fulfilled, (state, action) => {
            state.loading = false
            state.movies = action.payload //결과
         })
         //api 호출이 실패할 경우
         .addCase(fetchMovies.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
         })
         .addCase(fetchMovieDetails.pending, (state) => {
            state.loading = true
            state.error = null
         })
         .addCase(fetchMovieDetails.fulfilled, (state, action) => {
            state.loading = false
            state.movieDetails = action.payload // response.data
         })
         .addCase(fetchMovieDetails.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
         })
   },
})

export default moviesSlice.reducer
