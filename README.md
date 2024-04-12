# youtube_clone

Youtube clone -> React + Redux + TypeScript. Live Project Link : ?

## Design Documentation (for dev only)

- Notes :

  - App must be made in switchable dark/white theme plan, prio to writing code.
  - Trick : on body > just play with bgColor and text-color see if switching these 2 only making theme change or not
  - flex gap tailwind property

- 1> project initiated > setup done + tailwind config done ✅

- 2> installing other dependecies ✅

  - react-icons
  - axios
  - react-infinite-scroll-component
  - @reduxjs/toolkit
  - react-redux
  - react-router-dom

- 3> folder structure ✅

  - components
  - pages
  - utils
    - custom_hooks
    - utilities
  - store
    - slices
  - constants
    .env

- 4> Routing setup ❌

  - Routing in App / or in routes ?
    - using Router, Routes, Route logic, instead of createBrowserRouter
  - Create 3 pages componenets - Home, Search, Watch > Route these 3 page components
    - watch route will take in id > path - /watch/:id
    - handle random routes | error page
  - make the routing work in such a way that slidebar, navbar remains there, and then mainContent will get changed based on how you interact with app, plan here, make components accordingly

- 5> Navbar Component ❌

  - components > navbar
  - import these icons from react-icons :
    - Note : keep in mind that icons must be for both dark and white theme based on that only import icons
    - import { AiOutlineSearch,AiOutlineClose } from "react-icons/ai";
    - import { TiMicrophone } from "react-icons/ti";
    - import { BsYoutube, BsCameraVideo, BsBell } from "react-icons/bs";
    - import { GiHamburgerMenu } from "react-icons/gi";
    - import { IoAppsSharp } from "react-icons/io5";
  - Home > navbar + sidebar
  - Navbar UI (on y axis)
    - hamburguer menu
    - yt logo (linking to home)
    - searchbar (in form)
      - searchIcon
      - bar
      - close icon
      - search button with icon
    - microphone button
    - login ui details
      - camera icon
      - notification button
      - sign-in button
  - add roboto font from google fonts [all font weights] via css import
  - make global styling for body (check with dark/white theme is possible)

- 6> Sidebar ❌

  - Home > navbar + sidebar
  - import necessry icons from react-icons make it look like youTube

- 7> Youtube data api ❌

  - console.cloud.google.com > youtube clone
  - enable api and services
  - yt data api v3 > enable > create credentials > public data
  - api key

