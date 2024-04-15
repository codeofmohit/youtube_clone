import { createSlice } from "@reduxjs/toolkit";

import { initialStateType } from "../../types/Types";
import { getOnLoadVideos } from "../thunk-reducers/getOnLoadVideos";
import { getOnSearchVideos } from "../thunk-reducers/getOnSearchVideos";
import { getCategoriesVideos } from "../thunk-reducers/getCategoriesVideos";

const initialState: initialStateType = {
  nextPageToken: "",
  videos: [],
  searchTerm: null,
  loading: false,
  error: "",
};

const youtubeSlice = createSlice({
  name: "youtube",
  initialState: initialState,
  reducers: {
    addSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
  extraReducers: (builder) => {
    // handing async thunk reducer : getOnLoadVideos action types
    builder.addCase(getOnLoadVideos.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getOnLoadVideos.fulfilled, (state, action) => {
      state.loading = false;
      state.nextPageToken = action.payload?.nextPageToken;
      state.videos = action.payload?.items;
    });
    builder.addCase(getOnLoadVideos.rejected, (state) => {
      state.loading = false;
      state.error = "Unknown error fetching videos";
    });
    // handing async thunk reducer : getOnSearchVideos action types
    builder.addCase(getOnSearchVideos.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getOnSearchVideos.fulfilled, (state, action) => {
      state.loading = false;
      state.nextPageToken = action.payload?.nextPageToken;
      state.videos = action.payload?.items;
    });
    builder.addCase(getOnSearchVideos.rejected, (state, action) => {
      state.loading = false;
      state.error = "Unknown error fetching videos";
    });
    // handing async thunk reducer : getCategoriesVideos action types
    builder.addCase(getCategoriesVideos.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getCategoriesVideos.fulfilled, (state, action) => {
      state.loading = false;
      state.nextPageToken = action.payload?.nextPageToken;
      state.videos = action.payload?.items;
    });
    builder.addCase(getCategoriesVideos.rejected, (state, action) => {
      state.loading = false;
      state.error = "Unknown error fetching videos";
    });
  },
});

export const { addSearchTerm } = youtubeSlice.actions;
export default youtubeSlice.reducer;
