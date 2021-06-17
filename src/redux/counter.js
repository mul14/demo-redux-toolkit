import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 100
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
  }
})

export const { increment, decrease, incrementWithValue } = counterSlice.actions

export default counterSlice.reducer
