import { combineReducers } from "redux";

import counter from "@redux/slices/counter";

const rootReducer = combineReducers({ counter: counter });

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
