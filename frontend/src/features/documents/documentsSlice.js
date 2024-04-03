import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const apiUrl = "http://localhost:3001";
export const fetchDocuments = createAsyncThunk(
  "documents/fetchDocuments",
  async (page) => {
    const res = await axios.get(`${apiUrl}/api/documents?page=${page}`);
    console.log("res", res);
    return res.data;
  }
);

const documentsSlice = createSlice({
  name: "documents",
  initialState: {
    page: 1,
    documentsAreLoading: false,
    documents: null,
    documentsError: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDocuments.pending, (state) => {
      state.documentsAreLoading = true;
    });
    builder.addCase(fetchDocuments.fulfilled, (state, action) => {
      state.documentsAreLoading = false;
      state.documentsError = null;
      state.documents = action.payload.data.rows;
      if (!action.payload.status) {
        state.documentsError = action.payload.message;
        state.documents = null;
      }
    });
    builder.addCase(fetchDocuments.rejected, (state, action) => {
      state.documentsAreLoading = false;
      state.documents = null;
      state.documentsError = action.error.message;
    });
  },
    reducers: {
      setPageNo: (state) => {
        state.page = state.page + 1;
      },
      resetDocumentsError: (state) => {
        state.documentsError = null;
      },
    },
});
export const { setPageNo, resetDocumentsError } = documentsSlice.actions;
export default documentsSlice.reducer;
