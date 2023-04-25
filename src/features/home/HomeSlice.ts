import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { fetchSearchResults } from "./homeAPI";

export interface HomeState {
  news: [];
  page: number;
  query: string;
  totalPages: number;
  status: "idle" | "loading" | "failed";
}

const initialState: HomeState = {
  news: [],
  page: 0,
  query: "",
  totalPages: 0,
  status: "idle",
};

export const getSearchResults = createAsyncThunk(
  "home/fetchSearchResults",
  async (args: any) => {
    const { text = "", page = 0 } = args;
    const response = await fetchSearchResults(text, page);
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
        state.totalPages = action.payload.nbPages;
      })
      .addCase(getSearchResults.rejected, (state) => {
        state.status = "failed";
      });
  },
});

// export const { increment, decrement, incrementByAmount } = homeSlice.actions;

export const homeState = (state: RootState) => state.home;

export default homeSlice.reducer;
