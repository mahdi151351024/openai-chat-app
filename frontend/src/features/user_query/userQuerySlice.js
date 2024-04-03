import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const apiUrl = "http://localhost:3001";
export const fetchOpenAiResponse = createAsyncThunk(
  "userQuery/fetchOpenAiResponse",
  async (query) => {
    const res = await axios.post(`${apiUrl}/api/chat`, { query: query });
    console.log("res", res);
    return res.data;
  }
);

const userQuerySlice = createSlice({
  name: "userQuery",
  initialState: {
    query: null,
    isLoading: false,
    openAiResponse: null,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchOpenAiResponse.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchOpenAiResponse.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.openAiResponse = action.payload.data;
      if (!action.payload.status) {
        state.error = action.payload.message;
        state.openAiResponse = null;
      }
    });
    builder.addCase(fetchOpenAiResponse.rejected, (state, action) => {
      state.isLoading = false;
      state.openAiResponse = null;
      state.error = action.error.message;
    });
  },
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },
    resetOpenAiResponse: (state) => {
      state.openAiResponse = null;
    },
    resetError: (state) => {
      state.error = null;
    },
  },
});
export const { setQuery, resetOpenAiResponse, resetError } = userQuerySlice.actions;
export default userQuerySlice.reducer;
