import { combineReducers } from "redux";

import counter from "@redux/slices/counter";
import drugData from "@redux/slices/drugbank/listDrugSlice";

const rootReducer = combineReducers({ counter, drugData });

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
