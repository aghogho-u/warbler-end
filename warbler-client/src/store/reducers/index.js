import { combineReducers } from "redux";
import current_user from "./currentUser";
import errors from "./errors";

const rootReducer = combineReducers({
  current_user,
  errors
})

export default rootReducer;
