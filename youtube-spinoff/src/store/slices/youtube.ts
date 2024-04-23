import { createSlice } from "@reduxjs/toolkit";

import { initialStateType } from "../../types/Types";
import { getOnLoadVideos } from "../thunk-reducers/getOnLoadVideos";
import { getOnSearchVideos } from "../thunk-reducers/getOnSearchVideos";
import { getCategoriesVideos } from "../thunk-reducers/getCategoriesVideos";
import { getSuggestedVideos } from "../thunk-reducers/getSuggestedVideos";
import { getChannelDetails } from "../thunk-reducers/getChannelDetails";
import { getCommentsDetails } from "../thunk-reducers/getCommentsDetails";

const sideBarHiddenValue = window.innerWidth < 450 ? true : false;

const initialState: initialStateType = {
  nextPageToken: "",
  videos: [],
  cachedHomePageVideos: null,
  suggestedVideos: [],
  searchTerm: null,
  loading: false,
  loading_suggested: false,
  error: null,
  channelName: "",
  channelId: "",
  channelDetails: null,
  comments: [],
  loading_channelDetails: "",
  loading_comments: "",
  currentPlayingVideo: null,
  sideBarHidden: sideBarHiddenValue,
  videosType: null,
};

const youtubeSlice = createSlice({
  name: "youtube",
  initialState: initialState,
  reducers: {
    addSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    addChannelName: (state, action) => {
      state.channelName = action.payload;
    },
    addChannelId: (state, action) => {
      state.channelId = action.payload;
    },
    addCurrentPlayingVideo: (state, action) => {
      state.currentPlayingVideo = action.payload;
    },
    clearSuggestedVideos: (state) => {
      state.suggestedVideos = [];
    },
    toggleSideBar: (state) => {
      state.sideBarHidden = !state.sideBarHidden;
    },
    addVideosType: (state, action) => {
      state.videosType = action.payload;
    },
    loadFromCache: (state) => {
      if (state.cachedHomePageVideos) {
        state.videos = state.cachedHomePageVideos;
      }
    },
  },
  extraReducers: (builder) => {
    // handing async thunk reducer : getOnLoadVideos action types
    builder.addCase(getOnLoadVideos.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getOnLoadVideos.fulfilled, (state, action) => {
      if (action.payload?.name === "AxiosError") {
        state.videos = [];
        state.error = {
          ...state.error,
          onLoad: true,
        };
      }
      state.loading = false;
      state.nextPageToken = action.payload?.nextPageToken;
      state.videos = action.payload?.items;
      state.cachedHomePageVideos = action.payload?.items;
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
      if (action.payload?.name === "AxiosError") {
        state.videos = [];
        state.error = {
          ...state.error,
          onSearch: true,
        };
      }
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
      if (action.payload?.name === "AxiosError") {
        state.videos = [];
        state.error = {
          ...state.error,
          onCategory: true,
        };
      }
      state.loading = false;
      state.nextPageToken = action.payload?.nextPageToken;
      state.videos = action.payload?.items;
    });
    builder.addCase(getCategoriesVideos.rejected, (state, action) => {
      state.loading = false;
      state.error = "Unknown error fetching videos";
    });
    // handing async thunk reducer : getSuggestedVideos action types
    builder.addCase(getSuggestedVideos.pending, (state, action) => {
      state.loading_suggested = true;
    });
    builder.addCase(getSuggestedVideos.fulfilled, (state, action) => {
      if (action.payload?.name === "AxiosError") {
        state.suggestedVideos = [];
        state.error = {
          ...state.error,
          onSuggestions: true,
        };
      }
      state.loading_suggested = false;
      state.suggestedVideos = action.payload?.items;
    });
    builder.addCase(getSuggestedVideos.rejected, (state, action) => {
      state.loading_suggested = false;
      state.error = "Unknown error fetching videos";
    });
    // handing async thunk reducer : getChannelDetails action types
    builder.addCase(getChannelDetails.pending, (state, action) => {
      state.loading_channelDetails = true;
    });
    builder.addCase(getChannelDetails.fulfilled, (state, action) => {
      if (action.payload?.name === "AxiosError") {
        state.channelDetails = null;
        state.error = {
          ...state.error,
          onChannel: true,
        };
      }
      state.loading_channelDetails = false;
      state.channelDetails = action.payload?.items;
    });
    builder.addCase(getChannelDetails.rejected, (state, action) => {
      state.loading_channelDetails = false;
      state.error = "Unknown error fetching channel deatils";
    });
    // handing async thunk reducer : getCommentsDetails action types
    builder.addCase(getCommentsDetails.pending, (state, action) => {
      state.loading_comments = true;
    });
    builder.addCase(getCommentsDetails.fulfilled, (state, action) => {
      if (action.payload?.name === "AxiosError") {
        state.comments = [];
        state.error = {
          ...state.error,
          onComment: true,
        };
      }
      state.loading_comments = false;
      state.comments = action.payload?.items;
    });
    builder.addCase(getCommentsDetails.rejected, (state, action) => {
      state.loading_comments = false;
      state.error = "Unknown error fetching comments";
    });
  },
});

export const {
  addSearchTerm,
  addChannelName,
  addChannelId,
  clearSuggestedVideos,
  addCurrentPlayingVideo,
  toggleSideBar,
  addVideosType,
  loadFromCache,
} = youtubeSlice.actions;
export default youtubeSlice.reducer;