- 8> Redux store + slices setup ❌

  - folder struc.

    - /store
      - store.ts
      - hooks.ts
      - /reducers
      - /asyncThunks
    - /src > Types.ts

  - Types >

    ```
      type InitialState ={
          videos: HomePageVideos[]
          curentPlaying : CurrentPlaying | null
          searchTerm : string
          searchResults : array
          nextPageToken : string | null
          recommendedVideos : RecommendedVideos[]
        }

      type HomePageVideos = {}
      type CurrentPlaying = {}
      type RecommendedVideos = {}

    ```

  - configue store in store.ts

    - export types for useDispatch and useSelector
    - middleware > createAsyncThunk function as getDefaultMiddleWare
      ` middleware: getDefaultMiddleware,`
      - this would work no need to import createAsyncThunk function
    - provide the app the store via provider (decide whether to do in index or in app)
    - takes in reducer as : youtubeSlice {youtube:youtubeReducer}

  - slices >

    - 1> youtubeSlice

      - initialState as per type
      - reducer : {} // initially
      - extrareducer : function takes in builder
        - once done with asyncThunk reducers, make them work here, for fullfied and error cases, also for loading cases also can be used for showing a shimmer

  - hooks.ts

    - make custom hooks (type enabled ones), for using default useDispatch and useSelector via exported types from store

  - asyncThunks > getHomePageVideos

    - on your own
    - basically create and asyncThnk, call youtube api via axios get items as per query and nextPageToken from here

      - yt query :

      ```
        `${YOUTUBE_API_URL}/search?maxResults=20&q="reactjs projects"&key=${API_KEY}&part=snippet&type=video

        YOUTUBE_API_URL = "https://youtube.googleapis.com/youtube/v3"
      ```

    - in homepage import the createAsyncThunk reducers and callthem in useEffect via dispatching via calling the function, remember calling an asyncThunk action automatically dispatch 3 action types fullfilled, pending and rejected as promises which would be handled in extrareducers of youtubeSlice

      - basically log if the data is coming
      - note make asyncThunk call in udeEffect pass dispatch as dependecy array [best pratise]

      - once get api data we can console.log it, we must parse the data, in other to make things renderable, data > parseData(data) , parseData is utility code in utils
        - Now 2 approches, either copy utility code from the git repo of tute
        - create your own parsing logic
        - if approch 1 is chossen then only,
          - utils > parseData.ts >
            - copy code from git repo
          - create related files > check gitHub repo
            - for converting raw views, convertRawViewToString
            - parsing video duration
            - parsing timeSince
            - parseData to make use of above 3
      - create a index.ts in utils, paste code from gitHub

    - create type of HomePageVideo in Types file

      - take it from git or create your own as per the data coming, check the type of data coming from api based on which you will decide whether to copy or build your own types

    - Now in getHomeVideos once data is there send it to praseData and get parseData, return that, when case is fullfilled, which then in extrareducer will be handled an will be stored in state

- 9> building home component ❌

  - make Card component
  - Home page component > after sidebar
    - if video.length (via store) ->` <InfiniteScroll></InfiniteScroll>` from react-infinete-scroll as default component
    - else `<Spinner>` will create [fisrt create then come back]
    - Infine scroll will take some props,
      - datalength = videos.length
      - next -> a callback in whcih we dispatch our getHomeVideos reducer will value true in it
        - true/false handling was not implemented, this boolean is for loading next page handle it now first
      - hasMore -> a condition for keep on fetching more videos, video.length < 500
      - loader -> spinner component
      - height -> 650
    - this is done, now as children infinteScroll component will have videos, so make JSX for that
      - basically map over videos(from redux store)
      - in each of map > render Card component
    - Card component
      - will take in item as prop
        - coming data will have homePageVideo type from Types.ts
      - style the card componenet, render the data accordingly
      - Following are the metaData which would be rendered
        - video thumbnail Image, channgel image (rounded), video description, channel name, view count, time since, video length overlaying video card in right bottom corner
        - while rendering the data on UI, on image make it link to /watch/videoId set tareget blank, so that can be opeable
        - for the description use something called, line-clamp-2 tailwind class, when lines are more then 3 it clump them up (very useful)
          - package name : @tailwindcss/line-clamp , install it
          - in tailwind config, require line-clamp
          - restart local server to make things work
  - create Spinner component
    - animate-spin is a tailwind class
  - create a reducer in youtubeSlice, clearVideos, so whenever we are chaing page or by either clicking on sidebar menu or going to search result page when we make a video search.
    - state.videos = []
    - state.nextPageToken = null
    - wherever at what interaction you need to clear the stuff, make use of clearVideos, dispatch clearVideos action in the return method of useEffect of working component so when taken out / unmounted from page, it gets called for clean up

- 10> building search component ❌

  - struture search page using outlet of rrd
  - create one more async thunk reducer, which would be getSearchTermVideos
  - onSearch term submit, on Submit, take user to /search page via useNavigate of rrd with search term
  - then on search page call and fetch getSearchTermVideos and display to UI
  - same videoCard component can be reused here

- 11> building watch page ❌
  - useParam from rrd, extract the id
  - create one more thunk reducer getVideoById, make the api call and get the video
  - create another thunk reducer getRecommended videos, make the api call and get recommended videos
  - create another thunk reducer getCommentsForVideos, make the api call if possible and get the comments

## Dev Flow [design doc - rough]

- initial LLD plan done for UI ✅

- initial routing set up done ✅

  - /home : homepage display + search result display
  - /watch : watch page result currently playing videos + recommended videos + comments

- dark/light theme planning done ✅

  - toggle dark class in parent html component, on click of dark/light mode button, use redux/context.
  - keep on using dark mode classes in tailwind for all the styling's along

- building navbar UI ✅

- feature - dark/light theme ✅

- building sidebar UI ✅

- multi-level routing setup for displaying olLoadVideos, searchedVideos, categoryVideos in one view is done via outlet of react-router-dom ✅
