import { createAsyncThunk } from "@reduxjs/toolkit";
import { YOUTUBE_API } from "../../constants/youtubeConfig";

export const getOnLoadVideos = createAsyncThunk(
  "youtube/getOnLoadVideos",
  async () => {
    try {
      const req = await fetch(`${YOUTUBE_API}&q=music`);
      const response = await req.json();
      return response;
    } catch (error) {
      return error;
    }
  }
);
