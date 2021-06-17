import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 100
  },
  reducers: {
    increment: (state, action) => {
      state.value++
    }
  }
})

export const { increment } = counterSlice.actions

export default counterSlice.reducer
