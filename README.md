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
    - middleware > createAsyncThunk
    - provide the app the store

  - slices > youtubeSlice

    - initialState as per type
    - reducer : {} // initially
    - extrareducer : function takes in builder

  - getHomePageVideos reducer
