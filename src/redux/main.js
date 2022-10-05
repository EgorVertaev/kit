import { configureStore } from '@reduxjs/toolkit'
import authReducer from './Slices/AuthSlice'
import constctReducer from './Slices/ContactSlice'


export default configureStore({
  reducer: {
    contact: constctReducer,
    auth: authReducer,
  }
})