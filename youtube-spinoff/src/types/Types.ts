type video = {
  etag: string;
  id: {};
  kind: string;
  snippet: {};
};

export type initialStateType = {
  nextPageToken: string;
  videos: video[];
  searchTerm: string;
  loading: boolean;
  error: string;
};
