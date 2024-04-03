import { configureStore } from "@reduxjs/toolkit";
import userQueryReducer from "../features/user_query/userQuerySlice";
import documentsReducer from "../features/documents/documentsSlice";
const store = configureStore({
  reducer: {
    userQuery: userQueryReducer,
    documents: documentsReducer
  },
});

export default store;
