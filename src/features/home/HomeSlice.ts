import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../app/store";
import { fetchSearchResults } from "./homeAPI";

export interface HomeState {
  news: [];
  status: "idle" | "loading" | "failed";
}

const initialState: HomeState = {
  news: [],
  status: "idle",
};

export const getSearchResults = createAsyncThunk(
  "home/fetchSearchResults",
  async (text: string) => {
    const response = await fetchSearchResults(text);
    return response.data;
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
        state.news = action.payload;
      })
      .addCase(getSearchResults.rejected, (state) => {
        state.status = "failed";
      });
  },
});

// export const { increment, decrement, incrementByAmount } = homeSlice.actions;

export const selectCount = (state: RootState) => state.counter.value;

export default homeSlice.reducer;
