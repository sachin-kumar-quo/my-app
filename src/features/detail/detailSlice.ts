import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { fetchNews } from "./detailAPI";

export interface DetailState {
  newsDetail: any;
  status: "idle" | "loading" | "failed";
}

const initialState: DetailState = {
  newsDetail: {},
  status: "idle",
};

export const getNews = createAsyncThunk(
  "detail/fetchNews",
  async (id: string | undefined) => {
    const response = await fetchNews(id);
    return response;
  }
);

export const detailSlice = createSlice({
  name: "detail",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getNews.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getNews.fulfilled, (state, action) => {
        state.status = "idle";
        state.newsDetail = action.payload;
      })
      .addCase(getNews.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const detailState = (state: RootState) => state.detail;

export default detailSlice.reducer;
