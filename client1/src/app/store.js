import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice.js";
import userReducer from "../features/user/userSlice.js";
import postReducer from "../features/post/postSlice.js";
import themeReducer from "../features/theme/themeSlice.js";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    post: postReducer,
    theme: themeReducer,
  },
});
