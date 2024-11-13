import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid'

// Define initial posts array 
const initialState = []

const postsSlice = createSlice({ // createSlice generates posts reducer
    name: 'posts',
    initialState, // Pass initialState to createSlice
    reducers: {
        postAdded: {
            reducer(state, action) {
            state.push(action.payload)
            },
            prepare(title, content) {
                return {
                    payload: {
                        id: nanoid(),
                        date: new Date().toISOString(),
                        title,
                        content
                    }
                }
            },
        },
        postUpdated(state, action) {
            const { id, title, content } = action.payload
            const existingPost = state.find(post => post.id === id)
            if (existingPost) {
                existingPost.title = title
                existingPost.content = content
            }

        }
    }
})

// Export the posts reducer function
export const { postAdded, postUpdated } = postsSlice.actions
export default postsSlice.reducer