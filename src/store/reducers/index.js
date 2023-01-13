import { combineReducers } from "redux";
import userReducers from "./user.reducers";

const rootReducer = combineReducers({
  user: userReducers,
});

export default rootReducer;
