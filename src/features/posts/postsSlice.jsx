import { createSlice } from '@reduxjs/toolkit'

// Define initial posts array 
const initialState = [
    { id: '1', title: 'First Post!', content: 'Hello!' },
    { id: '2', title: 'Second Post!', content: 'More Text' },
]

const postsSlice = createSlice({ // createSlice generates posts reducer
    name: 'posts',
    initialState, // Pass initialState to createSlice
    reducers: {
        postAdded(state, action) {
            state.push(action.payload)
        }
    }
})

// Export the posts reducer function
export const { postAdded } = postsSlice.actions
export default postsSlice.reducer