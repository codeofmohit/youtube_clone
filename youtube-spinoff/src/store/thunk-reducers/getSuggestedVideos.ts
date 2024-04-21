import { createAsyncThunk } from "@reduxjs/toolkit";
import { YOUTUBE_API_SUGGESTIONS } from "../../constants/youtubeConfig";
import axios from "axios";

export const getSuggestedVideos = createAsyncThunk<any, string>(
  "youtube/getSuggestedVideos",
  async (searchTerm: string | unknown) => {
    const api = `${YOUTUBE_API_SUGGESTIONS}&q=${searchTerm}`;
    try {
      const response = await axios.get(api);
      return response.data;
    } catch (error: any) {
      console.log(error?.response?.data?.error?.message);
      return error;
    }
  }
);
