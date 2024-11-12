import { configureStore } from '@reduxjs/toolkit'

// import `postReducer` function
import postsReducer from '../features/posts/postsSlice'
import usersReducer from '../features/usres/usersSlice'

// Update the call to `configureStore`
// `postReducer` is being passed as a reducer field named `posts`
export default configureStore({
    reducer: {
        posts: postsReducer,
        users: usersReducer,
    }
})