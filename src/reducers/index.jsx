import { combineReducers } from "redux";
import weatherReducer from "./weatherReducer";
import weatherEvery3HoursReducer from "./weatherEvery3HoursReducer";
import thermUnitReducer from "./thermUnitReducer";

const rootReducer = combineReducers({
  weatherReducer,
  weatherEvery3HoursReducer,
  thermUnitReducer,
});

export default rootReducer;
