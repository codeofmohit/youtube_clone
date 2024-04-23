# funtube_clone

funtube clone -> React + Redux + TypeScript. Live Project Link : https://streamy-project-0.web.app/

## Dev Flow [design doc - rough]

- initial LLD plan done for UI ✅

- initial routing set up done ✅

  - /home : homepage display + search result display
  - /watch : watch page result currently playing videos + recommended videos + comments

- dark/light theme planning done ✅

  - toggle dark class in parent html component, make a higher order component wrapper Theme for the same, on click of dark/light mode button, use redux/context.
  - keep on using dark mode classes in tailwind for all the styling's along

- building navbar UI ✅

- feature - dark/light theme ✅

- building sidebar UI ✅

- multi-level routing setup for displaying olLoadVideos, searchedVideos, categoryVideos in one view is done via outlet of react-router-dom ✅

- onLoadVideos as mostPopularVideos in india ✅

  - google funtube api setup ✅

  - redux store setup ✅

  - funtube slice ✅

  - videoCard component from data ✅

- make search functionlity work, pupulate video in same UI ✅

- make category functionlity work, pupulate video in same UI ✅

- make watch page, with iframe and playing options ✅

- suggested videos tab ✅

  - use channel title as a search param, and then make a search call and get list of video

- added functionality added ✅

  - comment section via data api v3
  - channel details sections

- final UI touches ✅

  - fix UI issues across site ✅
    1> give scrolls | not needed
    2> fix down scroll, color mismatch issue | done
    3> add footer | done
    4> hide sidebar on click of hamburger menu | done

- API Calls optimizaions ✅

  - remove strict mode which is causing duplicate api calls | done
  - cache api data in redux and use from there wherever possible
    - built an optmized cache mechanism and most expensive api now calling only 1 every session

- make site mobile responsive ✅
  - beta v1 done, ready for test ✅
  - deploy the app ✅
