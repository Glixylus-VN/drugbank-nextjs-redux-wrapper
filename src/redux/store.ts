import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import rootReducer from "./reducers";

const store = configureStore({ reducer: rootReducer });
export const makeStore = () => store;

// export an assembled wrapper
export const wrapper = createWrapper(makeStore, { debug: false });
