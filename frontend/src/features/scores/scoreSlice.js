import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import scoreService from './scoreService'

const initialState = {
  scores: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// Create new goal
export const getScores = createAsyncThunk(
  'scores/getAll',
  async (postData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await scoreService.getScores(postData, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)
  
// Get user posts
export const postCLScore = createAsyncThunk(
  'scores/createCL',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await scoreService.postCLScore(token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)
export const postTscore = createAsyncThunk(
    'scores/createT',
    async (_, thunkAPI) => {
      try {
        const token = thunkAPI.getState().auth.user.token
        return await scoreService.postTscore(token)
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString()
        return thunkAPI.rejectWithValue(message)
      }
    }
  )


export const scoreSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(postTscore.pending, (state) => {
        state.isLoading = true
      })
      .addCase(postTscore.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.posts.push(action.payload)
      })
      .addCase(postTscore.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(postCLScore.pending, (state) => {
        state.isLoading = true
      })
      .addCase(postCLScore.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.posts.push(action.payload)
      })
      .addCase(postCLScore.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getScores.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getScores.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.posts = action.payload
      })
      .addCase(getScores.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export const { reset } = scoreSlice.actions
export default scoreSlice.reducer
