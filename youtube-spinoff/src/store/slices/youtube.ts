import { createSlice } from "@reduxjs/toolkit";

import { initialStateType } from "../../types/Types";
import { getOnLoadVideos } from "../thunk reducers/getOnLoadVideos";

const initialState: initialStateType = {
  nextPageToken: "",
  videos: [],
  searchTerm: "",
  loading: false,
  error: "",
};

const youtubeSlice = createSlice({
  name: "youtube",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
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
  },
});

export default youtubeSlice.reducer;
