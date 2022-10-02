import { combineReducers } from "redux";
import { AppReducers } from "./app/appReducers";

const rootReducer = combineReducers({
  app: AppReducers,
});

export default rootReducer;
