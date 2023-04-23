import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../app/store";
import { fetchSearchResults } from "./homeAPI";

export interface HomeState {
  news: [];
  page: number;
  query: string;
  status: "idle" | "loading" | "failed";
}

const initialState: HomeState = {
  news: [],
  page: 0,
  query: "",
  status: "idle",
};

export const getSearchResults = createAsyncThunk(
  "home/fetchSearchResults",
  async (text: string = "") => {
    const response = await fetchSearchResults(text);
    return response;
  }
);

export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSearchResults.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getSearchResults.fulfilled, (state, action) => {
        state.status = "idle";
        state.news = action.payload.hits;
        state.page = action.payload.page;
        state.query = action.payload.query;
      })
      .addCase(getSearchResults.rejected, (state) => {
        state.status = "failed";
      });
  },
});

// export const { increment, decrement, incrementByAmount } = homeSlice.actions;

export const homeState = (state: RootState) => state.home;

export default homeSlice.reducer;
