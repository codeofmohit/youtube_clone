import { createAsyncThunk } from "@reduxjs/toolkit";
import { YOUTUBE_API_SEARCH } from "../../constants/youtubeConfig";
import axios from "axios";

export const getCategoriesVideos = createAsyncThunk<any, string>(
  "youtube/getCategoriesVideos",
  async (category: string) => {
    const api = `${YOUTUBE_API_SEARCH}&q=${category} 2024`;
    try {
      const response = await axios.get(api);
      return response.data;
    } catch (error) {
      return error;
    }
  }
);
