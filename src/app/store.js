import { configureStore } from '@reduxjs/toolkit'
import postsReducer from '../features/lession_03/posts/postsSlice'
import usersReducer from '../features/users/usersSlice'

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer,
  },
})
