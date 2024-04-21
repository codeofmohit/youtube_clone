interface YoutubeVideoThumbnail {
  url: string;
  width: number;
  height: number;
}
interface YoutubeVideoThumbnails {
  default: YoutubeVideoThumbnail;
  medium: YoutubeVideoThumbnail;
  high: YoutubeVideoThumbnail;
  standard: YoutubeVideoThumbnail;
  maxres: YoutubeVideoThumbnail;
}
interface YoutubeVideoSnippet {
  publishedAt: string; // Date in ISO 8601 format (YYYY-MM-DDTHH:mm:ssZ)
  channelId: string;
  title: string;
  description: string;
  thumbnails: YoutubeVideoThumbnails;
  channelTitle: string;
  tags: string[];
  categoryId: string;
  liveBroadcastContent: string; // "none" or other values depending on the video
  localized: {
    title: string;
    description: string;
  };
  defaultAudioLanguage: string; // Likely a two-letter language code (e.g., "hi")
}

export interface YoutubeVideo {
  kind: string; // "youtube#video"
  etag: string;
  id: any;
  snippet: YoutubeVideoSnippet;
  statistics: any;
}

export interface initialStateType {
  nextPageToken: string | null;
  videos: YoutubeVideo[];
  suggestedVideos: YoutubeVideo[];
  searchTerm: string | null;
  loading: boolean;
  loading_suggested: boolean;
  error: any;
  channelName: any;
  channelId: any;
  channelDetails: any;
  comments: any;
  loading_channelDetails: any;
  loading_comments: any;
  currentPlayingVideo: any;
  sideBarHidden: boolean;
}

export type commentType = {
  userImg: String;
  userHandle: String;
  publishedAt: String;
  displayText: String;
  likesCount: number;
  totalReplyCount: number | null;
};
