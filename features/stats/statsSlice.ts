import { createSlice } from '@reduxjs/toolkit'

interface StatsState {
  categories: number | null
  articles: number | null
  createdAt: Date | null
  error: any | null
  isLoading: boolean
  message: any | null
}

const initialState: StatsState = {
  categories: null,
  articles: null,
  createdAt: null,
  error: null,
  isLoading: false,
  message: null
}

export const statsSlice = createSlice({
  name: 'stats',
  initialState,
  reducers: {
    reset: (state) => {
      state.categories = null
      state.articles = null
      state.createdAt = null
      state.error = null
      state.isLoading = false
      state.message = null
    }
  },
  extraReducers: (builder) => {}
})

export const { reset } = statsSlice.actions
export default statsSlice.reducer
