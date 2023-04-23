import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../app/store";
import { fetchNews } from "./detailAPI";

export interface DetailState {
  newsDetail: {};
  status: "idle" | "loading" | "failed";
}

const initialState: DetailState = {
  newsDetail: {},
  status: "idle",
};

export const getNews = createAsyncThunk(
  "detail/fetchNews",
  async (id: string) => {
    const response = await fetchNews(id);
    return response.data;
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

// export const { increment, decrement, incrementByAmount } = detailSlice.actions;
export const selectCount = (state: RootState) => state.counter.value;

export default detailSlice.reducer;
