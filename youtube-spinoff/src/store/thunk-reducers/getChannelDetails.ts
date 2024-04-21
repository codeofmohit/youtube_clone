import { createAsyncThunk } from "@reduxjs/toolkit";
import { YOUTUBE_CHANNEL_DETAILS } from "../../constants/youtubeConfig";
import axios from "axios";

export const getChannelDetails = createAsyncThunk<any, string>(
  "youtube/getChannelDetails",
  async (channelId: string) => {
    const api = `${YOUTUBE_CHANNEL_DETAILS}${channelId}`;
    try {
      const response = await axios.get(api);
      return response.data;
    } catch (error: any) {
      console.log(error?.response?.data?.error?.message);
      return error;
    }
  }
);
