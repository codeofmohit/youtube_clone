import { createAsyncThunk } from "@reduxjs/toolkit";
import { YOUTUBE_API_SEARCH } from "../../constants/youtubeConfig";
import axios from "axios";

export const getOnSearchVideos = createAsyncThunk<any, string>(
  "youtube/getOnSearchVideos",
  async (searchTerm: string) => {
    const api = `${YOUTUBE_API_SEARCH}&q=${searchTerm}`;
    try {
      const response = await axios.get(api);
      return response.data;
    } catch (error: any) {
      console.log(error?.response?.data?.error?.message);
      return error;
    }
  }
);
