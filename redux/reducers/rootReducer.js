import { combineReducers } from "redux";
import alertReducer from "./alert.reducers";
import authReducer from "./auth.reducers";

const rootReducer = combineReducers({
  auth: authReducer,
  alert: alertReducer,
});

export default rootReducer;
