import { configureStore } from "@reduxjs/toolkit";

import youtubeReducer from "./slices/youtube";

const store = configureStore({
  reducer: {
    youtube: youtubeReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
