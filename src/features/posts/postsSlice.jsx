import { createSlice } from '@reduxjs/toolkit'

// Define initial posts array 
const initialState = [
    { id: '1', title: 'First Post!', content: 'Hello!' },
    { id: '2', title: 'Second Post!', content: 'More Text' },
]

const postsSlice = createSlice({ // createSlice generates posts reducer
    name: 'posts',
    initialState, // Pass initialState to createSlice
    reducers: {}
})

// Export the posts reducer function
export default postsSlice.reducer