import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './counterSlice'
import userReducer from './userSlice'

const store = configureStore({
   reducer: {
      counter: counterSlice.reducer, // counter 리듀서
      user: userReducer, // user 리듀서
   },
})

export default store
