const api_cred = process.env.REACT_APP_YOUTUBE_API;

// most popular videos in india, max result 20
export const YOUTUBE_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=20&regionCode=IN&key=${api_cred}`;

export const YOUTUBE_API_SEARCH = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&key=${api_cred}&regionCode=IN&type=video&maxResults=20`;

/* 

👁 Most pipular videos :

GET https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=20&regionCode=IN&key=[YOUR_API_KEY] 


👁 Searched videos :

https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=random&regionCode=IN&type=video&key=[YOUR_API_KEY]

*/
