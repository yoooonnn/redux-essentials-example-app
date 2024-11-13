import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    { id: '0', name: '서휘경'},
    { id: '1', name: '박기람'},
    { id: '2', name: '신지수'},
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        
    }
})

export default usersSlice.reducer