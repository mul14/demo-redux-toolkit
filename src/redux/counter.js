import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const incrementAsync = createAsyncThunk('counter/increase-async', async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(), 2000)
  })
})

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 100,
    loading: false,
  },
  reducers: {
    increment: (state, action) => {
      state.value++
    },
    decrease: (state, action) => {
      state.value--
    },
    incrementWithValue: (state, action) => {
      state.value += action.payload
    }
  },
  extraReducers: {
    [incrementAsync.fulfilled]: (state, action) => {
      state.loading = false
      state.value++
    },
    [incrementAsync.pending]: (state, action) => {
      state.loading = true
    },
  }
})

export const { increment, decrease, incrementWithValue } = counterSlice.actions

export default counterSlice.reducer
