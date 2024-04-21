import { createAsyncThunk } from "@reduxjs/toolkit";
import { YOUTUBE_API_COMMENTS } from "../../constants/youtubeConfig";
import axios from "axios";

export const getCommentsDetails = createAsyncThunk<any, string>(
  "youtube/getCommentsDetails",
  async (videoID: string) => {
    const api = `${YOUTUBE_API_COMMENTS}${videoID}`;
    try {
      const response = await axios.get(api);
      return response.data;
    } catch (error: any) {
      console.log(error?.response?.data?.error?.message);
      return error;
    }
  }
);
