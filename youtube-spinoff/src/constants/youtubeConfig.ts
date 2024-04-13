const api_cred = process.env.REACT_APP_YOUTUBE_API;

export const YOUTUBE_API = `https://youtue.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&type=video&key=${api_cred}`;
