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
}

export interface initialStateType {
  nextPageToken: string | null;
  videos: YoutubeVideo[];
  searchTerm: string | null;
  loading: boolean;
  error: string | null;
}
