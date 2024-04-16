import { createAsyncThunk } from "@reduxjs/toolkit";
import { YOUTUBE_API_SEARCH } from "../../constants/youtubeConfig";
import axios from "axios";

export const getSuggestedVideos = createAsyncThunk<any, string>(
  "youtube/getSuggestedVideos",
  async (searchTerm: string | unknown) => {
    const api = `${YOUTUBE_API_SEARCH}&q=${searchTerm}`;
    try {
      const response = await axios.get(api);
      return response.data;
    } catch (error) {
      return error;
    }
  }
);
