import {configureStore} from "@reduxjs/toolkit";
import UserReducers from "./reducers/UserReducers";

export const store=configureStore({
  reducer:{
    UserReducers:UserReducers,
  }
});