import { combineReducers } from "redux";
import weatherReducer from "./weatherReducer";
import weatherEvery3HoursReducer from "./weatherEvery3HoursReducer";

const rootReducer = combineReducers({
  weatherReducer,
  weatherEvery3HoursReducer,
});

export default rootReducer;
